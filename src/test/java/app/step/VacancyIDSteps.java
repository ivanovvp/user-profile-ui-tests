package app.step;

import app.driver.SharedDriver;
import cucumber.api.java.en.Then;

import static org.testng.Assert.assertTrue;

public class VacancyIDSteps {

    private GlobalSteps globalSteps;

    public VacancyIDSteps(SharedDriver driver) {
        globalSteps = new GlobalSteps(driver);
    }


    @Then("Is '(.*)' Block is Appeared in Vacancy ID Page$")
    public void isBlockAppeared(String blockName) {
        assertTrue(globalSteps.getVacancyIDPage().isBlockAvailable(blockName));
    }

    @Then("Select User '(.*)' In User Field in Vacancy ID Page$")
    public void clickDropDownField(String user) {
                globalSteps.getVacancyIDPage().setSelectUser(user);
    }

    @Then("Click '(.*)' Button in Vacancy ID Page$")
    public void clickButton(String name) {
        switch (name) {
            case "Send":
                globalSteps.getVacancyIDPage().clickSendButton();
                break;
            case "":
                break;
        }
    }
}