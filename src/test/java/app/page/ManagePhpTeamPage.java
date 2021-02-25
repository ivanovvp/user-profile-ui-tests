package app.page;


import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import java.util.List;

import static junit.framework.Assert.assertEquals;


public class ManagePhpTeamPage extends GlobalPage {

    private static final String URL = APP_HOST + "/php/manager";

    public ManagePhpTeamPage(WebDriver driver) {
        super(driver);
    }

    public void open() {
        driver.navigate().to(URL);
    }

    public void checkNameTable() {
        List<WebElement> links = driver.findElements(By.xpath("//*[@class='container']//div[@class='col-10']/table[1]/thead"));
        for (WebElement table : links) {
            assertEquals(table.getText().toLowerCase(), "user name current level test info make rise contract termination");
        }
    }

}