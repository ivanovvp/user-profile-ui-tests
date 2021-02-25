package app.step;

import app.driver.SharedDriver;
import cucumber.api.java.en.And;


public class VacancySteps {

    private GlobalSteps globalSteps;

    public VacancySteps(SharedDriver driver) {
        globalSteps = new GlobalSteps(driver);
    }

    @And("Click '(.*)' link in Vacancy Page$")
    public void clickButton(String link) {
        switch (link) {
            case "111":
                globalSteps.getVacancyPage().clickRequestIdButton();
                break;
            case "":
                break;
        }
    }

}