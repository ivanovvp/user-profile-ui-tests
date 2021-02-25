package app.step;

import app.driver.SharedDriver;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;


import static org.testng.Assert.assertTrue;


public class SdtNewSteps {


    private GlobalSteps globalSteps;

    public SdtNewSteps(SharedDriver driver) {
        globalSteps = new GlobalSteps(driver);
    }

    @Then("'(.*)' Field is Appered in SDT NEW Page$")
    public void isFieldNewSdtPage(String fieldName) {
        assertTrue(globalSteps.getSdtNewPage().isAppearedFieldInPage(fieldName));
    }

    @Then("'(.*)' Button is Appered in SDT NEW Page$")
    public void isButtonAppeared(String buttonName) {
        assertTrue(globalSteps.getSdtNewPage().isButtonAppeared(buttonName));
    }

    @And("Enter '(.*)' Text in Amount Field in SDT NEW Page")
    public void inputAmountField(String amount) {
        globalSteps.getSdtNewPage().setInputAmountField(amount);
    }

    @And("To push '(.*)' in SDT NEW Page$")
    public void toPushKeys(String keys) {
        switch (keys) {
            case "ENTER":
                globalSteps.getSdtNewPage().toPushEnter();
                break;
            case "OK":
                globalSteps.getSdtNewPage().toPushAlertOK();
                break;
        }
    }

    @And("Enter Name '(.*)' In Person Field in SDT NEW Page$")
    public void inputActingField(String name) {
                globalSteps.getSdtNewPage().setInputPersonField(name);
    }

    @And("Click '(.*)' Button in SDT NEW Page$")
    public void clickButton(String button) {
        switch (button) {
            case "Save":
                globalSteps.getSdtNewPage().clickSaveButton();
                break;
            case "Add":
                globalSteps.getSdtNewPage().clickAddButton();
                break;
            case "SDT":
                globalSteps.getSdtNewPage().clickSdtButton();
                break;
            case "SDT auto-test":
                globalSteps.getSdtNewPage().clickSdtAutoTestButton();
                break;
            case "delete":
                globalSteps.getSdtNewPage().clickDeleteButton();
                break;
        }
    }

    @And("Pre Delete SDT$")
    public void preDeleteSdt() {
        globalSteps.getSdtNewPage().preDeleteSdt();
    }

    @And("A Warning Has Appeared In SDT New Page$")
    public void isAvailableErrorMassage() {
        globalSteps.getSdtNewPage().isAvailableErrorMassage();
    }

}