package app.page;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;


public class CandidateNewPage extends GlobalPage {

    private static final String URL = APP_HOST + "/candidate/new";

    public CandidateNewPage(WebDriver driver) {
        super(driver);
    }

    public void open() {
        driver.navigate().to(URL);
    }

    /*------------------------------------------------------------------------------------*/

    @FindBy(id = "candidate_photo")
    private WebElement photoButton;

    @FindBy(id = "candidate_receivedCv")
    private WebElement cvButton;

    @FindBy(id = "candidate_name")
    private WebElement nameField;

    @FindBy(id = "candidate_surname")
    private WebElement surnameField;

    @FindBy(id = "candidate_currentPosition")
    private WebElement currentPositionField;

    @FindBy(id = "candidate_applyingPosition")
    private WebElement applyingPositionField;

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

    @FindBy(xpath = "//*[contains(@href, '/candidate/') and text() = 'back to list']")
    private WebElement backToListButton;

    @FindBy(xpath = "//*[contains(@class, 'btn') and text() = 'Add']")
    private WebElement addButton;

    @FindBy(id = "skills_input")
    private WebElement skillsListField;

    @FindBy(xpath = "//*[@class = 'fa fa-trash']")
    private WebElement removeButton;

    /*------------------------------------------------------------------------------------*/

    public void setInputNameField(String text) {
        nameField.clear();
        nameField.sendKeys(text);
    }

    public void setInputSurNameField(String text) {
        surnameField.clear();
        surnameField.sendKeys(text);
    }

    public void setInputCurrentPositionField(String text) {
        currentPositionField.clear();
        currentPositionField.sendKeys(text);
    }

    public void setInputApplyingPositionField(String text) {
        applyingPositionField.clear();
        applyingPositionField.sendKeys(text);
    }

    public void setInputLocationField(String text) {
        locationField.clear();
        locationField.sendKeys(text);
    }

    public void setInputPhoneField(String text) {
        phoneField.clear();
        phoneField.sendKeys(text);
    }

    public void setInputEmailField(String text) {
        emailField.clear();
        emailField.sendKeys(text);
    }

    public void setInputLinkedInField(String text) {
        linkedInField.clear();
        linkedInField.sendKeys(text);
    }

    public void setInputFacebookField(String text) {
        facebookField.clear();
        facebookField.sendKeys(text);
    }

    public void setInputSalaryField(String text) {
        salaryField.clear();
        salaryField.sendKeys(text);
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

    public void setInputSkills(String text) {
        skillsListField.clear();
        skillsListField.sendKeys(text);
    }

    public void clickVacancyField() {
        vacancyField.click();
    }

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

    public boolean isButtonAvailable(String button) {
        boolean isAvailable;
        switch (button){
            case "Photo Choose File":
                isAvailable = photoButton.isEnabled();
                break;
            case "CV Choose File":
                isAvailable = cvButton.isEnabled();
                break;
                default:
                    isAvailable = false;
        }
        return isAvailable;
    }

}