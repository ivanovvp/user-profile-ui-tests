package app.step;

import app.driver.SharedDriver;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;

public class VacancyNewSteps {

    private GlobalSteps globalSteps;

    public VacancyNewSteps(SharedDriver driver) {
        globalSteps = new GlobalSteps(driver);
    }

    @And("Select Office '(.*)' In Office Field in Vacancy New Page$")
    public void selectOfficeField(String office) {
        globalSteps.getVacancyNewPage().setSelectOfficeField(office);
    }

    @And("Select Department '(.*)' In Department Field in Vacancy New Page$")
    public void selectDepartmentField(String department) {
        globalSteps.getVacancyNewPage().setSelectDepartmentField(department);
    }

    @And("Select Team '(.*)' In Team Field in Vacancy New Page$")
    public void selectTeamField(String team) {
        globalSteps.getVacancyNewPage().setSelectTeamField(team);
    }

    @And("Enter Position '(.*)' In Position Text Field in Vacancy New Page$")
    public void selectPositionField(String position) {
        globalSteps.getVacancyNewPage().setInputPositionField(position);
    }

    @And("Enter Salary '(.*)' In Salary Text Field in Vacancy New Page$")
    public void selectSalaryField(String salary) {
        globalSteps.getVacancyNewPage().setInputSalaryField(salary);
    }

    @And("Select Test '(.*)' In Test Field in Vacancy New Page$")
    public void selectTestField(String test) {
        globalSteps.getVacancyNewPage().setSelectTestField(test);
    }

    @And("Select English '(.*)' In English Field in Vacancy New Page$")
    public void selectEnglishField(String english) {
        globalSteps.getVacancyNewPage().setSelectEnglishField(english);
    }

    @And("Enter Amount '(.*)' In Amount Text Field in Vacancy New Page$")
    public void selectAmountField(String amount) {
        globalSteps.getVacancyNewPage().setInputAmountField(amount);
    }

    @And("Enter Bonus '(.*)' In Bonus Text Field in Vacancy New Page$")
    public void selectBonusField(String bonus) {
        globalSteps.getVacancyNewPage().setInputBonusField(bonus);
    }

    @And("Enter Responsibilities '(.*)' In Responsibilities Text Field in Vacancy New Page$")
    public void selectResponsibilitiesField(String responsibilities) {
        globalSteps.getVacancyNewPage().setInputResponsibilitiesField(responsibilities);
    }

    @And("Enter Requirements '(.*)' In Requirements Text Field in Vacancy New Page$")
    public void selectRequirementsField(String requirements) {
        globalSteps.getVacancyNewPage().setInputrequirementsField(requirements);
    }

    @And("Enter Plus '(.*)' In Plus Text Field in Vacancy New Page$")
    public void selectPlusField(String plus) {
        globalSteps.getVacancyNewPage().setInputPlusField(plus);
    }

    @And("Enter Reason '(.*)' In Reason Text Field in Vacancy New Page$")
    public void selectReasonField(String reason) {
        globalSteps.getVacancyNewPage().setInputReasonField(reason);
    }


    @Then("Click '(.*)' Button in Vacancy New Page$")
    public void clickButton(String button) {
        switch (button) {
            case "Back to List":
                globalSteps.getVacancyNewPage().clickBackButton();
                break;
            case "":
                break;
        }
    }

}