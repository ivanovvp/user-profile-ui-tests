package app.page;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import static org.testng.Assert.fail;

import java.util.List;


public class NewEmployeeOnboardingPage extends GlobalPage {

    private static final String URL = APP_HOST + "/vacancy/candidate/onboarding/8299?vacancy=111";

    public NewEmployeeOnboardingPage(WebDriver driver) {
        super(driver);
    }

    public void open() {
        driver.navigate().to(URL);
    }

    /*------------------------------------------------------------------------------------*/

    @FindBy(xpath = "//th[text()[contains(.,'Request#')]]")
    private WebElement requestTableHeader;

    @FindBy(xpath = "//th[text()[contains(.,'Created')]]")
    private WebElement createdTableHeader;

    @FindBy(xpath = "//th[text()[contains(.,'By')]]")
    private WebElement byTableHeader;

    @FindBy(xpath = "//*[@class='btn btn-success']")
    private WebElement doneButton;

    @FindBy(xpath = "//*[text()[contains(.,'Photo')]]")
    private WebElement photoField;

    @FindBy(xpath = "//*[text()[contains(.,'Name')]]")
    private WebElement nameField;

    @FindBy(xpath = "//*[text()[contains(.,'Surname')]]")
    private WebElement surnameField;

    @FindBy(xpath = "//*[text()[contains(.,'Applying position')]]")
    private WebElement applyingPositionField;

    @FindBy(xpath = "//*[text()[contains(.,'Location')]]")
    private WebElement locationField;

    @FindBy(xpath = "//*[text()[contains(.,'Phone')]]")
    private WebElement phoneField;

    @FindBy(xpath = "//*[text()[contains(.,'Request Status')]]")
    private WebElement requestStatusField;

    @FindBy(xpath = "//*[text()[contains(.,'Candidate Status')]]")
    private WebElement candidateStatusField;

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
            case "Photo":
                isAvailable = photoField.isDisplayed();
                break;
            case "Name":
                isAvailable = nameField.isDisplayed();
                break;
            case "Surname":
                isAvailable = surnameField.isDisplayed();
                break;
            case "Applying position":
                isAvailable = applyingPositionField.isDisplayed();
                break;
            case "Location":
                isAvailable = locationField.isDisplayed();
                break;
            case "Phone":
                isAvailable = phoneField.isDisplayed();
                break;
            case "Request Status":
                isAvailable = requestStatusField.isDisplayed();
                break;
            case "Candidate Status":
                isAvailable = candidateStatusField.isDisplayed();
                break;
            default:
                isAvailable = false;
        }
        return isAvailable;
    }

    public void checkStatusVacancy() {
        List<WebElement> centralStatus = driver.findElements(By.xpath("//*[@class='alert alert-secondary']"));
        for (WebElement central : centralStatus) {
            central.getText();
            boolean status1 = central.getText().toLowerCase().contains("status: search for a candidate(s) have been started");
            boolean status2 = central.getText().toLowerCase().contains("status: issue have been assigned ");
            boolean status3 = central.getText().toLowerCase().contains("status: approved");
            boolean status4 = central.getText().toLowerCase().contains("status: closed");
            if (status1) {
                System.out.println();
            } else if (status2) {
                System.out.println();
            } else if (status3) {
                System.out.println();
            } else if (status4) {
                System.out.println();
            } else {
                System.out.println();
                System.out.println("<<<<----- Status: FALSE ---->>>>");
                fail();
            }
        }
    }

    public void clickDoneButton() {
        doneButton.click();
    }

}