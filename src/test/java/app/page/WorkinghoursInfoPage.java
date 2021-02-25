package app.page;

import junit.framework.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import java.util.List;

import static junit.framework.Assert.assertEquals;

public class WorkinghoursInfoPage extends GlobalPage {

    private static final String URL = APP_HOST + "/workinghours/info/224";

    public WorkinghoursInfoPage(WebDriver driver) {
        super(driver);
    }

    public void open() {
        driver.navigate().to(URL);
    }


    public void checkNameTable() {
        List<WebElement> links = driver.findElements(By.xpath("//*[@class='container']//div[@class='col-10']/table[1]/thead"));
        for (WebElement table : links) {
            System.out.println(table.getText().toLowerCase());
            assertEquals(table.getText().toLowerCase(), "report working days event personal issues logged time upworked hours");
        }
    }

    public void checkNameTableTotal() {
        List<WebElement> links = driver.findElements(By.xpath("//*[@class='container']//div[@class='col-10']/table[2]/thead"));
        for (WebElement table : links) {
            System.out.println(table.getText().toLowerCase());
            assertEquals(table.getText().toLowerCase(), "total information by this month (report time frame) sum of hours");
        }
    }

    public void checkNeedHoursThisMonth() {
        List<WebElement> links = driver.findElements(By.xpath("//*[@class='container']//div[@class='col-10']/table[2]/tbody/tr[2]/td"));
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