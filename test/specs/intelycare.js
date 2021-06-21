const LoginPage = require('../pageobjects/login.page');
const LoginForm = require('../pageobjects/login.form');

describe('User can create account', () => {
    it('using valid credentials', async () => {
        await LoginPage.open();   //The page that allows the new user to create an account 
        await LoginPage.login('useri1@mailinator.com', 'User123%');
    });
    
    
});

describe('The Form on the basic screen info ', () => {          // The basic info screen that opens after the new user register the email and password
   
    it('should be filled correctly', async () => {
        await LoginForm.fillForm('Username','Lastname','7589577506','02090'); // The user fill the fields with required information about personal information and get the Continue clickable
        browser.url('https://portal.intelycare.com/apply/career.html?step=Login');
        browser.pause(10000);
});
});

