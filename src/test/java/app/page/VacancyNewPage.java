package app.page;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.Select;

import static junit.framework.Assert.assertEquals;


public class VacancyNewPage extends GlobalPage {

    private static final String URL = APP_HOST + "/vacancy/new";

    public VacancyNewPage(WebDriver driver) {
        super(driver);
    }

    public void open() {
        driver.navigate().to(URL);
    }

    /*------------------------------------------------------------------------------------*/

    @FindBy(id = "vacancy_office")
    private WebElement officeField;

    @FindBy(id = "vacancy_department")
    private WebElement departmentField;

    @FindBy(id = "vacancy_team")
    private WebElement teamField;

    @FindBy(id = "vacancy_position")
    private WebElement positionField;

    @FindBy(id = "vacancy_salary")
    private WebElement salaryField;

    @FindBy(id = "vacancy_test")
    private WebElement testField;

    @FindBy(id = "vacancy_english")
    private WebElement englishField;

    @FindBy(id = "vacancy_amount")
    private WebElement amountField;

    @FindBy(id = "vacancy_bonus")
    private WebElement bonusField;

    @FindBy(id = "vacancy_responsibilities")
    private WebElement responsibilitiesField;

    @FindBy(id = "vacancy_requirements")
    private WebElement requirementsField;

    @FindBy(id = "vacancy_plus")
    private WebElement plusField;

    @FindBy(id = "vacancy_reason")
    private WebElement reasonField;

    @FindBy(xpath = "//a[text() = 'back to list']")
    private WebElement backButton;

    /*------------------------------------------------------------------------------------*/

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

    public void setInputPositionField(String position) {
        positionField.clear();
        positionField.sendKeys(position);
    }

    public void setInputSalaryField(String salary) {
        salaryField.clear();
        salaryField.sendKeys(salary);
    }

    public void setSelectTestField(String test) {
        Select test_dd = new Select(testField);
        test_dd.selectByVisibleText(test);
    }

    public void setSelectEnglishField(String english) {
        Select english_dd = new Select(englishField);
        english_dd.selectByVisibleText(english);
    }

    public void setInputAmountField(String amount) {
        amountField.clear();
        amountField.sendKeys(amount);
    }

    public void setInputBonusField(String bonus) {
        bonusField.clear();
        bonusField.sendKeys(bonus);
    }

    public void setInputResponsibilitiesField(String text) {
        responsibilitiesField.clear();
        responsibilitiesField.sendKeys(text);
    }

    public void setInputrequirementsField(String text) {
        requirementsField.clear();
        requirementsField.sendKeys(text);
    }

    public void setInputPlusField(String plus) {
        plusField.clear();
        plusField.sendKeys(plus);
    }

    public void setInputReasonField(String reason) {
        reasonField.clear();
        reasonField.sendKeys(reason);
    }

    public void clickBackButton() {
        assertEquals(backButton.getText(), "back to list");
        backButton.click();
    }

}