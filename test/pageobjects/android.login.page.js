const Page = require('./android.base.page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */

    get email(){return $('//android.widget.EditText[@content-desc="input-email"]')};
    get password(){return $('//android.widget.EditText[@content-desc="input-password"]')};
    get loginButton(){return $('//android.view.ViewGroup[@content-desc="button-LOGIN"]/android.view.ViewGroup/android.widget.TextView')};
    get signUpTab(){return $('//android.view.ViewGroup[@content-desc="button-sign-up-container"]/android.view.ViewGroup/android.widget.TextView')};
    get confirmPassword(){return $('//android.widget.EditText[@content-desc="input-repeat-password"]')};
    get signUpButton(){return $('//android.view.ViewGroup[@content-desc="button-SIGN UP"]/android.view.ViewGroup')};

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    login(email, password)
    {
        this.email.setValue(email);
        this.password.setValue(password);
        this.loginButton.click();
    }

    signUp(email, password)
    {
        this.email.setValue(email);
        this.password.setValue(password);
        this.confirmPassword.setValue(password);
        this.signUpButton.click();
    }

}

module.exports = new LoginPage();
