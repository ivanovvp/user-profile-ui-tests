package app.page;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.Select;

import static junit.framework.Assert.assertEquals;

public class VacancyIDPage extends GlobalPage {

    private static final String URL = APP_HOST + "/vacancy/111";

    public VacancyIDPage(WebDriver driver) {
        super(driver);
    }

    public void open() {
        driver.navigate().to(URL);
    }

    /*------------------------------------------------------------------------------------*/

    @FindBy(xpath = "//table[@class='table']//th[.='Request#']")
    private WebElement requestField;

    @FindBy(xpath = "//table[@class='table']//th[.='Office']")
    private WebElement officeField;

    @FindBy(xpath = "//table[@class='table']//th[.='Department']")
    private WebElement departmentField;

    @FindBy(xpath = "//table[@class='table']//th[.='Team']")
    private WebElement teamField;

    @FindBy(xpath = "//table[@class='table']//th[.='Position']")
    private WebElement positionField;

    @FindBy(xpath = "//table[@class='table']//th[.='Salary']")
    private WebElement salaryField;

    @FindBy(xpath = "//table[@class='table']//th[.='Test']")
    private WebElement testField;

    @FindBy(xpath = "//table[@class='table']//th[.='English']")
    private WebElement englishField;

    @FindBy(xpath = "//table[@class='table']//th[.='Amount']")
    private WebElement amountField;

    @FindBy(xpath = "//table[@class='table']//th[.='Bonus']")
    private WebElement bonusField;

    @FindBy(xpath = "//table[@class='table']//th[.='Responsibilities']")
    private WebElement responsibilitiesField;

    @FindBy(xpath = "//table[@class='table']//th[.='Requirements']")
    private WebElement requirementsField;

    @FindBy(xpath = "//table[@class='table']//th[.='Plus']")
    private WebElement plusField;

    @FindBy(xpath = "//table[@class='table']//th[.='Created']")
    private WebElement createdField;

    @FindBy(xpath = "//table[@class='table']//th[.='By']")
    private WebElement byField;

    @FindBy(id = "viewer_user")
    private WebElement viewerUserField;

    @FindBy(xpath = "//*[contains(@class, 'btn') and text() = 'Send']\n")
    private WebElement sendButton;

    /*------------------------------------------------------------------------------------*/

    public boolean isBlockAvailable(String blockName) {
        boolean isAvailable;
        switch (blockName) {
            case "Request#":
                isAvailable = requestField.isDisplayed();
                assertEquals(requestField.getText(), "Request#");
                break;
            case "Office":
                isAvailable = officeField.isDisplayed();
                assertEquals(officeField.getText(), "Office");
                break;
            case "Department":
                isAvailable = departmentField.isDisplayed();
                assertEquals(departmentField.getText(), "Department");
                break;
            case "Team":
                isAvailable = teamField.isDisplayed();
                assertEquals(teamField.getText(), "Team");
                break;
            case "Position":
                isAvailable = positionField.isDisplayed();
                assertEquals(positionField.getText(), "Position");
                break;
            case "Salary":
                isAvailable = salaryField.isDisplayed();
                assertEquals(salaryField.getText(), "Salary");
                break;
            case "Test":
                isAvailable = testField.isDisplayed();
                assertEquals(testField.getText(), "Test");
                break;
            case "English":
                isAvailable = englishField.isDisplayed();
                assertEquals(englishField.getText(), "English");
                break;
            case "Amount":
                isAvailable = amountField.isDisplayed();
                assertEquals(amountField.getText(), "Amount");
                break;
            case "Bonus":
                isAvailable = bonusField.isDisplayed();
                assertEquals(bonusField.getText(), "Bonus");
                break;
            case "Responsibilities":
                isAvailable = responsibilitiesField.isDisplayed();
                assertEquals(responsibilitiesField.getText(), "Responsibilities");
                break;
            case "Requirements":
                isAvailable = requirementsField.isDisplayed();
                assertEquals(requirementsField.getText(), "Requirements");
                break;
            case "Plus":
                isAvailable = plusField.isDisplayed();
                assertEquals(plusField.getText(), "Plus");
                break;
            case "Created":
                isAvailable = createdField.isDisplayed();
                assertEquals(createdField.getText(), "Created");
                break;
            case "By":
                isAvailable = byField.isDisplayed();
                assertEquals(byField.getText(), "By");
                break;
            default:
                isAvailable = false;
        }
        return isAvailable;
    }

    public void setSelectUser(String user) {
        Select viewerUserField_dd = new Select(viewerUserField);
        viewerUserField_dd.selectByVisibleText(user);
    }

    public void clickSendButton() {
        assertEquals(sendButton.getText(), "Send");
        sendButton.click();
    }
}