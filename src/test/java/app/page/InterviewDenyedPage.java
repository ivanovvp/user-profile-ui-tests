package app.page;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class InterviewDenyedPage extends GlobalPage {

    private static final String URL = APP_HOST + "/vacancy/candidate/after/interview/deny/candidate/8297?vacancy=111";

    public InterviewDenyedPage(WebDriver driver) {
        super(driver);
    }

    public void open() {
        driver.navigate().to(URL);
    }

    /*------------------------------------------------------------------------------------*/

    @FindBy(id = "deny_after_interview_by_candidate_choices_1")
    private WebElement checkBox1;

    @FindBy(id = "deny_after_interview_by_candidate_choices_2")
    private WebElement checkBox2;

    @FindBy(id = "deny_after_interview_by_candidate_choices_3")
    private WebElement checkBox3;

    @FindBy(id = "deny_after_interview_by_candidate_choices_4")
    private WebElement checkBox4;

    @FindBy(id = "deny_after_interview_by_candidate_choices_5")
    private WebElement checkBox5;

    @FindBy(id = "deny_after_interview_by_candidate_choices_6")
    private WebElement checkBox6;

    @FindBy(id = "deny_after_interview_by_candidate_choices_7")
    private WebElement checkBox7;

    @FindBy(id = "deny_after_interview_by_candidate_choices_8")
    private WebElement checkBox8;

    @FindBy(id = "deny_after_interview_by_candidate_choices_9")
    private WebElement checkBox9;

    @FindBy(id = "deny_after_interview_by_candidate_choices_10")
    private WebElement checkBox10;

    @FindBy(id = "deny_after_interview_by_candidate_choices_11")
    private WebElement checkBox11;

    @FindBy(id = "deny_after_interview_by_candidate_choices_12")
    private WebElement checkBox12;

    @FindBy(id = "deny_after_interview_by_candidate_noSuitableReason")
    private WebElement textField;

    /*------------------------------------------------------------------------------------*/

    public void clickCheckBox1() {
        checkBox1.click();
    }

    public void clickCheckBox2() {
        checkBox2.click();
    }

    public void clickCheckBox3() {
        checkBox3.click();
    }

    public void clickCheckBox4() {
        checkBox4.click();
    }

    public void clickCheckBox5() {
        checkBox5.click();
    }

    public void clickCheckBox6() {
        checkBox6.click();
    }

    public void clickCheckBox7() {
        checkBox7.click();
    }

    public void clickCheckBox8() {
        checkBox8.click();
    }

    public void clickCheckBox9() {
        checkBox9.click();
    }

    public void clickCheckBox10() {
        checkBox10.click();
    }

    public void clickCheckBox11() {
        checkBox11.click();
    }

    public void clickCheckBox12() {
        checkBox12.click();
    }

    public void setInputTextField(String text) {
        textField.clear();
        textField.sendKeys(text);
    }

}