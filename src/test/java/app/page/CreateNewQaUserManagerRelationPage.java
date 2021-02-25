package app.page;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.Select;


public class CreateNewQaUserManagerRelationPage extends GlobalPage {

    private static final String URL = APP_HOST + "/qa/user/manager/relation/new/7";

    public CreateNewQaUserManagerRelationPage(WebDriver driver) {
        super(driver);
    }

    public void open() {
        driver.navigate().to(URL);
    }

    /*------------------------------------------------------------------------------------*/

    @FindBy(xpath = "//*[@href='/user/7'][text()[contains(.,'back to list')]]")
    private WebElement backToListButton;

    @FindBy(id = "qa_user_manager_relation_qaManager")
    private WebElement qaManagerDropDownList;

    /*------------------------------------------------------------------------------------*/

    public void setSelectQaManagerField(String manager) {
        Select phpDeveloperLevel_dd = new Select(qaManagerDropDownList);
        phpDeveloperLevel_dd.selectByVisibleText(manager);
    }

    public void clickBackToListButton() {
        backToListButton.click();
    }

}