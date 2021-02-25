package app.page;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.util.List;

import static junit.framework.Assert.assertEquals;


public class LoginPage extends GlobalPage {

    private static final String URL = APP_HOST + "/login";

    public LoginPage(WebDriver driver) {
        super(driver);
    }

    public void open() {
        driver.navigate().to(URL);
    }

    /*------------------------------------------------------------------------------------*/

    @FindBy(id = "inputEmail")
    private WebElement inputEmailField;

    @FindBy(id = "inputPassword-email")
    private WebElement inputPasswordField;

    @FindBy(xpath = "//*[contains(@class, 'btn btn-md btn-primary')]")
    private WebElement logInButton;

    @FindBy(xpath = "//*[contains(@class, 'navbar-brand col-sm-3 col-md-2 mr-0') and text() = 'Nexteum']")
    private WebElement nexteumButton;

    /*------------------------------------------------------------------------------------*/

    public void setInputEmailField(String email) {
        inputEmailField.clear();
        inputEmailField.sendKeys(email);
    }

    public void setInputPasswordField(String password) {
        inputPasswordField.clear();
        inputPasswordField.sendKeys(password);
    }

    public void clickSignInButton() {
        assertEquals(logInButton.getText(), "Log in");
        logInButton.click();
    }

    public void clickNexteumButton() {
        nexteumButton.click();
    }

    public void isAvailableAlert() {
        List<WebElement> links = driver.findElements(By.xpath("//*[contains(@class, 'alert alert-danger')]"));
        for (WebElement alert : links) {
            System.out.println(alert.getText().toLowerCase());
            assertEquals(alert.getText().toLowerCase(), "email could not be found.");
        }
    }

}