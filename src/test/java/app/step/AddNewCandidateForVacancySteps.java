package app.step;

import app.driver.SharedDriver;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;

import static org.junit.Assert.assertTrue;

public class AddNewCandidateForVacancySteps {

    private GlobalSteps globalSteps;

    public AddNewCandidateForVacancySteps(SharedDriver driver) {
        globalSteps = new GlobalSteps(driver);
    }


    @And("Click '(.*)' Button in Add New Candidate For Vacancy Page$")
    public void clickButton(String name) {
        switch (name) {
            case "CVs received from vacancy":
                globalSteps.getAddNewCandidateForVacancyPage().clickVacancyButton();
                break;
            case "CVs received from hunting":
                globalSteps.getAddNewCandidateForVacancyPage().clickHuntingButton();
                break;
            case "CVs received from recommendation":
                globalSteps.getAddNewCandidateForVacancyPage().clickRecommendationButton();
                break;
            case "Done":
                globalSteps.getAddNewCandidateForVacancyPage().clickDoneButton();
                break;
        }
    }

    @Then("Table Header '(.*)' Block is Appeared in Add New Candidate For Vacancy Page$")
    public void TableHeaderAppeared(String blockName) {
        assertTrue(globalSteps.getAddNewCandidateForVacancyPage().isTableHeaderAppeared(blockName));
    }

}