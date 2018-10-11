const {Given, When, Then} = require('cucumber')
const puppeteer = require('puppeteer')
const {expect} = require('chai')

Given('homePage is {string}', async function (homeUrl) {
  const browser = await puppeteer.launch({
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    headless: true
  });
  const page = await browser.newPage();
  await page.goto(homeUrl);

  page.once('load', async () => {
    expect(page.url()).to.equal('http://console.testfreelog.com/user/login?redirect=http%3A%2F%2Fwww.testfreelog.com%2Faccounts', '跳转登录页成功')
    await browser.close();
    // await page.type('input[name="username"]', username)
    // await  page.type('input[name="password"]', password)
    // await page.click('.js-login-btn')
  });
});


When('Homepage is loaded. Current url should be {string}', function (loginUrl) {
  console.log(loginUrl)
})

When('I login by {string} and {string}', async function (username, password) {
  // page.once('load', async () => {
  //   await page.type('input[name="username"]', username)
  //   await  page.type('input[name="password"]', password)
  //   await page.click('.js-login-btn')
  // });
});

Then('I should be told {string}', async function (nickName) {
  console.log(nickName)
  // await page.waitForNavigation();
  // expect(page.url()).to.equal('http://www.testfreelog.com/accounts', '跳转个人中心成功')
  // await page.waitFor('.user-name');
  // const loginName = await page.$eval('.user-name', el => el.textContent)
  // expect(loginName).to.equal(nickName, '获取用户名成功')
  // await browser.close();
});