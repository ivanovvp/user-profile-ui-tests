package app.driver;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.openqa.selenium.*;
import org.openqa.selenium.support.events.EventFiringWebDriver;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.ArrayList;
import java.util.Set;

import static java.lang.System.*;

public class SharedDriver extends EventFiringWebDriver {
    public static final long TIMEOUT_VALUE = 10;
    private static WebDriver driver = DriverFactory.create(System.getProperty("browser").toUpperCase());
    private static final Thread CLOSE_THREAD = new Thread(() -> driver.quit());
    private Logger logger = LoggerFactory.getLogger(SharedDriver.class);

    static {
        Runtime.getRuntime().addShutdownHook(CLOSE_THREAD);
    }

    public SharedDriver() {
        super(driver);
    }

    @Override
    public void close() {
        if (Thread.currentThread() != CLOSE_THREAD) {
            throw new UnsupportedOperationException("You shouldn't close this WebDriver. It's shared and will close when the JVM exits.");
        }
        super.close();
    }

    @Before
    public void deleteAllCookies() {
        logger.info("\n----------------------------------------------------------------------------------");
        int cookiesCount = 1;
        long endTime = currentTimeMillis() + 10000;
        while (currentTimeMillis() < endTime && !(cookiesCount == 0)) {
            manage().deleteAllCookies();
            Set<Cookie> cookies = manage().getCookies();
            cookiesCount = cookies.size();
            logger.info("Time left: " + (currentTimeMillis() < endTime));
            logger.info("Cookies: " + !(cookiesCount == 0));
        }
        get("about:blank");
    }

    @After
    public void tearDown(Scenario scenario) {
        logger.info("Scenario: '" + scenario.getName() + "' is: " + scenario.getStatus());
        logger.info("\n----------------------------------------------------------------------------------");
        if (scenario.isFailed()) {
            makeScreenshot(scenario);
        }
        closingExtraTabs();
    }

    private void makeScreenshot(Scenario scenario) {
        try {
            scenario.write("Current URL is " + driver.getCurrentUrl());
            byte[] screenshot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);
            scenario.embed(screenshot, "image/png");
        } catch (WebDriverException somePlatformsDontSupportScreenshots) {
            err.println(somePlatformsDontSupportScreenshots.getMessage());
        }
    }

    private void closingExtraTabs() {
        ArrayList<String> tabs = new ArrayList<>(driver.getWindowHandles());

        if (tabs.size() > 1) {
            for (int i = 1; i < tabs.size(); i++) {
                driver.switchTo().window(tabs.get(i));
                driver.close();
            }
            driver.switchTo().window(tabs.get(0));
            driver.switchTo().defaultContent();
        }
    }
}
