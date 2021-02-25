package app.page;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.Select;


public class CreateNewUserPhpDeveloperLevelRelationPage extends GlobalPage {

    private static final String URL = APP_HOST + "/user/php/developer/level/relation/new/228";

    public CreateNewUserPhpDeveloperLevelRelationPage(WebDriver driver) {
        super(driver);
    }

    public void open() {
        driver.navigate().to(URL);
    }

    /*------------------------------------------------------------------------------------*/

    @FindBy(xpath = "//*[@href='/user/228'][text()[contains(.,'back to list')]]")
    private WebElement backToListButton;

    @FindBy(id = "user_php_developer_level_relation_phpDeveloperLevel")
    private WebElement phpDeveloperLevelDropDownList;

    /*------------------------------------------------------------------------------------*/

    public void setSelectPhpLevelField(String level) {
        Select phpDeveloperLevel_dd = new Select(phpDeveloperLevelDropDownList);
        phpDeveloperLevel_dd.selectByVisibleText(level);
    }

    public void clickBackToListButton() {
        backToListButton.click();
    }

}