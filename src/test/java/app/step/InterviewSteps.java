package app.step;

import app.driver.SharedDriver;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;

import static org.testng.Assert.assertTrue;


public class InterviewSteps {

    private GlobalSteps globalSteps;

    public InterviewSteps(SharedDriver driver) {
        globalSteps = new GlobalSteps(driver);
    }

    @Then("Is '(.*)' Block is Appeared in Interview Page$")
    public void isAppearedTableFieldName(String blockName) {
        assertTrue(globalSteps.getInterviewPage().isAppearedTableFieldName(blockName));
    }

    @And("Click'(.*)' Button in Interview Page$")
    public void clickButton(String name) {
        switch (name) {
            case "Back to candidates list":
                globalSteps.getInterviewPage().clickBackToCandidateListButton();
                break;
            case "Candidate did not accepted our offer":
                globalSteps.getInterviewPage().clickDidNotAcceptedButton();
                break;
        }
    }

}