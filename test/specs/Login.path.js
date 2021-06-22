const LoginPage = require('../pageobjects/login.page'); 


describe('When user is registred already', () => {          // The page that leads to Login In Page  when user already exists
    
    it("Should load the Login Page not the Sign Up", async() =>{        
       
        await LoginPage.open();
        await LoginPage.login('user@mailinator.com', 'User123%');

        browser.url('https://portal.intelycare.com/apply/career.html?step=Login')

        await LoginPage.login('user@mailinator.com', 'User123%');              // The user fill the email and password again with existed credentials


    })
});