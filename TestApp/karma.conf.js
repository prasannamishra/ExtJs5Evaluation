module.exports = function(config) {
    config.set({

        basePath: '',

        plugins: [
            'karma-jasmine', 'karma-chrome-launcher'
        ],

        frameworks: [
            'jasmine'
        ],

        urlRoot: '/',
        // list of files / patterns to load in the browser
        files: [
            "ext-all.js",
            "bootstrap.js",
            "karma_app_test.js",
            'app/**/*.js',
            "test-specs/**/*.spec.js"
        ],

        proxies: {
            '/': 'http://localhost:1841/TestApp/'
        },


        // list of files to exclude
        exclude: [
            '**/karma.*.js'
        ],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {

        },

        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress'],

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_DEBUG,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        // Chrome
        browsers: ['Chrome'],
        captureTimeout: 100000,
        browserNoActivityTimeout: 100000,
        singleRun: false
    });
};