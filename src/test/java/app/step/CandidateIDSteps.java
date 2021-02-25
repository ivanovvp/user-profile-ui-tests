package app.step;

import app.driver.SharedDriver;
import cucumber.api.java.en.Then;

import static org.testng.Assert.assertTrue;


public class CandidateIDSteps {

    private GlobalSteps globalSteps;

    public CandidateIDSteps(SharedDriver driver) {
        globalSteps = new GlobalSteps(driver);
    }

    @Then("Is '(.*)' Button is Appeared in Candidate ID Page$")
    public void isButtonAvailable(String buttonName) {
        assertTrue(globalSteps.getCandidateIDPage().isButtonAvailable(buttonName));
    }

    @Then("Click '(.*)' Button in Candidate ID Page$")
    public void clickButton(String name) {
        switch (name) {
            case "edit":
                globalSteps.getCandidateIDPage().clickEditButton();
                break;
            case "back to list":
                globalSteps.getCandidateIDPage().clickBackToListButton();
                break;
            case "Back":
                globalSteps.getCandidateIDPage().clickPageBack();
                break;
        }
    }

}