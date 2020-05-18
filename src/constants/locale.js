const load = loc => require(/* webpackChunkName: "[request]" */ `@/plugins/i18n/${loc}`) // TODO: lazy-load locales

export const SUPPORTED_LOCALES = [
    {
        code: "en",
        base: "",
        flag: "us",
        name: "English",
        translations: load("en")
    },
    {
        code: "ru",
        base: "/ru",
        flag: "ru",
        name: "Russian",
        translations: load("ru")
    }
]