package app.step;

import app.driver.SharedDriver;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;


import static org.testng.Assert.assertTrue;


public class VacancyRecruiterCandidatesIDSteps {

    private GlobalSteps globalSteps;

    public VacancyRecruiterCandidatesIDSteps(SharedDriver driver) {
        globalSteps = new GlobalSteps(driver);
    }


    @And("Click '(.*)' Button in Page Recruiter Candidate$")
    public void clickButton(String name) {
        switch (name) {
            case "Add new Candidate for Vacancy":
                globalSteps.getVacancyRecruiterCandidatesIDPage().clickNewCandidateButton();
                break;
            case "View candidate History":
                globalSteps.getVacancyRecruiterCandidatesIDPage().clickHistoryButton();
                break;
            case "Check Candidate Interest":
                globalSteps.getVacancyRecruiterCandidatesIDPage().clickInterestButton();
                break;
            case "Back":
                globalSteps.getVacancyRecruiterCandidatesIDPage().clickBackPage();
                break;
            case "Set interview time":
                globalSteps.getVacancyRecruiterCandidatesIDPage().clickSetInterviewTime();
                break;
            case "Edit interview time":
                globalSteps.getVacancyRecruiterCandidatesIDPage().clickEditInterviewTime();
                break;
            case "Interview":
                globalSteps.getVacancyRecruiterCandidatesIDPage().clickInterview();
                break;
            case "Page Down":
                globalSteps.getVacancyRecruiterCandidatesIDPage().movePageDown();
                break;
            case "View Request Info":
                globalSteps.getVacancyRecruiterCandidatesIDPage().clickViewRequestInfoButton();
                break;
            case "Check onboarding":
                globalSteps.getVacancyRecruiterCandidatesIDPage().clickOnboardingButton();
                break;
        }
    }

    @Then("Checking buttons for status '(.*)'$")
    public void checkButtonForStatus(String name) {
        switch (name) {
            case "Central Status Vacancy":
                globalSteps.getVacancyRecruiterCandidatesIDPage().checkCentralStatusVacancy();
                break;
            case "CV Received":
                globalSteps.getVacancyRecruiterCandidatesIDPage().checkStatusCvReceived();
                break;
            case "Candidate is interested in vacancy":
                globalSteps.getVacancyRecruiterCandidatesIDPage().checkStatusCandidateIsInterestedInVacancy();
                break;
            case "Closed by recrutier":
                globalSteps.getVacancyRecruiterCandidatesIDPage().checkStatusClosedByRecrutier();
                break;
            case "Approved for the interview":
                globalSteps.getVacancyRecruiterCandidatesIDPage().checkStatusApprovedForTheInterview();
                break;
            case "Closed by department manager for interview":
                globalSteps.getVacancyRecruiterCandidatesIDPage().checkStatusclosedByDepartmentManagerForInterview();
                break;
            case "Interview timing approval":
                globalSteps.getVacancyRecruiterCandidatesIDPage().checkStatusInterviewTimingApproval();
                break;
            case "Interview":
                globalSteps.getVacancyRecruiterCandidatesIDPage().checkStatusInterview();
                break;
            case "Closed by department manager for employment":
                globalSteps.getVacancyRecruiterCandidatesIDPage().checkStatusclosedByDepartmentManagerForEmployment();
                break;
            case "Contract Concluding":
                globalSteps.getVacancyRecruiterCandidatesIDPage().checkStatusContractConcluding();
                break;
            case "Closed. Candidate declined proposition ":
                globalSteps.getVacancyRecruiterCandidatesIDPage().checkStatusClosedCandidateDeclinedProposition();
                break;
            case "Start date of new employee is set":
                globalSteps.getVacancyRecruiterCandidatesIDPage().checkStatusStartDateOfNewEmployeeIsSet();
                break;
            case "New employee onboarding":
                globalSteps.getVacancyRecruiterCandidatesIDPage().checkStatusNewEmployeeOnboarding();
                break;
        }
    }

    @Then("Table Header '(.*)' Block is Appeared in VRCID Page$")
    public void isTableHeaderAppeared(String blockName) {
        assertTrue(globalSteps.getVacancyRecruiterCandidatesIDPage().isTableHeaderAppeared(blockName));
    }

}