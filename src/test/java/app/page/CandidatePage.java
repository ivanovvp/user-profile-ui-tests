package app.page;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import static junit.framework.Assert.assertEquals;

public class CandidatePage extends GlobalPage {

    private static final String URL = APP_HOST + "/candidate";

    public CandidatePage(WebDriver driver) {
        super(driver);
    }

    public void open() {
        driver.navigate().to(URL);
    }

    /*------------------------------------------------------------------------------------*/

    @FindBy(xpath = "//*[@href = '/candidate/?page=2' and text() = '2']")
    private WebElement pagination2;

    @FindBy(xpath = "//*[@href = '/candidate/?page=3' and text() = '3']")
    private WebElement pagination3;

    @FindBy(xpath = "//*[contains(@class, 'page-link') and text() = 'First']")
    private WebElement paginationFirst;

    @FindBy(xpath = "//*[contains(@class, 'page-link') and text() = 'Last']")
    private WebElement paginationLast;

    @FindBy(xpath = "//h3[text()[contains (.,'Search')]]")
    private WebElement searchHeader;

    @FindBy(id = "search_by_location_location")
    private WebElement locationSearch;

    @FindBy(id = "search_by_applying_position_position")
    private WebElement applyingSearch;

    @FindBy(id = "search_by_skill_skill")
    private WebElement skillSearch;

    @FindBy(id = "search_by_full_name_fullname")
    private WebElement nameSearch;

    @FindBy(id = "set_location")
    private WebElement locationSetButton;

    @FindBy(id = "unset_location")
    private WebElement locationUnsetButton;

    @FindBy(id = "set_position")
    private WebElement applyingSetButton;

    @FindBy(id = "unset_position")
    private WebElement applyingUnsetButton;

    @FindBy(id = "set_skill")
    private WebElement skillSetButton;

    @FindBy(id = "unset_skill")
    private WebElement skillUnsetButton;

    @FindBy(id = "set_fullname")
    private WebElement nameSetButton;

    @FindBy(id = "unset_fullname")
    private WebElement nameUnsetButton;

    @FindBy(xpath = "//a[@class = 'btn btn-info text-white'][text()[contains(.,'Clear filters')]]")
    private WebElement clearFilterButton;

    @FindBy(xpath = "//*[@class='container']//a[@href='/candidate/new']")
    private WebElement createnewButton;

    @FindBy(xpath = "//*[text()[contains(.,'Photo')]]")
    private WebElement photoTHead;

    @FindBy(xpath = "//th[text()[contains(.,'Name')]]")
    private WebElement nameTHead;

    @FindBy(xpath = "//*[text()[contains(.,'Surname')]]")
    private WebElement surnameTHead;

    @FindBy(xpath = "//*[text()[contains(.,'Applying position')]]")
    private WebElement applyingTHead;

    @FindBy(xpath = "//*[text()[contains(.,'Location')]]")
    private WebElement locationTHead;

    @FindBy(xpath = "//*[text()[contains(.,'Phone')]]")
    private WebElement phoneTHead;

    /*------------------------------------------------------------------------------------*/

    public boolean isTHeadAvailable(String blockName) {
        boolean isAvailable;
        switch (blockName) {
            case "Search":
                isAvailable = searchHeader.isDisplayed();
                assertEquals(searchHeader.getText(), "Search:");
                break;
            case "Photo":
                isAvailable = photoTHead.isDisplayed();
                assertEquals(photoTHead.getText(), "Photo");
                break;
            case "Name":
                isAvailable = nameTHead.isDisplayed();
                assertEquals(nameTHead.getText(), "Name");
                break;
            case "Surname":
                isAvailable = surnameTHead.isDisplayed();
                assertEquals(surnameTHead.getText(), "Surname");
                break;
            case "Applying position":
                isAvailable = applyingTHead.isDisplayed();
                assertEquals(applyingTHead.getText(), "Applying position");
                break;
            case "Location":
                isAvailable = locationTHead.isDisplayed();
                assertEquals(locationTHead.getText(), "Location");
                break;
            case "Phone":
                isAvailable = phoneTHead.isDisplayed();
                assertEquals(phoneTHead.getText(), "Phone");
                break;
            default:
                isAvailable = false;
        }
        return isAvailable;
    }

    public void clickPaginationPage2() {
        pagination2.click();
    }

    public void clickPaginationPage3() {
        pagination3.click();
    }

    public void clickPaginationPageFirst() {
        paginationFirst.click();
    }

    public void clickPaginationPageLast() {
        paginationLast.click();
    }

    public void setInputLocationField(String text) {
        locationSearch.clear();
        locationSearch.sendKeys(text);
    }

    public void setInputApplyingField(String text) {
        applyingSearch.clear();
        applyingSearch.sendKeys(text);
    }

    public void setInputSkillField(String text) {
        skillSearch.clear();
        skillSearch.sendKeys(text);
    }

    public void setInputNameField(String text) {
        nameSearch.clear();
        nameSearch.sendKeys(text);
    }

    public void clickLocationSetButton() {
        assertEquals(locationSetButton.getText(), "Set");
        locationSetButton.click();
    }

    public void clickLocationUnsetButton() {
        assertEquals(locationUnsetButton.getText(), "Unset");
        locationUnsetButton.click();
    }

    public void clickApplyingSetButton() {
        assertEquals(applyingSetButton.getText(), "Set");
        applyingSetButton.click();
    }

    public void clickApplyingUnsetButton() {
        assertEquals(applyingUnsetButton.getText(), "Unset");
        applyingUnsetButton.click();
    }

    public void clickSkillAddButton() {
        assertEquals(skillSetButton.getText(), "Set");
        skillSetButton.click();
    }

    public void clickSkillUnsetButton() {
        assertEquals(skillUnsetButton.getText(), "Unset");
        skillUnsetButton.click();
    }

    public void clickNameSetButton() {
        assertEquals(nameSetButton.getText(), "Set");
        nameSetButton.click();
    }

    public void clickNameUnsetButton() {
        assertEquals(nameUnsetButton.getText(), "Unset");
        nameUnsetButton.click();
    }

    public void clickClearFiltersButton() {
        assertEquals(clearFilterButton.getText(), "Clear filters");
        clearFilterButton.click();
    }

    public void clickCreatenewButton() {
        assertEquals(createnewButton.getText(), "Create new");
        createnewButton.click();
    }

}