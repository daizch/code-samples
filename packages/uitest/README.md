# `uitest`

> practice test automation

## Usage

### wdio
#### setup chrome 
```sh
$ brew cask install chromedriver
```

#### start up Selenium environment

```sh
$ /usr/local/bin/chromedriver --port=4444 --url-base=/wd/hub
```


[more wdio guide doc](http://webdriver.io/guide/getstarted/install.html)

### puppeteer
need to install headless chrome or set executablePath where your chrome was installed for puppeteer