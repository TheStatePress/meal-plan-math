// vue.config.js
module.exports = {
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            output: {
                publicPath: '/meal-plan-math/dist/'
            }
        }
        else {
            output: {
                publicPath: '/'
            }
        }
    }
}