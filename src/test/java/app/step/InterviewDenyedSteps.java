package app.step;

import app.driver.SharedDriver;
import cucumber.api.java.en.And;

public class InterviewDenyedSteps {

    private GlobalSteps globalSteps;

    public InterviewDenyedSteps(SharedDriver driver) {
        globalSteps = new GlobalSteps(driver);
    }


    @And("Enter '(.*)' Text in Interview Denyed Page$")
    public void inputTextField(String text) {
        globalSteps.getInterviewDenyedPage().setInputTextField(text);
    }

    @And("Click '(.*)' in Interview Denyed Page$")
    public void clickCheckBox(String name) {
        switch (name) {
            case "1 CheckBox":
                globalSteps.getInterviewDenyedPage().clickCheckBox1();
                break;
            case "2 CheckBox":
                globalSteps.getInterviewDenyedPage().clickCheckBox2();
                break;
            case "3 CheckBox":
                globalSteps.getInterviewDenyedPage().clickCheckBox3();
                break;
            case "4 CheckBox":
                globalSteps.getInterviewDenyedPage().clickCheckBox4();
                break;
            case "5 CheckBox":
                globalSteps.getInterviewDenyedPage().clickCheckBox5();
                break;
            case "6 CheckBox":
                globalSteps.getInterviewDenyedPage().clickCheckBox6();
                break;
            case "7 CheckBox":
                globalSteps.getInterviewDenyedPage().clickCheckBox7();
                break;
            case "8 CheckBox":
                globalSteps.getInterviewDenyedPage().clickCheckBox8();
                break;
            case "9 CheckBox":
                globalSteps.getInterviewDenyedPage().clickCheckBox9();
                break;
            case "10 CheckBox":
                globalSteps.getInterviewDenyedPage().clickCheckBox10();
                break;
            case "11 CheckBox":
                globalSteps.getInterviewDenyedPage().clickCheckBox11();
                break;
            case "12 CheckBox":
                globalSteps.getInterviewDenyedPage().clickCheckBox12();
                break;
        }
    }

}