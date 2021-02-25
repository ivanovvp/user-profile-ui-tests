package app.step;

import app.driver.SharedDriver;
import cucumber.api.java.en.And;


public class LoginSteps {

    private GlobalSteps globalSteps;

    public LoginSteps(SharedDriver driver) {
        globalSteps = new GlobalSteps(driver);
    }

    @And("Enter '(.*)' Text in Email Field$")
    public void inputEmail(String email) {
        globalSteps.getLoginPage().setInputEmailField(email);
    }

    @And("Enter '(.*)' Text in Password Field$")
    public void inputPassword(String password) {
        globalSteps.getLoginPage().setInputPasswordField(password);
    }

    @And("Click on '(.*)' Button$")
    public void clickButton(String buttonName) {
        switch (buttonName) {
            case "Sign In":
                globalSteps.getLoginPage().clickSignInButton();
                break;
            case "Nexteum":
                globalSteps.getLoginPage().clickNexteumButton();
                break;
        }
    }

    @And("A Warning About The Wrong Name And Password Appeared$")
    public void isAvailableAlert() {
        globalSteps.getLoginPage().isAvailableAlert();
    }

}