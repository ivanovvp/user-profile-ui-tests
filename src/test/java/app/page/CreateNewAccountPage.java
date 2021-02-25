package app.page;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;


import java.util.List;

import static junit.framework.Assert.assertEquals;
import static org.testng.Assert.fail;

public class CreateNewAccountPage extends GlobalPage {

    private static final String URL = APP_HOST + "/create-account";

    public CreateNewAccountPage(WebDriver driver) {
        super(driver);
    }

    public void open() {
        driver.navigate().to(URL);
    }

    /*------------------------------------------------------------------------------------*/

    @FindBy(xpath = "//a[text()[contains(.,'Create an account')]]")
    private WebElement createAnAccountButton;

    @FindBy(xpath = "//*[contains(@class, 'btn btn-md btn-primary') and text() = 'Send']")
    private WebElement sendButton;

    @FindBy(xpath = "//a[text()[contains(.,'Back')]]")
    private WebElement backButton;

    @FindBy(id = "user_create_account_email")
    private WebElement emeilField;

    /*------------------------------------------------------------------------------------*/

    public void clickCreateAnAccountButton() {
        assertEquals(createAnAccountButton.getText(), "Create an account");
        createAnAccountButton.click();
    }

    public void inputEmailField(String emailname) {
        emeilField.clear();
        emeilField.sendKeys(emailname);
    }

    public void clickSendButton() {
        assertEquals(sendButton.getText(), "Send");
        sendButton.click();
    }

    public void clickBackButton() {
        assertEquals(backButton.getText(), "Back");
        backButton.click();
    }

    public void isAvailableErrorMassage() {
        List<WebElement> links = driver.findElements(By.xpath("//*[@class='form-error-message']"));
        for (WebElement alert : links) {
            boolean error = alert.getText().toLowerCase().contains("you can use only your work email");
            boolean errors = alert.getText().toLowerCase().contains("sorry, this user already exist");
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