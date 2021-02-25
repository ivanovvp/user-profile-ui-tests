package app.step;

import app.driver.SharedDriver;
import cucumber.api.java.en.Then;


public class WorkinghoursInfoSteps {

    private GlobalSteps globalSteps;

    public WorkinghoursInfoSteps(SharedDriver driver) {
        globalSteps = new GlobalSteps(driver);
    }


    @Then("Check Table Name In Working Hours Info Page$")
    public void checkNameTable() {
        globalSteps.getWorkinghoursInfoPage().checkNameTable();
    }

    @Then("Check Table Name Total In Working Hours Info Page$")
    public void checkNameTableTotal() {
        globalSteps.getWorkinghoursInfoPage().checkNameTableTotal();
    }

    @Then("Check Need Hours This Month In Working Hours Info Page$")
    public void checkNeedHoursThisMonth() {
        globalSteps.getWorkinghoursInfoPage().checkNeedHoursThisMonth();
    }

}