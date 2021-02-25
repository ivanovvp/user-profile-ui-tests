package app.step;

import app.driver.SharedDriver;
import cucumber.api.java.en.And;


public class ResponseStatusCodeStep {

    private GlobalSteps globalSteps;

    public ResponseStatusCodeStep(SharedDriver driver) {
        globalSteps = new GlobalSteps(driver);
    }

    @And("Check Status Code and assert$")
    public void checkStatusCode() {
        globalSteps.getResponseStatusCode().printStatusCode();
    }

}