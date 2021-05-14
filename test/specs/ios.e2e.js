const LoginPage = require('../pageobjects/ios.login.page');
const BasePage = require('../pageobjects/ios.base.page');

describe('login and signup', () => {
    beforeEach(function(){
        BasePage.launchApp();
    });

    it('login account', () => {
        BasePage.switchPage("login");
        LoginPage.login("test@test.com", "Test123");
    });

    it('sign up account', () => {
        BasePage.switchPage("login");
        LoginPage.signUpTab.click();
        LoginPage.signUp("test@test.com", "Test123");
    });
});


