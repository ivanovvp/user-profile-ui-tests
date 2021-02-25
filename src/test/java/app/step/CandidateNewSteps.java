package app.step;

import app.driver.SharedDriver;
import cucumber.api.java.en.And;

import static org.testng.Assert.assertTrue;

public class CandidateNewSteps {

    private GlobalSteps globalSteps;

    public CandidateNewSteps(SharedDriver driver) {
        globalSteps = new GlobalSteps(driver);
    }


    @And("Enter Text '(.*)' In Name Field in Candidate New Page$")
    public void inputNameField(String text) {
        globalSteps.getCandidateNewPage().setInputNameField(text);
    }

    @And("Enter Text '(.*)' In Surname Field in Candidate New Page$")
    public void inputSurNameField(String text) {
        globalSteps.getCandidateNewPage().setInputSurNameField(text);
    }

    @And("Enter Text '(.*)' In Current Position Field in Candidate New Page$")
    public void inputCurrentPositionField(String text) {
        globalSteps.getCandidateNewPage().setInputCurrentPositionField(text);
    }

    @And("Enter Text '(.*)' In Applying Position Field in Candidate New Page$")
    public void inputApplyingPositionField(String text) {
        globalSteps.getCandidateNewPage().setInputApplyingPositionField(text);
    }

    @And("Enter Text '(.*)' In Location Field in Candidate New Page$")
    public void inputLocationField(String text) {
        globalSteps.getCandidateNewPage().setInputLocationField(text);
    }

    @And("Enter Text '(.*)' In Phone Field in Candidate New Page$")
    public void inputPhoneField(String text) {
        globalSteps.getCandidateNewPage().setInputPhoneField(text);
    }

    @And("Enter Text '(.*)' In Email Field in Candidate New Page$")
    public void inputEmailField(String text) {
        globalSteps.getCandidateNewPage().setInputEmailField(text);
    }

    @And("Enter Text '(.*)' In LinkedIn Field in Candidate New Page$")
    public void inputLinkedInField(String text) {
        globalSteps.getCandidateNewPage().setInputLinkedInField(text);
    }

    @And("Enter Text '(.*)' In Facebook Field in Candidate New Page$")
    public void inputFacebookField(String text) {
        globalSteps.getCandidateNewPage().setInputFacebookField(text);
    }

    @And("Enter Text '(.*)' In Salary Field in Candidate New Page$")
    public void inputSalaryField(String text) {
        globalSteps.getCandidateNewPage().setInputSalaryField(text);
    }

    @And("Enter Text '(.*)' In Experience Field in Candidate New Page$")
    public void inputExperienceField(String text) {
        globalSteps.getCandidateNewPage().setInputExperienceField(text);
    }

    @And("Enter Text '(.*)' In Education Field in Candidate New Page$")
    public void inputEducationField(String text) {
        globalSteps.getCandidateNewPage().setInputEducationField(text);
    }

    @And("Enter Text '(.*)' In Employment Field in Candidate New Page$")
    public void inputEmploymentField(String text) {
        globalSteps.getCandidateNewPage().setInputEmploymentField(text);
    }

    @And("Enter Text '(.*)' In Comment Field in Candidate New Page$")
    public void inputCommentField(String text) {
        globalSteps.getCandidateNewPage().setInputCommentField(text);
    }

    @And("Enter Text '(.*)' In Skills Field in Candidate New Page$")
    public void inputSkills(String skill) {
        globalSteps.getCandidateNewPage().setInputSkills(skill);
    }


    @And("Click '(.*)' Button in Candidate New Page$")
    public void clickButton(String button) {
        switch (button) {
            case "Vacancy":
                globalSteps.getCandidateNewPage().clickVacancyField();
                break;
            case "Update":
                globalSteps.getCandidateNewPage().clickUpdateButton();
                break;
            case "back to list":
                globalSteps.getCandidateNewPage().clickBackToListButton();
                break;
            case "Add":
                globalSteps.getCandidateNewPage().clickAddButton();
                break;
            case "Remove":
                globalSteps.getCandidateNewPage().clickRemoveButton();
                break;
        }
    }

    @And("Check '(.*)' Button In Candidate New Page$")
    public void checkUploadFileButton(String button) {
        assertTrue(globalSteps.getCandidateNewPage().isButtonAvailable(button));
    }

}