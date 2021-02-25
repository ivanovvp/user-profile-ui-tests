package app.step;

import app.driver.SharedDriver;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;

import static org.testng.Assert.assertTrue;

public class ApprovedListCandidateSteps {

    private GlobalSteps globalSteps;

    public ApprovedListCandidateSteps(SharedDriver driver) {
        globalSteps = new GlobalSteps(driver);
    }


    @And("Click '(.*)' Button in Approved List Candidate Page$")
    public void clickButtonInTable(String button) {
        switch (button) {
            case "Give FeedBack On The Candidate":
                globalSteps.getApprovedListCandidatePage().clickGiveFeedBackOnTheCandidateButton();
                break;
            case "Approved":
                globalSteps.getApprovedListCandidatePage().clickApprovedButton();
                break;
            case "Denied":
                globalSteps.getApprovedListCandidatePage().clickDeniedButton();
                break;
        }
    }

    @Then("Is '(.*)' Element Appeared in Approved List Candidate Page$")
    public void isAppearedElementInPage(String fieldName) {
        assertTrue(globalSteps.getApprovedListCandidatePage().isAppearedElement(fieldName));
    }

}