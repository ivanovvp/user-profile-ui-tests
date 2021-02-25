package app.step;

import app.driver.SharedDriver;
import cucumber.api.java.en.And;

public class CreateNewAccountSteps {

    private GlobalSteps globalSteps;

    public CreateNewAccountSteps(SharedDriver driver) {
        globalSteps = new GlobalSteps(driver);
    }


    @And("Enter '(.*)' Text in Email Field in Create Account Page$")
    public void InputEmailField(String emailname) {
        globalSteps.getCreateNewAccountPage().inputEmailField(emailname);
    }

    @And("Click '(.*)' Button in Create Account Page$")
    public void clickButton(String button) {
        switch (button) {
            case "Create an account":
                globalSteps.getCreateNewAccountPage().clickCreateAnAccountButton();
                break;
            case "Send":
                globalSteps.getCreateNewAccountPage().clickSendButton();
                break;
            case "Back":
                globalSteps.getCreateNewAccountPage().clickBackButton();
                break;
        }
    }



    @And("A Warning Has Appeared$")
    public void isAvailableErrorMassage() {
        globalSteps.getCreateNewAccountPage().isAvailableErrorMassage();
    }

}