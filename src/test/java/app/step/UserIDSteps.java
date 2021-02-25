package app.step;

import app.driver.SharedDriver;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;

import static org.testng.Assert.assertTrue;

public class UserIDSteps {

    public GlobalSteps globalSteps;

    public UserIDSteps(SharedDriver driver) {
        globalSteps = new GlobalSteps(driver);
    }

    @Then("Is '(.*)' Block is Appeared in User ID Page$")
    public void isBlockAppeared(String blockName) {
        assertTrue(globalSteps.getUserIDPage().isBlockAvailable(blockName));
    }

    @Then("Is '(.*)' Button is Appeared in User ID Page$")
    public void isButtonAppeared(String buttonName) {
        assertTrue(globalSteps.getUserIDPage().isButtonAppeared(buttonName));
    }

    @And("Click on '(.*)' Button in User ID Page$")
    public void clickButton(String buttonName) {
        switch (buttonName) {
            case "Logout":
                globalSteps.getUserIDPage().clickLogoutButton();
                break;
            case "Change Password":
                globalSteps.getUserIDPage().clickChangePasswordButton();
                break;
            case "edit":
                globalSteps.getUserIDPage().clickEditButton();
                break;
            case "SDT Emails":
                globalSteps.getUserIDPage().clickSDTEmailsLink();
                break;
            case "Update":
                globalSteps.getUserIDPage().clickUpdateButton();
                break;
        }
    }

}