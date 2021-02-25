package app.step;

import app.driver.SharedDriver;
import cucumber.api.java.en.Then;

public class ManagePhpTeamSteps {

    private GlobalSteps globalSteps;

    public ManagePhpTeamSteps(SharedDriver driver) {
        globalSteps = new GlobalSteps(driver);
    }


    @Then("Check Table Name In Manage PHP Team Page$")
    public void checkNameTable() {
        globalSteps.getManagePhpTeamPage().checkNameTable();
    }

}