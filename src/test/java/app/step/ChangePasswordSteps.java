package app.step;

import app.driver.SharedDriver;
import cucumber.api.java.en.And;

public class ChangePasswordSteps {

    private GlobalSteps globalSteps;

    public ChangePasswordSteps(SharedDriver driver) {
        globalSteps = new GlobalSteps(driver);
    }


    @And("Enter '(.*)' Text in Old Password Field in Change Password Page$")
    public void inputOldPasswordField(String oldpass) {
        globalSteps.getChangePasswordPage().inputOldPasswordField(oldpass);
    }

    @And("Enter '(.*)' Text in New Password Field in Change Password Page$")
    public void inputNewPasswordField(String newpass) {
        globalSteps.getChangePasswordPage().inputNewPasswordField(newpass);
    }

    @And("Enter '(.*)' Text in Confirm Password Field in Change Password Page$")
    public void inputConfirmPasswordField(String confirmpass) {
        globalSteps.getChangePasswordPage().inputConfirmPasswordField(confirmpass);
    }

    @And("Click '(.*)' Button in Change Password Page$")
    public void clickButton(String button) {
        switch (button) {
            case "eye old":
                globalSteps.getChangePasswordPage().clickEyeOldButton();
                break;
            case "eye new":
                globalSteps.getChangePasswordPage().clickEyeNewButton();
                break;
            case "eye confirm":
                globalSteps.getChangePasswordPage().clickEyeConfirmButton();
                break;
            case "Change Password":
                globalSteps.getChangePasswordPage().clickChangePasswordButton();
                break;
            case "Back":
                globalSteps.getChangePasswordPage().clickBackButton();
        }
    }

    @And("A Warning Has Appeared In Change Password Page$")
    public void isAvailableErrorMassage() {
        globalSteps.getChangePasswordPage().isAvailableErrorMassage();
    }

}