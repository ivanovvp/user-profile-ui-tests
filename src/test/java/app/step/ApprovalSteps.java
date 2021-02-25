package app.step;

import app.driver.SharedDriver;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.And;

import static org.junit.Assert.assertTrue;


public class ApprovalSteps {

    private GlobalSteps globalSteps;

    public ApprovalSteps(SharedDriver driver) {
        globalSteps = new GlobalSteps(driver);
    }


    @Then("Field '(.*)' is Appeared in Approval Page")
    public void isAppeared(String blockName) {
        assertTrue(globalSteps.getApprovalPage().isTableHeadAvailable(blockName));
    }

    @And("Button '(.*)' is Appeared in Approval Page")
    public void isButtonAvailable(String button) {
        assertTrue(globalSteps.getApprovalPage().isButtonAvailable(button));
    }

    @And("Click '(.*)' Button in Approval Page$")
    public void clickButton(String button) {
        switch (button) {
            case "Deny candidate for interview":
                globalSteps.getApprovalPage().clickDenyForInterviewButton();
                break;
            case "Send":
                globalSteps.getApprovalPage().clickSendButton();
                break;
        }
    }

    @Then("Enter Text '(.*)' In Denial Interview Field is Appeared in Approval Page")
    public void inputDenialInterviewField(String text) {
        globalSteps.getApprovalPage().setInputDenialInterviewField(text);
    }

}