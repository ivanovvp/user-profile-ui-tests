package app.page;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.Select;


public class ApproveCandidatePage extends GlobalPage {

    private static final String URL = APP_HOST + "/vacancy/candidate/after/interview/approve/8195?vacancy=111";

    public ApproveCandidatePage(WebDriver driver) {
        super(driver);
    }

    public void open() {
        driver.navigate().to(URL);
    }

    /*------------------------------------------------------------------------------------*/

    @FindBy(id = "approve_after_interview_by_department_manager_office")
    private WebElement officeSelect;

    @FindBy(id = "approve_after_interview_by_department_manager_department")
    private WebElement departmentSelect;

    @FindBy(id = "approve_after_interview_by_department_manager_team")
    private WebElement teamSelect;

    @FindBy(id = "approve_after_interview_by_department_manager_directionEnterpreneur")
    private WebElement enterpreneurSelects;

    @FindBy(id = "approve_after_interview_by_department_manager_level")
    private WebElement levelSelects;

    @FindBy(id = "approve_after_interview_by_department_manager_startDate")
    private WebElement startdateSelect;

    @FindBy(id = "approve_after_interview_by_department_manager_salary")
    private WebElement salarySelect;

    @FindBy(id = "approve_after_interview_by_department_manager_workPlace")
    private WebElement workplaceSelect;

    @FindBy(id = "approve_after_interview_by_department_manager_nickname")
    private WebElement nicknameSelect;

    @FindBy(xpath = "//*[contains(@class, 'btn btn-success') and text() = 'Send']")
    private WebElement clickSend;

    /*------------------------------------------------------------------------------------*/

    public void setSelectOffice(String name) {
        Select office_dd = new Select(officeSelect);
        office_dd.selectByValue(name);
    }

    public void setSelectDepartment(String name) {
        Select department_dd = new Select(departmentSelect);
        department_dd.selectByValue(name);
    }

    public void setSelectTeam(String team) {
        Select team_dd = new Select(teamSelect);
        team_dd.selectByValue(team);
    }

    public void setInputEnterpreneurField(String text) {
        enterpreneurSelects.click();
        enterpreneurSelects.sendKeys(text);
    }

    public void setInputLevelField(String text) {
        levelSelects.click();
        levelSelects.sendKeys(text);
    }

    public void setInputStartDateField(String value) {
        startdateSelect.click();
        startdateSelect.sendKeys(value);
    }

    public void setInputSalaryField(String text) {
        salarySelect.click();
        salarySelect.sendKeys(text);
    }

    public void setInputWorkPlaceField(String text) {
        workplaceSelect.click();
        workplaceSelect.sendKeys(text);
    }

    public void setInputNicknameField(String text) {
        nicknameSelect.click();
        nicknameSelect.sendKeys(text);
    }

    public void isAppearedSendButton() {
        clickSend.isDisplayed();
    }

}