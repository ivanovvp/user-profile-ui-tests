package app.step;

import app.driver.SharedDriver;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;

import static org.testng.Assert.assertTrue;


public class NewEmployeeAdditionalSteps {
    private GlobalSteps globalSteps;

    public NewEmployeeAdditionalSteps(SharedDriver driver) {
        globalSteps = new GlobalSteps(driver);
    }


    @And("Enter Text '(.*)' In Full Name Field in New Employee Additional Page$")
    public void inputFullName(String name) {
        globalSteps.getNewEmployeeAdditionalPage().setInputFullNameField(name);
    }

    @And("Select Sex '(.*)' In Sex Field in New Employee Additional Page$")
    public void selectSex(String name) {
        globalSteps.getNewEmployeeAdditionalPage().setSelectSex(name);
    }

    @And("Select Year '(.*)' In Year Field in New Employee Additional Page$")
    public void selectYear(String year) {
        globalSteps.getNewEmployeeAdditionalPage().setSelectYear(year);
    }

    @And("Select Month '(.*)' In Month Field in New Employee Additional Page$")
    public void selectMonth(String month) {
        globalSteps.getNewEmployeeAdditionalPage().setSelectMonth(month);
    }

    @And("Select Day '(.*)' In Day Field in New Employee Additional Page$")
    public void selectDay(String day) {
        globalSteps.getNewEmployeeAdditionalPage().setSelectDay(day);
    }

    @And("Select Status '(.*)' In Marital Status Field in New Employee Additional Page$")
    public void selectMarital(String status) {
        globalSteps.getNewEmployeeAdditionalPage().setSelectMarital(status);
    }

    @And("Enter Text'(.*)' In Children Field in New Employee Additional Page$")
    public void inputChildren(String children) {
        globalSteps.getNewEmployeeAdditionalPage().setInputChildrenField(children);
    }

    @Then("Table Header '(.*)' Field is Appeared in New Employee Additional Page$")
    public void isTableHeaderAppeared(String blockName) {
        assertTrue(globalSteps.getNewEmployeeAdditionalPage().isTableHeaderAppeared(blockName));
    }

    @Then("Is 'Transfer Candidate to Employee' Button Appeared in New Employee Additional Page$")
    public void isButtonAppeared() {
        globalSteps.getNewEmployeeAdditionalPage().isButtonAppeared();
    }

}