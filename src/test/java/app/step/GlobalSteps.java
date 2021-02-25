package app.step;

import app.driver.SharedDriver;
import app.page.*;
import cucumber.api.java.en.And;
import cucumber.api.java.en.When;
import lombok.Getter;

import static org.openqa.selenium.support.PageFactory.initElements;

public class GlobalSteps {

    @Getter
    private LoginPage loginPage;
    @Getter
    private ProfilePage profilePage;
    @Getter
    private UserIDPage userIDPage;
    @Getter
    private SdtPage sdtPage;
    @Getter
    private SdtNewPage sdtNewPage;
    @Getter
    private CandidateIDPage candidateIDPage;
    @Getter
    private CandidatePage candidatePage;
    @Getter
    private VacancyIDPage vacancyIDPage;
    @Getter
    private VacancyNewPage vacancyNewPage;
    @Getter
    private VacancyPage vacancyPage;
    @Getter
    private VacancyRecruiterCandidatesIDPage vacancyRecruiterCandidatesIDPage;
    @Getter
    private ApprovedListCandidatePage approvedListCandidatePage;
    @Getter
    private ChangePasswordPage changePasswordPage;
    @Getter
    private ApproveCandidatePage approveCandidatePage;
    @Getter
    private InterviewPage interviewPage;
    @Getter
    private CandidateEditPage candidateEditPage;
    @Getter
    private CreateNewAccountPage createNewAccountPage;
    @Getter
    private MonthlySdtPage monthlySdtPage;
    @Getter
    private ApprovalPage approvalPage;
    @Getter
    private SDTEmailAssigneePage sdtEmailAssigneePage;
    @Getter
    private NewEmployeeOnboardingPage newEmployeeOnboardingPage;
    @Getter
    private NewEmployeeAdditionalPage newEmployeeAdditionalPage;
    @Getter
    private InterviewDenyedPage interviewDenyedPage;
    @Getter
    private AddNewCandidateForVacancyPage addNewCandidateForVacancyPage;
    @Getter
    private ResponseStatusCode responseStatusCode;
    @Getter
    private UserPage userPage;
    @Getter
    private UserCreateNewPage userCreateNewPage;
    @Getter
    private VacancyClosedPage vacancyClosedPage;
    @Getter
    private CandidateNewPage candidateNewPage;
    @Getter
    private WorkinghoursInfoPage workinghoursInfoPage;
    @Getter
    private CreateNewUserPhpDeveloperLevelRelationPage createNewUserPhpDeveloperLevelRelationPage;
    @Getter
    private ManagePhpTeamPage managePhpTeamPage;
    @Getter
    private CreateNewQaUserManagerRelationPage createNewQaUserManagerRelationPage;

