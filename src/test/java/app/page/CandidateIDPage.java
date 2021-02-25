package app.page;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import static junit.framework.Assert.assertEquals;


public class CandidateIDPage extends GlobalPage {

    private static final String URL = APP_HOST + "/candidate/8158";

    public CandidateIDPage(WebDriver driver) {
        super(driver);
    }

    public void open() {
        driver.navigate().to(URL);
    }

    /*------------------------------------------------------------------------------------*/

    @FindBy(xpath = "//*[contains(@class, 'btn btn-secondary') and text() = 'edit']")
    private WebElement editCandidateButton;

    @FindBy(xpath = "//*[contains(@class, 'btn btn-info') and text() = 'back to list']")
    private WebElement backToList;

    @FindBy(xpath = "//div[text()[contains(.,'Candidate Status: CV Received')]]")
    private WebElement candidateStatus;

    /*------------------------------------------------------------------------------------*/

    public boolean isButtonAvailable(String buttonName) {
        boolean isAvailable;
        switch (buttonName) {
            case "Edit Button":
                isAvailable = editCandidateButton.isDisplayed();
                assertEquals(editCandidateButton.getText(), "edit");
                break;
            case "back to list":
                isAvailable = backToList.isDisplayed();
                assertEquals(backToList.getText(), "back to list");
                break;
            case "Candidate Status":
                isAvailable = candidateStatus.isDisplayed();
                assertEquals(candidateStatus.getText(), "Candidate Status: CV Received");
                break;
            default:
                isAvailable = false;
        }
        return isAvailable;
    }

    public void clickEditButton() {
        editCandidateButton.click();
    }

    public void clickBackToListButton() {
        backToList.click();
    }

    public void clickPageBack() {
        driver.navigate().back();
    }

}