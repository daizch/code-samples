//https://www.npmjs.com/package/@vue/cli-plugin-e2e-nightwatch
//https://github.com/SeleniumHQ/selenium/wiki/DesiredCapabilities
/**
 * npm i geckodriver -D
 *   --config ./nightwatch.conf.js --env safari
 */
module.exports = {
  'src_folders': ['tests/e2e/specs'],
  'output_folder': 'tests/e2e/reports',
  // "custom_commands_path" : "",
  "custom_assertions_path": ['tests/e2e/custom-assertions'],
  // "page_objects_path" : "",
  // "globals_path" : "",
  "selenium": {
    "start_process": true,
    "server_path": require('selenium-server').path,
    // "log_path" : "",
    "port": 4444,
    "cli_args": {
      "webdriver.chrome.driver": require('chromedriver').path,
      "webdriver.gecko.driver": require('geckodriver').path,
      "webdriver.safari.driver": '/usr/bin/safaridriver',
      "webdriver.edge.driver": '/usr/bin/safaridriver'
    }
  },

  test_workers: {
    // This allows more then one browser to be opened and tested in at once
    enabled: true,
    workers: 'auto'
  },

  "test_settings": {
    "default": {
      "launch_url": "http://localhost",
      "selenium_port": 4444,
      "selenium_host": "localhost",
      "silent": true,
      "screenshots": {
        "enabled": false,
        // "path": ""
      },
      "desiredCapabilities": {
        "browserName": "firefox",
        "marionette": true
      }
    },

    "gecko": {
      "desiredCapabilities": {
        "browserName": "firefox",
        javascriptEnabled: true,
        acceptSslCerts: true
      }
    },

    "chrome": {
      "desiredCapabilities": {
        "browserName": "chrome",
        javascriptEnabled: true,
        acceptSslCerts: true
      }
    },

    /**https://developer.apple.com/documentation/webkit/testing_with_webdriver_in_safari
     $ safaridriver --enable
     set the safari browser to Allow Remote Automation
     */
    "safari": {
      "desiredCapabilities": {
        "browserName": "safari",
        javascriptEnabled: true,
        acceptSslCerts: true
      }
    },


    "edge": {
      "desiredCapabilities": {
        "browserName": "MicrosoftEdge",
        javascriptEnabled: true,
        acceptSslCerts: true
      }
    }
  }
}