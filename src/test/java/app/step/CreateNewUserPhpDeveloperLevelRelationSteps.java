package app.step;

import app.driver.SharedDriver;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;

public class CreateNewUserPhpDeveloperLevelRelationSteps {

    private GlobalSteps globalSteps;

    public CreateNewUserPhpDeveloperLevelRelationSteps(SharedDriver driver) {
        globalSteps = new GlobalSteps(driver);
    }


    @Then("Select Level '(.*)' In Php Developer Level Field In Create New User Php Developer Level Relation Page$")
    public void selectPhpDeveloperLevel(String level) {
        globalSteps.getCreateNewUserPhpDeveloperLevelRelationPage().setSelectPhpLevelField(level);
    }

    @And("Click '(.*)' Button In Create New User Php Developer Level Relation Page$")
    public void clickButton(String button) {
        switch (button) {
            case "Back to List":
                globalSteps.getCreateNewUserPhpDeveloperLevelRelationPage().clickBackToListButton();
                break;
            case "":
                break;
        }
    }

}