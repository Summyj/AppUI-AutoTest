/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */

    //selector
    static get loginPage(){return $('//android.view.ViewGroup[@content-desc="Login"]/android.view.ViewGroup/android.widget.TextView')};
    static get swipePage(){return $('')};

    //function
    static launchApp(){
        driver.launchApp();
    }

    static switchPage(page){;
        switch(page)
        {
            case "login": this.loginPage.click();
            break; 
            case "swipe": this.swipePage.click();
        }
    }
}
