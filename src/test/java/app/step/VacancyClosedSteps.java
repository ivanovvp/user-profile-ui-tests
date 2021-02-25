package app.step;

import app.driver.SharedDriver;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;

import static org.testng.Assert.assertTrue;


public class VacancyClosedSteps {

    private GlobalSteps globalSteps;

    public VacancyClosedSteps(SharedDriver driver) {
        globalSteps = new GlobalSteps(driver);
    }


    @And("Click '(.*)' Button in Closed Vacancy Page$")
    public void clickButton(String name) {
        switch (name) {
            case "View candidate History":
                globalSteps.getVacancyClosedPage().clickViewHistoryButton();
                break;
            case "View Request Info":
                globalSteps.getVacancyClosedPage().clickViewRequestInfoButton();
                break;
            case "Back":
                globalSteps.getVacancyClosedPage().clickBack();
                break;
            case "Candidate Employed Link":
                globalSteps.getVacancyClosedPage().clickCandidateEmployedLink();
                break;
            case "Back To Candidates List":
                globalSteps.getVacancyClosedPage().clickBackToCandidatesListButton();
                break;
        }
    }

    @Then("Checking status '(.*)' in Closed Vacancy Page$")
    public void checkStatus(String name) {
        switch (name) {
            case "Central Status Vacancy":
                globalSteps.getVacancyClosedPage().checkCentralStatusVacancy();
                break;
            case "Employed":
                globalSteps.getVacancyClosedPage().checkStatusEmployed();
                break;
        }
    }

    @Then("Is Block Appeared '(.*)' in Closed Vacancy Page$")
    public void isBlockAppeared(String blockName) {
        assertTrue(globalSteps.getVacancyClosedPage().isBlockAppeared(blockName));
    }

}