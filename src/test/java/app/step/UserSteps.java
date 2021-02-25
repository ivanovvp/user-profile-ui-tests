package app.step;

import app.driver.SharedDriver;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;

import static org.testng.Assert.assertTrue;

public class UserSteps {

    public GlobalSteps globalSteps;

    public UserSteps(SharedDriver driver) {
        globalSteps = new GlobalSteps(driver);
    }

    @Then("'(.*)' Button is Available in User Page$")
    public void isButtonAvailable(String buttonName) {
        assertTrue(globalSteps.getUserPage().isButtonAvailable(buttonName));
    }

    @Then("THead is Available in User Page$")
    public void assertNameTable() {
        globalSteps.getUserPage().checkNameTable();
    }

    @And("Click on '(.*)' Button in User Page$")
    public void clickButton(String buttonName) {
        switch (buttonName) {
            case "Create New":
                globalSteps.getUserPage().clickCreateNewButton();
                break;
            case "All":
                globalSteps.getUserPage().clickAllButton();
                break;
            case "Users":
                globalSteps.getUserPage().clickUsersButton();
                break;
            case "New":
                globalSteps.getUserPage().clickNewButton();
                break;
            case "Terminated":
                globalSteps.getUserPage().clickTerminatedButton();
                break;
        }
    }
}