    public GlobalSteps(SharedDriver driver) {
        loginPage = new LoginPage(driver);
        profilePage = new ProfilePage(driver);
        userIDPage = new UserIDPage(driver);
        sdtPage = new SdtPage(driver);
        sdtNewPage = new SdtNewPage(driver);
        candidateIDPage = new CandidateIDPage(driver);
        candidatePage = new CandidatePage(driver);
        vacancyIDPage = new VacancyIDPage(driver);
        vacancyNewPage = new VacancyNewPage(driver);
        vacancyPage = new VacancyPage(driver);
        vacancyRecruiterCandidatesIDPage = new VacancyRecruiterCandidatesIDPage(driver);
        approvedListCandidatePage = new ApprovedListCandidatePage(driver);
        changePasswordPage = new ChangePasswordPage(driver);
        approveCandidatePage = new ApproveCandidatePage(driver);
        interviewPage = new InterviewPage(driver);
        candidateEditPage = new CandidateEditPage(driver);
        createNewAccountPage = new CreateNewAccountPage(driver);
        monthlySdtPage = new MonthlySdtPage(driver);
        approvalPage = new ApprovalPage(driver);
        sdtEmailAssigneePage = new SDTEmailAssigneePage(driver);
        newEmployeeOnboardingPage = new NewEmployeeOnboardingPage(driver);
        newEmployeeAdditionalPage = new NewEmployeeAdditionalPage(driver);
        interviewDenyedPage = new InterviewDenyedPage(driver);
        addNewCandidateForVacancyPage = new AddNewCandidateForVacancyPage(driver);
        responseStatusCode = new ResponseStatusCode(driver);
        userPage = new UserPage(driver);
        userCreateNewPage = new UserCreateNewPage(driver);
        vacancyClosedPage = new VacancyClosedPage(driver);
        candidateNewPage = new CandidateNewPage(driver);
        workinghoursInfoPage = new WorkinghoursInfoPage(driver);
        createNewUserPhpDeveloperLevelRelationPage = new CreateNewUserPhpDeveloperLevelRelationPage(driver);
        managePhpTeamPage = new ManagePhpTeamPage(driver);
        createNewQaUserManagerRelationPage = new CreateNewQaUserManagerRelationPage(driver);


        initElements(driver, loginPage);
        initElements(driver, profilePage);
        initElements(driver, userIDPage);
        initElements(driver, sdtPage);
        initElements(driver, sdtNewPage);
        initElements(driver, candidateIDPage);
        initElements(driver, candidatePage);
        initElements(driver, vacancyIDPage);
        initElements(driver, vacancyNewPage);
        initElements(driver, vacancyPage);
        initElements(driver, vacancyRecruiterCandidatesIDPage);
        initElements(driver, approvedListCandidatePage);
        initElements(driver, changePasswordPage);
        initElements(driver, approveCandidatePage);
        initElements(driver, interviewPage);
        initElements(driver, candidateEditPage);
        initElements(driver, createNewAccountPage);
        initElements(driver, monthlySdtPage);
        initElements(driver, approvalPage);
        initElements(driver, sdtEmailAssigneePage);
        initElements(driver, newEmployeeOnboardingPage);
        initElements(driver, newEmployeeAdditionalPage);
        initElements(driver, interviewDenyedPage);
        initElements(driver, addNewCandidateForVacancyPage);
        initElements(driver, responseStatusCode);
        initElements(driver, userPage);
        initElements(driver, userCreateNewPage);
        initElements(driver, vacancyClosedPage);
        initElements(driver, candidateNewPage);
        initElements(driver, workinghoursInfoPage);
        initElements(driver, createNewUserPhpDeveloperLevelRelationPage);
        initElements(driver, managePhpTeamPage);
        initElements(driver, createNewQaUserManagerRelationPage);
    }


    @When("Go to (.*) page")
    public void goToPage(String page) {
        switch (page) {
            case "Login":
                loginPage.open();
                break;
            case "User ID":
                userIDPage.open();
                break;
            case "Profile":
                profilePage.open();
                break;
            case "Sdt":
                sdtPage.open();
                break;
            case "Sdt New":
                sdtNewPage.open();
                break;
            case "Candidate ID":
                candidateIDPage.open();
                break;
            case "Candidate":
                candidatePage.open();
                break;
            case "Vacancy ID":
                vacancyIDPage.open();
                break;
            case "Vacancy":
                vacancyPage.open();
                break;
            case "Vacancy New":
                vacancyNewPage.open();
                break;
            case "Vacancy Recruiter Candidate ID":
                vacancyRecruiterCandidatesIDPage.open();
                break;
            case "Approved List Candidate Page":
                approvedListCandidatePage.open();
                break;
            case "Change Password":
                changePasswordPage.open();
                break;
            case "Approve Candidate":
                approveCandidatePage.open();
                break;
            case "Interview":
                interviewPage.open();
                break;
            case "Candidate Edit":
                candidateEditPage.open();
                break;
            case "Create account":
                createNewAccountPage.open();
                break;
            case "MonthlySdt":
                monthlySdtPage.open();
                break;
            case "Approval":
                approvalPage.open();
                break;
            case "SDT Email Assignee index":
                sdtEmailAssigneePage.open();
                break;
            case "New Employee Onboarding":
                newEmployeeOnboardingPage.open();
                break;
            case "New Employee Additional":
                newEmployeeAdditionalPage.open();
                break;
            case "Interview Denyed":
                interviewDenyedPage.open();
                break;
            case "Add New Candidate for Vacancy":
                addNewCandidateForVacancyPage.open();
                break;
            case "User":
                userPage.open();
                break;
            case "User Create New":
                userCreateNewPage.open();
                break;
            case "Vacancy Closed":
                vacancyClosedPage.open();
                break;
            case "Candidate New":
                candidateNewPage.open();
                break;
            case "Workinghours Info":
                workinghoursInfoPage.open();
                break;
            case "Create new User Php Developer Level Relation":
                createNewUserPhpDeveloperLevelRelationPage.open();
                break;
            case "Manage PHP Team":
                managePhpTeamPage.open();
                break;
            case "Create new Qa User Manager Relation":
                createNewQaUserManagerRelationPage.open();
                break;
        }
    }

