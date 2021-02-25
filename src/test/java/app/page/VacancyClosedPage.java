package app.page;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import static org.testng.Assert.fail;

import java.util.List;

public class VacancyClosedPage extends GlobalPage {

    private static final String URL = APP_HOST + "/vacancy/recruiter/candidates/134";

    public VacancyClosedPage(WebDriver driver) {
        super(driver);
    }

    public void open() {
        driver.navigate().to(URL);
    }

    /*------------------------------------------------------------------------------------*/

    @FindBy(xpath = "//tr[*]/th[*]/*[text()[contains(.,'View candidate History')]]")
    private WebElement candidateHistoryButton;

    @FindBy(xpath = "//*[@class = 'btn btn-primary'][text()[contains(.,'View request info')]]")
    private WebElement viewRequestInfoButton;

    @FindBy(xpath = "//th[text()[contains(.,'Request#')]]")
    private WebElement requestTableHeader;

    @FindBy(xpath = "//th[text()[contains(.,'Created')]]")
    private WebElement createdTableHeader;

    @FindBy(xpath = "//th[text()[contains(.,'By')]]")
    private WebElement byTableHeader;

    @FindBy(xpath = "//*[@href = '/candidate/8356?vacancy=134']")
    private WebElement candidateEmployedLink;

    @FindBy(xpath = "//*[text()[contains(.,'Candidate Status: Employed ')]]")
    private WebElement statusEmployed;

    @FindBy(xpath = "//a[contains(@href, '/vacancy/recruiter/candidates/134') and text() = 'Back to candidates list']")
    private WebElement backToCandidatesListButton;

    @FindBy(xpath = "//*[contains(@class, 'border border-success px-2 py-2') and text() = 'Employed']")
    private WebElement blockEmployed;


    /*------------------------------------------------------------------------------------*/

    public boolean isBlockAppeared(String name) {
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
            case "Candidate Status: Employed":
                isAvailable = statusEmployed.isDisplayed();
                break;
            case "Employed":
                isAvailable = blockEmployed.isDisplayed();
                break;
            default:
                isAvailable = false;
        }
        return isAvailable;
    }

    public void clickViewHistoryButton() {
        candidateHistoryButton.click();
    }

    public void clickViewRequestInfoButton() {
        viewRequestInfoButton.click();
    }

    public void clickBack() {
        driver.navigate().back();
    }

    public void clickCandidateEmployedLink() {
        candidateEmployedLink.click();
    }

    public void clickBackToCandidatesListButton() {
        backToCandidatesListButton.click();
    }

    public void checkCentralStatusVacancy() {
        List<WebElement> centralStatus = driver.findElements(By.xpath("//*[@class='alert alert-danger text-center']"));
        for (WebElement central : centralStatus) {
            central.getText();
            boolean status = central.getText().toLowerCase().contains("status: closed");
            if (status) {
                System.out.println();
                System.out.println("<<<<---------------- Status: TRUE ---------------->>>>");
            } else {
                System.out.println();
                System.out.println("<<<<---------------- Status: FAIL ---------------->>>>");
                fail();
            }
        }
    }

    /*------------------- 1 - Status: Employed -----------------*/
    public void checkStatusEmployed() {
        List<WebElement> candidate = driver.findElements(By.xpath("//table[@id='menu']/tbody/tr[1]"));
        List<WebElement> button = driver.findElements(By.xpath("//table[@id='menu']/tbody/tr[2]"));
        for (WebElement table : candidate) {
            table.getText();
            boolean status = table.getText().toLowerCase().contains("employed");
            for (WebElement buttons : button) {
                buttons.getText();
                boolean butt = buttons.getText().toLowerCase().contains("view candidate history");
                if (status && butt) {
                    System.out.println();
                    System.out.println("<<<<---- THE BUTTON CORRESPONDS TO THE STATUS ---->>>>");
                } else {
                    System.out.println();
                    System.out.println("<<<<---- THE BUTTON IS NOT CORRESPONDS TO THE STATUS ---->>>>");
                    fail();
                }
            }
        }
    }
}