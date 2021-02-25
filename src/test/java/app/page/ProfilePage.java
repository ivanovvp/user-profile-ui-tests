package app.page;


import junit.framework.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.util.List;

import static junit.framework.Assert.assertEquals;

public class ProfilePage extends GlobalPage {

    public static final String URL = APP_HOST + "/profile";

    public ProfilePage(WebDriver driver) {
        super(driver);
    }

    public void open() {
        driver.navigate().to(URL);
    }

    /*------------------------------------------------------------------------------------*/

    @FindBy(xpath = "//h1[text()[contains(.,'Menu')]]")
    private WebElement menuHeader;

    @FindBy(xpath = "//h1[text()[contains(.,'Status')]]")
    private WebElement statusHeader;

    @FindBy(xpath = "//h1[text()[contains(.,'Information')]]")
    private WebElement informationHeader;

    @FindBy(xpath = "//h1[text()[contains(.,'Vacancy index')]]")
    private WebElement vacancyIndexHeader;

    @FindBy(xpath = "//h1[text()[contains(.,'Create new Vacancy')]]")
    private WebElement createNewVacancy;

    @FindBy(xpath = "//h1[text()[contains(.,'Candidate')]]")
    private WebElement candidateHeader;

    @FindBy(xpath = "//h1[text()[contains(.,'Edit Candidate')]]")
    private WebElement editCandidateHeader;

    @FindBy(xpath = "//h1[text()[contains(.,'Candidate index')]]")
    private WebElement candidateIndexHeader;

    @FindBy(xpath = "//h1[text()[contains(.,'Candidate Skills')]]")
    private WebElement candidateSkillsHeader;

    @FindBy(xpath = "//h1[text()[contains(.,'Vacancy')]]")
    private WebElement vacancyHeader;

    @FindBy(xpath = "//*[contains(@class, 'h3 mb-4 font-weight-normal') and text() = 'Email account creation']")
    private WebElement emeilHeader;

    @FindBy(xpath = "//h1[text()[contains(.,'MonthlySdt index')]]")
    private WebElement monthlySdtIndexHeader;

    @FindBy(xpath = "//*[contains(@class, 'row')]//h3[text()[contains(.,'Status')]]")
    private WebElement statusBlock;

    @FindBy(xpath = "//*[contains(@class, 'row')]//h3[text()[contains(.,'Information')]]")
    private WebElement informationBlock;

    @FindBy(xpath = "//*[contains(@class, 'card-title')][text()[contains(.,'SDT - Current')]]")
    private WebElement cardTitleSdtCurrent;

    @FindBy(xpath = "//*[contains(@class, 'card-title')][text()[contains(.,'SDT - Future')]]")
    private WebElement cardTitleSdtFuture;

    @FindBy(xpath = "//*[contains(@class, 'card-text')][text()[contains(.,'SDT left: ')]]")
    private WebElement cardTextSdtLeft;

    @FindBy(xpath = "//*[contains(@class, 'card-text')][text()[contains(.,'SDT used: ')]]")
    private WebElement cardTextSdtUsed;

    @FindBy(xpath = "//*[contains(@class, 'card-text')][text()[contains(.,'SDT at own expense: ')]]")
    private WebElement cardTextSdtAtOwnExpense;

    @FindBy(xpath = "//*[contains(@class, 'card-title') and text() = 'Working Hours information']")
    private WebElement workingHoursTitle;

    @FindBy(xpath = "//*[contains(@class, 'card-text') and text() = 'Начислено часов: ']//span[contains(@class, 'badge badge-info')]")
    private WebElement hoursValue;

    @FindBy(xpath = "//*[contains(@class, 'card-text') and text() = 'Требуется часов: ']//span[contains(@class, 'badge badge-info')]")
    private WebElement hoursRequiredValue;

    @FindBy(xpath = "//*[contains(@class, 'card-title') and text() = 'SDT Request']")
    private WebElement sdtRequestTitle;

    @FindBy(xpath = "//*[contains(@class, 'card-title') and text() = 'Documentation']")
    private WebElement documentationTitle;

    @FindBy(xpath = "//*[contains(@class, 'card-link') and text() = 'Make request']")
    private WebElement makeRequestLink;

    @FindBy(xpath = "//*[contains(@class, 'card-link') and text() = 'Details']")
    private WebElement detailsLink;

    @FindBy(xpath = "//*[contains(@class, 'navbar-brand col-sm-3 col-md-2 mr-0') and text() = 'Nexteum']")
    private WebElement nexteumButton;

    /*------------------------------------------------------------------------------------*/

