const LoginPage = require('../pageobjects/login.page');
describe('Password Format', () => {
    
    it("Must contain correct password form", async() =>{    // When user fill the password field without password requirements it will show him an error message "Password must contain at least one uppercase, and one number."
       
        await LoginPage.open();
        await LoginPage.login('user3@mailinator.com', 'user123');

        await  expect(LoginPage.flashText).toHaveTextContaining(
            'Password must contain at least one uppercase, and one number.');       // The message should be equal to the message that page shows 

    })
});
