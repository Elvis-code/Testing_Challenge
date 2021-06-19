// Return Email taken when you pun an email that already exists
const LoginPage = require('../pageobjects/login.page'); 


describe('When user is registred already', () => {          // Controls if email already exist and must get the 'Email Taken' text.
    
    it("Should return Email Taken", async() =>{
       
        await LoginPage.open();
        await LoginPage.login('user1@mailinator.com', 'User1%');
        await expect(LoginPage.flashText).toBeExisting();
        await  expect(LoginPage.flashText).toHaveTextContaining(
            'Email Taken');
    })
});
