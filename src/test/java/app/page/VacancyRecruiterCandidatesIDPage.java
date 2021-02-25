package app.page;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.Keys;

import static org.testng.Assert.fail;

import java.util.List;

public class VacancyRecruiterCandidatesIDPage extends GlobalPage {

    private static final String URL = APP_HOST + "/vacancy/recruiter/candidates/111";

    public VacancyRecruiterCandidatesIDPage(WebDriver driver) {
        super(driver);
    }


    public void open() {
        driver.navigate().to(URL);
    }

    /*------------------------------------------------------------------------------------*/

    @FindBy(xpath = "//*[text()[contains(.,'Add new Candidate for Vacancy')]]")
    private WebElement addNewCandidateButton;

    @FindBy(xpath = "//tr[*]/th[*]/*[text()[contains(.,'View candidate History')]]")
    private WebElement candidateHistoryButton;

    @FindBy(xpath = "//*[text()[contains(.,'Check Candidate Interest')]]")
    private WebElement candidateInterestButton;

    @FindBy(xpath = "//*[@class = 'btn btn-primary'][text()[contains(.,'Set interview time')]]")
    private WebElement setInterviewTimeButton;

    @FindBy(xpath = "//tr[*]/th[*]/*[text()[contains(.,'Edit interview time')]]")
    private WebElement editInterviewTimeButton;

    @FindBy(xpath = "//tr[*]/th[*]/*[text()[contains(.,'Interview')]]")
    private WebElement interviewButton;

    @FindBy(xpath = "//*[@class = 'btn btn-primary'][text()[contains(.,'View request info')]]")
    private WebElement viewRequestInfoButton;

    @FindBy(xpath = "//*[@class='btn btn-primary'][text()[contains(.,'Check onboarding')]]")
    private WebElement checkOnBoardingButton;

    @FindBy(xpath = "//html/body")
    private WebElement pageNavigate;

    @FindBy(xpath = "//th[text()[contains(.,'Request#')]]")
    private WebElement requestTableHeader;

    @FindBy(xpath = "//th[text()[contains(.,'Created')]]")
    private WebElement createdTableHeader;

    @FindBy(xpath = "//th[text()[contains(.,'By')]]")
    private WebElement byTableHeader;

    /*------------------------------------------------------------------------------------*/

    public boolean isTableHeaderAppeared(String name) {
        boolean isAvailable;
        switch (name) {
            case "Request":
                isAvailable = requestTableHeader.isDisplayed();
                break;
            case "Created":
                isAvailable = createdTableHeader.isDisplayed();
                break;
            case "By":
                isAvailable = byTableHeader.isDisplayed();
                break;
            default:
                isAvailable = false;
        }
        return isAvailable;
    }

    public void clickNewCandidateButton() {
        addNewCandidateButton.click();
    }

    public void clickHistoryButton() {
        candidateHistoryButton.click();
    }

    public void clickInterestButton() {
        candidateInterestButton.click();
    }

    public void clickViewRequestInfoButton() {
        viewRequestInfoButton.click();
    }

    public void clickBackPage() {
        driver.navigate().back();
    }

    public void clickSetInterviewTime() {
        setInterviewTimeButton.click();
    }

    public void clickEditInterviewTime() {
        editInterviewTimeButton.click();
    }

    public void clickInterview() {
        interviewButton.click();
    }

    public void clickOnboardingButton() {
        checkOnBoardingButton.click();
    }

    public void movePageDown() {
        for (int i = 0; i < 20; i++) pageNavigate.sendKeys(Keys.DOWN);
    }

    public void checkCentralStatusVacancy() {
        List<WebElement> centralStatus = driver.findElements(By.xpath("//*[@class='alert alert-danger text-center']"));
        for (WebElement central : centralStatus) {
            central.getText();
            boolean status1 = central.getText().toLowerCase().contains("status: search for a candidate(s) have been started");
            boolean status2 = central.getText().toLowerCase().contains("status: issue have been assigned ");
            boolean status3 = central.getText().toLowerCase().contains("status: approved");
            boolean status4 = central.getText().toLowerCase().contains("status: closed");
            if (status1) {
                System.out.println();
                System.out.println("<<<<---------------- Status: TRUE ---------------->>>>");
            } else if (status2) {
                System.out.println();
                System.out.println("<<<<---------------- Status: TRUE ---------------->>>>");
            } else if (status3) {
                System.out.println();
                System.out.println("<<<<---------------- Status: TRUE ---------------->>>>");
            } else if (status4) {
                System.out.println();
                System.out.println("<<<<---------------- Status: TRUE ---------------->>>>");
            } else {
                System.out.println();
                System.out.println("<<<<---------------- Status: FAIL ---------------->>>>");
                fail();
            }
        }
    }

