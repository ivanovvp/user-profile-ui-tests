package app.page;


import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.Select;

import static junit.framework.Assert.assertEquals;


public class UserCreateNewPage extends GlobalPage {

    private static final String URL = APP_HOST + "/user/new";

    public UserCreateNewPage(WebDriver driver) {
        super(driver);
    }

    public void open() {
        driver.navigate().to(URL);
    }

    /*------------------------------------------------------------------------------------*/

    @FindBy(id = "user_create_photo")
    private WebElement createPhoto;

    @FindBy(id = "user_create_user_name")
    private WebElement nameField;

    @FindBy(id = "user_create_user_office")
    private WebElement officeField;

    @FindBy(id = "user_create_user_department")
    private WebElement departmentField;

    @FindBy(id = "user_create_user_team")
    private WebElement teamField;

    @FindBy(id = "user_create_user_email")
    private WebElement emailField;

    @FindBy(id = "user_create_user_createDate_date_year")
    private WebElement createYearSelect;

    @FindBy(id = "user_create_user_createDate_date_month")
    private WebElement createMonthSelect;

    @FindBy(id = "user_create_user_createDate_date_day")
    private WebElement createDaySelect;

    @FindBy(id = "user_create_user_createDate_time_hour")
    private WebElement createHoursSelect;

    @FindBy(id = "user_create_user_createDate_time_minute")
    private WebElement createMinutSelect;

    @FindBy(id = "user_create_user_password")
    private WebElement passwordField;

    @FindBy(id = "user_create_subTeam")
    private WebElement subTeamField;

    @FindBy(id = "user_create_position")
    private WebElement positionField;

    @FindBy(id = "user_create_phone")
    private WebElement phoneField;

    @FindBy(id = "user_create_skype")
    private WebElement skypeField;

    @FindBy(id = "user_create_personalEmail")
    private WebElement personalEmailField;

    @FindBy(id = "user_create_salary")
    private WebElement salaryField;

    @FindBy(id = "user_create_sex")
    private WebElement sexField;

    @FindBy(id = "user_create_birthDay_year")
    private WebElement birthDayYearSelect;

    @FindBy(id = "user_create_birthDay_month")
    private WebElement birthDayMonthSelect;

    @FindBy(id = "user_create_birthDay_day")
    private WebElement birthDayDaySelect;

    @FindBy(id = "user_create_maritalStatus")
    private WebElement maritalStatusField;

    @FindBy(id = "user_create_children")
    private WebElement childrenField;

    @FindBy(id = "user_create_location")
    private WebElement locationStatusField;

    @FindBy(xpath = "//*[contains(@class, 'btn') and text() = 'Save']")
    private WebElement saveButton;

    @FindBy(xpath = "//*[contains(@href, '/user/') and text() = 'back to list']")
    private WebElement backToListButton;

    /*--------------------------------------------------------------------------------------------------------*/

    public boolean isButtonAvailable(String buttonName) {
        boolean isAvailable;
        switch (buttonName) {
            case "Save":
                isAvailable = saveButton.isDisplayed();
                assertEquals(saveButton.getText().toLowerCase(), "save");
                break;
            case "back to list":
                isAvailable = backToListButton.isDisplayed();
                assertEquals(backToListButton.getText().toLowerCase(), "back to list");
                break;
            default:
                isAvailable = false;
        }
        return isAvailable;
    }

    public void clickCreatePhotoButton() {
        createPhoto.click();
    }

    public void setInputNameField(String name) {
        nameField.click();
        nameField.clear();
        nameField.sendKeys(name);
    }

    public void setSelectOfficeField(String office) {
        Select office_dd = new Select(officeField);
        office_dd.selectByVisibleText(office);
    }

    public void setSelectDepartmentField(String department) {
        Select department_dd = new Select(departmentField);
        department_dd.selectByVisibleText(department);
    }

    public void setSelectTeamField(String team) {
        Select team_dd = new Select(teamField);
        team_dd.selectByVisibleText(team);
    }

    public void setInputEmailField(String email) {
        emailField.clear();
        emailField.sendKeys(email);
    }

    public void setSelectCreateDateYear(String year) {
        Select createYear_dd = new Select(createYearSelect);
        createYear_dd.selectByValue(year);
    }

    public void setSelectCreateDateMonth(String month) {
        Select createMonth_dd = new Select(createMonthSelect);
        createMonth_dd.selectByVisibleText(month);
    }

    public void setSelectCreateDateDay(String day) {
        Select createDay_dd = new Select(createDaySelect);
        createDay_dd.selectByValue(day);
    }

    public void setSelectCreateDateHour(String hour) {
        Select createHours_dd = new Select(createHoursSelect);
        createHours_dd.selectByValue(hour);
    }

    public void setSelectCreateDateMinute(String minute) {
        Select createMinute_dd = new Select(createMinutSelect);
        createMinute_dd.selectByValue(minute);
    }

    public void setInputPasswordField(String password) {
        passwordField.clear();
        passwordField.sendKeys(password);
    }

    public void setInputSubTeamField(String subTeam) {
        subTeamField.clear();
        subTeamField.sendKeys(subTeam);
    }

    public void setInputPositionField(String position) {
        positionField.clear();
        positionField.sendKeys(position);
    }

    public void setInputPhoneField(String phone) {
        phoneField.clear();
        phoneField.sendKeys(phone);
    }

    public void setInputSkypeField(String skype) {
        skypeField.clear();
        skypeField.sendKeys(skype);
    }

    public void setInputPersonalEmailField(String personalEmail) {
        personalEmailField.clear();
        personalEmailField.sendKeys(personalEmail);
    }

    public void setInputSalaryField(String salary) {
        salaryField.clear();
        salaryField.sendKeys(salary);
    }

    public void setSelectSexField(String sex) {
        Select sex_dd = new Select(sexField);
        sex_dd.selectByVisibleText(sex);
    }

    public void setSelectBirthDayYear(String year) {
        Select birthDayYear_dd = new Select(birthDayYearSelect);
        birthDayYear_dd.selectByValue(year);
    }

    public void setSelectBirthDayMonth(String month) {
        Select birthDayMonth_dd = new Select(birthDayMonthSelect);
        birthDayMonth_dd.selectByVisibleText(month);
    }

    public void setSelectBirthDayDay(String day) {
        Select birthDayDay_dd = new Select(birthDayDaySelect);
        birthDayDay_dd.selectByValue(day);
    }

    public void setSelectMaritalStatusField(String married) {
        Select maritalStatus_dd = new Select(maritalStatusField);
        maritalStatus_dd.selectByVisibleText(married);
    }

    public void setInputChildrenField(String children) {
        childrenField.clear();
        childrenField.sendKeys(children);
    }

    public void setInputLocationField(String location) {
        locationStatusField.clear();
        locationStatusField.sendKeys(location);
    }

    public void clickBackToListButton() {
        backToListButton.click();
    }

}