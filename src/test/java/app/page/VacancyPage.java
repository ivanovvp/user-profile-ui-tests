package app.page;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class VacancyPage extends GlobalPage {

    private static final String URL = APP_HOST + "/vacancy";

    public VacancyPage(WebDriver driver) {
        super(driver);
    }

    public void open() {
        driver.navigate().to(URL);
    }

    /*------------------------------------------------------------------------------------*/

    @FindBy(xpath = "//*[contains(@class, 'd-block') and text() = '111']")
    private WebElement requestButton;

//    @FindBy(xpath = "//*[contains(@class, 'btn approved') and text() = 'Approved']")
//    private WebElement approvedButton;
//
//    @FindBy(xpath = "//*[contains(@class, 'btn approved') and text() = 'Approved']")
//    private WebElement approveButton;
//
//    @FindBy(xpath = "//*[contains(@class, 'd-block') and text() = '111']")
//    private WebElement denyButton;

    /*------------------------------------------------------------------------------------*/

    public void clickRequestIdButton() {
        requestButton.click();
    }

//    public void isAvailableButton() {
//        List<WebElement> candidate = driver.findElements(By.xpath("//table[@id='menu']/tbody/tr"));
//        for (WebElement table : candidate) {
//            table.getText();
//            boolean status = table.getText().toLowerCase().contains("waiting for approval");
//                if (status) {
//                    approveButton.isDisplayed();
//                    denyButton.isDisplayed();
//                } else {
//                    System.out.println("<<<<---- THE BUTTON IS NOT CORRESPONDS TO THE STATUS ---->>>>");
//                    fail();
//                }
//            }
//    }

}