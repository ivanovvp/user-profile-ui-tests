package app.page;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;


public class CandidateEditPage extends GlobalPage {

    private static final String URL = APP_HOST + "/candidate/8158/edit";

    public CandidateEditPage(WebDriver driver) {
        super(driver);
    }

    public void open() {
        driver.navigate().to(URL);
    }

    /*------------------------------------------------------------------------------------*/

    @FindBy(id = "candidate_photo")
    private WebElement photoButton;

    @FindBy(id = "candidate_name")
    private WebElement nameField;

    @FindBy(id = "candidate_surname")
    private WebElement surnameField;

    @FindBy(id = "candidate_currentPosition")
    private WebElement currentPositionField;

    @FindBy(id = "candidate_applyingPosition")
    private WebElement applyingPositionField;

    @FindBy(id = "candidate_receivedCv")
    private WebElement receivedCvButton;

    @FindBy(id = "candidate_location")
    private WebElement locationField;

    @FindBy(id = "candidate_vacancy")
    private WebElement vacancyField;

    @FindBy(id = "candidate_phone")
    private WebElement phoneField;

    @FindBy(id = "candidate_email")
    private WebElement emailField;

    @FindBy(id = "candidate_linkedIn")
    private WebElement linkedInField;

    @FindBy(id = "candidate_facebook")
    private WebElement facebookField;

    @FindBy(id = "candidate_salary")
    private WebElement salaryField;

    @FindBy(id = "candidate_experience")
    private WebElement experienceField;

    @FindBy(id = "candidate_education")
    private WebElement educationField;

    @FindBy(id = "candidate_employment")
    private WebElement employmentField;

    @FindBy(id = "candidate_comment")
    private WebElement commentField;

    @FindBy(xpath = "//*[contains(@class, 'btn') and text() = 'Update']")
    private WebElement updateButton;

    @FindBy(xpath = "//*[contains(@class, 'btn btn-primary') and text() = 'back to list']")
    private WebElement backToListButton;

    @FindBy(xpath = "//*[contains(@class, 'btn') and text() = 'Add']")
    private WebElement addButton;

    @FindBy(id = "skills_input")
    private WebElement skillsListField;

    @FindBy(xpath = "//*[@class = 'fa fa-trash']")
    private WebElement removeButton;

    /*------------------------------------------------------------------------------------*/

    //input text
    /*------------------------------------------------------------------------------------*/
    public void setInputNameField(String name) {
        nameField.clear();
        nameField.sendKeys(name);
    }

    public void setInputSurNameField(String surName) {
        surnameField.clear();
        surnameField.sendKeys(surName);
    }

    public void setInputCurrentPositionField(String position) {
        currentPositionField.clear();
        currentPositionField.sendKeys(position);
    }

    public void setInputApplyingPositionField(String position) {
        applyingPositionField.clear();
        applyingPositionField.sendKeys(position);
    }

    public void setInputLocationField(String location) {
        locationField.clear();
        locationField.sendKeys(location);
    }

    public void setInputPhoneField(String phone) {
        phoneField.clear();
        phoneField.sendKeys(phone);
    }

    public void setInputEmailField(String eMail) {
        emailField.clear();
        emailField.sendKeys(eMail);
    }

    public void setInputLinkedInField(String link) {
        linkedInField.clear();
        linkedInField.sendKeys(link);
    }

    public void setInputFacebookField(String link) {
        facebookField.clear();
        facebookField.sendKeys(link);
    }

    public void setInputSalaryField(String salary) {
        salaryField.clear();
        salaryField.sendKeys(salary);
    }

    public void setInputExperienceField(String text) {
        experienceField.clear();
        experienceField.sendKeys(text);
    }

    public void setInputEducationField(String text) {
        educationField.clear();
        educationField.sendKeys(text);
    }

    public void setInputEmploymentField(String text) {
        employmentField.clear();
        employmentField.sendKeys(text);
    }

    public void setInputCommentField(String text) {
        commentField.clear();
        commentField.sendKeys(text);
    }

    public void setInputSkills(String skill) {
        skillsListField.clear();
        skillsListField.sendKeys(skill);
    }
    /*------------------------------------------------------------------------------------*/

    //click buttons
    /*------------------------------------------------------------------------------------*/
    public void clickUpdateButton() {
        updateButton.click();
    }

    public void clickBackToListButton() {
        backToListButton.click();
    }

    public void clickAddButton() {
        addButton.click();
    }

    public void clickRemoveButton() {
        removeButton.click();
    }

    public void clickVacancyField() {
        vacancyField.click();
    }

    public void clickReceivedCvButton() {
        receivedCvButton.click();
    }

    public void clickPhotoButton() {
        photoButton.click();
    }
    /*------------------------------------------------------------------------------------*/

    public boolean isButtonAvailable(String button) {
        boolean isAvailable;
        switch (button){
            case "Photo Choose File":
                isAvailable = photoButton.isEnabled();
                break;
            case "CV Choose File":
                isAvailable = receivedCvButton.isEnabled();
                break;
            default:
                isAvailable = false;
        }
        return isAvailable;
    }
}