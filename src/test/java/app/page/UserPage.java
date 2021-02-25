package app.page;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import static junit.framework.Assert.assertEquals;

import java.util.List;


public class UserPage extends GlobalPage {

    private static final String URL = APP_HOST + "/user/";

    public UserPage(WebDriver driver) {
        super(driver);
    }

    public void open() {
        driver.navigate().to(URL);
    }

    /*------------------------------------------------------------------------------------*/

    @FindBy(xpath = "//*[@class='btn btn-primary'][text()[contains(.,'Create new')]]")
    private WebElement createNewButton;

    @FindBy(xpath = "//*[@class='nav-link '][text()[contains(.,'All')]]")
    private WebElement allButton;

    @FindBy(xpath = "//*[@class='nav-link '][text()[contains(.,'Users')]]")
    private WebElement usersButton;

    @FindBy(xpath = "//*[@class='nav-link '][text()[contains(.,'New')]]")
    private WebElement newButton;

    @FindBy(xpath = "//*[@class='nav-link '][text()[contains(.,'Terminated')]]")
    private WebElement terminatedButton;

    /*--------------------------------------------------------------------------------------------------------*/

    public void checkNameTable() {
        List<WebElement> links = driver.findElements(By.xpath("//*[@class='table']//thead//tr"));
        for (WebElement table : links) {
            table.getText();
            assertEquals(table.getText().toLowerCase(), "full name position team office work email");
        }
    }

    public boolean isButtonAvailable(String buttonName) {
        boolean isAvailable;
        switch (buttonName) {
            case "Create new":
                isAvailable = createNewButton.isDisplayed();
                assertEquals(createNewButton.getText().toLowerCase(), "create new");
                break;
            case "All":
                isAvailable = allButton.isDisplayed();
                assertEquals(allButton.getText().toLowerCase(), "all");
                break;
            case "Users":
                isAvailable = usersButton.isDisplayed();
                assertEquals(usersButton.getText().toLowerCase(), "users");
                break;
            case "New":
                isAvailable = newButton.isDisplayed();
                assertEquals(newButton.getText().toLowerCase(), "new");
                break;
            case "Terminated":
                isAvailable = terminatedButton.isDisplayed();
                assertEquals(terminatedButton.getText().toLowerCase(), "terminated");
                break;
            default:
                isAvailable = false;
        }
        return isAvailable;
    }

    public void clickCreateNewButton() {
        createNewButton.click();
    }

    public void clickAllButton() {
        allButton.click();
    }

    public void clickUsersButton() {
        usersButton.click();
    }

    public void clickNewButton() {
        newButton.click();
    }

    public void clickTerminatedButton() {
        terminatedButton.click();
    }

}