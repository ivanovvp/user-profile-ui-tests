package app.step;

import app.driver.SharedDriver;
import cucumber.api.java.en.And;

import static org.testng.Assert.assertTrue;

public class CandidateEditSteps {

    private GlobalSteps globalSteps;

    public CandidateEditSteps(SharedDriver driver) {
        globalSteps = new GlobalSteps(driver);
    }


    @And("Enter Text '(.*)' In Skills Field$")
    public void inputSkills(String skill) {
        globalSteps.getCandidateEditPage().setInputSkills(skill);
    }

    @And("Enter Text '(.*)' In Name Field in Candidate Edit Page$")
    public void inputNameField(String text) {
        globalSteps.getCandidateEditPage().setInputNameField(text);
    }

    @And("Enter Text '(.*)' In Surname Field in Candidate Edit Page$")
    public void inputSurnameField(String text) {
        globalSteps.getCandidateEditPage().setInputSurNameField(text);
    }

    @And("Enter Text '(.*)' In Current Position Field in Candidate Edit Page$")
    public void inputCurrentPositionField(String text) {
        globalSteps.getCandidateEditPage().setInputCurrentPositionField(text);
    }

    @And("Enter Text '(.*)' In Applying Position Field in Candidate Edit Page$")
    public void inputApplyingPositionField(String text) {
        globalSteps.getCandidateEditPage().setInputApplyingPositionField(text);
    }

    @And("Enter Text '(.*)' In Location Field in Candidate Edit Page$")
    public void inputLocationField(String text) {
        globalSteps.getCandidateEditPage().setInputLocationField(text);
    }

    @And("Enter Text '(.*)' In Phone Field in Candidate Edit Page$")
    public void inputPhoneField(String text) {
        globalSteps.getCandidateEditPage().setInputPhoneField(text);
    }

    @And("Enter Text '(.*)' In Email Field in Candidate Edit Page$")
    public void inputEmailField(String text) {
        globalSteps.getCandidateEditPage().setInputEmailField(text);
    }

    @And("Enter Text '(.*)' In LinkedIn Field in Candidate Edit Page$")
    public void inputLinkedInField(String text) {
        globalSteps.getCandidateEditPage().setInputLinkedInField(text);
    }

    @And("Enter Text '(.*)' In Facebook Field in Candidate Edit Page$")
    public void inputFacebookField(String text) {
        globalSteps.getCandidateEditPage().setInputFacebookField(text);
    }

    @And("Enter Text '(.*)' In Salary Field in Candidate Edit Page$")
    public void inputSalaryField(String text) {
        globalSteps.getCandidateEditPage().setInputSalaryField(text);
    }

    @And("Enter Text '(.*)' In Experience Field in Candidate Edit Page$")
    public void inputExperienceField(String text) {
        globalSteps.getCandidateEditPage().setInputExperienceField(text);
    }

    @And("Enter Text '(.*)' In Education Field in Candidate Edit Page$")
    public void inputEducationField(String text) {
        globalSteps.getCandidateEditPage().setInputEducationField(text);
    }

    @And("Enter Text '(.*)' In Employment Field in Candidate Edit Page$")
    public void inputEmploymentField(String text) {
        globalSteps.getCandidateEditPage().setInputEmploymentField(text);
    }

    @And("Enter Text '(.*)' In Comment Field in Candidate Edit Page$")
    public void inputCommentField(String text) {
        globalSteps.getCandidateEditPage().setInputCommentField(text);
    }

    @And("Click '(.*)' Button in Candidate Edit Page$")
    public void clickButton(String button) {
        switch (button) {
            case "Photo":
                globalSteps.getCandidateEditPage().clickPhotoButton();
                break;
            case "CV":
                globalSteps.getCandidateEditPage().clickReceivedCvButton();
                break;
            case "Vacancy":
                globalSteps.getCandidateEditPage().clickVacancyField();
                break;
            case "Update":
                globalSteps.getCandidateEditPage().clickUpdateButton();
                break;
            case "back to list":
                globalSteps.getCandidateEditPage().clickBackToListButton();
                break;
            case "Add":
                globalSteps.getCandidateEditPage().clickAddButton();
                break;
            case "Remove":
                globalSteps.getCandidateEditPage().clickRemoveButton();
                break;
        }
    }

    @And("Check '(.*)' Button In Candidate Edit Page$")
    public void checkUploadFileButton(String button) {
        assertTrue(globalSteps.getCandidateNewPage().isButtonAvailable(button));
    }

}