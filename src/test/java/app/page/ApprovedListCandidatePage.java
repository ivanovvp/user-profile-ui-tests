package app.page;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import static junit.framework.Assert.assertEquals;


public class ApprovedListCandidatePage extends GlobalPage {

    private static final String URL = APP_HOST + "/vacancy/recruiter/approved/interview/department-manager/list-candidates/111";

    public ApprovedListCandidatePage(WebDriver driver) {
        super(driver);
    }

    public void open() {
        driver.navigate().to(URL);
    }

    /*------------------------------------------------------------------------------------*/

    @FindBy(xpath = "//*[text()[contains(.,'All Candidates')]]")
    private WebElement allCandidatesHeader;

    @FindBy(xpath = "//div[text()[contains(.,'Approved')]]")
    private WebElement approvedButton;

    @FindBy(xpath = "//*[@class='btn btn-primary'][text()[contains(.,'Give feedback on the candidate')]]")
    private WebElement giveFeedBackOnTheCandidate;

    @FindBy(xpath = "//*[text()[contains(.,'Denied')]]")
    private WebElement deniedButton;

    /*------------------------------------------------------------------------------------*/

    public boolean isAppearedElement(String name) {
        boolean isAppeared;
        switch (name) {
            case "All Candidate":
                isAppeared = allCandidatesHeader.isDisplayed();
                assertEquals(allCandidatesHeader.getText(), "All Candidates for Request#111");
                break;
            case "Approved":
                isAppeared = approvedButton.isDisplayed();
                assertEquals(approvedButton.getText(), "Approved");
                break;
            case "Give feedback on the candidate":
                isAppeared = giveFeedBackOnTheCandidate.isDisplayed();
                assertEquals(giveFeedBackOnTheCandidate.getText(), "Give feedback on the candidate");
                break;
            case "Denied":
                isAppeared = deniedButton.isDisplayed();
                assertEquals(deniedButton.getText(), "Denied");
                break;
            default:
                isAppeared = false;
        }
        return isAppeared;
    }

    public void clickApprovedButton() {
        approvedButton.click();
    }

    public void clickGiveFeedBackOnTheCandidateButton() {
        giveFeedBackOnTheCandidate.click();
    }

    public void clickDeniedButton() {
        deniedButton.click();
    }

}