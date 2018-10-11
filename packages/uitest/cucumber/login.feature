Feature: login is ok?
  login for the website

  Scenario: login is ok or not
    Given homePage is "http://www.testfreelog.com"
    When Homepage is loaded. Current url should be "http://console.testfreelog.com/user/login?redirect=http%3A%2F%2Fwww.testfreelog.com%2Faccounts"
    When I login by "src@freelog.com" and "123456"
    Then I should be told "资源作者"