    @And("Wait for (\\d*) seconds")
    public void sleep(int sec) {
        try {
            Thread.sleep(sec * 1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }


    LoginPage getLoginPage() {
        return loginPage;
    }

    ProfilePage getProfilePage() {
        return profilePage;
    }

    UserIDPage getUserIDPage() {
        return userIDPage;
    }

    SdtPage getSdtPage() {
        return sdtPage;
    }

    SdtNewPage getSdtNewPage() {
        return sdtNewPage;
    }

    CandidateIDPage getCandidateIDPage() {
        return candidateIDPage;
    }

    CandidatePage getCandidatePage() {
        return candidatePage;
    }

    VacancyIDPage getVacancyIDPage() {
        return vacancyIDPage;
    }

    VacancyNewPage getVacancyNewPage() {
        return vacancyNewPage;
    }

    VacancyPage getVacancyPage() {
        return vacancyPage;
    }

    VacancyRecruiterCandidatesIDPage getVacancyRecruiterCandidatesIDPage() {
        return vacancyRecruiterCandidatesIDPage;
    }

    ApprovedListCandidatePage getApprovedListCandidatePage() {
        return approvedListCandidatePage;
    }

    ChangePasswordPage getChangePasswordPage() {
        return changePasswordPage;
    }

    ApproveCandidatePage getApproveCandidatePage() {
        return approveCandidatePage;
    }

    InterviewPage getInterviewPage() {
        return interviewPage;
    }

    CandidateEditPage getCandidateEditPage() {
        return candidateEditPage;
    }

    CreateNewAccountPage getCreateNewAccountPage() {
        return createNewAccountPage;
    }

    MonthlySdtPage getMonthlySdtPage() {
        return monthlySdtPage;
    }

    ApprovalPage getApprovalPage() {
        return approvalPage;
    }

    SDTEmailAssigneePage getSdtEmailAssigneePage() {
        return sdtEmailAssigneePage;
    }

    NewEmployeeOnboardingPage getNewEmployeeOnboardingPage() {
        return newEmployeeOnboardingPage;
    }

    NewEmployeeAdditionalPage getNewEmployeeAdditionalPage() {
        return newEmployeeAdditionalPage;
    }

    InterviewDenyedPage getInterviewDenyedPage() {
        return interviewDenyedPage;
    }

    AddNewCandidateForVacancyPage getAddNewCandidateForVacancyPage() {
        return addNewCandidateForVacancyPage;
    }

    ResponseStatusCode getResponseStatusCode() {
        return responseStatusCode;
    }

    UserPage getUserPage() {
        return userPage;
    }

    UserCreateNewPage getUserCreateNewPage() {
        return userCreateNewPage;
    }

    VacancyClosedPage getVacancyClosedPage() {
        return vacancyClosedPage;
    }

    CandidateNewPage getCandidateNewPage() {
        return candidateNewPage;
    }

    WorkinghoursInfoPage getWorkinghoursInfoPage() {
        return workinghoursInfoPage;
    }

    CreateNewUserPhpDeveloperLevelRelationPage getCreateNewUserPhpDeveloperLevelRelationPage() {
        return createNewUserPhpDeveloperLevelRelationPage;
    }

    ManagePhpTeamPage getManagePhpTeamPage() {
        return managePhpTeamPage;
    }

    CreateNewQaUserManagerRelationPage getCreateNewQaUserManagerRelationPage() {
        return createNewQaUserManagerRelationPage;
    }
}