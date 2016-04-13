module.exports = {
    'Fill out form': function (client) {
      var data = client.globals;

      client
          .url(data.urls.login)
          .assert.title('Awesome App')
          .setValue('input[name=username]', data.username)
          .setValue('input[name=password]', data.password);
    },

    'Submit form': function (client) {
      console.log('previous step is done executing');
      var data = client.globals;
      client
          .click('input[type=submit]')
          .assert.title('Welcome!')
          // .perform(function (client, done) {
          //     foo.doSomethingAsync().then(done);
          // })
          .end();
    }
};