    /*------------------- 1 - Status: CV Received -----------------*/
    public void checkStatusCvReceived() {
        List<WebElement> candidate = driver.findElements(By.xpath("//table[@id='menu']/tbody/tr[1]"));
        List<WebElement> button = driver.findElements(By.xpath("//table[@id='menu']/tbody/tr[2]"));
        for (WebElement table : candidate) {
            table.getText();
            boolean status = table.getText().toLowerCase().contains("cv received");
            for (WebElement buttons : button) {
                buttons.getText();
                boolean butt = buttons.getText().toLowerCase().contains("view candidate history check candidate interest");
                if (status && butt) {
                    System.out.println();
                    System.out.println("<<<<---- THE BUTTON CORRESPONDS TO THE STATUS ---->>>>");
                } else {
                    System.out.println();
                    System.out.println("<<<<---- THE BUTTON IS NOT CORRESPONDS TO THE STATUS ---->>>>");
                    fail();
                }
            }
        }
    }

    /*------------------- 2 - Status: Interview -----------------*/
    public void checkStatusInterview() {
        List<WebElement> candidate = driver.findElements(By.xpath("//table[@id='menu']/tbody/tr[3]"));
        List<WebElement> button = driver.findElements(By.xpath("//table[@id='menu']/tbody/tr[4]"));
        for (WebElement table : candidate) {
            table.getText();
            boolean status = table.getText().toLowerCase().contains("interview");
            for (WebElement buttons : button) {
                buttons.getText();
                boolean butt = buttons.getText().toLowerCase().contains("view candidate history interview");
                if (status && butt) {
                    System.out.println();
                    System.out.println("<<<<---- THE BUTTON CORRESPONDS TO THE STATUS ---->>>>");
                } else {
                    System.out.println();
                    System.out.println("<<<<---- THE BUTTON IS NOT CORRESPONDS TO THE STATUS ---->>>>");
                    fail();
                }
            }
        }
    }

    /*------------------- 3 - Status: Closed. Candidate declined proposition -----------------*/
    public void checkStatusClosedCandidateDeclinedProposition() {
        List<WebElement> candidate = driver.findElements(By.xpath("//table[@id='menu']/tbody/tr[5]"));
        List<WebElement> button = driver.findElements(By.xpath("//table[@id='menu']/tbody/tr[6]"));
        for (WebElement table : candidate) {
            table.getText();
            boolean status = table.getText().toLowerCase().contains("closed. candidate declined proposition");
            for (WebElement buttons : button) {
                buttons.getText();
                boolean butt = buttons.getText().toLowerCase().contains("view candidate history");
                if (status && butt) {
                    System.out.println();
                    System.out.println("<<<<---- THE BUTTON CORRESPONDS TO THE STATUS ---->>>>");
                } else {
                    System.out.println();
                    System.out.println("<<<<---- THE BUTTON IS NOT CORRESPONDS TO THE STATUS ---->>>>");
                    fail();
                }
            }
        }
    }

    /*------------------- 4 - Status: Closed by recrutier -----------------*/
    public void checkStatusClosedByRecrutier() {
        List<WebElement> candidate = driver.findElements(By.xpath("//table[@id='menu']/tbody/tr[7]"));
        List<WebElement> button = driver.findElements(By.xpath("//table[@id='menu']/tbody/tr[8]"));
        for (WebElement table : candidate) {
            table.getText();
            boolean status = table.getText().toLowerCase().contains("closed by recrutier");
            for (WebElement buttons : button) {
                buttons.getText();
                boolean butt = buttons.getText().toLowerCase().contains("view candidate history");
                if (status && butt) {
                    System.out.println();
                    System.out.println("<<<<---- THE BUTTON CORRESPONDS TO THE STATUS ---->>>>");
                } else {
                    System.out.println();
                    System.out.println("<<<<---- THE BUTTON IS NOT CORRESPONDS TO THE STATUS ---->>>>");
                    fail();
                }
            }
        }
    }

