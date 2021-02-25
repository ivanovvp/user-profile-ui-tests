package app.step;

import app.driver.SharedDriver;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;

import static org.testng.Assert.assertTrue;


public class NewEmployeeOnboardingSteps {
    private GlobalSteps globalSteps;

    public NewEmployeeOnboardingSteps(SharedDriver driver) {
        globalSteps = new GlobalSteps(driver);
    }


    @And("Check '(.*)' in New Employee Onboarding Page$")
    public void checkStatus(String button) {
        switch (button) {
            case "Status Vacancy":
                globalSteps.getNewEmployeeOnboardingPage().checkStatusVacancy();
                break;
            case "":
                break;
        }
    }

    @And("Click '(.*)' Button in New Employee Onboarding Page$")
    public void clickButton(String button) {
        switch (button) {
            case "Done":
                globalSteps.getNewEmployeeOnboardingPage().clickDoneButton();
                break;
            case "":
                break;
        }
    }

    @Then("Table Header '(.*)' Field is Appeared in New Employee Onboarding Page$")
    public void isTableHeaderAppeared(String blockName) {
        assertTrue(globalSteps.getNewEmployeeOnboardingPage().isTableHeaderAppeared(blockName));
    }

}