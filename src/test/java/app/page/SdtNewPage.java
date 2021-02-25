package app.page;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.Keys;

import java.util.List;

import static junit.framework.Assert.assertEquals;


public class SdtNewPage extends GlobalPage {

    private static final String URL = APP_HOST + "/sdt/new";

    public SdtNewPage(WebDriver driver) {
        super(driver);
    }

    public void open() {
        driver.navigate().to(URL);
    }

    /*------------------------------------------------------------------------------------*/

    @FindBy(xpath = "//h1[text()[contains(.,'Menu')]]")
    private WebElement menuHeader;

    @FindBy(xpath = "//h1[text()[contains(.,'Create new Sdt')]]")
    private WebElement newSDTHeader;

    @FindBy(id = "user_sdt_count")
    private WebElement amountSdtField;

    @FindBy(id = "user_sdt_createDate")
    private WebElement createDateField;

    @FindBy(id = "user_sdt_actingInput")
    private WebElement personField;

    @FindBy(id = "add_person_btn")
    private WebElement addButton;

    @FindBy(xpath = "//*[contains(@class, 'btn btn-primary') and text() = 'Save']")
    private WebElement saveButton;

    @FindBy(xpath = "//*[contains(@class, 'btn btn-secondary') and text() = 'back to list']")
    private WebElement backToListButton;

    @FindBy(xpath = "//*[contains(@class, 'fc-title') and text() = 'SDT']")
    private WebElement sdtButton;

    @FindBy(xpath = "//*[contains(@class, 'fc-title') and text() = 'SDT auto-test']")
    private WebElement sdtAutoTestButton;

    @FindBy(xpath = "//*[contains(@class, 'btn btn-danger') and text() = 'Delete']")
    private WebElement deleteButton;

    /*------------------------------------------------------------------------------------*/

    public boolean isAppearedFieldInPage(String fieldName) {
        boolean isAppearedField;
        switch (fieldName) {
            case "Menu":
                isAppearedField = menuHeader.isDisplayed();
                assertEquals(menuHeader.getText(), "Menu:");
                break;
            case "Create new Sdt":
                isAppearedField = newSDTHeader.isDisplayed();
                assertEquals(newSDTHeader.getText(), "Create new Sdt");
                break;
            case "Amount":
                isAppearedField = amountSdtField.isDisplayed();
                break;
            case "Create Date":
                isAppearedField = createDateField.isDisplayed();
                break;
            case "Acting":
                isAppearedField = personField.isDisplayed();
                break;
            default:
                isAppearedField = false;
        }
        return isAppearedField;
    }

    public boolean isButtonAppeared(String buttonName) {
        boolean isButtonAppeared;
        switch (buttonName) {
            case "Save":
                isButtonAppeared = saveButton.isDisplayed();
                assertEquals(saveButton.getText(), "Save");
                break;
            case "Back to list":
                isButtonAppeared = backToListButton.isDisplayed();
                assertEquals(backToListButton.getText(), "back to list");
                break;
            default:
                isButtonAppeared = false;
        }
        return isButtonAppeared;
    }

    public void setInputAmountField(String amount) {
        amountSdtField.clear();
        amountSdtField.sendKeys(amount);
    }

    public void toPushEnter() {
        createDateField.clear();
        createDateField.click();
        createDateField.sendKeys(Keys.ENTER);
    }

    public void setInputPersonField(String name) {
        personField.clear();
        personField.sendKeys(name);
    }

    public void clickAddButton() {
        assertEquals(addButton.getText(), "Add");
        addButton.click();
    }

    public void clickSaveButton() {
        saveButton.click();

    }

    public void clickSdtButton() {
        sdtButton.click();
    }

    public void preDeleteSdt() {
        List<WebElement> links = driver.findElements(By.xpath("//*[contains(@class, 'table')]"));
        for (WebElement table : links) {
            boolean isSdtPresents = table.getText().contains("SDT");
            if (isSdtPresents) {
                removeSdt();
            } else {
                System.out.println();
            }
        }
    }

    private void removeSdt() {
        clickSdtButton();
        clickDeleteButton();
        toPushAlertOK();
    }

    public void clickSdtAutoTestButton() {
        sdtAutoTestButton.click();
    }

    public void clickDeleteButton() {
        deleteButton.click();
    }

    public void toPushAlertOK() {
        driver.switchTo().alert().accept();
    }

    public void isAvailableErrorMassage() {
        List<WebElement> links = driver.findElements(By.xpath("//*[contains(@class, 'alert alert-danger')]"));
        for (WebElement alert : links) {
            System.out.println(alert.getText().toLowerCase());
            assertEquals(alert.getText().toLowerCase(), "error sorry, it seems you have already created sdt for selected period. please, edit or delete previously created sdt");
        }
    }

}