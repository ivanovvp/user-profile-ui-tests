package app.step;

import app.driver.SharedDriver;
import cucumber.api.java.en.And;

public class ApproveCandidateSteps {

    private GlobalSteps globalSteps;

    public ApproveCandidateSteps(SharedDriver driver) {
        globalSteps = new GlobalSteps(driver);
    }

    @And("Select '(.*)' In Office Field in Approve Candidate Page$")
    public void selectOfficeField(String name) {
        globalSteps.getApproveCandidatePage().setSelectOffice(name);
    }

    @And("Select '(.*)' In Department Field in Approve Candidate Page$")
    public void selectDepartmentField(String name) {
        globalSteps.getApproveCandidatePage().setSelectDepartment(name);
    }

    @And("Select '(.*)' In Team Field in Approve Candidate Page$")
    public void selectTeamField(String name) {
        globalSteps.getApproveCandidatePage().setSelectTeam(name);
    }

    @And("Enter Text '(.*)' In Enterpreneur Field in Approve Candidate Page$")
    public void inputEnterpreneurField(String text) {
        globalSteps.getApproveCandidatePage().setInputEnterpreneurField(text);
    }

    @And("Enter Text '(.*)' In Level Field in Approve Candidate Page$")
    public void inputLevelField(String text) {
        globalSteps.getApproveCandidatePage().setInputLevelField(text);
    }

    @And("Enter Text '(.*)' In Start Date Field in Approve Candidate Page$")
    public void inputStartDateField(String value) {
        globalSteps.getApproveCandidatePage().setInputStartDateField(value);
    }

    @And("Enter Text '(.*)' In Salary Field in Approve Candidate Page$")
    public void inputSalaryField(String text) {
        globalSteps.getApproveCandidatePage().setInputSalaryField(text);
    }

    @And("Enter Text '(.*)' In Work Place Field in Approve Candidate Page$")
    public void inputWorkPlaceField(String text) {
        globalSteps.getApproveCandidatePage().setInputWorkPlaceField(text);
    }

    @And("Enter Text '(.*)' In Nick Name Field in Approve Candidate Page$")
    public void inputNickNameField(String text) {
        globalSteps.getApproveCandidatePage().setInputNicknameField(text);
    }

    @And("Check '(.*)' Button is Appeared in Approve Candidate Page$")
    public void isAppearedButton(String name) {
        switch (name) {
            case "Send":
                globalSteps.getApproveCandidatePage().isAppearedSendButton();
                break;
            case "":
                break;
        }
    }

}