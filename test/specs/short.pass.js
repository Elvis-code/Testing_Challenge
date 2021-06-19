const LoginPage=require('../pageobjects/login.page');

describe('When you type a short password', ()=> {

    it('Should display an error message', async()=>{

        await LoginPage.open();

        await LoginPage.login('user9@mailinator.com', '123')

        await expect(LoginPage.flashText).toBeExisting();

        await  expect(LoginPage.flashText).toHaveTextContaining(
            'Password Too Short');

    })


})