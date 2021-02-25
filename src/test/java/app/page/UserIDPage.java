package app.page;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import static junit.framework.Assert.assertEquals;


public class UserIDPage extends GlobalPage {

    private static final String URL = APP_HOST + "/user/224";

    public UserIDPage(WebDriver driver) {
        super(driver);
    }

    public void open() {
        driver.navigate().to(URL);
    }

    /*------------------------------------------------------------------------------------*/

    @FindBy(xpath = "//h1[text()[contains(.,'Menu')]]")
    private WebElement menuHeader;

    @FindBy(xpath = "//h1[text()[contains(.,'User')]]")
    private WebElement userHeader;

    @FindBy(xpath = "//*[contains(@class, 'btn btn-primary') and text() = 'Logout']")
    private WebElement logoutButton;

    @FindBy(xpath = "//*[text()[contains(.,'Full Name')]]")
    private WebElement fullNameHeader;

    @FindBy(xpath = "//*[text()[contains(.,'Phone number')]]")
    private WebElement phoneHeader;

    @FindBy(xpath = "//*[text()[contains(.,'Work Email')]]")
    private WebElement emailHeader;

    @FindBy(xpath = "//td/img[contains(@class, 'img-fluid')]")
    private WebElement photoHeader;

    @FindBy(xpath = "//*[contains(@class, 'btn btn-primary') and text() = 'Change password']")
    private WebElement changePasswordButton;

    @FindBy(xpath = "//*[contains(@class, 'btn btn-primary') and text() = 'edit']")
    private WebElement editButton;

    @FindBy(xpath = "/html//div[@class='container']//a[@href='/sdt/email/assignee/229']")
    private WebElement sdtEmailsLink;

    @FindBy(xpath = "//*[contains(@class, 'btn') and text() = 'Update']")
    private WebElement updateButton;

    /*------------------------------------------------------------------------------------*/

    public boolean isBlockAvailable(String blockName) {
        boolean isAvailable;
        switch (blockName) {
            case "Menu":
                isAvailable = menuHeader.isDisplayed();
                assertEquals(menuHeader.getText(), "Menu:");
                break;
            case "User":
                isAvailable = userHeader.isDisplayed();
                assertEquals(userHeader.getText(), "User");
                break;
            case "Full Name":
                isAvailable = fullNameHeader.isDisplayed();
                assertEquals(fullNameHeader.getText(), "Full Name");
                break;
            case "Phone":
                isAvailable = phoneHeader.isDisplayed();
                assertEquals(phoneHeader.getText(), "Phone number");
                break;
            case "Email":
                isAvailable = emailHeader.isDisplayed();
                assertEquals(emailHeader.getText(), "Work Email");
                break;
            case "Photo":
                isAvailable = photoHeader.isDisplayed();
                assertEquals(photoHeader.getText(), "Photo");
                break;
            default:
                isAvailable = false;
        }
        return isAvailable;
    }

    public boolean isButtonAppeared(String buttonName) {
        boolean isButtonAppeared;
        switch (buttonName) {
            case "Logout":
                isButtonAppeared = logoutButton.isDisplayed();
                assertEquals(logoutButton.getText(), "Logout");
                break;
            case "Change password":
                isButtonAppeared = changePasswordButton.isDisplayed();
                break;
                default: isButtonAppeared = false;
        }
        return isButtonAppeared;
    }

    public void clickLogoutButton() {
        logoutButton.click();
    }

    public void clickChangePasswordButton() {
        assertEquals(changePasswordButton.getText(), "Change password");
        changePasswordButton.click();
    }

    public void clickEditButton() {
        editButton.click();
    }

    public void clickSDTEmailsLink() {
        sdtEmailsLink.click();
    }

    public void clickUpdateButton() {
        updateButton.click();
    }

}