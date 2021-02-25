package app.page;

import app.driver.SharedDriver;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.WebDriverWait;

class GlobalPage {

    static final String APP_HOST = "https://user-profile.devzone.net";

    final WebDriver driver;

    private final WebDriverWait wait;

    GlobalPage(WebDriver driver) {
        this.driver = driver;
        wait = new WebDriverWait(driver, SharedDriver.TIMEOUT_VALUE);
    }

    public WebDriverWait getWait() {
        return wait;
    }
}
