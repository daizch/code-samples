var assert = require('assert');

describe('test redirect to login', () => {
  it('should have the right redirect url', () => {

    browser.url('http://www.testfreelog.com')
    const title = browser.getTitle()
    const url = browser.getUrl()
    assert.equal(url, 'http://console.testfreelog.com/user/login?redirect=http%3A%2F%2Fwww.testfreelog.com%2Faccounts')

    var $username = $('input[name="username"]')
    var $password = $('input[name="password"]')
    var $btn = $('.js-login-btn')
    $username.setValue('src@freelog.com')
    $password.setValue('123456')
    $btn.click()

    browser.waitUntil(function () {
      const $name = $('.user-name')
      return browser.getTitle() === 'freelog'
    }, 5e3, 'expected to login success');
  })
})