const withWPA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

module.exports = withWPA({
    pwa: {
        dest: 'public',
        runtimeCaching
    }
})