    public boolean isBlockAvailable(String blockName) {
        boolean isAvailable;
        switch (blockName) {
            case "Menu":
                isAvailable = menuHeader.isDisplayed();
                assertEquals(menuHeader.getText(), "Menu:");
                break;
            case "Status":
                isAvailable = statusHeader.isDisplayed();
                assertEquals(statusHeader.getText(), "Status");
                break;
            case "Information":
                isAvailable = informationHeader.isDisplayed();
                assertEquals(informationHeader.getText(), "Information");
                break;
            case "Vacancy index":
                isAvailable = vacancyIndexHeader.isDisplayed();
                assertEquals(vacancyIndexHeader.getText(), "Vacancy index");
                break;
            case "Create new Vacancy":
                isAvailable = createNewVacancy.isDisplayed();
                assertEquals(createNewVacancy.getText(), "Create new Vacancy");
                break;
            case "Candidate":
                isAvailable = candidateHeader.isDisplayed();
                assertEquals(candidateHeader.getText(), "Candidate");
                break;
            case "Edit Candidate":
                isAvailable = editCandidateHeader.isDisplayed();
                assertEquals(editCandidateHeader.getText(), "Edit Candidate");
                break;
            case "Candidate Index":
                isAvailable = candidateIndexHeader.isDisplayed();
                assertEquals(candidateIndexHeader.getText(), "Candidate index");
                break;
            case "Candidate Skills":
                isAvailable = candidateSkillsHeader.isDisplayed();
                assertEquals(candidateSkillsHeader.getText(), "Candidate Skills");
                break;
            case "Vacancy":
                isAvailable = vacancyHeader.isDisplayed();
                assertEquals(vacancyHeader.getText(), "Vacancy");
                break;
            case "Status Block":
                isAvailable = statusBlock.isDisplayed();
                assertEquals(statusBlock.getText(), "Status:");
                break;
            case "Information Block":
                isAvailable = informationBlock.isDisplayed();
                assertEquals(informationBlock.getText(), "Information:");
                break;
            case "SDT - Current":
                isAvailable = cardTitleSdtCurrent.isDisplayed();
                break;
            case "SDT - Future":
                isAvailable = cardTitleSdtFuture.isDisplayed();
                break;
            case "SDT left":
                isAvailable = cardTextSdtLeft.isDisplayed();
                break;
            case "SDT used":
                isAvailable = cardTextSdtUsed.isDisplayed();
                break;
            case "SDT at own expense":
                isAvailable = cardTextSdtAtOwnExpense.isDisplayed();
                break;
            case "Working Hours information Card":
                isAvailable = workingHoursTitle.isDisplayed();
                assertEquals(workingHoursTitle.getText(), "Working Hours information");
                break;
            case "SDT Request Card":
                isAvailable = sdtRequestTitle.isDisplayed();
                assertEquals(sdtRequestTitle.getText(), "SDT Request");
                break;
            case "Documentation Card":
                isAvailable = documentationTitle.isDisplayed();
                assertEquals(documentationTitle.getText(), "Documentation");
                break;
            case "Начислено часов:":
                isAvailable = hoursValue.isDisplayed();
                break;
            case "Требуется часов:":
                isAvailable = hoursRequiredValue.isDisplayed();
                break;
            case "Email account creation":
                isAvailable = emeilHeader.isDisplayed();
                assertEquals(emeilHeader.getText(), "Email account creation");
                break;
            case "MonthlySdt index":
                isAvailable = monthlySdtIndexHeader.isDisplayed();
                assertEquals(monthlySdtIndexHeader.getText(), "MonthlySdt index");
                break;
            default:
                isAvailable = false;
        }
        return isAvailable;
    }

    public void clickBackPage() {
        driver.navigate().back();
    }

    public void clickMakeRequestLink() {
        assertEquals(makeRequestLink.getText(), "Make request");
        makeRequestLink.click();
    }

    public void clickDetailsLink() {
        assertEquals(detailsLink.getText(), "Details");
        detailsLink.click();
    }

    public void isAppearedNexteumButton() {
        nexteumButton.isDisplayed();
    }

    public void checkHoursRequired() {
        List<WebElement> links = driver
                .findElements(By.xpath("//*[contains(@class, 'card-text') and text() = 'Требуется часов: ']//span[contains(@class, 'badge badge-info')]"));
        for (WebElement table : links) {
            String amount = table.getText();
            try {
                int i = Integer.parseInt(amount.trim());
                System.out.println("int i = " + i);
                if (i == 0) {
                    Assert.fail();
                }
            } catch (NumberFormatException nfe) {
                System.out.println("NumberFormatException: " + nfe.getMessage());
            }
        }
    }

}