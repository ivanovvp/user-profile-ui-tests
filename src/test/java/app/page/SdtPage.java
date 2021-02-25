package app.page;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import static junit.framework.Assert.assertEquals;


public class SdtPage extends GlobalPage {

    private static final String URL = APP_HOST + "/sdt";

    public SdtPage(WebDriver driver) {
        super(driver);
    }

    public void open() {
        driver.navigate().to(URL);
    }

    /*------------------------------------------------------------------------------------*/

    @FindBy(id = "calendar")
    private WebElement calendarBlock;

    @FindBy(xpath = "//*[contains(@class, 'btn btn-primary') and text() = 'Create new']")
    private WebElement createNewButton;

    @FindBy(xpath = "//*[contains(@class, 'btn btn-primary') and text() = 'View All']")
    private WebElement viewAllButton;

    @FindBy(xpath = "//*[contains(@class, 'btn btn-primary') and text() = 'Hide']")
    private WebElement hideButton;

    @FindBy(xpath = "//*[contains(@class, 'fc-today-button fc-button fc-state-default fc-corner-left fc-corner-right') and text() = 'today']")
    private WebElement todayButton;

    @FindBy(xpath = "//*[contains(@class, 'fc-prev-button fc-button fc-state-default fc-corner-left')]")
    private WebElement prevButton;

    @FindBy(xpath = "//*[contains(@class, 'fc-next-button fc-button fc-state-default fc-corner-right')]")
    private WebElement nextButton;

    @FindBy(xpath = "//h5[text()[contains(.,'SDT left:')]]")
    private WebElement sdtLeft;

    /*------------------------------------------------------------------------------------*/

    public boolean isBlockAppearedCalendar(String blockName) {
        boolean isBlockAppearedCalendar;
        switch (blockName) {
            case "Calendar":
                isBlockAppearedCalendar = calendarBlock.isDisplayed();
                break;
            case "SDT left":
                isBlockAppearedCalendar = sdtLeft.isDisplayed();
                break;
                 default:
                   isBlockAppearedCalendar = false;
        }
        return isBlockAppearedCalendar;
    }

    public boolean isButtonAppeared(String buttonName) {
        boolean isButtonAppeared;
        switch (buttonName) {
            case "Create new":
                isButtonAppeared = createNewButton.isDisplayed();
                assertEquals(createNewButton.getText(), "Create new");
                break;
            case "View All":
                isButtonAppeared = viewAllButton.isDisplayed();
                assertEquals(viewAllButton.getText(), "View All");
                break;
            case "Hide":
                isButtonAppeared = hideButton.isDisplayed();
                assertEquals(hideButton.getText(), "Hide");
                break;
            case "Today":
                isButtonAppeared = todayButton.isDisplayed();
                assertEquals(todayButton.getText(), "today");
                break;
            case "Prev":
                isButtonAppeared = prevButton.isDisplayed();
                break;
            case "Next":
                isButtonAppeared = nextButton.isDisplayed();
                break;

            default:
                isButtonAppeared = false;
        }
        return isButtonAppeared;
    }

    public void clickPrevInButton() {
        prevButton.click();
    }

    public void clickTodayButton() {
        todayButton.click();
    }

    public void clickNextButton() {
        nextButton.click();
    }

    public void clickViewAllButton() {
        viewAllButton.click();
    }

    public void clickHideButton() {
        hideButton.click();
    }

    public void clickCreateButton() {
        createNewButton.click();
    }

}