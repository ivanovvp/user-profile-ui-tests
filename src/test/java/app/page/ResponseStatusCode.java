package app.page;

import com.google.common.base.CharMatcher;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import java.util.List;

import static org.testng.Assert.fail;


public class ResponseStatusCode extends GlobalPage {

    public ResponseStatusCode(WebDriver driver) {
        super(driver);
    }

    public void printStatusCode() {
        List<WebElement> header = driver.findElements(By.xpath("//*[@class='container']//h1"));
        for (WebElement h1 : header) {
            boolean isText = h1.getText().contains("Oops! An Error Occurred");
            if (isText) {
                List<WebElement> text = driver.findElements(By.xpath("//*[@class='container']//h2"));
                for (WebElement texts : text){
                    String amount = texts.getText();
                    String digits = CharMatcher.inRange('0', '9').retainFrom(amount);
                    int statusCode = Integer.parseInt(digits.trim());
                    fail(" \n" +
                            "<<<<------ " + driver.getCurrentUrl() + " ------>>>> \n" +
                            "<<<<------ ПЕЧАЛЬКА КОД: " + statusCode + " ------>>>> \n" +
                            "⣿⣿⣿⣿⣿⣿⣿⣿⠿⠛⠛⢛⣉⣩⣤⣬⣉⣉⣉⠛⠛⠿⣿⣿⣿⣿⣿⣿⣿⣿ \n" +
                            "⣿⣿⣿⣿⣿⠿⠋⣀⣴⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣦⣈⠻⢿⣿⣿⣿⣿⣿ \n" +
                            "⣿⣿⣿⠟⢁⣴⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣦⡙⠿⣿⣿⣿ \n" +
                            "⣿⣿⠏⢠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⠙⢻⣷⡆⠹⣿⣿ \n" +
                            "⣿⡇⢠⣿⣿⣿⣿⣿⣿⡟⠋⠛⢻⣿⣿⣿⣿⣿⣿⣿⣿⣷⣄⣀⣴⣿⣿⡄⢹⣿ \n" +
                            "⡟⢀⣿⣿⣿⣿⣿⣿⣿⣧⣀⣤⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄⢻ \n" +
                            "⠁⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⠟⢛⣋⣉⣉⣉⠙⢿⣿⣿⣿⣿⣿⡇⢸ \n" +
                            "⡄⢸⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⣡⣴⣶⣿⣿⣿⣿⣿⣿⣧⠄⢿⣿⣿⣿⣿⡇⢸ \n" +
                            "⣇⠈⣿⣿⣿⣿⣿⣿⣿⡟⠁⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡆⢸⣿⣿⣿⣿⠃⣼ \n" +
                            "⣿⣆⠘⣿⣿⣿⣿⣿⣿⡇⣴⣤⣤⣬⣉⡛⠻⣿⣿⣿⣿⣿⡇⢸⣿⣿⣿⠃⢸⣿ \n" +
                            "⣿⣿⣆⠘⢿⣿⣿⣿⣿⢀⣿⣿⣿⣿⣿⠿⠷⠌⠛⢛⣋⣉⣁⣸⣿⡿⠋⣠⣿⣿ \n" +
                            "⣿⣿⣿⣶⡈⠙⢿⣿⣟⣈⣉⣩⣥⣤⣶⣶⣶⣾⣿⣿⣿⣿⣿⡿⠟⢁⣾⣿⣿⣿ \n" +
                            "⣿⣿⣿⣿⣿⣶⣄⠉⠛⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠋⣉⣤⣶⣿⣿⣿⣿⣿ \n" +
                            "⣿⣿⣿⣿⣿⣿⣿⣿⣷⣦⣤⣈⡉⠉⠛⣋⣉⣉⣤⣤⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿ \n" +
                            "<<<<------ ПЕЧАЛЬКА КОД: " + statusCode + " ------>>>>");

                }
            }
        }
    }

}