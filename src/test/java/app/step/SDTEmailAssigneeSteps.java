package app.step;

import app.driver.SharedDriver;
//import cucumber.api.java.en.And;
import io.cucumber.java.en.And;

public class SDTEmailAssigneeSteps {

    private GlobalSteps globalSteps;

    public SDTEmailAssigneeSteps(SharedDriver driver) {
        globalSteps = new GlobalSteps(driver);
    }

    @And("Compare ID and Email")
    public void isAssertID() {
        globalSteps.getSdtEmailAssigneePage().isAssertTable();
    }

}