package app.page;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import org.openqa.selenium.By;

import java.util.List;

import static junit.framework.Assert.assertEquals;


public class SDTEmailAssigneePage extends GlobalPage {

    private static final String URL = APP_HOST + "/sdt/email/assignee/229";

    public SDTEmailAssigneePage(WebDriver driver) {
        super(driver);
    }

    public void open() {
        driver.navigate().to(URL);
    }

    /*------------------------------------------------------------------------------------*/

    public void isAssertTable() {
        List<WebElement> links = driver.findElements(By.xpath("//*[contains(@class, 'table')]"));
        for (WebElement table : links) {
            table.getText();
            assertEquals(table.getText(), "Id Email actions\n" +
                    "1114 timerecords@onyx.com edit\n" +
                    "1115 team.programmers@onyx.com edit\n" +
                    "1116 valeriya.po@onyx.com edit\n" +
                    "1117 dmitriy.la@onyx.com edit\n" +
                    "1118 vitaliy.ko@onyx.com edit");
        }
    }

}