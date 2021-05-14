const Page = require('./ios.base.page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */

    get email(){return $('//XCUIElementTypeTextField[@name="input-email"]')};
    get password(){return $('//XCUIElementTypeSecureTextField[@name="input-password"]')};
    get loginButton(){return $('//XCUIElementTypeOther[@name="LOGIN"]')};
    get signUpTab(){return $('//XCUIElementTypeStaticText[@name="Sign up"]')};
    get confirmPassword(){return $('//XCUIElementTypeSecureTextField[@name="input-repeat-password"]')};
    get signUpButton(){return $('//XCUIElementTypeStaticText[@name="SIGN UP"]')};

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    login(testemail, testpassword)
    {
        this.email.setValue(testemail);
        this.password.setValue(testpassword);
        this.loginButton.click();
    }

    signUp(testemail, testpassword)
    {
        this.email.setValue(testemail);
        this.password.setValue(testpassword);
        this.confirmPassword.setValue(testpassword);
        this.signUpButton.click();
    }

}

module.exports = new LoginPage();
