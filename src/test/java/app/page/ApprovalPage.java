package app.page;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import static junit.framework.Assert.assertEquals;

public class ApprovalPage extends GlobalPage {

    private static final String URL = APP_HOST + "/vacancy/recruiter/approved/interview/department-manager/8486?vacancy=111";

    public ApprovalPage(WebDriver driver) {
        super(driver);
    }

    public void open() {
        driver.navigate().to(URL);
    }

    /*------------------------------------------------------------------------------------*/

    @FindBy(xpath = "//*[contains(@class, 'btn btn-success') and text() = 'Approve candidate for interview']")
    private WebElement approveForInterview;

    @FindBy(xpath = "//*[contains(@class, 'btn btn-danger')][text()[contains(.,'Deny candidate for interview')]]")
    private WebElement denyForInterview;

    @FindBy(xpath = "//th[text()[contains(.,'Photo')]]")
    private WebElement photoTable;

    @FindBy(xpath = "//li/a/img[contains(@class, 'img-fluid')]")
    private WebElement imagePhoto;

    @FindBy(xpath = "//th[text()[contains(.,'Name')]]")
    private WebElement nameTable;

    @FindBy(xpath = "//th[text()[contains(.,'Surname')]]")
    private WebElement surnameTable;

    @FindBy(xpath = "//th[text()[contains(.,'Applying position')]]")
    private WebElement applyingPositionTable;

    @FindBy(xpath = "//th[text()[contains(.,'Location')]]")
    private WebElement locationTable;

    @FindBy(xpath = "//th[text()[contains(.,'Phone')]]")
    private WebElement phoneTable;

    @FindBy(xpath = "//th[text()[contains(.,'Request Status')]]")
    private WebElement requestStatusTable;

    @FindBy(xpath = "//th[text()[contains(.,'Candidate Status')]]")
    private WebElement candidateStatusTable;

    @FindBy(id = "candidate_link_denial_interview_denialInterview")
    private WebElement denialInterviewField;

    @FindBy(xpath = "//*[contains(@class, 'btn') and text() = 'Send']")
    private WebElement sendButton;

    /*------------------------------------------------------------------------------------*/

    public boolean isTableHeadAvailable(String blockName) {
        boolean isAvailable;
        switch (blockName) {
            case "Photo":
                isAvailable = photoTable.isDisplayed();
                assertEquals(photoTable.getText(), "Photo");
                break;
            case "Name":
                isAvailable = nameTable.isDisplayed();
                assertEquals(nameTable.getText(), "Name");
                break;
            case "Surname":
                isAvailable = surnameTable.isDisplayed();
                assertEquals(surnameTable.getText(), "Surname");
                break;
            case "Applying position":
                isAvailable = applyingPositionTable.isDisplayed();
                assertEquals(applyingPositionTable.getText(), "Applying position");
                break;
            case "Location":
                isAvailable = locationTable.isDisplayed();
                assertEquals(locationTable.getText(), "Location");
                break;
            case "Phone":
                isAvailable = phoneTable.isDisplayed();
                assertEquals(phoneTable.getText(), "Phone");
                break;
            case "Request Status":
                isAvailable = requestStatusTable.isDisplayed();
                assertEquals(requestStatusTable.getText(), "Request Status");
                break;
            case "Candidate Status":
                isAvailable = candidateStatusTable.isDisplayed();
                assertEquals(candidateStatusTable.getText(), "Candidate Status");
                break;
            case "Image Photo":
                isAvailable = imagePhoto.isDisplayed();
                break;
            default:
                isAvailable = false;
        }
        return isAvailable;
    }

    public boolean isButtonAvailable(String button) {
        boolean isAvailable;
        switch (button) {
            case "Approve candidate for interview":
                isAvailable = approveForInterview.isDisplayed();
                assertEquals(approveForInterview.getText(), "Approve candidate for interview");
                break;
            case "Deny candidate for interview":
                isAvailable = denyForInterview.isDisplayed();
                assertEquals(denyForInterview.getText(), "Deny candidate for interview");
                break;
            case "Send":
                isAvailable = sendButton.isDisplayed();
                break;
            default:isAvailable = false;
        }
        return isAvailable;
    }

    public void setInputDenialInterviewField(String text) {
        denialInterviewField.clear();
        denialInterviewField.sendKeys(text);
    }

    public void clickDenyForInterviewButton() {
        denyForInterview.click();
    }

    public void clickSendButton() {
        sendButton.click();
    }

}