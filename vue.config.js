// vue.config.js
module.exports = {
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            config.output.publicPath = '/meal-plan-math/dist/';
        } else {
            config.output.publicPath = '/';
        }
    }
}