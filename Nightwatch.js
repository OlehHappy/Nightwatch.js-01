module.exports = {
    src_folders: ['./tests'],
    output_folder: './results',

    selenium: {
      start_process: true,
      server_path: './selenium-server-standalone-2.53.0.jar',
      log_path: './results',
      host: '127.0.0.1',
      port: 4444
    },

    test_settings: {
      default: {
        selenium_host: '127.0.0.1',
        selenium_port: 4444,
        screenshots: {
          enabled: true,
          path: './results/screenshots'
        },
        desiredCapabilities: {
          browserName: 'firefox',
          javascriptEnabledL true,
          acceptSslCerts: true
        },
        globals: require('./data/dev')
      }
    }
};
