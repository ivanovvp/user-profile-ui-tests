package app.step;

import app.driver.SharedDriver;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;

import static org.testng.Assert.assertTrue;


public class MonthlySdtSteps {

    private GlobalSteps globalSteps;

    public MonthlySdtSteps(SharedDriver driver) {
        globalSteps = new GlobalSteps(driver);
    }


    @Then("Is '(.*)' Block is Appeared in MonthlySdt Page$")
    public void isBlockAppeared(String blockName) {
        assertTrue(globalSteps.getMonthlySdtPage().isBlockAppeared(blockName));
    }

    @And("Click '(.*)' Button in MonthlySdt Page$")
    public void clickButton(String buttonName) {
        switch (buttonName) {
            case "show":
                globalSteps.getMonthlySdtPage().clickShowLink();
                break;
            case "":
                break;
        }
    }
}
