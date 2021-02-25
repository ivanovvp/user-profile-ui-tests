package app.page;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import static junit.framework.Assert.assertEquals;

public class MonthlySdtPage extends GlobalPage {

    private static final String URL = APP_HOST + "/monthly/sdt/";

    public MonthlySdtPage(WebDriver driver) {
        super(driver);
    }

    public void open() {
        driver.navigate().to(URL);
    }

    /*------------------------------------------------------------------------------------*/


    @FindBy(xpath = "//*[text()[contains(.,'Count')]]")
    private WebElement countBlock;

    @FindBy(xpath = "//*[text()[contains(.,'Email')]]")
    private WebElement emailBlock;

    @FindBy(xpath = "//*[text()[contains(.,'Name')]]")
    private WebElement nameBlock;

    @FindBy(xpath = "//*[text()[contains(.,'Create_date')]]")
    private WebElement createDateBlock;

    @FindBy(xpath = "//*[text()[contains(.,'actions')]]")
    private WebElement actionsBlock;

    @FindBy(xpath = "//a[text()[contains(.,'show')]]")
    private WebElement showLink;

    /*------------------------------------------------------------------------------------*/

    public boolean isBlockAppeared(String blockName) {
        boolean isBlockAppeared;
        switch (blockName) {
            case "Count":
                isBlockAppeared = countBlock.isDisplayed();
                assertEquals(countBlock.getText(), "Count");
                break;
            case "Email":
                isBlockAppeared = emailBlock.isDisplayed();
                assertEquals(emailBlock.getText(), "Email");
                break;
            case "Name":
                isBlockAppeared = nameBlock.isDisplayed();
                assertEquals(nameBlock.getText(), "Name");
                break;
            case "Create_date":
                isBlockAppeared = createDateBlock.isDisplayed();
                assertEquals(createDateBlock.getText(), "Create_date");
                break;
            case "actions":
                isBlockAppeared = actionsBlock.isDisplayed();
                assertEquals(actionsBlock.getText(), "actions");
                break;
            default:
                isBlockAppeared = false;
        }
        return isBlockAppeared;
    }

    public void clickShowLink() {
        assertEquals(showLink.getText(), "show");
        showLink.click();
    }

}