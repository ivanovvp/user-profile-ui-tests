package app.page;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.util.List;

import static junit.framework.Assert.assertEquals;
import static org.testng.Assert.fail;

public class ChangePasswordPage extends GlobalPage {

    private static final String URL = APP_HOST + "/change-password";

    public ChangePasswordPage(WebDriver driver) {
        super(driver);
    }

    public void open() {
        driver.navigate().to(URL);
    }

    /*------------------------------------------------------------------------------------*/

    @FindBy(id = "oldPass")
    private WebElement oldPassField;

    @FindBy(id = "newPass")
    private WebElement newPassField;

    @FindBy(id = "repeatPass")
    private WebElement confirmPassField;

    @FindBy(xpath = "//*[contains(@class, 'btn btn-md btn-primary') and text() = 'Change password']")
    private WebElement changePassButton;

    @FindBy(xpath = "//a[text()[contains(.,'Back')]]")
    private WebElement backButton;

    @FindBy(xpath = "/html//div[@id='myTabContent']//form[@name='user_change_password']/div[1]/span")
    private WebElement eyeOldPassButton;

    @FindBy(xpath = "/html//div[@id='myTabContent']//form[@name='user_change_password']/div[2]/span")
    private WebElement eyeNewPassButton;

    @FindBy(xpath = "/html//div[@id='myTabContent']//form[@name='user_change_password']/div[3]/span")
    private WebElement eyeConfirmPassButton;

    /*------------------------------------------------------------------------------------*/

    public void inputOldPasswordField(String oldpass) {
        oldPassField.clear();
        oldPassField.sendKeys(oldpass);
    }

    public void inputNewPasswordField(String newpass) {
        newPassField.clear();
        newPassField.sendKeys(newpass);
    }

    public void inputConfirmPasswordField(String confirmpass) {
        confirmPassField.clear();
        confirmPassField.sendKeys(confirmpass);
    }

    public void clickEyeOldButton() {
        eyeOldPassButton.click();
    }

    public void clickEyeNewButton() {
        eyeNewPassButton.click();
    }

    public void clickEyeConfirmButton() {
        eyeConfirmPassButton.click();
    }

    public void clickChangePasswordButton() {
        assertEquals(changePassButton.getText(), "Change password");
        changePassButton.click();
    }

    public void clickBackButton() {
        assertEquals(backButton.getText(), "Back");
        backButton.click();
    }

    public void isAvailableErrorMassage() {
        List<WebElement> links = driver.findElements(By.xpath("//*[@class='form-error-message']"));
        for (WebElement alert : links) {
            boolean error = alert.getText().toLowerCase().contains("sorry, your old password did not match");
            boolean errors = alert.getText().toLowerCase().contains("the passwords you entered don't match");
            if (error) {
                System.out.println("OK");
            }else if (errors) {
                System.out.println("OK");
            }else {
                System.out.println("NOT OK");
                fail();
            }
        }
    }

}