package app.step;

import app.driver.SharedDriver;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;

import static org.testng.Assert.assertTrue;


public class SdtSteps {

    private GlobalSteps globalSteps;

    public SdtSteps(SharedDriver driver) {
        globalSteps = new GlobalSteps(driver);
    }


    @Then("'(.*)' Block is Appered in SdtPage$")
    public void isBlockAppearedCalendar(String blockName) {
        assertTrue(globalSteps.getSdtPage().isBlockAppearedCalendar(blockName));
    }

    @Then("'(.*)' Button is Appeared$")
    public void isButtonAppeared(String buttonName) {
        assertTrue(globalSteps.getSdtPage().isButtonAppeared(buttonName));
    }

    @And("Click on '(.*)' Button in SDT Page$")
    public void clickButton(String buttonName) {
        switch (buttonName) {
            case "Create new":
                globalSteps.getSdtPage().clickCreateButton();
                break;
            case "View All":
                globalSteps.getSdtPage().clickViewAllButton();
                break;
            case "Hide":
                globalSteps.getSdtPage().clickHideButton();
                break;
            case "Today":
                globalSteps.getSdtPage().clickTodayButton();
                break;
            case "Prev":
                globalSteps.getSdtPage().clickPrevInButton();
                break;
            case "Next":
                globalSteps.getSdtPage().clickNextButton();
                break;
        }
    }

}