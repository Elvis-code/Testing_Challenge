Testing the page of Intelycare.com (The Login page) with Webdriverio.

To do this test the first command use is npm init -y.

Installation: Use npm or Yarn to install the WebdriverIO test runner in your Node.js project:  npm install @wdio/cli.

Set Up: Once you've installed the CLI you can bootstrap your project by running: npx wdio config.

I have used the mocha framework to run this test, the chromedriver services and the chrome browser.

I have made 5 test files respectively:
1- intelycare.js     The page that allows the new user to create an account and fill the form on basic screen info.
2- email.taken.js     Return Email taken when you pun an email that already exists.
3- Login.path.js      The page that leads to Login In Page  when user already exists.
4- short.pass.js      The page Return Password Too Short
5- wrog.pass.js       When user fill the password field without password requirements 
it will show him an error message "Password must contain at least one uppercase, and one number."   

I have put the  maxInstances: 1, wich means 1 instance get started at a time.

To run all the tests I have run the command: $ npx wdio run ./wdio.conf.js

To run a specific test :  npx wdio run ./wdio.conf.js --spec testname
