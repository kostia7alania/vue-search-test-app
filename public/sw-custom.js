const cacheName = 'cache-v1'

const resourcesToPrecache = [
    './',
    './index.html'
]

self.addEventListener('install', e => {
    console.log('Install event => ', e)
    e.waitUntil( // install event happen before the cache is ready, and that would be bad. Fix - waitUntil!
        caches.open(cacheName) // open cacheName
        .then(cache => {
            return cache.addAll(resourcesToPrecache) // add all files to the cache
        })
    )
})

self.addEventListener('activate', e => {
    console.log('activate event => ', e)
})

/*
self.addEventListener('fetch', e => {
    console.log('fetch intercepted for => ', e.request.url, e)
    e.respondWith( // waits for the innermost promise to resolve
        caches.match(e.request)
        .then(cachedResponse => {
            return cachedResponse || fetch(e.request) // <- the cache-first strategy
        })
    )
})*/

// => stale-while-revalidate:
self.addEventListener('fetch', e => {
    console.log('fetch stale-while-revalidate event => ', e.request.url, e)
    e.respondWith(
        caches.open(cacheName)
        .then(cache => {
            return cache.match(e.request)
                .then(res => {
                    const fetchPromise = fetch(e.request)
                        .then(networkResp => {
                            cache.put(e.request, networkResp.clone())
                            return networkResp
                        })
                    return res || fetchPromise
                })
        })
    )
})

self.addEventListener('push', e => {
    console.log('push event => ', e)
    const title = 'MSG!'
    const body = 'Тело сообщения => ' + e.data.text()
    const icon = './img/icons/android-chrome-192x192.png'
    const tag = 'пример-тега'
    e.waitUntil(
        self.registration.showNotification(title, {
            body,
            icon,
            tag
        })
    )
})
