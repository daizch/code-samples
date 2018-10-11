const path = require('path')

exports.config = {
  /**
   * server configurations
   */
  hostname: '0.0.0.0',
  port: 4444,

  /**
   * specify test files
   */
  specs: [path.resolve(__dirname, 'mocha.test.js')],

  /**
   * capabilities
   */
  capabilities: [{
    browserName: 'chrome'
  }],

  /**
   * test configurations
   */
  logLevel: 'error',
  coloredLogs: true,
  framework: 'mocha',
  logDir: __dirname,

  reporters: ['spec'],

  mochaOpts: {
    ui: 'bdd',
    timeout: 60000
  },

  /**
   * hooks
   */
  onPrepare: function() {
    // eslint-disable-next-line
    console.log('start...')
  },
  onComplete: function() {
    // eslint-disable-next-line
    console.log('finish...')
  }
}