    /*------------------- 5 - Status: New employee onboarding -----------------*/
    public void checkStatusNewEmployeeOnboarding() {
        List<WebElement> candidate = driver.findElements(By.xpath("//table[@id='menu']/tbody/tr[9]"));
        List<WebElement> button = driver.findElements(By.xpath("//table[@id='menu']/tbody/tr[10]"));
        for (WebElement table : candidate) {
            table.getText();
            boolean status = table.getText().toLowerCase().contains("new employee onboarding");
            for (WebElement buttons : button) {
                buttons.getText();
                boolean butt = buttons.getText().toLowerCase().contains("view candidate history check onboarding");
                if (status && butt) {
                    System.out.println();
                    System.out.println("<<<<---- THE BUTTON CORRESPONDS TO THE STATUS ---->>>>");
                } else {
                    System.out.println();
                    System.out.println("<<<<---- THE BUTTON IS NOT CORRESPONDS TO THE STATUS ---->>>>");
                    fail();
                }
            }
        }
    }

    /*------------------- 6 - Status: Approved for the interview -----------------*/
    public void checkStatusApprovedForTheInterview() {
        List<WebElement> candidate = driver.findElements(By.xpath("//table[@id='menu']/tbody/tr[11]"));
        List<WebElement> button = driver.findElements(By.xpath("//table[@id='menu']/tbody/tr[12]"));
        for (WebElement table : candidate) {
            table.getText();
            boolean status = table.getText().toLowerCase().contains("approved for the interview");
            for (WebElement buttons : button) {
                buttons.getText();
                boolean butt = buttons.getText().toLowerCase().contains("view candidate history set interview time");
                boolean butt2 = buttons.getText().toLowerCase().contains("view candidate history edit interview time");
                if (status && butt) {
                    System.out.println();
                    System.out.println("<<<<---- THE BUTTON CORRESPONDS TO THE STATUS ---->>>>");
                } else if (status && butt2) {
                    System.out.println();
                    System.out.println("<<<<---- THE BUTTON CORRESPONDS TO THE STATUS ---->>>>");
                } else {
                    System.out.println();
                    System.out.println("<<<<---- THE BUTTON IS NOT CORRESPONDS TO THE STATUS ---->>>>");
                    fail();
                }
            }
        }
    }

    /*------------------- 7 - Status: Interview timing approval -----------------*/
    public void checkStatusInterviewTimingApproval() {
        List<WebElement> candidate = driver.findElements(By.xpath("//table[@id='menu']/tbody/tr[15]"));
        List<WebElement> button = driver.findElements(By.xpath("//table[@id='menu']/tbody/tr[16]"));
        for (WebElement table : candidate) {
            table.getText();
            boolean status = table.getText().toLowerCase().contains("interview timing approval");
            for (WebElement buttons : button) {
                buttons.getText();
                boolean butt = buttons.getText().toLowerCase().contains("view candidate history candidate is waiting for result of interview");
                if (status && butt) {
                    System.out.println();
                    System.out.println("<<<<---- THE BUTTON CORRESPONDS TO THE STATUS ---->>>>");
                } else {
                    System.out.println();
                    System.out.println("<<<<---- THE BUTTON IS NOT CORRESPONDS TO THE STATUS ---->>>>");
                    fail();
                }
            }
        }
    }

    /*------------------- 8 - Status: Contract Concluding -----------------*/
    public void checkStatusContractConcluding() {
        List<WebElement> candidate = driver.findElements(By.xpath("//table[@id='menu']/tbody/tr[17]"));
        List<WebElement> button = driver.findElements(By.xpath("//table[@id='menu']/tbody/tr[18]"));
        for (WebElement table : candidate) {
            table.getText();
            boolean status = table.getText().toLowerCase().contains("contract concluding");
            for (WebElement buttons : button) {
                buttons.getText();
                boolean butt = buttons.getText().toLowerCase().contains("view candidate history set start date for new employee");
                if (status && butt) {
                    System.out.println();
                    System.out.println("<<<<---- THE BUTTON CORRESPONDS TO THE STATUS ---->>>>");
                } else {
                    System.out.println();
                    System.out.println("<<<<---- THE BUTTON IS NOT CORRESPONDS TO THE STATUS ---->>>>");
                    fail();
                }
            }
        }
    }

