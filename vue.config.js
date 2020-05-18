// const isDev = process.env.NODE_ENV !== "production";

module.exports = {
    transpileDependencies: ['vuex-persist'],
    configureWebpack: {
        devServer: {
            historyApiFallback: true, // noInfo: true,
            overlay: true, //вывод ошибок на экран
            open: false,
            hot: true
        }
    },
    pluginOptions: {
      i18n: {
        locale: 'en',
        fallbackLocale: 'en',
        localeDir: '/plugins/i18n/',
        enableInSFC: false
      }
    }
}