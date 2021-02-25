package app.page;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import static junit.framework.Assert.assertEquals;

public class InterviewPage extends GlobalPage {

    private static final String URL = APP_HOST + "/vacancy/candidate/after/interview/recruiter/8296?vacancy=111";

    public InterviewPage(WebDriver driver) {
        super(driver);
    }

    public void open() {
        driver.navigate().to(URL);
    }

    /*------------------------------------------------------------------------------------*/

    @FindBy(xpath = "//*[contains(@class, 'alert alert-warning')]")
    private WebElement statusAlert;

    @FindBy(xpath = "//*[contains(@class, 'btn btn-success') and text() = 'Candidate Accepted our offer']")
    private WebElement acceptedButton;

    @FindBy(xpath = "//*[contains(@class, 'btn btn-danger') and text() = 'Candidate did not accepted our offer']")
    private WebElement didNotAcceptedButton;

    @FindBy(xpath = "//*[text()[contains(.,'Back to candidates list')]]")
    private WebElement backToListButton;

    @FindBy(xpath = "//th[text()[contains(.,'Name')]]")
    private WebElement nameField;

    @FindBy(xpath = "//*[text()[contains(.,'Surname')]]")
    private WebElement surnameField;

    @FindBy(xpath = "//*[text()[contains(.,'Phone')]]")
    private WebElement phoneField;

    @FindBy(xpath = "//th[text()[contains(.,'Candidate Status')]]")
    private WebElement candidateStatusField;

    @FindBy(xpath = "//a[text()[contains(.,'Interview')]]")
    private WebElement interviewLink;

    @FindBy(xpath = "//th[text()[contains(.,'By')]]")
    private WebElement byField;

    @FindBy(xpath = "//th[text()[contains(.,'Created')]]")
    private WebElement createdField;

    @FindBy(xpath = "//th[text()[contains(.,'Request#')]]")
    private WebElement requestField;

    /*------------------------------------------------------------------------------------*/

    public boolean isAppearedTableFieldName(String blockName) {
        boolean isAvailable;
        switch (blockName) {
            case "Status Candidate":
                isAvailable = statusAlert.isDisplayed();
                break;
            case "Candidate Accepted our offer":
                isAvailable = acceptedButton.isDisplayed();
                assertEquals(acceptedButton.getText(), "Candidate Accepted our offer");
                break;
            case "Candidate did not Accepted our offer":
                isAvailable = didNotAcceptedButton.isDisplayed();
                assertEquals(didNotAcceptedButton.getText(), "Candidate did not accepted our offer");
                break;
            case "Back to candidates list":
                isAvailable = backToListButton.isDisplayed();
                assertEquals(backToListButton.getText(), "Back to candidates list");
                break;
            case "Name":
                isAvailable = nameField.isDisplayed();
                assertEquals(nameField.getText(), "Name");
                break;
            case "Surname":
                isAvailable = surnameField.isDisplayed();
                assertEquals(surnameField.getText(), "Surname");
                break;
            case "Phone":
                isAvailable = phoneField.isDisplayed();
                assertEquals(phoneField.getText(), "Phone");
                break;
            case "Candidate Status":
                isAvailable = candidateStatusField.isDisplayed();
                assertEquals(candidateStatusField.getText(), "Candidate Status");
                break;
            case "Interview":
                isAvailable = interviewLink.isDisplayed();
                assertEquals(interviewLink.getText(), "Interview");
                break;
            case "By":
                isAvailable = byField.isDisplayed();
                assertEquals(byField.getText(), "By");
                break;
            case "Created":
                isAvailable = createdField.isDisplayed();
                assertEquals(createdField.getText(), "Created");
                break;
            case "Request":
                isAvailable = requestField.isDisplayed();
                assertEquals(requestField.getText(), "Request#");
                break;
            default:
                isAvailable = false;
        }
        return isAvailable;
    }

    public void clickBackToCandidateListButton() {
        backToListButton.click();
    }

    public void clickDidNotAcceptedButton() {
        didNotAcceptedButton.click();
    }

}