    /*------------------- 9 - Status: Start date of new employee is set -----------------*/
    public void checkStatusStartDateOfNewEmployeeIsSet() {
        List<WebElement> candidate = driver.findElements(By.xpath("//table[@id='menu']/tbody/tr[19]"));
        List<WebElement> button = driver.findElements(By.xpath("//table[@id='menu']/tbody/tr[20]"));
        for (WebElement table : candidate) {
            table.getText();
            boolean status = table.getText().toLowerCase().contains("start date of new employee is set");
            for (WebElement buttons : button) {
                buttons.getText();
                boolean butt = buttons.getText().toLowerCase().contains("view candidate history edit start date for new employee");
                if (status && butt) {
                    System.out.println();
                    System.out.println("<<<<---- THE BUTTON CORRESPONDS TO THE STATUS ---->>>>");
                } else {
                    System.out.println();
                    System.out.println("<<<<---- THE BUTTON IS NOT CORRESPONDS TO THE STATUS ---->>>>");
                    fail();
                }
            }
        }
    }

    /*------------------- 10 - Status: Candidate is interested in vacancy -----------------*/
    public void checkStatusCandidateIsInterestedInVacancy() {
        List<WebElement> candidate = driver.findElements(By.xpath("//table[@id='menu']/tbody/tr[23]"));
        List<WebElement> button = driver.findElements(By.xpath("//table[@id='menu']/tbody/tr[24]"));
        for (WebElement table : candidate) {
            table.getText();
            boolean status = table.getText().toLowerCase().contains("candidate is interested in vacancy");
            for (WebElement buttons : button) {
                buttons.getText();
                boolean butt = buttons.getText().toLowerCase().contains("view candidate history candidate is waiting for approval");
                if (status && butt) {
                    System.out.println();
                    System.out.println("<<<<---- THE BUTTON CORRESPONDS TO THE STATUS ---->>>>");
                } else {
                    System.out.println();
                    System.out.println("<<<<---- THE BUTTON IS NOT CORRESPONDS TO THE STATUS ---->>>>");
                    fail();
                }
            }
        }
    }

    /*------------------- 11 - Status: Closed by department manager for interview -----------------*/
    public void checkStatusclosedByDepartmentManagerForInterview() {
        List<WebElement> candidate = driver.findElements(By.xpath("//table[@id='menu']/tbody/tr[21]"));
        List<WebElement> button = driver.findElements(By.xpath("//table[@id='menu']/tbody/tr[22]"));
        for (WebElement table : candidate) {
            table.getText();
            boolean status = table.getText().toLowerCase().contains("closed by department manager for interview");
            for (WebElement buttons : button) {
                buttons.getText();
                boolean butt = buttons.getText().toLowerCase().contains("view candidate history");
                if (status && butt) {
                    System.out.println();
                    System.out.println("<<<<---- THE BUTTON CORRESPONDS TO THE STATUS ---->>>>");
                } else {
                    System.out.println();
                    System.out.println("<<<<---- THE BUTTON IS NOT CORRESPONDS TO THE STATUS ---->>>>");
                    fail();
                }
            }
        }
    }

    /*------------------- 12 - Status: Closed by department manager for employment -----------------*/
    public void checkStatusclosedByDepartmentManagerForEmployment() {
        List<WebElement> candidate = driver.findElements(By.xpath("//table[@id='menu']/tbody/tr[13]"));
        List<WebElement> button = driver.findElements(By.xpath("//table[@id='menu']/tbody/tr[14]"));
        for (WebElement table : candidate) {
            table.getText();
            boolean status = table.getText().toLowerCase().contains("closed by department manager for employment");
            for (WebElement buttons : button) {
                buttons.getText();
                boolean butt = buttons.getText().toLowerCase().contains("view candidate history interview");
                if (status && butt) {
                    System.out.println();
                    System.out.println("<<<<---- THE BUTTON CORRESPONDS TO THE STATUS ---->>>>");
                } else {
                    System.out.println();
                    System.out.println("<<<<---- THE BUTTON IS NOT CORRESPONDS TO THE STATUS ---->>>>");
                    fail();
                }
            }
        }
    }
}

