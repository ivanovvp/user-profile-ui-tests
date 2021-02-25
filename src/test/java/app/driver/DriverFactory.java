package app.driver;

import org.openqa.selenium.Dimension;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;

import java.net.MalformedURLException;
import java.net.URI;
import java.util.concurrent.TimeUnit;

class DriverFactory {


    private static final String SELENOID_BACK_HOST = "C:\\Program Files (x86)\\chromedriver_win32";

    private DriverFactory() {
    }

    static WebDriver create(String browser) {
        WebDriver instance = null;

        switch (browser) {
            case "CHROME":
                instance = initWebDriver(new ChromeDriver());
                break;

            case "CHROMER":
                instance = initRemoteDriver("chrome");
                break;

            case "FIREFOX":
                instance = initWebDriver(new FirefoxDriver());
                break;

            case "FIREFOXR":
                instance = initRemoteDriver("firefox");
                break;

            case "IE":
                instance = initWebDriver(new InternetExplorerDriver());
                break;

            default:
                System.err.println("No browser specified");
        }

        return instance;
    }

    private static WebDriver initWebDriver(WebDriver driver) {
        driver.manage().timeouts().implicitlyWait(160, TimeUnit.SECONDS);
        driver.manage().window().maximize();
        return driver;
    }

    private static void setImplicitlyWait(WebDriver driver) {
        driver.manage().timeouts().implicitlyWait(SharedDriver.TIMEOUT_VALUE, TimeUnit.SECONDS);
    }

    private static RemoteWebDriver initRemoteDriver(String browser) {
        DesiredCapabilities capabilities = new DesiredCapabilities();

        capabilities.setBrowserName(browser);
        capabilities.setVersion(getBrowserVersion());
        capabilities.setCapability("enableVNC", true);
        capabilities.setCapability("enableVideo", false);
        capabilities.setJavascriptEnabled(true);
        capabilities.setCapability("name", System.getProperty("displayedJobName"));

        RemoteWebDriver driver = null;
        try {
            driver = new RemoteWebDriver(
                    URI.create(SELENOID_BACK_HOST).toURL(),
                    capabilities
            );
            setImplicitlyWait(driver);
            driver.manage().window().setSize(new Dimension(1920, 1080));
        } catch (MalformedURLException e) {
            e.printStackTrace();
        }

        return driver;
    }

    private static String getBrowserVersion() {
        String version = System.getProperty("version");

        return version.matches("^\\d\\d\\.0$") ? version : "";
    }
}
