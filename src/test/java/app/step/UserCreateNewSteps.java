package app.step;

import app.driver.SharedDriver;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;

import static org.testng.Assert.assertTrue;

public class UserCreateNewSteps {

    public GlobalSteps globalSteps;

    public UserCreateNewSteps(SharedDriver driver) {
        globalSteps = new GlobalSteps(driver);
    }

    @Then("'(.*)' Button is Available in User Create New Page$")
    public void isButtonAvailable(String buttonName) {
        assertTrue(globalSteps.getUserCreateNewPage().isButtonAvailable(buttonName));
    }

    @And("Enter Name '(.*)' In Name Text Field in User Create New Page$")
    public void inputNameField(String name) {
        globalSteps.getUserCreateNewPage().setInputNameField(name);
    }

    @And("Select Office '(.*)' In Office Field in User Create New Page$")
    public void selectOfficeField(String oficce) {
        globalSteps.getUserCreateNewPage().setSelectOfficeField(oficce);
    }

    @And("Select Department '(.*)' In Department Field in User Create New Page$")
    public void selectDepartmentField(String department) {
        globalSteps.getUserCreateNewPage().setSelectDepartmentField(department);
    }

    @And("Select Team '(.*)' In Team Field in User Create New Page$")
    public void selectTeamField(String team) {
        globalSteps.getUserCreateNewPage().setSelectTeamField(team);
    }

    @And("Enter eMail '(.*)' In eMail Text Field in User Create New Page$")
    public void inputEMailField(String email) {
        globalSteps.getUserCreateNewPage().setInputEmailField(email);
    }

    @And("Select Year '(.*)' In Create Date Year Field in User Create New Page$")
    public void selectCreateDateYear(String year) {
        globalSteps.getUserCreateNewPage().setSelectCreateDateYear(year);
    }

    @And("Select Month '(.*)' In Create Date Month Field in User Create New Page$")
    public void selectCreateDateMonth(String month) {
        globalSteps.getUserCreateNewPage().setSelectCreateDateMonth(month);
    }

    @And("Select Day '(.*)' In Create Date Day Field in User Create New Page$")
    public void selectCreateDateDay(String day) {
        globalSteps.getUserCreateNewPage().setSelectCreateDateDay(day);
    }

    @And("Select Hour '(.*)' In Create Date Hour Field in User Create New Page$")
    public void selectCreateDateHour(String hour) {
        globalSteps.getUserCreateNewPage().setSelectCreateDateHour(hour);
    }

    @And("Select Minute '(.*)' In Create Date Minute Field in User Create New Page$")
    public void selectCreateDateMinute(String minute) {
        globalSteps.getUserCreateNewPage().setSelectCreateDateMinute(minute);
    }

    @And("Enter Password '(.*)' In Password Text Field in User Create New Page$")
    public void inputPasswordField(String password) {
        globalSteps.getUserCreateNewPage().setInputPasswordField(password);
    }

    @And("Enter Sub Team '(.*)' In Sub Team Text Field in User Create New Page$")
    public void inputSubTeamField(String subTeam) {
        globalSteps.getUserCreateNewPage().setInputSubTeamField(subTeam);
    }

    @And("Enter Position '(.*)' In Position Text Field in User Create New Page$")
    public void inputPositionField(String position) {
        globalSteps.getUserCreateNewPage().setInputPositionField(position);
    }

    @And("Enter Phone '(.*)' In Phone Text Field in User Create New Page$")
    public void inputPhoneField(String phone) {
        globalSteps.getUserCreateNewPage().setInputPhoneField(phone);
    }

    @And("Enter Skype '(.*)' In Skype Text Field in User Create New Page$")
    public void inputSkypeField(String skype) {
        globalSteps.getUserCreateNewPage().setInputSkypeField(skype);
    }

    @And("Enter Personal eMail '(.*)' In Personal eMail Text Field in User Create New Page$")
    public void inputPersonalEMailField(String personalEMail) {
        globalSteps.getUserCreateNewPage().setInputPersonalEmailField(personalEMail);
    }

    @And("Enter Salary '(.*)' In Salary Text Field in User Create New Page$")
    public void inputSalaryField(String salary) {
        globalSteps.getUserCreateNewPage().setInputSalaryField(salary);
    }

    @And("Select Sex '(.*)' In Sex Field in User Create New Page$")
    public void selectSexField(String sex) {
        globalSteps.getUserCreateNewPage().setSelectSexField(sex);
    }

    @And("Select Year '(.*)' In Birth Day Year Field in User Create New Page$")
    public void selectBirthDayYear(String year) {
        globalSteps.getUserCreateNewPage().setSelectBirthDayYear(year);
    }

    @And("Select Month '(.*)' In Birth Day Month Field in User Create New Page$")
    public void selectBirthDayMonth(String month) {
        globalSteps.getUserCreateNewPage().setSelectBirthDayMonth(month);
    }

    @And("Select Day '(.*)' In Birth Day Day Field in User Create New Page$")
    public void selectBirthDayDay(String day) {
        globalSteps.getUserCreateNewPage().setSelectBirthDayDay(day);
    }




    @And("Select Marital Status '(.*)' In Marital Status Field in User Create New Page$")
    public void inputMaritalStatusField(String marital) {
        globalSteps.getUserCreateNewPage().setSelectMaritalStatusField(marital);
    }

    @And("Enter Text '(.*)' In Children Field in User Create New Page$")
    public void inputChildrenField(String children) {
        globalSteps.getUserCreateNewPage().setInputChildrenField(children);
    }

    @And("Enter Location '(.*)' In Location Text Field in User Create New Page$")
    public void inputLocationField(String location) {
        globalSteps.getUserCreateNewPage().setInputLocationField(location);
    }

    @And("Click on '(.*)' Field in User Create New Page$")
    public void clickButton(String buttonName) {
        switch (buttonName) {
            case "Photo Choose File":
                globalSteps.getUserCreateNewPage().clickCreatePhotoButton();
                break;
            case "back to list":
                globalSteps.getUserCreateNewPage().clickBackToListButton();
                break;
        }
    }

}