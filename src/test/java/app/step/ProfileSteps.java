package app.step;

import app.driver.SharedDriver;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;

import static org.testng.Assert.assertTrue;


public class ProfileSteps {

    private GlobalSteps globalSteps;

    public ProfileSteps(SharedDriver driver) {
        globalSteps = new GlobalSteps(driver);
    }

    @Then("'(.*)' Block is Appeared$")
    public void isBlockAppeared(String blockName) {
        assertTrue(globalSteps.getProfilePage().isBlockAvailable(blockName));
    }

    @Then("Click '(.*)' Button$")
    public void clickButton(String name) {
        switch (name) {
            case "Back":
                globalSteps.getProfilePage().clickBackPage();
                break;
            case "Make request":
                globalSteps.getProfilePage().clickMakeRequestLink();
                break;
            case "Details":
                globalSteps.getProfilePage().clickDetailsLink();
                break;
        }

    }

    @And("Check Hours Required In Profile Page$")
    public void checkHoursRequired() {
        globalSteps.getProfilePage().checkHoursRequired();
    }

    @Then("Requested Page Available$")
    public void nexteumButton() {
        globalSteps.getProfilePage().isAppearedNexteumButton();
    }

    @Then("Redirect to the Expected Page Worked$")
    public void nexteumButtonAppeared() {
        globalSteps.getProfilePage().isAppearedNexteumButton();
    }

}