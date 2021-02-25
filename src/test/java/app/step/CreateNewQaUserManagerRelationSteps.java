package app.step;

import app.driver.SharedDriver;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;

public class CreateNewQaUserManagerRelationSteps {

    private GlobalSteps globalSteps;

    public CreateNewQaUserManagerRelationSteps(SharedDriver driver) {
        globalSteps = new GlobalSteps(driver);
    }


    @Then("Select manager '(.*)' In QA Manager Field In Create New User Php Developer Level Relation Page$")
    public void selectQaManager(String manager) {
        globalSteps.getCreateNewQaUserManagerRelationPage().setSelectQaManagerField(manager);
    }

    @And("Click '(.*)' Button In Create new Qa User Manager Relation Page$")
    public void clickButton(String button) {
        switch (button) {
            case "Back to List":
                globalSteps.getCreateNewQaUserManagerRelationPage().clickBackToListButton();
                break;
            case "":
                break;
        }
    }

}