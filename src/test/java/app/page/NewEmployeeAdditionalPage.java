package app.page;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.Select;


public class NewEmployeeAdditionalPage extends GlobalPage {

    private static final String URL = APP_HOST + "/vacancy/candidate/onboarding/additional/info/111?candidate=8299";

    public NewEmployeeAdditionalPage(WebDriver driver) {
        super(driver);
    }

    public void open() {
        driver.navigate().to(URL);
    }

    /*------------------------------------------------------------------------------------*/

    @FindBy(xpath = "//th[text()[contains(.,'Request#')]]")
    private WebElement requestTableHeader;

    @FindBy(xpath = "//th[text()[contains(.,'Created')]]")
    private WebElement createdTableHeader;

    @FindBy(xpath = "//th[text()[contains(.,'By')]]")
    private WebElement byTableHeader;

    @FindBy(id = "candidate_on_boarding_info_fullName")
    private WebElement fullNameField;

    @FindBy(id = "candidate_on_boarding_info_sex")
    private WebElement sexField;

    @FindBy(id = "candidate_on_boarding_info_birthDay_year")
    private WebElement yearField;

    @FindBy(id = "candidate_on_boarding_info_birthDay_month")
    private WebElement monthField;

    @FindBy(id = "candidate_on_boarding_info_birthDay_day")
    private WebElement dayField;

    @FindBy(id = "candidate_on_boarding_info_maritalStatus")
    private WebElement maritalField;

    @FindBy(id = "candidate_on_boarding_info_children")
    private WebElement childrenField;

    @FindBy(xpath = "//*[contains(@class, 'btn btn-success') and text() = 'Transfer Candidate to Employee']")
    private WebElement transferCandidateToEmployeeButton;

    /*------------------------------------------------------------------------------------*/

    public boolean isTableHeaderAppeared(String name) {
        boolean isAvailable;
        switch (name) {
            case "Request":
                isAvailable = requestTableHeader.isDisplayed();
                break;
            case "Created":
                isAvailable = createdTableHeader.isDisplayed();
                break;
            case "By":
                isAvailable = byTableHeader.isDisplayed();
                break;
            default:
                isAvailable = false;
        }
        return isAvailable;
    }

    public void isButtonAppeared() {
        transferCandidateToEmployeeButton.isDisplayed();
    }

    public void setInputFullNameField(String name) {
        fullNameField.clear();
        fullNameField.sendKeys(name);
    }

    public void setSelectSex(String sex) {
        Select sexField_dd = new Select(sexField);
        sexField_dd.selectByValue(sex);
    }

    public void setSelectYear(String year) {
        Select yearField_dd = new Select(yearField);
        yearField_dd.selectByVisibleText(year);
    }

    public void setSelectMonth(String month) {
        Select monthField_dd = new Select(monthField);
        monthField_dd.selectByVisibleText(month);
    }

    public void setSelectDay(String day) {
        Select dayField_dd = new Select(dayField);
        dayField_dd.selectByValue(day);
    }

    public void setSelectMarital(String marital) {
        Select maritalField_dd = new Select(maritalField);
        maritalField_dd.selectByValue(marital);
    }

    public void setInputChildrenField(String children) {
        childrenField.clear();
        childrenField.sendKeys(children);
    }

}