package app.step;

import app.driver.SharedDriver;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;

import static org.testng.Assert.assertTrue;


public class CandidateSteps {

    private GlobalSteps globalSteps;

    public CandidateSteps(SharedDriver driver) {
        globalSteps = new GlobalSteps(driver);
    }


    @Then("Is '(.*)' Block is Appeared in Candidate Page$")
    public void isTHeadAvailable(String blockName) {
        assertTrue(globalSteps.getCandidatePage().isTHeadAvailable(blockName));
    }

    @And("Enter Text '(.*)' In Location Field in Candidate Page$")
    public void inputLocationField(String name) {
        globalSteps.getCandidatePage().setInputLocationField(name);
    }

    @And("Enter Text '(.*)' In Applying Position Field in Candidate Page$")
    public void inputApplyingPositionField(String name) {
        globalSteps.getCandidatePage().setInputApplyingField(name);
    }

    @And("Enter Text '(.*)' In Skills Field in Candidate Page$")
    public void inputSkillField(String name) {
        globalSteps.getCandidatePage().setInputSkillField(name);
    }

    @And("Enter Text '(.*)' In Full Name Field in Candidate Page$")
    public void inputFullNameField(String name) {
        globalSteps.getCandidatePage().setInputNameField(name);
    }

    @And("Click '(.*)' Field and Button in Candidate Page$")
    public void clickButton(String name) {
        switch (name) {
            case "Pagination 2 Page":
                globalSteps.getCandidatePage().clickPaginationPage2();
                break;
            case "Pagination 3 Page":
                globalSteps.getCandidatePage().clickPaginationPage3();
                break;
            case "Pagination First Page":
                globalSteps.getCandidatePage().clickPaginationPageFirst();
                break;
            case "Pagination Last Page":
                globalSteps.getCandidatePage().clickPaginationPageLast();
                break;
            case "Location Set":
                globalSteps.getCandidatePage().clickLocationSetButton();
                break;
            case "Location Unset":
                globalSteps.getCandidatePage().clickLocationUnsetButton();
                break;
            case "Applying Set":
                globalSteps.getCandidatePage().clickApplyingSetButton();
                break;
            case "Applying Unset":
                globalSteps.getCandidatePage().clickApplyingUnsetButton();
                break;
            case "Skills Set":
                globalSteps.getCandidatePage().clickSkillAddButton();
                break;
            case "Skills Unset":
                globalSteps.getCandidatePage().clickSkillUnsetButton();
                break;
            case "Full Name Set":
                globalSteps.getCandidatePage().clickNameSetButton();
                break;
            case "Full Name Unset":
                globalSteps.getCandidatePage().clickNameUnsetButton();
                break;
            case "Create New":
                globalSteps.getCandidatePage().clickCreatenewButton();
                break;
            case "Clear filters":
                globalSteps.getCandidatePage().clickClearFiltersButton();
                break;
        }
    }

}