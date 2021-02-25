package app.page;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class AddNewCandidateForVacancyPage extends GlobalPage {

    private static final String URL = APP_HOST + "/vacancy/recruiter/received/111";

    public AddNewCandidateForVacancyPage(WebDriver driver) {
        super(driver);
    }

    public void open() {
        driver.navigate().to(URL);
    }

    /*------------------------------------------------------------------------------------*/

    @FindBy(xpath = "//*[text()[contains(.,'CVs received from vacancy')]]")
    private WebElement fromVacancyButton;

    @FindBy(xpath = "//*[text()[contains(.,'CVs received from hunting')]]")
    private WebElement fromHuntingButton;

    @FindBy(xpath = "//*[text()[contains(.,'CVs received from recommendation')]]")
    private WebElement fromRecommendationButton;

    @FindBy(xpath = "//*[contains(@class, 'btn btn-success') and text() = 'Done']")
    private WebElement doneButton;

    @FindBy(xpath = "//th[text()[contains(.,'Request#')]]")
    private WebElement requestTableHeader;

    @FindBy(xpath = "//th[text()[contains(.,'Created')]]")
    private WebElement createdTableHeader;

    @FindBy(xpath = "//th[text()[contains(.,'By')]]")
    private WebElement byTableHeader;

    /*------------------------------------------------------------------------------------*/

    public boolean isTableHeaderAppeared(String name) {
        boolean isAvailable;
        switch (name) {
            case "Request":
                isAvailable = requestTableHeader.isDisplayed();
                break;
            case "Created":
                isAvailable = createdTableHeader.isDisplayed();
                break;
            case "By":
                isAvailable = byTableHeader.isDisplayed();
                break;
            default:
                isAvailable = false;
        }
        return isAvailable;
    }

    public void clickVacancyButton() {
        fromVacancyButton.click();
    }

    public void clickHuntingButton() {
        fromHuntingButton.click();
    }

    public void clickRecommendationButton() {
        fromRecommendationButton.click();
    }

    public void clickDoneButton() {
        doneButton.click();
    }

}