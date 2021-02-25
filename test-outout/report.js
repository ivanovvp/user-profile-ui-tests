$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("SDTEmailAssignee.feature");
formatter.feature({
  "line": 1,
  "name": "SDT Email Assignee index Page",
  "description": "",
  "id": "sdt-email-assignee-index-page",
  "keyword": "Feature"
});
formatter.before({
  "duration": 162215400,
  "error_message": "java.lang.ExceptionInInitializerError\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.picocontainer.injectors.AbstractInjector.newInstance(AbstractInjector.java:145)\r\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:342)\r\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\r\n\tat org.picocontainer.injectors.AbstractInjectionFactory$LifecycleAdapter.getComponentInstance(AbstractInjectionFactory.java:56)\r\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\r\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\r\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\r\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:40)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat com.intellij.rt.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:66)\r\n\tat com.intellij.rt.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:109)\r\nCaused by: java.lang.IllegalStateException: The path to the driver executable must be set by the webdriver.chrome.driver system property; for more information, see https://github.com/SeleniumHQ/selenium/wiki/ChromeDriver. The latest version can be downloaded from http://chromedriver.storage.googleapis.com/index.html\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:754)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:125)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.access$000(ChromeDriverService.java:35)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService$Builder.findDefaultExecutable(ChromeDriverService.java:159)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:346)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.createDefaultService(ChromeDriverService.java:94)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat app.driver.DriverFactory.create(DriverFactory.java:28)\r\n\tat app.driver.SharedDriver.\u003cclinit\u003e(SharedDriver.java:18)\r\n\t... 47 more\r\n",
  "status": "failed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Go to Login page",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Enter \u0027auto-test-limon4-zorgan\u0027 Text in Email Field",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Enter \u0027check\u0027 Text in Password Field",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Click on \u0027Sign In\u0027 Button",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 6
    }
  ],
  "location": "GlobalSteps.goToPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "auto-test-limon4-zorgan",
      "offset": 7
    }
  ],
  "location": "LoginSteps.inputEmail(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "check",
      "offset": 7
    }
  ],
  "location": "LoginSteps.inputPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Sign In",
      "offset": 10
    }
  ],
  "location": "LoginSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 10,
  "name": "Check User ID Page",
  "description": "",
  "id": "sdt-email-assignee-index-page;check-user-id-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@all"
    },
    {
      "line": 9,
      "name": "@smoke"
    },
    {
      "line": 9,
      "name": "@SDTEmailAssigneeSteps"
    },
    {
      "line": 9,
      "name": "@test"
    },
    {
      "line": 9,
      "name": "@auto-test-limon4-zorgan"
    },
    {
      "line": 9,
      "name": "@nexteum.com"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "Go to User ID page",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Requested Page Available",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Click on \u0027edit\u0027 Button in User Page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Redirect to the Expected Page Worked",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Click on \u0027Update\u0027 Button in User Page",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Redirect to the Expected Page Worked",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Go to SDT Email Assignee index page",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Compare ID and Email",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "User ID",
      "offset": 6
    }
  ],
  "location": "GlobalSteps.goToPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "edit",
      "offset": 10
    }
  ],
  "location": "UserSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButtonAppeared()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Update",
      "offset": 10
    }
  ],
  "location": "UserSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButtonAppeared()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "SDT Email Assignee index",
      "offset": 6
    }
  ],
  "location": "GlobalSteps.goToPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 204300,
  "error_message": "java.lang.NoClassDefFoundError: Could not initialize class app.driver.SharedDriver\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.picocontainer.injectors.AbstractInjector.newInstance(AbstractInjector.java:145)\r\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:342)\r\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\r\n\tat org.picocontainer.injectors.AbstractInjectionFactory$LifecycleAdapter.getComponentInstance(AbstractInjectionFactory.java:56)\r\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\r\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\r\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\r\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:40)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat com.intellij.rt.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:66)\r\n\tat com.intellij.rt.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:109)\r\n",
  "status": "failed"
});
formatter.uri("addNewCandidateForVacancy.feature");
formatter.feature({
  "line": 1,
  "name": "Add New Candidate For Vacancy Page - Recruiter",
  "description": "",
  "id": "add-new-candidate-for-vacancy-page---recruiter",
  "keyword": "Feature"
});
formatter.before({
  "duration": 125500,
  "error_message": "java.lang.NoClassDefFoundError: Could not initialize class app.driver.SharedDriver\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.picocontainer.injectors.AbstractInjector.newInstance(AbstractInjector.java:145)\r\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:342)\r\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\r\n\tat org.picocontainer.injectors.AbstractInjectionFactory$LifecycleAdapter.getComponentInstance(AbstractInjectionFactory.java:56)\r\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\r\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\r\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\r\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:40)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat com.intellij.rt.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:66)\r\n\tat com.intellij.rt.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:109)\r\n",
  "status": "failed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Go to Login page",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Enter \u0027auto-test@onyx.com\u0027 Text in Email Field",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Enter \u0027check\u0027 Text in Password Field",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Click on \u0027Sign In\u0027 Button",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 6
    }
  ],
  "location": "GlobalSteps.goToPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "auto-test@onyx.com",
      "offset": 7
    }
  ],
  "location": "LoginSteps.inputEmail(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "check",
      "offset": 7
    }
  ],
  "location": "LoginSteps.inputPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Sign In",
      "offset": 10
    }
  ],
  "location": "LoginSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 10,
  "name": "Add New Candidate For Vacancy Page",
  "description": "",
  "id": "add-new-candidate-for-vacancy-page---recruiter;add-new-candidate-for-vacancy-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@all"
    },
    {
      "line": 9,
      "name": "@smoke"
    },
    {
      "line": 9,
      "name": "@addNewCandidateForVacancy"
    },
    {
      "line": 9,
      "name": "@test"
    },
    {
      "line": 9,
      "name": "@auto-test-manager"
    },
    {
      "line": 9,
      "name": "@onyx.com"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "Go to Add New Candidate for Vacancy page",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Requested Page Available",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Table Header \u0027Request\u0027 Block is Appeared in Add New Candidate For Vacancy Page",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Table Header \u0027Created\u0027 Block is Appeared in Add New Candidate For Vacancy Page",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Table Header \u0027By\u0027 Block is Appeared in Add New Candidate For Vacancy Page",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Click \u0027CVs received from vacancy\u0027 Button in Add New Candidate For Vacancy Page",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Redirect to the Expected Page Worked",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Click \u0027Back\u0027 Button in Page Recruiter Candidate",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Click \u0027CVs received from hunting\u0027 Button in Add New Candidate For Vacancy Page",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Redirect to the Expected Page Worked",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "Click \u0027Back\u0027 Button in Page Recruiter Candidate",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Click \u0027CVs received from recommendation\u0027 Button in Add New Candidate For Vacancy Page",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Redirect to the Expected Page Worked",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "Click \u0027Back\u0027 Button in Page Recruiter Candidate",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "Click \u0027Done\u0027 Button in Add New Candidate For Vacancy Page",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "Redirect to the Expected Page Worked",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Add New Candidate for Vacancy",
      "offset": 6
    }
  ],
  "location": "GlobalSteps.goToPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButtonAppeared()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Back",
      "offset": 7
    }
  ],
  "location": "VacancyRecruiterCandidatesIDSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButtonAppeared()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Back",
      "offset": 7
    }
  ],
  "location": "VacancyRecruiterCandidatesIDSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButtonAppeared()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Back",
      "offset": 7
    }
  ],
  "location": "VacancyRecruiterCandidatesIDSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButtonAppeared()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 142300,
  "error_message": "java.lang.NoClassDefFoundError: Could not initialize class app.driver.SharedDriver\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.picocontainer.injectors.AbstractInjector.newInstance(AbstractInjector.java:145)\r\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:342)\r\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\r\n\tat org.picocontainer.injectors.AbstractInjectionFactory$LifecycleAdapter.getComponentInstance(AbstractInjectionFactory.java:56)\r\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\r\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\r\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\r\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:40)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat com.intellij.rt.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:66)\r\n\tat com.intellij.rt.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:109)\r\n",
  "status": "failed"
});
formatter.uri("approval_manager.feature");
formatter.feature({
  "line": 1,
  "name": "Approval Page - Department Manager",
  "description": "",
  "id": "approval-page---department-manager",
  "keyword": "Feature"
});
formatter.before({
  "duration": 167900,
  "error_message": "java.lang.NoClassDefFoundError: Could not initialize class app.driver.SharedDriver\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.picocontainer.injectors.AbstractInjector.newInstance(AbstractInjector.java:145)\r\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:342)\r\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\r\n\tat org.picocontainer.injectors.AbstractInjectionFactory$LifecycleAdapter.getComponentInstance(AbstractInjectionFactory.java:56)\r\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\r\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\r\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\r\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:40)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat com.intellij.rt.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:66)\r\n\tat com.intellij.rt.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:109)\r\n",
  "status": "failed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Go to Login page",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Enter \u0027auto-test-manager@onyx.com\u0027 Text in Email Field",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Enter \u0027check\u0027 Text in Password Field",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Click on \u0027Sign In\u0027 Button",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 6
    }
  ],
  "location": "GlobalSteps.goToPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "auto-test-manager@onyx.com",
      "offset": 7
    }
  ],
  "location": "LoginSteps.inputEmail(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "check",
      "offset": 7
    }
  ],
  "location": "LoginSteps.inputPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Sign In",
      "offset": 10
    }
  ],
  "location": "LoginSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 10,
  "name": "Approval Page",
  "description": "",
  "id": "approval-page---department-manager;approval-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@all"
    },
    {
      "line": 9,
      "name": "@smoke"
    },
    {
      "line": 9,
      "name": "@approval"
    },
    {
      "line": 9,
      "name": "@test"
    },
    {
      "line": 9,
      "name": "@auto-test-manager"
    },
    {
      "line": 9,
      "name": "@onyx.com"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "Go to Approval page",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Requested Page Available",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Field \u0027Photo\u0027 is Appeared in Approval Page",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Field \u0027Name\u0027 is Appeared in Approval Page",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Field \u0027Surname\u0027 is Appeared in Approval Page",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Field \u0027Applying position\u0027 is Appeared in Approval Page",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Field \u0027Location\u0027 is Appeared in Approval Page",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Field \u0027Request Status\u0027 is Appeared in Approval Page",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Field \u0027Candidate Status\u0027 is Appeared in Approval Page",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Button \u0027Approve candidate for interview\u0027 is Appeared in Approval Page",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Button \u0027Deny candidate for interview\u0027 is Appeared in Approval Page",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Approval",
      "offset": 6
    }
  ],
  "location": "GlobalSteps.goToPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 135900,
  "error_message": "java.lang.NoClassDefFoundError: Could not initialize class app.driver.SharedDriver\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.picocontainer.injectors.AbstractInjector.newInstance(AbstractInjector.java:145)\r\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:342)\r\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\r\n\tat org.picocontainer.injectors.AbstractInjectionFactory$LifecycleAdapter.getComponentInstance(AbstractInjectionFactory.java:56)\r\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\r\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\r\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\r\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:40)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat com.intellij.rt.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:66)\r\n\tat com.intellij.rt.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:109)\r\n",
  "status": "failed"
});
formatter.uri("approveCandidate_manager.feature");
formatter.feature({
  "line": 1,
  "name": "Approve Candidate Page - Department Manager",
  "description": "",
  "id": "approve-candidate-page---department-manager",
  "keyword": "Feature"
});
formatter.before({
  "duration": 186600,
  "error_message": "java.lang.NoClassDefFoundError: Could not initialize class app.driver.SharedDriver\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.picocontainer.injectors.AbstractInjector.newInstance(AbstractInjector.java:145)\r\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:342)\r\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\r\n\tat org.picocontainer.injectors.AbstractInjectionFactory$LifecycleAdapter.getComponentInstance(AbstractInjectionFactory.java:56)\r\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\r\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\r\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\r\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:40)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat com.intellij.rt.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:66)\r\n\tat com.intellij.rt.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:109)\r\n",
  "status": "failed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Go to Login page",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Enter \u0027auto-test-manager@onyx.com\u0027 Text in Email Field",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Enter \u0027check\u0027 Text in Password Field",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Click on \u0027Sign In\u0027 Button",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 6
    }
  ],
  "location": "GlobalSteps.goToPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "auto-test-manager@onyx.com",
      "offset": 7
    }
  ],
  "location": "LoginSteps.inputEmail(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "check",
      "offset": 7
    }
  ],
  "location": "LoginSteps.inputPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Sign In",
      "offset": 10
    }
  ],
  "location": "LoginSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 10,
  "name": "Approve Candidate Page",
  "description": "",
  "id": "approve-candidate-page---department-manager;approve-candidate-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@all"
    },
    {
      "line": 9,
      "name": "@smoke"
    },
    {
      "line": 9,
      "name": "@approvecandidate"
    },
    {
      "line": 9,
      "name": "@test"
    },
    {
      "line": 9,
      "name": "@auto-test-manager"
    },
    {
      "line": 9,
      "name": "@onyx.com"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "Go to Approve Candidate page",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Requested Page Available",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Select \u00271\u0027 In Office Field in Approve Candidate Page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Select \u00271\u0027 In Department Field in Approve Candidate Page",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Select \u00271\u0027 In Team Field in Approve Candidate Page",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Enter Text \u0027QA\u0027 In Enterpreneur Field in Approve Candidate Page",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Enter Text \u0027Senior\u0027 In Level Field in Approve Candidate Page",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Enter Text \u002701012001\u0027 In Start Date Field in Approve Candidate Page",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Enter Text \u00272500\u0027 In Salary Field in Approve Candidate Page",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Enter Text \u0027Room\u0027 In Work Place Field in Approve Candidate Page",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Enter Text \u0027Verblyuzhonok\u0027 In Nick Name Field in Approve Candidate Page",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Check \u0027Send\u0027 Button is Appeared in Approve Candidate Page",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Approve Candidate",
      "offset": 6
    }
  ],
  "location": "GlobalSteps.goToPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 8
    }
  ],
  "location": "ApproveCandidateSteps.selectOfficeField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 8
    }
  ],
  "location": "ApproveCandidateSteps.selectDepartmentField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 8
    }
  ],
  "location": "ApproveCandidateSteps.selectTeamField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "QA",
      "offset": 12
    }
  ],
  "location": "ApproveCandidateSteps.inputEnterpreneurField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Senior",
      "offset": 12
    }
  ],
  "location": "ApproveCandidateSteps.inputLevelField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "01012001",
      "offset": 12
    }
  ],
  "location": "ApproveCandidateSteps.inputStartDateField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2500",
      "offset": 12
    }
  ],
  "location": "ApproveCandidateSteps.inputSalaryField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Room",
      "offset": 12
    }
  ],
  "location": "ApproveCandidateSteps.inputWorkPlaceField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Verblyuzhonok",
      "offset": 12
    }
  ],
  "location": "ApproveCandidateSteps.inputNickNameField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Send",
      "offset": 7
    }
  ],
  "location": "ApproveCandidateSteps.isAppearedButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 153100,
  "error_message": "java.lang.NoClassDefFoundError: Could not initialize class app.driver.SharedDriver\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.picocontainer.injectors.AbstractInjector.newInstance(AbstractInjector.java:145)\r\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:342)\r\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\r\n\tat org.picocontainer.injectors.AbstractInjectionFactory$LifecycleAdapter.getComponentInstance(AbstractInjectionFactory.java:56)\r\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\r\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\r\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\r\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:40)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat com.intellij.rt.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:66)\r\n\tat com.intellij.rt.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:109)\r\n",
  "status": "failed"
});
formatter.uri("approvedList_manager.feature");
formatter.feature({
  "line": 1,
  "name": "Approved List - Department Manager",
  "description": "",
  "id": "approved-list---department-manager",
  "keyword": "Feature"
});
formatter.before({
  "duration": 233400,
  "error_message": "java.lang.NoClassDefFoundError: Could not initialize class app.driver.SharedDriver\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.picocontainer.injectors.AbstractInjector.newInstance(AbstractInjector.java:145)\r\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:342)\r\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\r\n\tat org.picocontainer.injectors.AbstractInjectionFactory$LifecycleAdapter.getComponentInstance(AbstractInjectionFactory.java:56)\r\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\r\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\r\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\r\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:40)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat com.intellij.rt.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:66)\r\n\tat com.intellij.rt.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:109)\r\n",
  "status": "failed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Go to Login page",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Enter \u0027auto-test-manager@onyx.com\u0027 Text in Email Field",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Enter \u0027check\u0027 Text in Password Field",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Click on \u0027Sign In\u0027 Button",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 6
    }
  ],
  "location": "GlobalSteps.goToPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "auto-test-manager@onyx.com",
      "offset": 7
    }
  ],
  "location": "LoginSteps.inputEmail(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "check",
      "offset": 7
    }
  ],
  "location": "LoginSteps.inputPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Sign In",
      "offset": 10
    }
  ],
  "location": "LoginSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 10,
  "name": "Approved List Candidate Page",
  "description": "",
  "id": "approved-list---department-manager;approved-list-candidate-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@all"
    },
    {
      "line": 9,
      "name": "@smoke"
    },
    {
      "line": 9,
      "name": "@approvedlist"
    },
    {
      "line": 9,
      "name": "@test"
    },
    {
      "line": 9,
      "name": "@auto-test-manager"
    },
    {
      "line": 9,
      "name": "@onyx.com"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "Go to Approved List Candidate Page page",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Requested Page Available",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "\u0027Menu\u0027 Block is Appeared",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Is \u0027All Candidate\u0027 Element Appeared in Approved List Candidate Page",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Is \u0027Approved\u0027 Element Appeared in Approved List Candidate Page",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Is \u0027Give feedback on the candidate\u0027 Element Appeared in Approved List Candidate Page",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 19,
      "value": "#   Then \u0027Denied\u0027 Field is Appeared in Approved List Candidate Page"
    }
  ],
  "line": 20,
  "name": "Click \u0027Approved\u0027 Button in Approved List Candidate Page",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Click \u0027Give FeedBack On The Candidate\u0027 Button in Approved List Candidate Page",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Approved List Candidate Page",
      "offset": 6
    }
  ],
  "location": "GlobalSteps.goToPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Menu",
      "offset": 1
    }
  ],
  "location": "ProfileSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "All Candidate",
      "offset": 4
    }
  ],
  "location": "ApprovedListCandidateSteps.isAppearedElementInPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Approved",
      "offset": 4
    }
  ],
  "location": "ApprovedListCandidateSteps.isAppearedElementInPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Give feedback on the candidate",
      "offset": 4
    }
  ],
  "location": "ApprovedListCandidateSteps.isAppearedElementInPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Approved",
      "offset": 7
    }
  ],
  "location": "ApprovedListCandidateSteps.clickButtonInTable(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Give FeedBack On The Candidate",
      "offset": 7
    }
  ],
  "location": "ApprovedListCandidateSteps.clickButtonInTable(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 134200,
  "error_message": "java.lang.NoClassDefFoundError: Could not initialize class app.driver.SharedDriver\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.picocontainer.injectors.AbstractInjector.newInstance(AbstractInjector.java:145)\r\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:342)\r\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\r\n\tat org.picocontainer.injectors.AbstractInjectionFactory$LifecycleAdapter.getComponentInstance(AbstractInjectionFactory.java:56)\r\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\r\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\r\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\r\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:40)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat com.intellij.rt.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:66)\r\n\tat com.intellij.rt.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:109)\r\n",
  "status": "failed"
});
formatter.uri("candidateEdit_recruiter.feature");
formatter.feature({
  "line": 1,
  "name": "Candidate Edit Page - Recruiter",
  "description": "",
  "id": "candidate-edit-page---recruiter",
  "keyword": "Feature"
});
formatter.before({
  "duration": 160900,
  "error_message": "java.lang.NoClassDefFoundError: Could not initialize class app.driver.SharedDriver\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.picocontainer.injectors.AbstractInjector.newInstance(AbstractInjector.java:145)\r\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:342)\r\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\r\n\tat org.picocontainer.injectors.AbstractInjectionFactory$LifecycleAdapter.getComponentInstance(AbstractInjectionFactory.java:56)\r\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\r\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\r\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\r\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:40)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat com.intellij.rt.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:66)\r\n\tat com.intellij.rt.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:109)\r\n",
  "status": "failed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Go to Login page",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Enter \u0027auto-test@onyx.com\u0027 Text in Email Field",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Enter \u0027check\u0027 Text in Password Field",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Click on \u0027Sign In\u0027 Button",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 6
    }
  ],
  "location": "GlobalSteps.goToPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "auto-test@onyx.com",
      "offset": 7
    }
  ],
  "location": "LoginSteps.inputEmail(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "check",
      "offset": 7
    }
  ],
  "location": "LoginSteps.inputPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Sign In",
      "offset": 10
    }
  ],
  "location": "LoginSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 10,
  "name": "Candidate Edit Page Appeared",
  "description": "",
  "id": "candidate-edit-page---recruiter;candidate-edit-page-appeared",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@all"
    },
    {
      "line": 9,
      "name": "@smoke"
    },
    {
      "line": 9,
      "name": "@candidateedit"
    },
    {
      "line": 9,
      "name": "@test"
    },
    {
      "line": 9,
      "name": "@auto-test"
    },
    {
      "line": 9,
      "name": "@onyx.com"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "Go to Candidate Edit page",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Requested Page Available",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Check \u0027Photo Choose File\u0027 Button In Candidate Edit Page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Enter Text \u0027Auto_Test_v.1\u0027 In Name Field in Candidate Edit Page",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Enter Text \u0027Auto_Test_v.1\u0027 In Surname Field in Candidate Edit Page",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Enter Text \u0027QA Engineer\u0027 In Current Position Field in Candidate Edit Page",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Enter Text \u0027QA Engineer\u0027 In Applying Position Field in Candidate Edit Page",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Check \u0027CV Choose File\u0027 Button In Candidate Edit Page",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Enter Text \u0027Odessa\u0027 In Location Field in Candidate Edit Page",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Click \u0027Vacancy\u0027 Button in Candidate Edit Page",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Enter Text \u0027+380631234567\u0027 In Phone Field in Candidate Edit Page",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Enter Text \u0027autotest@gmail.com\u0027 In Email Field in Candidate Edit Page",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Enter Text \u0027https://www.linkedin.com/\u0027 In LinkedIn Field in Candidate Edit Page",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Enter Text \u0027https://www.facebook.com/\u0027 In Facebook Field in Candidate Edit Page",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Enter Text \u00272500\u0027 In Salary Field in Candidate Edit Page",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Enter Text \u00273+\u0027 In Experience Field in Candidate Edit Page",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Enter Text \u0027higher\u0027 In Education Field in Candidate Edit Page",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Enter Text \u0027yes\u0027 In Employment Field in Candidate Edit Page",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Enter Text \u0027Hello World\u0027 In Comment Field in Candidate Edit Page",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Enter Text \u0027Linux\u0027 In Skills Field",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "Click \u0027Add\u0027 Button in Candidate Edit Page",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "Enter Text \u0027MySQL\u0027 In Skills Field",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "Click \u0027Add\u0027 Button in Candidate Edit Page",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "Enter Text \u0027PHP\u0027 In Skills Field",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "Click \u0027Add\u0027 Button in Candidate Edit Page",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "Enter Text \u0027Jira\u0027 In Skills Field",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "Click \u0027Add\u0027 Button in Candidate Edit Page",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "Click \u0027Remove\u0027 Button in Candidate Edit Page",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "Click \u0027Remove\u0027 Button in Candidate Edit Page",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "Click \u0027Remove\u0027 Button in Candidate Edit Page",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "Click \u0027Remove\u0027 Button in Candidate Edit Page",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "Click \u0027Update\u0027 Button in Candidate Edit Page",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "Redirect to the Expected Page Worked",
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "Click \u0027Back\u0027 Button",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "Click \u0027back to list\u0027 Button in Candidate Edit Page",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "Redirect to the Expected Page Worked",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Candidate Edit",
      "offset": 6
    }
  ],
  "location": "GlobalSteps.goToPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Photo Choose File",
      "offset": 7
    }
  ],
  "location": "CandidateEditSteps.checkUploadFileButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Auto_Test_v.1",
      "offset": 12
    }
  ],
  "location": "CandidateEditSteps.inputNameField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Auto_Test_v.1",
      "offset": 12
    }
  ],
  "location": "CandidateEditSteps.inputSurnameField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "QA Engineer",
      "offset": 12
    }
  ],
  "location": "CandidateEditSteps.inputCurrentPositionField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "QA Engineer",
      "offset": 12
    }
  ],
  "location": "CandidateEditSteps.inputApplyingPositionField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "CV Choose File",
      "offset": 7
    }
  ],
  "location": "CandidateEditSteps.checkUploadFileButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Odessa",
      "offset": 12
    }
  ],
  "location": "CandidateEditSteps.inputLocationField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Vacancy",
      "offset": 7
    }
  ],
  "location": "CandidateEditSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "+380631234567",
      "offset": 12
    }
  ],
  "location": "CandidateEditSteps.inputPhoneField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "autotest@gmail.com",
      "offset": 12
    }
  ],
  "location": "CandidateEditSteps.inputEmailField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.linkedin.com/",
      "offset": 12
    }
  ],
  "location": "CandidateEditSteps.inputLinkedInField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.facebook.com/",
      "offset": 12
    }
  ],
  "location": "CandidateEditSteps.inputFacebookField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2500",
      "offset": 12
    }
  ],
  "location": "CandidateEditSteps.inputSalaryField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "3+",
      "offset": 12
    }
  ],
  "location": "CandidateEditSteps.inputExperienceField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "higher",
      "offset": 12
    }
  ],
  "location": "CandidateEditSteps.inputEducationField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "yes",
      "offset": 12
    }
  ],
  "location": "CandidateEditSteps.inputEmploymentField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Hello World",
      "offset": 12
    }
  ],
  "location": "CandidateEditSteps.inputCommentField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Linux",
      "offset": 12
    }
  ],
  "location": "CandidateEditSteps.inputSkills(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Add",
      "offset": 7
    }
  ],
  "location": "CandidateEditSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "MySQL",
      "offset": 12
    }
  ],
  "location": "CandidateEditSteps.inputSkills(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Add",
      "offset": 7
    }
  ],
  "location": "CandidateEditSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "PHP",
      "offset": 12
    }
  ],
  "location": "CandidateEditSteps.inputSkills(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Add",
      "offset": 7
    }
  ],
  "location": "CandidateEditSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Jira",
      "offset": 12
    }
  ],
  "location": "CandidateEditSteps.inputSkills(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Add",
      "offset": 7
    }
  ],
  "location": "CandidateEditSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Remove",
      "offset": 7
    }
  ],
  "location": "CandidateEditSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Remove",
      "offset": 7
    }
  ],
  "location": "CandidateEditSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Remove",
      "offset": 7
    }
  ],
  "location": "CandidateEditSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Remove",
      "offset": 7
    }
  ],
  "location": "CandidateEditSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Update",
      "offset": 7
    }
  ],
  "location": "CandidateEditSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButtonAppeared()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Back",
      "offset": 7
    }
  ],
  "location": "ProfileSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "back to list",
      "offset": 7
    }
  ],
  "location": "CandidateEditSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButtonAppeared()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 130600,
  "error_message": "java.lang.NoClassDefFoundError: Could not initialize class app.driver.SharedDriver\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.picocontainer.injectors.AbstractInjector.newInstance(AbstractInjector.java:145)\r\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:342)\r\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\r\n\tat org.picocontainer.injectors.AbstractInjectionFactory$LifecycleAdapter.getComponentInstance(AbstractInjectionFactory.java:56)\r\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\r\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\r\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\r\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:40)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat com.intellij.rt.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:66)\r\n\tat com.intellij.rt.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:109)\r\n",
  "status": "failed"
});
formatter.uri("candidateID_hr.feature");
formatter.feature({
  "line": 1,
  "name": "Candidate ID Page - HR",
  "description": "",
  "id": "candidate-id-page---hr",
  "keyword": "Feature"
});
formatter.before({
  "duration": 121700,
  "error_message": "java.lang.NoClassDefFoundError: Could not initialize class app.driver.SharedDriver\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.picocontainer.injectors.AbstractInjector.newInstance(AbstractInjector.java:145)\r\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:342)\r\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\r\n\tat org.picocontainer.injectors.AbstractInjectionFactory$LifecycleAdapter.getComponentInstance(AbstractInjectionFactory.java:56)\r\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\r\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\r\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\r\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:40)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat com.intellij.rt.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:66)\r\n\tat com.intellij.rt.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:109)\r\n",
  "status": "failed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Go to Login page",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Enter \u0027auto-test-hr@onyx.com\u0027 Text in Email Field",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Enter \u0027check\u0027 Text in Password Field",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Click on \u0027Sign In\u0027 Button",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 6
    }
  ],
  "location": "GlobalSteps.goToPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "auto-test-hr@onyx.com",
      "offset": 7
    }
  ],
  "location": "LoginSteps.inputEmail(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "check",
      "offset": 7
    }
  ],
  "location": "LoginSteps.inputPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Sign In",
      "offset": 10
    }
  ],
  "location": "LoginSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 10,
  "name": "CandidateID Page Appeared",
  "description": "",
  "id": "candidate-id-page---hr;candidateid-page-appeared",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@all"
    },
    {
      "line": 9,
      "name": "@smoke"
    },
    {
      "line": 9,
      "name": "@candidateid"
    },
    {
      "line": 9,
      "name": "@test"
    },
    {
      "line": 9,
      "name": "@auto-test-hr"
    },
    {
      "line": 9,
      "name": "@onyx.com"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "Go to Candidate ID page",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Requested Page Available",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "\u0027Menu\u0027 Block is Appeared",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "\u0027Candidate\u0027 Block is Appeared",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Is \u0027Edit Button\u0027 Button is Appeared in Candidate ID Page",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Is \u0027back to list\u0027 Button is Appeared in Candidate ID Page",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Is \u0027Candidate Status\u0027 Button is Appeared in Candidate ID Page",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Click \u0027edit\u0027 Button in Candidate ID Page",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Redirect to the Expected Page Worked",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "Click \u0027Back\u0027 Button in Candidate ID Page",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "Click \u0027back to list\u0027 Button in Candidate ID Page",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Redirect to the Expected Page Worked",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Candidate ID",
      "offset": 6
    }
  ],
  "location": "GlobalSteps.goToPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Menu",
      "offset": 1
    }
  ],
  "location": "ProfileSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Candidate",
      "offset": 1
    }
  ],
  "location": "ProfileSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Edit Button",
      "offset": 4
    }
  ],
  "location": "CandidateIDSteps.isButtonAvailable(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "back to list",
      "offset": 4
    }
  ],
  "location": "CandidateIDSteps.isButtonAvailable(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Candidate Status",
      "offset": 4
    }
  ],
  "location": "CandidateIDSteps.isButtonAvailable(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "edit",
      "offset": 7
    }
  ],
  "location": "CandidateIDSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButtonAppeared()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Back",
      "offset": 7
    }
  ],
  "location": "CandidateIDSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "back to list",
      "offset": 7
    }
  ],
  "location": "CandidateIDSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButtonAppeared()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 108600,
  "error_message": "java.lang.NoClassDefFoundError: Could not initialize class app.driver.SharedDriver\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.picocontainer.injectors.AbstractInjector.newInstance(AbstractInjector.java:145)\r\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:342)\r\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\r\n\tat org.picocontainer.injectors.AbstractInjectionFactory$LifecycleAdapter.getComponentInstance(AbstractInjectionFactory.java:56)\r\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\r\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\r\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\r\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:40)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat com.intellij.rt.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:66)\r\n\tat com.intellij.rt.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:109)\r\n",
  "status": "failed"
});
formatter.uri("candidateID_recruiter.feature");
formatter.feature({
  "line": 1,
  "name": "Candidate ID Page - Recruiter",
  "description": "",
  "id": "candidate-id-page---recruiter",
  "keyword": "Feature"
});
formatter.before({
  "duration": 205000,
  "error_message": "java.lang.NoClassDefFoundError: Could not initialize class app.driver.SharedDriver\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.picocontainer.injectors.AbstractInjector.newInstance(AbstractInjector.java:145)\r\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:342)\r\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\r\n\tat org.picocontainer.injectors.AbstractInjectionFactory$LifecycleAdapter.getComponentInstance(AbstractInjectionFactory.java:56)\r\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\r\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\r\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\r\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:40)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat com.intellij.rt.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:66)\r\n\tat com.intellij.rt.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:109)\r\n",
  "status": "failed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Go to Login page",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Enter \u0027auto-test@onyx.com\u0027 Text in Email Field",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Enter \u0027check\u0027 Text in Password Field",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Click on \u0027Sign In\u0027 Button",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 6
    }
  ],
  "location": "GlobalSteps.goToPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "auto-test@onyx.com",
      "offset": 7
    }
  ],
  "location": "LoginSteps.inputEmail(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "check",
      "offset": 7
    }
  ],
  "location": "LoginSteps.inputPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Sign In",
      "offset": 10
    }
  ],
  "location": "LoginSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 10,
  "name": "CandidateID Page Appeared",
  "description": "",
  "id": "candidate-id-page---recruiter;candidateid-page-appeared",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@all"
    },
    {
      "line": 9,
      "name": "@smoke"
    },
    {
      "line": 9,
      "name": "@candidateid"
    },
    {
      "line": 9,
      "name": "@test"
    },
    {
      "line": 9,
      "name": "@auto-test"
    },
    {
      "line": 9,
      "name": "@onyx.com"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "Go to Candidate ID page",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Requested Page Available",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "\u0027Menu\u0027 Block is Appeared",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "\u0027Candidate\u0027 Block is Appeared",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Is \u0027Edit Button\u0027 Button is Appeared in Candidate ID Page",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Is \u0027back to list\u0027 Button is Appeared in Candidate ID Page",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Is \u0027Candidate Status\u0027 Button is Appeared in Candidate ID Page",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Click \u0027edit\u0027 Button in Candidate ID Page",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Redirect to the Expected Page Worked",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "Click \u0027Back\u0027 Button in Candidate ID Page",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "Click \u0027back to list\u0027 Button in Candidate ID Page",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Redirect to the Expected Page Worked",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Candidate ID",
      "offset": 6
    }
  ],
  "location": "GlobalSteps.goToPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Menu",
      "offset": 1
    }
  ],
  "location": "ProfileSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Candidate",
      "offset": 1
    }
  ],
  "location": "ProfileSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Edit Button",
      "offset": 4
    }
  ],
  "location": "CandidateIDSteps.isButtonAvailable(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "back to list",
      "offset": 4
    }
  ],
  "location": "CandidateIDSteps.isButtonAvailable(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Candidate Status",
      "offset": 4
    }
  ],
  "location": "CandidateIDSteps.isButtonAvailable(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "edit",
      "offset": 7
    }
  ],
  "location": "CandidateIDSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButtonAppeared()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Back",
      "offset": 7
    }
  ],
  "location": "CandidateIDSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "back to list",
      "offset": 7
    }
  ],
  "location": "CandidateIDSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButtonAppeared()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 712300,
  "error_message": "java.lang.NoClassDefFoundError: Could not initialize class app.driver.SharedDriver\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.picocontainer.injectors.AbstractInjector.newInstance(AbstractInjector.java:145)\r\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:342)\r\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\r\n\tat org.picocontainer.injectors.AbstractInjectionFactory$LifecycleAdapter.getComponentInstance(AbstractInjectionFactory.java:56)\r\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\r\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\r\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\r\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:40)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat com.intellij.rt.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:66)\r\n\tat com.intellij.rt.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:109)\r\n",
  "status": "failed"
});
formatter.uri("candidateNew_recruiter.feature");
formatter.feature({
  "line": 1,
  "name": "Candidate New Page - Recruiter",
  "description": "",
  "id": "candidate-new-page---recruiter",
  "keyword": "Feature"
});
formatter.before({
  "duration": 200000,
  "error_message": "java.lang.NoClassDefFoundError: Could not initialize class app.driver.SharedDriver\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor6.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.picocontainer.injectors.AbstractInjector.newInstance(AbstractInjector.java:145)\r\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:342)\r\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\r\n\tat org.picocontainer.injectors.AbstractInjectionFactory$LifecycleAdapter.getComponentInstance(AbstractInjectionFactory.java:56)\r\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\r\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\r\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\r\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:40)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat com.intellij.rt.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:66)\r\n\tat com.intellij.rt.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:109)\r\n",
  "status": "failed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Go to Login page",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Enter \u0027auto-test@onyx.com\u0027 Text in Email Field",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Enter \u0027check\u0027 Text in Password Field",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Click on \u0027Sign In\u0027 Button",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 6
    }
  ],
  "location": "GlobalSteps.goToPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "auto-test@onyx.com",
      "offset": 7
    }
  ],
  "location": "LoginSteps.inputEmail(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "check",
      "offset": 7
    }
  ],
  "location": "LoginSteps.inputPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Sign In",
      "offset": 10
    }
  ],
  "location": "LoginSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 10,
  "name": "Candidate New Page Appeared",
  "description": "",
  "id": "candidate-new-page---recruiter;candidate-new-page-appeared",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@all"
    },
    {
      "line": 9,
      "name": "@smoke"
    },
    {
      "line": 9,
      "name": "@candidateNew"
    },
    {
      "line": 9,
      "name": "@test"
    },
    {
      "line": 9,
      "name": "@auto-test"
    },
    {
      "line": 9,
      "name": "@onyx.com"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "Go to Candidate New page",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Requested Page Available",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Check \u0027Photo Choose File\u0027 Button In Candidate New Page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Enter Text \u0027Vasya\u0027 In Name Field in Candidate New Page",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Enter Text \u0027Petrovich\u0027 In Surname Field in Candidate New Page",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Enter Text \u0027QA Engineer\u0027 In Current Position Field in Candidate New Page",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Enter Text \u0027QA Engineer\u0027 In Applying Position Field in Candidate New Page",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Check \u0027CV Choose File\u0027 Button In Candidate New Page",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Enter Text \u0027Odessa\u0027 In Location Field in Candidate New Page",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Enter Text \u0027+380631234567\u0027 In Phone Field in Candidate New Page",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Enter Text \u0027autotest@gmail.com\u0027 In Email Field in Candidate New Page",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Enter Text \u0027https://www.linkedin.com/\u0027 In LinkedIn Field in Candidate New Page",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Enter Text \u0027https://www.facebook.com/\u0027 In Facebook Field in Candidate New Page",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Enter Text \u00272500\u0027 In Salary Field in Candidate New Page",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Enter Text \u00273+\u0027 In Experience Field in Candidate New Page",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Enter Text \u0027higher\u0027 In Education Field in Candidate New Page",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Enter Text \u0027yes\u0027 In Employment Field in Candidate New Page",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Enter Text \u0027Hello World\u0027 In Comment Field in Candidate New Page",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Enter Text \u0027Linux\u0027 In Skills Field in Candidate New Page",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Click \u0027Add\u0027 Button in Candidate New Page",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "Enter Text \u0027MySQL\u0027 In Skills Field in Candidate New Page",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "Click \u0027Add\u0027 Button in Candidate New Page",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "Enter Text \u0027PHP\u0027 In Skills Field in Candidate New Page",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "Click \u0027Add\u0027 Button in Candidate New Page",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "Enter Text \u0027Jira\u0027 In Skills Field in Candidate New Page",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "Click \u0027Add\u0027 Button in Candidate New Page",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "Click \u0027Remove\u0027 Button in Candidate New Page",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "Click \u0027Remove\u0027 Button in Candidate New Page",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "Click \u0027Remove\u0027 Button in Candidate New Page",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "Click \u0027Remove\u0027 Button in Candidate New Page",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "Click \u0027back to list\u0027 Button in Candidate New Page",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "Redirect to the Expected Page Worked",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Candidate New",
      "offset": 6
    }
  ],
  "location": "GlobalSteps.goToPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Photo Choose File",
      "offset": 7
    }
  ],
  "location": "CandidateNewSteps.checkUploadFileButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Vasya",
      "offset": 12
    }
  ],
  "location": "CandidateNewSteps.inputNameField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Petrovich",
      "offset": 12
    }
  ],
  "location": "CandidateNewSteps.inputSurNameField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "QA Engineer",
      "offset": 12
    }
  ],
  "location": "CandidateNewSteps.inputCurrentPositionField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "QA Engineer",
      "offset": 12
    }
  ],
  "location": "CandidateNewSteps.inputApplyingPositionField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "CV Choose File",
      "offset": 7
    }
  ],
  "location": "CandidateNewSteps.checkUploadFileButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Odessa",
      "offset": 12
    }
  ],
  "location": "CandidateNewSteps.inputLocationField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "+380631234567",
      "offset": 12
    }
  ],
  "location": "CandidateNewSteps.inputPhoneField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "autotest@gmail.com",
      "offset": 12
    }
  ],
  "location": "CandidateNewSteps.inputEmailField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.linkedin.com/",
      "offset": 12
    }
  ],
  "location": "CandidateNewSteps.inputLinkedInField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.facebook.com/",
      "offset": 12
    }
  ],
  "location": "CandidateNewSteps.inputFacebookField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2500",
      "offset": 12
    }
  ],
  "location": "CandidateNewSteps.inputSalaryField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "3+",
      "offset": 12
    }
  ],
  "location": "CandidateNewSteps.inputExperienceField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "higher",
      "offset": 12
    }
  ],
  "location": "CandidateNewSteps.inputEducationField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "yes",
      "offset": 12
    }
  ],
  "location": "CandidateNewSteps.inputEmploymentField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Hello World",
      "offset": 12
    }
  ],
  "location": "CandidateNewSteps.inputCommentField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Linux",
      "offset": 12
    }
  ],
  "location": "CandidateNewSteps.inputSkills(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Add",
      "offset": 7
    }
  ],
  "location": "CandidateNewSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "MySQL",
      "offset": 12
    }
  ],
  "location": "CandidateNewSteps.inputSkills(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Add",
      "offset": 7
    }
  ],
  "location": "CandidateNewSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "PHP",
      "offset": 12
    }
  ],
  "location": "CandidateNewSteps.inputSkills(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Add",
      "offset": 7
    }
  ],
  "location": "CandidateNewSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Jira",
      "offset": 12
    }
  ],
  "location": "CandidateNewSteps.inputSkills(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Add",
      "offset": 7
    }
  ],
  "location": "CandidateNewSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Remove",
      "offset": 7
    }
  ],
  "location": "CandidateNewSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Remove",
      "offset": 7
    }
  ],
  "location": "CandidateNewSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Remove",
      "offset": 7
    }
  ],
  "location": "CandidateNewSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Remove",
      "offset": 7
    }
  ],
  "location": "CandidateNewSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "back to list",
      "offset": 7
    }
  ],
  "location": "CandidateNewSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButtonAppeared()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 136300,
  "error_message": "java.lang.NoClassDefFoundError: Could not initialize class app.driver.SharedDriver\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor6.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.picocontainer.injectors.AbstractInjector.newInstance(AbstractInjector.java:145)\r\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:342)\r\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\r\n\tat org.picocontainer.injectors.AbstractInjectionFactory$LifecycleAdapter.getComponentInstance(AbstractInjectionFactory.java:56)\r\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\r\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\r\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\r\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:40)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat com.intellij.rt.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:66)\r\n\tat com.intellij.rt.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:109)\r\n",
  "status": "failed"
});
formatter.uri("candidate_hr.feature");
formatter.feature({
  "line": 1,
  "name": "Candidate Page - HR",
  "description": "",
  "id": "candidate-page---hr",
  "keyword": "Feature"
});
formatter.before({
  "duration": 217300,
  "error_message": "java.lang.NoClassDefFoundError: Could not initialize class app.driver.SharedDriver\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor6.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.picocontainer.injectors.AbstractInjector.newInstance(AbstractInjector.java:145)\r\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:342)\r\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\r\n\tat org.picocontainer.injectors.AbstractInjectionFactory$LifecycleAdapter.getComponentInstance(AbstractInjectionFactory.java:56)\r\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\r\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\r\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\r\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:40)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat com.intellij.rt.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:66)\r\n\tat com.intellij.rt.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:109)\r\n",
  "status": "failed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Go to Login page",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Enter \u0027auto-test-hr@onyx.com\u0027 Text in Email Field",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Enter \u0027check\u0027 Text in Password Field",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Click on \u0027Sign In\u0027 Button",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 6
    }
  ],
  "location": "GlobalSteps.goToPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "auto-test-hr@onyx.com",
      "offset": 7
    }
  ],
  "location": "LoginSteps.inputEmail(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "check",
      "offset": 7
    }
  ],
  "location": "LoginSteps.inputPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Sign In",
      "offset": 10
    }
  ],
  "location": "LoginSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 10,
  "name": "Candidate Page Appeared",
  "description": "",
  "id": "candidate-page---hr;candidate-page-appeared",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@all"
    },
    {
      "line": 9,
      "name": "@smoke"
    },
    {
      "line": 9,
      "name": "@candidate"
    },
    {
      "line": 9,
      "name": "@test"
    },
    {
      "line": 9,
      "name": "@auto-test-hr"
    },
    {
      "line": 9,
      "name": "@onyx.com"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "Go to Candidate page",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Requested Page Available",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "\u0027Menu\u0027 Block is Appeared",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "\u0027Candidate Index\u0027 Block is Appeared",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Is \u0027Search\u0027 Block is Appeared in Candidate Page",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Is \u0027Photo\u0027 Block is Appeared in Candidate Page",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Is \u0027Name\u0027 Block is Appeared in Candidate Page",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Is \u0027Surname\u0027 Block is Appeared in Candidate Page",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Is \u0027Applying position\u0027 Block is Appeared in Candidate Page",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Is \u0027Location\u0027 Block is Appeared in Candidate Page",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Is \u0027Phone\u0027 Block is Appeared in Candidate Page",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Click \u0027Pagination 2 Page\u0027 Field and Button in Candidate Page",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Click \u0027Pagination 3 Page\u0027 Field and Button in Candidate Page",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Click \u0027Pagination Last Page\u0027 Field and Button in Candidate Page",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Click \u0027Pagination First Page\u0027 Field and Button in Candidate Page",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "Enter Text \u0027Odessa\u0027 In Location Field in Candidate Page",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "Click \u0027Location Set\u0027 Field and Button in Candidate Page",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "Enter Text \u0027QA Engineer\u0027 In Applying Position Field in Candidate Page",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "Click \u0027Applying Set\u0027 Field and Button in Candidate Page",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "Enter Text \u0027Linux\u0027 In Skills Field in Candidate Page",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "Click \u0027Skills Set\u0027 Field and Button in Candidate Page",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "Enter Text \u0027Auto Test\u0027 In Full Name Field in Candidate Page",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "Click \u0027Full Name Set\u0027 Field and Button in Candidate Page",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "Click \u0027Location Unset\u0027 Field and Button in Candidate Page",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "Click \u0027Applying Unset\u0027 Field and Button in Candidate Page",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "Click \u0027Skills Unset\u0027 Field and Button in Candidate Page",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "Click \u0027Full Name Unset\u0027 Field and Button in Candidate Page",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "Click \u0027Clear filters\u0027 Field and Button in Candidate Page",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "Click \u0027Create New\u0027 Field and Button in Candidate Page",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "Redirect to the Expected Page Worked",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Candidate",
      "offset": 6
    }
  ],
  "location": "GlobalSteps.goToPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Menu",
      "offset": 1
    }
  ],
  "location": "ProfileSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Candidate Index",
      "offset": 1
    }
  ],
  "location": "ProfileSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Search",
      "offset": 4
    }
  ],
  "location": "CandidateSteps.isTHeadAvailable(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Photo",
      "offset": 4
    }
  ],
  "location": "CandidateSteps.isTHeadAvailable(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Name",
      "offset": 4
    }
  ],
  "location": "CandidateSteps.isTHeadAvailable(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Surname",
      "offset": 4
    }
  ],
  "location": "CandidateSteps.isTHeadAvailable(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Applying position",
      "offset": 4
    }
  ],
  "location": "CandidateSteps.isTHeadAvailable(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Location",
      "offset": 4
    }
  ],
  "location": "CandidateSteps.isTHeadAvailable(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Phone",
      "offset": 4
    }
  ],
  "location": "CandidateSteps.isTHeadAvailable(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Pagination 2 Page",
      "offset": 7
    }
  ],
  "location": "CandidateSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Pagination 3 Page",
      "offset": 7
    }
  ],
  "location": "CandidateSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Pagination Last Page",
      "offset": 7
    }
  ],
  "location": "CandidateSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Pagination First Page",
      "offset": 7
    }
  ],
  "location": "CandidateSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Odessa",
      "offset": 12
    }
  ],
  "location": "CandidateSteps.inputLocationField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Location Set",
      "offset": 7
    }
  ],
  "location": "CandidateSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "QA Engineer",
      "offset": 12
    }
  ],
  "location": "CandidateSteps.inputApplyingPositionField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Applying Set",
      "offset": 7
    }
  ],
  "location": "CandidateSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Linux",
      "offset": 12
    }
  ],
  "location": "CandidateSteps.inputSkillField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Skills Set",
      "offset": 7
    }
  ],
  "location": "CandidateSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Auto Test",
      "offset": 12
    }
  ],
  "location": "CandidateSteps.inputFullNameField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Full Name Set",
      "offset": 7
    }
  ],
  "location": "CandidateSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Location Unset",
      "offset": 7
    }
  ],
  "location": "CandidateSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Applying Unset",
      "offset": 7
    }
  ],
  "location": "CandidateSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Skills Unset",
      "offset": 7
    }
  ],
  "location": "CandidateSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Full Name Unset",
      "offset": 7
    }
  ],
  "location": "CandidateSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Clear filters",
      "offset": 7
    }
  ],
  "location": "CandidateSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Create New",
      "offset": 7
    }
  ],
  "location": "CandidateSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButtonAppeared()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 128400,
  "error_message": "java.lang.NoClassDefFoundError: Could not initialize class app.driver.SharedDriver\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor6.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.picocontainer.injectors.AbstractInjector.newInstance(AbstractInjector.java:145)\r\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:342)\r\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\r\n\tat org.picocontainer.injectors.AbstractInjectionFactory$LifecycleAdapter.getComponentInstance(AbstractInjectionFactory.java:56)\r\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\r\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\r\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\r\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:40)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat com.intellij.rt.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:66)\r\n\tat com.intellij.rt.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:109)\r\n",
  "status": "failed"
});
formatter.uri("candidate_recruiter.feature");
formatter.feature({
  "line": 1,
  "name": "Candidate Page - Recruiter",
  "description": "",
  "id": "candidate-page---recruiter",
  "keyword": "Feature"
});
formatter.before({
  "duration": 183100,
  "error_message": "java.lang.NoClassDefFoundError: Could not initialize class app.driver.SharedDriver\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor6.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.picocontainer.injectors.AbstractInjector.newInstance(AbstractInjector.java:145)\r\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:342)\r\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\r\n\tat org.picocontainer.injectors.AbstractInjectionFactory$LifecycleAdapter.getComponentInstance(AbstractInjectionFactory.java:56)\r\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\r\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\r\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\r\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:40)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat com.intellij.rt.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:66)\r\n\tat com.intellij.rt.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:109)\r\n",
  "status": "failed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Go to Login page",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Enter \u0027auto-test@onyx.com\u0027 Text in Email Field",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Enter \u0027check\u0027 Text in Password Field",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Click on \u0027Sign In\u0027 Button",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 6
    }
  ],
  "location": "GlobalSteps.goToPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "auto-test@onyx.com",
      "offset": 7
    }
  ],
  "location": "LoginSteps.inputEmail(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "check",
      "offset": 7
    }
  ],
  "location": "LoginSteps.inputPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Sign In",
      "offset": 10
    }
  ],
  "location": "LoginSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 10,
  "name": "Candidate Page Appeared",
  "description": "",
  "id": "candidate-page---recruiter;candidate-page-appeared",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@all"
    },
    {
      "line": 9,
      "name": "@smoke"
    },
    {
      "line": 9,
      "name": "@candidate"
    },
    {
      "line": 9,
      "name": "@test"
    },
    {
      "line": 9,
      "name": "@auto-test"
    },
    {
      "line": 9,
      "name": "@onyx.com"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "Go to Candidate page",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Requested Page Available",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "\u0027Menu\u0027 Block is Appeared",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "\u0027Candidate Index\u0027 Block is Appeared",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Is \u0027Search\u0027 Block is Appeared in Candidate Page",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Is \u0027Photo\u0027 Block is Appeared in Candidate Page",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Is \u0027Name\u0027 Block is Appeared in Candidate Page",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Is \u0027Surname\u0027 Block is Appeared in Candidate Page",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Is \u0027Applying position\u0027 Block is Appeared in Candidate Page",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Is \u0027Location\u0027 Block is Appeared in Candidate Page",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Is \u0027Phone\u0027 Block is Appeared in Candidate Page",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Click \u0027Pagination 2 Page\u0027 Field and Button in Candidate Page",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Click \u0027Pagination 3 Page\u0027 Field and Button in Candidate Page",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Click \u0027Pagination Last Page\u0027 Field and Button in Candidate Page",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Click \u0027Pagination First Page\u0027 Field and Button in Candidate Page",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "Enter Text \u0027Odessa\u0027 In Location Field in Candidate Page",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "Click \u0027Location Set\u0027 Field and Button in Candidate Page",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "Enter Text \u0027QA Engineer\u0027 In Applying Position Field in Candidate Page",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "Click \u0027Applying Set\u0027 Field and Button in Candidate Page",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "Enter Text \u0027Linux\u0027 In Skills Field in Candidate Page",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "Click \u0027Skills Set\u0027 Field and Button in Candidate Page",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "Enter Text \u0027Auto Test\u0027 In Full Name Field in Candidate Page",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "Click \u0027Full Name Set\u0027 Field and Button in Candidate Page",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "Click \u0027Location Unset\u0027 Field and Button in Candidate Page",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "Click \u0027Applying Unset\u0027 Field and Button in Candidate Page",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "Click \u0027Skills Unset\u0027 Field and Button in Candidate Page",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "Click \u0027Full Name Unset\u0027 Field and Button in Candidate Page",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "Click \u0027Clear filters\u0027 Field and Button in Candidate Page",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "Click \u0027Create New\u0027 Field and Button in Candidate Page",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "Redirect to the Expected Page Worked",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Candidate",
      "offset": 6
    }
  ],
  "location": "GlobalSteps.goToPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Menu",
      "offset": 1
    }
  ],
  "location": "ProfileSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Candidate Index",
      "offset": 1
    }
  ],
  "location": "ProfileSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Search",
      "offset": 4
    }
  ],
  "location": "CandidateSteps.isTHeadAvailable(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Photo",
      "offset": 4
    }
  ],
  "location": "CandidateSteps.isTHeadAvailable(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Name",
      "offset": 4
    }
  ],
  "location": "CandidateSteps.isTHeadAvailable(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Surname",
      "offset": 4
    }
  ],
  "location": "CandidateSteps.isTHeadAvailable(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Applying position",
      "offset": 4
    }
  ],
  "location": "CandidateSteps.isTHeadAvailable(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Location",
      "offset": 4
    }
  ],
  "location": "CandidateSteps.isTHeadAvailable(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Phone",
      "offset": 4
    }
  ],
  "location": "CandidateSteps.isTHeadAvailable(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Pagination 2 Page",
      "offset": 7
    }
  ],
  "location": "CandidateSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Pagination 3 Page",
      "offset": 7
    }
  ],
  "location": "CandidateSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Pagination Last Page",
      "offset": 7
    }
  ],
  "location": "CandidateSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Pagination First Page",
      "offset": 7
    }
  ],
  "location": "CandidateSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Odessa",
      "offset": 12
    }
  ],
  "location": "CandidateSteps.inputLocationField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Location Set",
      "offset": 7
    }
  ],
  "location": "CandidateSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "QA Engineer",
      "offset": 12
    }
  ],
  "location": "CandidateSteps.inputApplyingPositionField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Applying Set",
      "offset": 7
    }
  ],
  "location": "CandidateSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Linux",
      "offset": 12
    }
  ],
  "location": "CandidateSteps.inputSkillField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Skills Set",
      "offset": 7
    }
  ],
  "location": "CandidateSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Auto Test",
      "offset": 12
    }
  ],
  "location": "CandidateSteps.inputFullNameField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Full Name Set",
      "offset": 7
    }
  ],
  "location": "CandidateSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Location Unset",
      "offset": 7
    }
  ],
  "location": "CandidateSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Applying Unset",
      "offset": 7
    }
  ],
  "location": "CandidateSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Skills Unset",
      "offset": 7
    }
  ],
  "location": "CandidateSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Full Name Unset",
      "offset": 7
    }
  ],
  "location": "CandidateSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Clear filters",
      "offset": 7
    }
  ],
  "location": "CandidateSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Create New",
      "offset": 7
    }
  ],
  "location": "CandidateSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButtonAppeared()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 149200,
  "error_message": "java.lang.NoClassDefFoundError: Could not initialize class app.driver.SharedDriver\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor6.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.picocontainer.injectors.AbstractInjector.newInstance(AbstractInjector.java:145)\r\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:342)\r\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\r\n\tat org.picocontainer.injectors.AbstractInjectionFactory$LifecycleAdapter.getComponentInstance(AbstractInjectionFactory.java:56)\r\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\r\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\r\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\r\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:40)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat com.intellij.rt.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:66)\r\n\tat com.intellij.rt.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:109)\r\n",
  "status": "failed"
});
formatter.uri("changePassword.feature");
formatter.feature({
  "line": 1,
  "name": "Change Password Page",
  "description": "",
  "id": "change-password-page",
  "keyword": "Feature"
});
formatter.before({
  "duration": 234300,
  "error_message": "java.lang.NoClassDefFoundError: Could not initialize class app.driver.SharedDriver\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor6.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.picocontainer.injectors.AbstractInjector.newInstance(AbstractInjector.java:145)\r\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:342)\r\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\r\n\tat org.picocontainer.injectors.AbstractInjectionFactory$LifecycleAdapter.getComponentInstance(AbstractInjectionFactory.java:56)\r\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\r\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\r\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\r\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:40)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat com.intellij.rt.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:66)\r\n\tat com.intellij.rt.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:109)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 4,
  "name": "change password test",
  "description": "",
  "id": "change-password-page;change-password-test",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@all"
    },
    {
      "line": 3,
      "name": "@smoke"
    },
    {
      "line": 3,
      "name": "@changepassword"
    },
    {
      "line": 3,
      "name": "@test"
    },
    {
      "line": 3,
      "name": "@auto-test3"
    },
    {
      "line": 3,
      "name": "@onyx.com"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Go to Login page",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Requested Page Available",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Enter \u0027auto-test3@onyx.com\u0027 Text in Email Field",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Enter \u0027check\u0027 Text in Password Field",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Click on \u0027Sign In\u0027 Button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Redirect to the Expected Page Worked",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Go to User ID page",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Requested Page Available",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Click on \u0027Change Password\u0027 Button in User ID Page",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Redirect to the Expected Page Worked",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Enter \u0027check\u0027 Text in Old Password Field in Change Password Page",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Enter \u00275678\u0027 Text in New Password Field in Change Password Page",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Enter \u00271234\u0027 Text in Confirm Password Field in Change Password Page",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Click \u0027Change Password\u0027 Button in Change Password Page",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "A Warning Has Appeared In Change Password Page",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Enter \u002712345678\u0027 Text in Old Password Field in Change Password Page",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Enter \u00271234\u0027 Text in New Password Field in Change Password Page",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Enter \u00271234\u0027 Text in Confirm Password Field in Change Password Page",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Click \u0027Change Password\u0027 Button in Change Password Page",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "A Warning Has Appeared In Change Password Page",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "Enter \u0027check\u0027 Text in Old Password Field in Change Password Page",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "Enter \u0027check\u0027 Text in New Password Field in Change Password Page",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "Enter \u0027check\u0027 Text in Confirm Password Field in Change Password Page",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "Click \u0027eye old\u0027 Button in Change Password Page",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "Click \u0027eye new\u0027 Button in Change Password Page",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "Click \u0027eye confirm\u0027 Button in Change Password Page",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "Click \u0027eye old\u0027 Button in Change Password Page",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "Click \u0027eye new\u0027 Button in Change Password Page",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "Click \u0027eye confirm\u0027 Button in Change Password Page",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "Click \u0027Change Password\u0027 Button in Change Password Page",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "Redirect to the Expected Page Worked",
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "Go to User ID page",
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "Requested Page Available",
  "keyword": "Then "
});
formatter.step({
  "line": 52,
  "name": "Click on \u0027Logout\u0027 Button in User ID Page",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "Redirect to the Expected Page Worked",
  "keyword": "Then "
});
formatter.step({
  "line": 56,
  "name": "Go to Login page",
  "keyword": "When "
});
formatter.step({
  "line": 57,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "Requested Page Available",
  "keyword": "Then "
});
formatter.step({
  "line": 60,
  "name": "Enter \u0027auto-test3@onyx.com\u0027 Text in Email Field",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "Enter \u0027check\u0027 Text in Password Field",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "Click on \u0027Sign In\u0027 Button",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "Redirect to the Expected Page Worked",
  "keyword": "Then "
});
formatter.step({
  "line": 66,
  "name": "Go to User ID page",
  "keyword": "When "
});
formatter.step({
  "line": 67,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "Requested Page Available",
  "keyword": "Then "
});
formatter.step({
  "line": 70,
  "name": "Click on \u0027Change Password\u0027 Button in User ID Page",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "Redirect to the Expected Page Worked",
  "keyword": "Then "
});
formatter.step({
  "line": 74,
  "name": "Enter \u0027check\u0027 Text in Old Password Field in Change Password Page",
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "Enter \u0027check\u0027 Text in New Password Field in Change Password Page",
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "Enter \u0027check\u0027 Text in Confirm Password Field in Change Password Page",
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "Click \u0027eye old\u0027 Button in Change Password Page",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "Click \u0027eye new\u0027 Button in Change Password Page",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "Click \u0027eye confirm\u0027 Button in Change Password Page",
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "Click \u0027eye old\u0027 Button in Change Password Page",
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "Click \u0027eye new\u0027 Button in Change Password Page",
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "Click \u0027eye confirm\u0027 Button in Change Password Page",
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "Click \u0027Change Password\u0027 Button in Change Password Page",
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 87,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 88,
  "name": "Redirect to the Expected Page Worked",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 6
    }
  ],
  "location": "GlobalSteps.goToPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "auto-test3@onyx.com",
      "offset": 7
    }
  ],
  "location": "LoginSteps.inputEmail(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "check",
      "offset": 7
    }
  ],
  "location": "LoginSteps.inputPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Sign In",
      "offset": 10
    }
  ],
  "location": "LoginSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButtonAppeared()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "User ID",
      "offset": 6
    }
  ],
  "location": "GlobalSteps.goToPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Change Password",
      "offset": 10
    }
  ],
  "location": "UserIDSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButtonAppeared()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "check",
      "offset": 7
    }
  ],
  "location": "ChangePasswordSteps.inputOldPasswordField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "5678",
      "offset": 7
    }
  ],
  "location": "ChangePasswordSteps.inputNewPasswordField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1234",
      "offset": 7
    }
  ],
  "location": "ChangePasswordSteps.inputConfirmPasswordField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Change Password",
      "offset": 7
    }
  ],
  "location": "ChangePasswordSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ChangePasswordSteps.isAvailableErrorMassage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "12345678",
      "offset": 7
    }
  ],
  "location": "ChangePasswordSteps.inputOldPasswordField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1234",
      "offset": 7
    }
  ],
  "location": "ChangePasswordSteps.inputNewPasswordField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1234",
      "offset": 7
    }
  ],
  "location": "ChangePasswordSteps.inputConfirmPasswordField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Change Password",
      "offset": 7
    }
  ],
  "location": "ChangePasswordSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ChangePasswordSteps.isAvailableErrorMassage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "check",
      "offset": 7
    }
  ],
  "location": "ChangePasswordSteps.inputOldPasswordField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "check",
      "offset": 7
    }
  ],
  "location": "ChangePasswordSteps.inputNewPasswordField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "check",
      "offset": 7
    }
  ],
  "location": "ChangePasswordSteps.inputConfirmPasswordField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "eye old",
      "offset": 7
    }
  ],
  "location": "ChangePasswordSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "eye new",
      "offset": 7
    }
  ],
  "location": "ChangePasswordSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "eye confirm",
      "offset": 7
    }
  ],
  "location": "ChangePasswordSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "eye old",
      "offset": 7
    }
  ],
  "location": "ChangePasswordSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "eye new",
      "offset": 7
    }
  ],
  "location": "ChangePasswordSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "eye confirm",
      "offset": 7
    }
  ],
  "location": "ChangePasswordSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Change Password",
      "offset": 7
    }
  ],
  "location": "ChangePasswordSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButtonAppeared()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "User ID",
      "offset": 6
    }
  ],
  "location": "GlobalSteps.goToPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Logout",
      "offset": 10
    }
  ],
  "location": "UserIDSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButtonAppeared()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 6
    }
  ],
  "location": "GlobalSteps.goToPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "auto-test3@onyx.com",
      "offset": 7
    }
  ],
  "location": "LoginSteps.inputEmail(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "check",
      "offset": 7
    }
  ],
  "location": "LoginSteps.inputPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Sign In",
      "offset": 10
    }
  ],
  "location": "LoginSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButtonAppeared()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "User ID",
      "offset": 6
    }
  ],
  "location": "GlobalSteps.goToPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Change Password",
      "offset": 10
    }
  ],
  "location": "UserIDSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButtonAppeared()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "check",
      "offset": 7
    }
  ],
  "location": "ChangePasswordSteps.inputOldPasswordField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "check",
      "offset": 7
    }
  ],
  "location": "ChangePasswordSteps.inputNewPasswordField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "check",
      "offset": 7
    }
  ],
  "location": "ChangePasswordSteps.inputConfirmPasswordField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "eye old",
      "offset": 7
    }
  ],
  "location": "ChangePasswordSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "eye new",
      "offset": 7
    }
  ],
  "location": "ChangePasswordSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "eye confirm",
      "offset": 7
    }
  ],
  "location": "ChangePasswordSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "eye old",
      "offset": 7
    }
  ],
  "location": "ChangePasswordSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "eye new",
      "offset": 7
    }
  ],
  "location": "ChangePasswordSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "eye confirm",
      "offset": 7
    }
  ],
  "location": "ChangePasswordSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Change Password",
      "offset": 7
    }
  ],
  "location": "ChangePasswordSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButtonAppeared()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 195300,
  "error_message": "java.lang.NoClassDefFoundError: Could not initialize class app.driver.SharedDriver\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor6.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.picocontainer.injectors.AbstractInjector.newInstance(AbstractInjector.java:145)\r\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:342)\r\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\r\n\tat org.picocontainer.injectors.AbstractInjectionFactory$LifecycleAdapter.getComponentInstance(AbstractInjectionFactory.java:56)\r\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\r\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\r\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\r\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:40)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat com.intellij.rt.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:66)\r\n\tat com.intellij.rt.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:109)\r\n",
  "status": "failed"
});
formatter.uri("createNewAccount.feature");
formatter.feature({
  "line": 1,
  "name": "Create New Account Page",
  "description": "",
  "id": "create-new-account-page",
  "keyword": "Feature"
});
formatter.before({
  "duration": 752800,
  "error_message": "java.lang.NoClassDefFoundError: Could not initialize class app.driver.SharedDriver\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor6.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.picocontainer.injectors.AbstractInjector.newInstance(AbstractInjector.java:145)\r\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:342)\r\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\r\n\tat org.picocontainer.injectors.AbstractInjectionFactory$LifecycleAdapter.getComponentInstance(AbstractInjectionFactory.java:56)\r\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\r\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\r\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\r\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:40)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat com.intellij.rt.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:66)\r\n\tat com.intellij.rt.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:109)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 4,
  "name": "create account test",
  "description": "",
  "id": "create-new-account-page;create-account-test",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@all"
    },
    {
      "line": 3,
      "name": "@smoke"
    },
    {
      "line": 3,
      "name": "@createaccount"
    },
    {
      "line": 3,
      "name": "@test"
    },
    {
      "line": 3,
      "name": "@automation"
    },
    {
      "line": 3,
      "name": "@onyx.com"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Go to Login page",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Requested Page Available",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Click \u0027Create an account\u0027 Button in Create Account Page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Redirect to the Expected Page Worked",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "\u0027Email account creation\u0027 Block is Appeared",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Enter \u0027dodik@gmail.com\u0027 Text in Email Field in Create Account Page",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Click \u0027Send\u0027 Button in Create Account Page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "A Warning Has Appeared",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Enter \u0027automation@onyx.com\u0027 Text in Email Field in Create Account Page",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Click \u0027Send\u0027 Button in Create Account Page",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "A Warning Has Appeared",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Click \u0027Back\u0027 Button in Create Account Page",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Redirect to the Expected Page Worked",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 6
    }
  ],
  "location": "GlobalSteps.goToPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Create an account",
      "offset": 7
    }
  ],
  "location": "CreateNewAccountSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButtonAppeared()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Email account creation",
      "offset": 1
    }
  ],
  "location": "ProfileSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "dodik@gmail.com",
      "offset": 7
    }
  ],
  "location": "CreateNewAccountSteps.InputEmailField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Send",
      "offset": 7
    }
  ],
  "location": "CreateNewAccountSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateNewAccountSteps.isAvailableErrorMassage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "automation@onyx.com",
      "offset": 7
    }
  ],
  "location": "CreateNewAccountSteps.InputEmailField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Send",
      "offset": 7
    }
  ],
  "location": "CreateNewAccountSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateNewAccountSteps.isAvailableErrorMassage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Back",
      "offset": 7
    }
  ],
  "location": "CreateNewAccountSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButtonAppeared()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 146200,
  "error_message": "java.lang.NoClassDefFoundError: Could not initialize class app.driver.SharedDriver\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor6.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.picocontainer.injectors.AbstractInjector.newInstance(AbstractInjector.java:145)\r\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:342)\r\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\r\n\tat org.picocontainer.injectors.AbstractInjectionFactory$LifecycleAdapter.getComponentInstance(AbstractInjectionFactory.java:56)\r\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\r\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\r\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\r\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:40)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat com.intellij.rt.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:66)\r\n\tat com.intellij.rt.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:109)\r\n",
  "status": "failed"
});
formatter.uri("interviewDenyed_recruiter.feature");
formatter.feature({
  "line": 1,
  "name": "Interview Denyed Page - Recruiter",
  "description": "",
  "id": "interview-denyed-page---recruiter",
  "keyword": "Feature"
});
formatter.before({
  "duration": 183000,
  "error_message": "java.lang.NoClassDefFoundError: Could not initialize class app.driver.SharedDriver\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor6.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.picocontainer.injectors.AbstractInjector.newInstance(AbstractInjector.java:145)\r\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:342)\r\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\r\n\tat org.picocontainer.injectors.AbstractInjectionFactory$LifecycleAdapter.getComponentInstance(AbstractInjectionFactory.java:56)\r\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\r\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\r\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\r\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:40)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat com.intellij.rt.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:66)\r\n\tat com.intellij.rt.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:109)\r\n",
  "status": "failed"
});
formatter.background({
  "line": 3,
  "name": "Login",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Go to Login page",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Enter \u0027auto-test@onyx.com\u0027 Text in Email Field",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Enter \u0027check\u0027 Text in Password Field",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Click on \u0027Sign In\u0027 Button",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 6
    }
  ],
  "location": "GlobalSteps.goToPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "auto-test@onyx.com",
      "offset": 7
    }
  ],
  "location": "LoginSteps.inputEmail(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "check",
      "offset": 7
    }
  ],
  "location": "LoginSteps.inputPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Sign In",
      "offset": 10
    }
  ],
  "location": "LoginSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 10,
  "name": "Interview Page",
  "description": "",
  "id": "interview-denyed-page---recruiter;interview-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@all"
    },
    {
      "line": 9,
      "name": "@test"
    },
    {
      "line": 9,
      "name": "@interviewDenyed"
    },
    {
      "line": 9,
      "name": "@smoke"
    },
    {
      "line": 9,
      "name": "@auto-test"
    },
    {
      "line": 9,
      "name": "@onyx.com"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "Go to Interview Denyed page",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Requested Page Available",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Click \u00271 CheckBox\u0027 in Interview Denyed Page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Click \u00272 CheckBox\u0027 in Interview Denyed Page",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Click \u00273 CheckBox\u0027 in Interview Denyed Page",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Click \u00274 CheckBox\u0027 in Interview Denyed Page",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Click \u00275 CheckBox\u0027 in Interview Denyed Page",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Click \u00276 CheckBox\u0027 in Interview Denyed Page",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Click \u00277 CheckBox\u0027 in Interview Denyed Page",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Click \u00278 CheckBox\u0027 in Interview Denyed Page",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Click \u00279 CheckBox\u0027 in Interview Denyed Page",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Click \u002710 CheckBox\u0027 in Interview Denyed Page",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Click \u002711 CheckBox\u0027 in Interview Denyed Page",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Click \u002712 CheckBox\u0027 in Interview Denyed Page",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Enter \u0027Погода хорошая\u0027 Text in Interview Denyed Page",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Interview Denyed",
      "offset": 6
    }
  ],
  "location": "GlobalSteps.goToPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1 CheckBox",
      "offset": 7
    }
  ],
  "location": "InterviewDenyedSteps.clickCheckBox(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2 CheckBox",
      "offset": 7
    }
  ],
  "location": "InterviewDenyedSteps.clickCheckBox(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "3 CheckBox",
      "offset": 7
    }
  ],
  "location": "InterviewDenyedSteps.clickCheckBox(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "4 CheckBox",
      "offset": 7
    }
  ],
  "location": "InterviewDenyedSteps.clickCheckBox(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "5 CheckBox",
      "offset": 7
    }
  ],
  "location": "InterviewDenyedSteps.clickCheckBox(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "6 CheckBox",
      "offset": 7
    }
  ],
  "location": "InterviewDenyedSteps.clickCheckBox(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "7 CheckBox",
      "offset": 7
    }
  ],
  "location": "InterviewDenyedSteps.clickCheckBox(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "8 CheckBox",
      "offset": 7
    }
  ],
  "location": "InterviewDenyedSteps.clickCheckBox(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "9 CheckBox",
      "offset": 7
    }
  ],
  "location": "InterviewDenyedSteps.clickCheckBox(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "10 CheckBox",
      "offset": 7
    }
  ],
  "location": "InterviewDenyedSteps.clickCheckBox(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "11 CheckBox",
      "offset": 7
    }
  ],
  "location": "InterviewDenyedSteps.clickCheckBox(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "12 CheckBox",
      "offset": 7
    }
  ],
  "location": "InterviewDenyedSteps.clickCheckBox(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Погода хорошая",
      "offset": 7
    }
  ],
  "location": "InterviewDenyedSteps.inputTextField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 139100,
  "error_message": "java.lang.NoClassDefFoundError: Could not initialize class app.driver.SharedDriver\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor6.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.picocontainer.injectors.AbstractInjector.newInstance(AbstractInjector.java:145)\r\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:342)\r\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\r\n\tat org.picocontainer.injectors.AbstractInjectionFactory$LifecycleAdapter.getComponentInstance(AbstractInjectionFactory.java:56)\r\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\r\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\r\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\r\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:40)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat com.intellij.rt.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:66)\r\n\tat com.intellij.rt.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:109)\r\n",
  "status": "failed"
});
formatter.uri("interview_recruiter.feature");
formatter.feature({
  "line": 1,
  "name": "Interview Page - Recruiter",
  "description": "",
  "id": "interview-page---recruiter",
  "keyword": "Feature"
});
formatter.before({
  "duration": 179400,
  "error_message": "java.lang.NoClassDefFoundError: Could not initialize class app.driver.SharedDriver\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor6.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.picocontainer.injectors.AbstractInjector.newInstance(AbstractInjector.java:145)\r\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:342)\r\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\r\n\tat org.picocontainer.injectors.AbstractInjectionFactory$LifecycleAdapter.getComponentInstance(AbstractInjectionFactory.java:56)\r\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\r\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\r\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\r\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:40)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat com.intellij.rt.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:66)\r\n\tat com.intellij.rt.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:109)\r\n",
  "status": "failed"
});
formatter.background({
  "line": 3,
  "name": "Login",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Go to Login page",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Enter \u0027auto-test@onyx.com\u0027 Text in Email Field",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Enter \u0027check\u0027 Text in Password Field",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Click on \u0027Sign In\u0027 Button",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 6
    }
  ],
  "location": "GlobalSteps.goToPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "auto-test@onyx.com",
      "offset": 7
    }
  ],
  "location": "LoginSteps.inputEmail(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "check",
      "offset": 7
    }
  ],
  "location": "LoginSteps.inputPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Sign In",
      "offset": 10
    }
  ],
  "location": "LoginSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 10,
  "name": "Interview Page",
  "description": "",
  "id": "interview-page---recruiter;interview-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@all"
    },
    {
      "line": 9,
      "name": "@test"
    },
    {
      "line": 9,
      "name": "@interview"
    },
    {
      "line": 9,
      "name": "@smoke"
    },
    {
      "line": 9,
      "name": "@auto-test"
    },
    {
      "line": 9,
      "name": "@onyx.com"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "Go to Interview page",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Requested Page Available",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Is \u0027Status Candidate\u0027 Block is Appeared in Interview Page",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Is \u0027Candidate did not Accepted our offer\u0027 Block is Appeared in Interview Page",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Is \u0027Back to candidates list\u0027 Block is Appeared in Interview Page",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Is \u0027Name\u0027 Block is Appeared in Interview Page",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Is \u0027Surname\u0027 Block is Appeared in Interview Page",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Is \u0027Phone\u0027 Block is Appeared in Interview Page",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Is \u0027Candidate Status\u0027 Block is Appeared in Interview Page",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Is \u0027Interview\u0027 Block is Appeared in Interview Page",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Is \u0027Request\u0027 Block is Appeared in Interview Page",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "Is \u0027Created\u0027 Block is Appeared in Interview Page",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "Is \u0027By\u0027 Block is Appeared in Interview Page",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "Click\u0027Back to candidates list\u0027 Button in Interview Page",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Redirect to the Expected Page Worked",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Interview",
      "offset": 6
    }
  ],
  "location": "GlobalSteps.goToPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Status Candidate",
      "offset": 4
    }
  ],
  "location": "InterviewSteps.isAppearedTableFieldName(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Candidate did not Accepted our offer",
      "offset": 4
    }
  ],
  "location": "InterviewSteps.isAppearedTableFieldName(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Back to candidates list",
      "offset": 4
    }
  ],
  "location": "InterviewSteps.isAppearedTableFieldName(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Name",
      "offset": 4
    }
  ],
  "location": "InterviewSteps.isAppearedTableFieldName(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Surname",
      "offset": 4
    }
  ],
  "location": "InterviewSteps.isAppearedTableFieldName(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Phone",
      "offset": 4
    }
  ],
  "location": "InterviewSteps.isAppearedTableFieldName(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Candidate Status",
      "offset": 4
    }
  ],
  "location": "InterviewSteps.isAppearedTableFieldName(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Interview",
      "offset": 4
    }
  ],
  "location": "InterviewSteps.isAppearedTableFieldName(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Request",
      "offset": 4
    }
  ],
  "location": "InterviewSteps.isAppearedTableFieldName(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Created",
      "offset": 4
    }
  ],
  "location": "InterviewSteps.isAppearedTableFieldName(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "By",
      "offset": 4
    }
  ],
  "location": "InterviewSteps.isAppearedTableFieldName(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Back to candidates list",
      "offset": 6
    }
  ],
  "location": "InterviewSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButtonAppeared()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 181100,
  "error_message": "java.lang.NoClassDefFoundError: Could not initialize class app.driver.SharedDriver\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor6.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.picocontainer.injectors.AbstractInjector.newInstance(AbstractInjector.java:145)\r\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:342)\r\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\r\n\tat org.picocontainer.injectors.AbstractInjectionFactory$LifecycleAdapter.getComponentInstance(AbstractInjectionFactory.java:56)\r\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\r\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\r\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\r\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:40)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat com.intellij.rt.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:66)\r\n\tat com.intellij.rt.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:109)\r\n",
  "status": "failed"
});
formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Page",
  "description": "",
  "id": "login-page",
  "keyword": "Feature"
});
formatter.before({
  "duration": 171800,
  "error_message": "java.lang.NoClassDefFoundError: Could not initialize class app.driver.SharedDriver\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor6.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.picocontainer.injectors.AbstractInjector.newInstance(AbstractInjector.java:145)\r\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:342)\r\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\r\n\tat org.picocontainer.injectors.AbstractInjectionFactory$LifecycleAdapter.getComponentInstance(AbstractInjectionFactory.java:56)\r\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\r\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\r\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\r\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:40)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat com.intellij.rt.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:66)\r\n\tat com.intellij.rt.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:109)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 4,
  "name": "Simple manual user login",
  "description": "",
  "id": "login-page;simple-manual-user-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@all"
    },
    {
      "line": 3,
      "name": "@smoke"
    },
    {
      "line": 3,
      "name": "@login"
    },
    {
      "line": 3,
      "name": "@test"
    },
    {
      "line": 3,
      "name": "@auto-test"
    },
    {
      "line": 3,
      "name": "@onyx.com"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Go to Login page",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Requested Page Available",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Enter \u0027notlogin\u0027 Text in Email Field",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Enter \u0027notpassword\u0027 Text in Password Field",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Click on \u0027Sign In\u0027 Button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "A Warning About The Wrong Name And Password Appeared",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Enter \u0027auto-test@onyx.com\u0027 Text in Email Field",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Enter \u0027check\u0027 Text in Password Field",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Click on \u0027Sign In\u0027 Button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Redirect to the Expected Page Worked",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "\u0027Menu\u0027 Block is Appeared",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Click on \u0027Nexteum\u0027 Button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 6
    }
  ],
  "location": "GlobalSteps.goToPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "notlogin",
      "offset": 7
    }
  ],
  "location": "LoginSteps.inputEmail(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "notpassword",
      "offset": 7
    }
  ],
  "location": "LoginSteps.inputPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Sign In",
      "offset": 10
    }
  ],
  "location": "LoginSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.isAvailableAlert()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "auto-test@onyx.com",
      "offset": 7
    }
  ],
  "location": "LoginSteps.inputEmail(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "check",
      "offset": 7
    }
  ],
  "location": "LoginSteps.inputPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Sign In",
      "offset": 10
    }
  ],
  "location": "LoginSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButtonAppeared()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Menu",
      "offset": 1
    }
  ],
  "location": "ProfileSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Nexteum",
      "offset": 10
    }
  ],
  "location": "LoginSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 200200,
  "error_message": "java.lang.NoClassDefFoundError: Could not initialize class app.driver.SharedDriver\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor6.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.picocontainer.injectors.AbstractInjector.newInstance(AbstractInjector.java:145)\r\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:342)\r\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\r\n\tat org.picocontainer.injectors.AbstractInjectionFactory$LifecycleAdapter.getComponentInstance(AbstractInjectionFactory.java:56)\r\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\r\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\r\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\r\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:40)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat com.intellij.rt.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:66)\r\n\tat com.intellij.rt.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:109)\r\n",
  "status": "failed"
});
formatter.uri("managePhpTeam.feature");
formatter.feature({
  "line": 1,
  "name": "Manage Php Team Page - Account Manager",
  "description": "",
  "id": "manage-php-team-page---account-manager",
  "keyword": "Feature"
});
formatter.before({
  "duration": 228600,
  "error_message": "java.lang.NoClassDefFoundError: Could not initialize class app.driver.SharedDriver\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor6.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.picocontainer.injectors.AbstractInjector.newInstance(AbstractInjector.java:145)\r\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:342)\r\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\r\n\tat org.picocontainer.injectors.AbstractInjectionFactory$LifecycleAdapter.getComponentInstance(AbstractInjectionFactory.java:56)\r\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\r\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\r\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\r\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:40)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat jdk.internal.reflect.GeneratedMethodAccessor17.invoke(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat com.intellij.rt.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:66)\r\n\tat com.intellij.rt.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:109)\r\n",
  "status": "failed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Go to Login page",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Enter \u0027auto-test-limon4-zorgan@nexteum.com\u0027 Text in Email Field",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Enter \u0027check\u0027 Text in Password Field",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Click on \u0027Sign In\u0027 Button",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 6
    }
  ],
  "location": "GlobalSteps.goToPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "auto-test-limon4-zorgan@nexteum.com",
      "offset": 7
    }
  ],
  "location": "LoginSteps.inputEmail(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "check",
      "offset": 7
    }
  ],
  "location": "LoginSteps.inputPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Sign In",
      "offset": 10
    }
  ],
  "location": "LoginSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 10,
  "name": "Check Manage Php Team Page Page",
  "description": "",
  "id": "manage-php-team-page---account-manager;check-manage-php-team-page-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@all"
    },
    {
      "line": 9,
      "name": "@smoke"
    },
    {
      "line": 9,
      "name": "@managePhpTeam"
    },
    {
      "line": 9,
      "name": "@test"
    },
    {
      "line": 9,
      "name": "@auto-test-limon4-zorgan"
    },
    {
      "line": 9,
      "name": "@nexteum.com"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "Go to Manage PHP Team page",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "\u0027Menu\u0027 Block is Appeared",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Check Table Name In Manage PHP Team Page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Manage PHP Team",
      "offset": 6
    }
  ],
  "location": "GlobalSteps.goToPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Menu",
      "offset": 1
    }
  ],
  "location": "ProfileSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ManagePhpTeamSteps.checkNameTable()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 276900,
  "error_message": "java.lang.NoClassDefFoundError: Could not initialize class app.driver.SharedDriver\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor6.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.picocontainer.injectors.AbstractInjector.newInstance(AbstractInjector.java:145)\r\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:342)\r\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\r\n\tat org.picocontainer.injectors.AbstractInjectionFactory$LifecycleAdapter.getComponentInstance(AbstractInjectionFactory.java:56)\r\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\r\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\r\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\r\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:40)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat jdk.internal.reflect.GeneratedMethodAccessor17.invoke(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat com.intellij.rt.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:66)\r\n\tat com.intellij.rt.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:109)\r\n",
  "status": "failed"
});
formatter.uri("monthlySdt.feature");
formatter.feature({
  "line": 1,
  "name": "MonthlySdt Page - Recruiter",
  "description": "",
  "id": "monthlysdt-page---recruiter",
  "keyword": "Feature"
});
formatter.before({
  "duration": 147200,
  "error_message": "java.lang.NoClassDefFoundError: Could not initialize class app.driver.SharedDriver\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor6.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.picocontainer.injectors.AbstractInjector.newInstance(AbstractInjector.java:145)\r\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:342)\r\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\r\n\tat org.picocontainer.injectors.AbstractInjectionFactory$LifecycleAdapter.getComponentInstance(AbstractInjectionFactory.java:56)\r\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\r\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\r\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\r\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:40)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat jdk.internal.reflect.GeneratedMethodAccessor17.invoke(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat com.intellij.rt.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:66)\r\n\tat com.intellij.rt.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:109)\r\n",
  "status": "failed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Go to Login page",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Enter \u0027auto-test@onyx.com\u0027 Text in Email Field",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Enter \u0027check\u0027 Text in Password Field",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Click on \u0027Sign In\u0027 Button",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 6
    }
  ],
  "location": "GlobalSteps.goToPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "auto-test@onyx.com",
      "offset": 7
    }
  ],
  "location": "LoginSteps.inputEmail(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "check",
      "offset": 7
    }
  ],
  "location": "LoginSteps.inputPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Sign In",
      "offset": 10
    }
  ],
  "location": "LoginSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 10,
  "name": "MonthlySdt Page Appeared",
  "description": "",
  "id": "monthlysdt-page---recruiter;monthlysdt-page-appeared",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@all"
    },
    {
      "line": 9,
      "name": "@smoke"
    },
    {
      "line": 9,
      "name": "@monthlysdt"
    },
    {
      "line": 9,
      "name": "@test"
    },
    {
      "line": 9,
      "name": "@auto-test"
    },
    {
      "line": 9,
      "name": "@onyx.com"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "Go to MonthlySdt page",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Requested Page Available",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "\u0027Menu\u0027 Block is Appeared",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "\u0027MonthlySdt index\u0027 Block is Appeared",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Is \u0027Count\u0027 Block is Appeared in MonthlySdt Page",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Is \u0027Email\u0027 Block is Appeared in MonthlySdt Page",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Is \u0027Name\u0027 Block is Appeared in MonthlySdt Page",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Is \u0027Create_date\u0027 Block is Appeared in MonthlySdt Page",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Is \u0027actions\u0027 Block is Appeared in MonthlySdt Page",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Click \u0027show\u0027 Button in MonthlySdt Page",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Redirect to the Expected Page Worked",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "MonthlySdt",
      "offset": 6
    }
  ],
  "location": "GlobalSteps.goToPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Menu",
      "offset": 1
    }
  ],
  "location": "ProfileSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "MonthlySdt index",
      "offset": 1
    }
  ],
  "location": "ProfileSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Count",
      "offset": 4
    }
  ],
  "location": "MonthlySdtSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Email",
      "offset": 4
    }
  ],
  "location": "MonthlySdtSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Name",
      "offset": 4
    }
  ],
  "location": "MonthlySdtSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Create_date",
      "offset": 4
    }
  ],
  "location": "MonthlySdtSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "actions",
      "offset": 4
    }
  ],
  "location": "MonthlySdtSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "show",
      "offset": 7
    }
  ],
  "location": "MonthlySdtSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButtonAppeared()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 142000,
  "error_message": "java.lang.NoClassDefFoundError: Could not initialize class app.driver.SharedDriver\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor6.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.picocontainer.injectors.AbstractInjector.newInstance(AbstractInjector.java:145)\r\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:342)\r\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\r\n\tat org.picocontainer.injectors.AbstractInjectionFactory$LifecycleAdapter.getComponentInstance(AbstractInjectionFactory.java:56)\r\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\r\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\r\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\r\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:40)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat jdk.internal.reflect.GeneratedMethodAccessor17.invoke(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat com.intellij.rt.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:66)\r\n\tat com.intellij.rt.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:109)\r\n",
  "status": "failed"
});
formatter.uri("newEmployeeAdditional_recruiter.feature");
formatter.feature({
  "line": 1,
  "name": "New Employee Additional Page - Recruiter",
  "description": "",
  "id": "new-employee-additional-page---recruiter",
  "keyword": "Feature"
});
formatter.before({
  "duration": 319800,
  "error_message": "java.lang.NoClassDefFoundError: Could not initialize class app.driver.SharedDriver\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor6.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.picocontainer.injectors.AbstractInjector.newInstance(AbstractInjector.java:145)\r\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:342)\r\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\r\n\tat org.picocontainer.injectors.AbstractInjectionFactory$LifecycleAdapter.getComponentInstance(AbstractInjectionFactory.java:56)\r\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\r\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\r\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\r\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:40)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat jdk.internal.reflect.GeneratedMethodAccessor17.invoke(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat com.intellij.rt.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:66)\r\n\tat com.intellij.rt.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:109)\r\n",
  "status": "failed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Go to Login page",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Enter \u0027auto-test@onyx.com\u0027 Text in Email Field",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Enter \u0027check\u0027 Text in Password Field",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Click on \u0027Sign In\u0027 Button",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 6
    }
  ],
  "location": "GlobalSteps.goToPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "auto-test@onyx.com",
      "offset": 7
    }
  ],
  "location": "LoginSteps.inputEmail(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "check",
      "offset": 7
    }
  ],
  "location": "LoginSteps.inputPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Sign In",
      "offset": 10
    }
  ],
  "location": "LoginSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 10,
  "name": "New Employee Additional Page Appeared",
  "description": "",
  "id": "new-employee-additional-page---recruiter;new-employee-additional-page-appeared",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@all"
    },
    {
      "line": 9,
      "name": "@smoke"
    },
    {
      "line": 9,
      "name": "@additional"
    },
    {
      "line": 9,
      "name": "@test"
    },
    {
      "line": 9,
      "name": "@auto-test"
    },
    {
      "line": 9,
      "name": "@onyx.com"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "Go to New Employee Additional page",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Requested Page Available",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "\u0027Menu\u0027 Block is Appeared",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Table Header \u0027Request\u0027 Field is Appeared in New Employee Additional Page",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Table Header \u0027Created\u0027 Field is Appeared in New Employee Additional Page",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Table Header \u0027By\u0027 Field is Appeared in New Employee Additional Page",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Enter Text \u0027Vasya Kozulkin\u0027 In Full Name Field in New Employee Additional Page",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Select Sex \u0027Male\u0027 In Sex Field in New Employee Additional Page",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Select Year \u00271990\u0027 In Year Field in New Employee Additional Page",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Select Month \u0027Jul\u0027 In Month Field in New Employee Additional Page",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Select Day \u00278\u0027 In Day Field in New Employee Additional Page",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Select Status \u0027Married\u0027 In Marital Status Field in New Employee Additional Page",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Enter Text\u00272\u0027 In Children Field in New Employee Additional Page",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Is \u0027Transfer Candidate to Employee\u0027 Button Appeared in New Employee Additional Page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "New Employee Additional",
      "offset": 6
    }
  ],
  "location": "GlobalSteps.goToPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Menu",
      "offset": 1
    }
  ],
  "location": "ProfileSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Request",
      "offset": 14
    }
  ],
  "location": "NewEmployeeAdditionalSteps.isTableHeaderAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Created",
      "offset": 14
    }
  ],
  "location": "NewEmployeeAdditionalSteps.isTableHeaderAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "By",
      "offset": 14
    }
  ],
  "location": "NewEmployeeAdditionalSteps.isTableHeaderAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Vasya Kozulkin",
      "offset": 12
    }
  ],
  "location": "NewEmployeeAdditionalSteps.inputFullName(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Male",
      "offset": 12
    }
  ],
  "location": "NewEmployeeAdditionalSteps.selectSex(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1990",
      "offset": 13
    }
  ],
  "location": "NewEmployeeAdditionalSteps.selectYear(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Jul",
      "offset": 14
    }
  ],
  "location": "NewEmployeeAdditionalSteps.selectMonth(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "8",
      "offset": 12
    }
  ],
  "location": "NewEmployeeAdditionalSteps.selectDay(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Married",
      "offset": 15
    }
  ],
  "location": "NewEmployeeAdditionalSteps.selectMarital(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 11
    }
  ],
  "location": "NewEmployeeAdditionalSteps.inputChildren(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "NewEmployeeAdditionalSteps.isButtonAppeared()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 175100,
  "error_message": "java.lang.NoClassDefFoundError: Could not initialize class app.driver.SharedDriver\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor6.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.picocontainer.injectors.AbstractInjector.newInstance(AbstractInjector.java:145)\r\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:342)\r\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\r\n\tat org.picocontainer.injectors.AbstractInjectionFactory$LifecycleAdapter.getComponentInstance(AbstractInjectionFactory.java:56)\r\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\r\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\r\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\r\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:40)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat jdk.internal.reflect.GeneratedMethodAccessor17.invoke(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat com.intellij.rt.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:66)\r\n\tat com.intellij.rt.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:109)\r\n",
  "status": "failed"
});
formatter.uri("newEmployeeOnboarding_recruiter.feature");
formatter.feature({
  "line": 1,
  "name": "New Employee Onboarding Page - Recruiter",
  "description": "",
  "id": "new-employee-onboarding-page---recruiter",
  "keyword": "Feature"
});
formatter.before({
  "duration": 140200,
  "error_message": "java.lang.NoClassDefFoundError: Could not initialize class app.driver.SharedDriver\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor6.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.picocontainer.injectors.AbstractInjector.newInstance(AbstractInjector.java:145)\r\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:342)\r\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\r\n\tat org.picocontainer.injectors.AbstractInjectionFactory$LifecycleAdapter.getComponentInstance(AbstractInjectionFactory.java:56)\r\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\r\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\r\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\r\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:40)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat jdk.internal.reflect.GeneratedMethodAccessor17.invoke(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat com.intellij.rt.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:66)\r\n\tat com.intellij.rt.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:109)\r\n",
  "status": "failed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Go to Login page",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Enter \u0027auto-test@onyx.com\u0027 Text in Email Field",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Enter \u0027check\u0027 Text in Password Field",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Click on \u0027Sign In\u0027 Button",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 6
    }
  ],
  "location": "GlobalSteps.goToPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "auto-test@onyx.com",
      "offset": 7
    }
  ],
  "location": "LoginSteps.inputEmail(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "check",
      "offset": 7
    }
  ],
  "location": "LoginSteps.inputPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Sign In",
      "offset": 10
    }
  ],
  "location": "LoginSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 10,
  "name": "New Employee Onboarding Page Appeared",
  "description": "",
  "id": "new-employee-onboarding-page---recruiter;new-employee-onboarding-page-appeared",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@all"
    },
    {
      "line": 9,
      "name": "@smoke"
    },
    {
      "line": 9,
      "name": "@onboarding"
    },
    {
      "line": 9,
      "name": "@test"
    },
    {
      "line": 9,
      "name": "@auto-test"
    },
    {
      "line": 9,
      "name": "@onyx.com"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "Go to New Employee Onboarding page",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Requested Page Available",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "\u0027Menu\u0027 Block is Appeared",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Table Header \u0027Request\u0027 Field is Appeared in New Employee Onboarding Page",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Table Header \u0027Created\u0027 Field is Appeared in New Employee Onboarding Page",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Table Header \u0027By\u0027 Field is Appeared in New Employee Onboarding Page",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Table Header \u0027Photo\u0027 Field is Appeared in New Employee Onboarding Page",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Table Header \u0027Name\u0027 Field is Appeared in New Employee Onboarding Page",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Table Header \u0027Surname\u0027 Field is Appeared in New Employee Onboarding Page",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Table Header \u0027Applying position\u0027 Field is Appeared in New Employee Onboarding Page",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Table Header \u0027Location\u0027 Field is Appeared in New Employee Onboarding Page",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "Table Header \u0027Phone\u0027 Field is Appeared in New Employee Onboarding Page",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "Table Header \u0027Request Status\u0027 Field is Appeared in New Employee Onboarding Page",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "Table Header \u0027Candidate Status\u0027 Field is Appeared in New Employee Onboarding Page",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "Check \u0027Status Vacancy\u0027 in New Employee Onboarding Page",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Click \u0027Done\u0027 Button in New Employee Onboarding Page",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Redirect to the Expected Page Worked",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "New Employee Onboarding",
      "offset": 6
    }
  ],
  "location": "GlobalSteps.goToPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Menu",
      "offset": 1
    }
  ],
  "location": "ProfileSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Request",
      "offset": 14
    }
  ],
  "location": "NewEmployeeOnboardingSteps.isTableHeaderAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Created",
      "offset": 14
    }
  ],
  "location": "NewEmployeeOnboardingSteps.isTableHeaderAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "By",
      "offset": 14
    }
  ],
  "location": "NewEmployeeOnboardingSteps.isTableHeaderAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Photo",
      "offset": 14
    }
  ],
  "location": "NewEmployeeOnboardingSteps.isTableHeaderAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Name",
      "offset": 14
    }
  ],
  "location": "NewEmployeeOnboardingSteps.isTableHeaderAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Surname",
      "offset": 14
    }
  ],
  "location": "NewEmployeeOnboardingSteps.isTableHeaderAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Applying position",
      "offset": 14
    }
  ],
  "location": "NewEmployeeOnboardingSteps.isTableHeaderAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Location",
      "offset": 14
    }
  ],
  "location": "NewEmployeeOnboardingSteps.isTableHeaderAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Phone",
      "offset": 14
    }
  ],
  "location": "NewEmployeeOnboardingSteps.isTableHeaderAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Request Status",
      "offset": 14
    }
  ],
  "location": "NewEmployeeOnboardingSteps.isTableHeaderAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Candidate Status",
      "offset": 14
    }
  ],
  "location": "NewEmployeeOnboardingSteps.isTableHeaderAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Status Vacancy",
      "offset": 7
    }
  ],
  "location": "NewEmployeeOnboardingSteps.checkStatus(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Done",
      "offset": 7
    }
  ],
  "location": "NewEmployeeOnboardingSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButtonAppeared()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 335800,
  "error_message": "java.lang.NoClassDefFoundError: Could not initialize class app.driver.SharedDriver\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor6.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.picocontainer.injectors.AbstractInjector.newInstance(AbstractInjector.java:145)\r\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:342)\r\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\r\n\tat org.picocontainer.injectors.AbstractInjectionFactory$LifecycleAdapter.getComponentInstance(AbstractInjectionFactory.java:56)\r\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\r\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\r\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\r\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:40)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat jdk.internal.reflect.GeneratedMethodAccessor17.invoke(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat com.intellij.rt.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:66)\r\n\tat com.intellij.rt.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:109)\r\n",
  "status": "failed"
});
formatter.uri("profile_hr.feature");
formatter.feature({
  "line": 1,
  "name": "Profile Page - HR",
  "description": "",
  "id": "profile-page---hr",
  "keyword": "Feature"
});
formatter.before({
  "duration": 164300,
  "error_message": "java.lang.NoClassDefFoundError: Could not initialize class app.driver.SharedDriver\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor6.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.picocontainer.injectors.AbstractInjector.newInstance(AbstractInjector.java:145)\r\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:342)\r\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\r\n\tat org.picocontainer.injectors.AbstractInjectionFactory$LifecycleAdapter.getComponentInstance(AbstractInjectionFactory.java:56)\r\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\r\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\r\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\r\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:40)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat jdk.internal.reflect.GeneratedMethodAccessor17.invoke(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat com.intellij.rt.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:66)\r\n\tat com.intellij.rt.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:109)\r\n",
  "status": "failed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Go to Login page",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Enter \u0027auto-test-hr@onyx.com\u0027 Text in Email Field",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Enter \u0027check\u0027 Text in Password Field",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Click on \u0027Sign In\u0027 Button",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 6
    }
  ],
  "location": "GlobalSteps.goToPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "auto-test-hr@onyx.com",
      "offset": 7
    }
  ],
  "location": "LoginSteps.inputEmail(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "check",
      "offset": 7
    }
  ],
  "location": "LoginSteps.inputPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Sign In",
      "offset": 10
    }
  ],
  "location": "LoginSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 10,
  "name": "Check Profile Page",
  "description": "",
  "id": "profile-page---hr;check-profile-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@all"
    },
    {
      "line": 9,
      "name": "@smoke"
    },
    {
      "line": 9,
      "name": "@profile"
    },
    {
      "line": 9,
      "name": "@test"
    },
    {
      "line": 9,
      "name": "@auto-test-hr"
    },
    {
      "line": 9,
      "name": "@onyx.com"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "Go to Profile page",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Requested Page Available",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "\u0027Menu\u0027 Block is Appeared",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "\u0027Status Block\u0027 Block is Appeared",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "\u0027Information Block\u0027 Block is Appeared",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "\u0027SDT - Current\u0027 Block is Appeared",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "\u0027SDT - Future\u0027 Block is Appeared",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "\u0027SDT left\u0027 Block is Appeared",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "\u0027SDT used\u0027 Block is Appeared",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "\u0027SDT at own expense\u0027 Block is Appeared",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "\u0027Working Hours information Card\u0027 Block is Appeared",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "\u0027SDT Request Card\u0027 Block is Appeared",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "\u0027Documentation Card\u0027 Block is Appeared",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "\u0027Начислено часов:\u0027 Block is Appeared",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "\u0027Требуется часов:\u0027 Block is Appeared",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "Check Hours Required In Profile Page",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Click \u0027Make request\u0027 Button",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Redirect to the Expected Page Worked",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "Click \u0027Back\u0027 Button",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "Click \u0027Details\u0027 Button",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "Click \u0027Back\u0027 Button",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Profile",
      "offset": 6
    }
  ],
  "location": "GlobalSteps.goToPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Menu",
      "offset": 1
    }
  ],
  "location": "ProfileSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Status Block",
      "offset": 1
    }
  ],
  "location": "ProfileSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Information Block",
      "offset": 1
    }
  ],
  "location": "ProfileSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "SDT - Current",
      "offset": 1
    }
  ],
  "location": "ProfileSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "SDT - Future",
      "offset": 1
    }
  ],
  "location": "ProfileSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "SDT left",
      "offset": 1
    }
  ],
  "location": "ProfileSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "SDT used",
      "offset": 1
    }
  ],
  "location": "ProfileSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "SDT at own expense",
      "offset": 1
    }
  ],
  "location": "ProfileSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Working Hours information Card",
      "offset": 1
    }
  ],
  "location": "ProfileSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "SDT Request Card",
      "offset": 1
    }
  ],
  "location": "ProfileSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Documentation Card",
      "offset": 1
    }
  ],
  "location": "ProfileSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Начислено часов:",
      "offset": 1
    }
  ],
  "location": "ProfileSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Требуется часов:",
      "offset": 1
    }
  ],
  "location": "ProfileSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.checkHoursRequired()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Make request",
      "offset": 7
    }
  ],
  "location": "ProfileSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButtonAppeared()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Back",
      "offset": 7
    }
  ],
  "location": "ProfileSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Details",
      "offset": 7
    }
  ],
  "location": "ProfileSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Back",
      "offset": 7
    }
  ],
  "location": "ProfileSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 196900,
  "error_message": "java.lang.NoClassDefFoundError: Could not initialize class app.driver.SharedDriver\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor6.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.picocontainer.injectors.AbstractInjector.newInstance(AbstractInjector.java:145)\r\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:342)\r\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\r\n\tat org.picocontainer.injectors.AbstractInjectionFactory$LifecycleAdapter.getComponentInstance(AbstractInjectionFactory.java:56)\r\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\r\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\r\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\r\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:40)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat jdk.internal.reflect.GeneratedMethodAccessor17.invoke(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat com.intellij.rt.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:66)\r\n\tat com.intellij.rt.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:109)\r\n",
  "status": "failed"
});
formatter.uri("profile_manager.feature");
formatter.feature({
  "line": 1,
  "name": "Profile Page - Department Manager",
  "description": "",
  "id": "profile-page---department-manager",
  "keyword": "Feature"
});
formatter.before({
  "duration": 166600,
  "error_message": "java.lang.NoClassDefFoundError: Could not initialize class app.driver.SharedDriver\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor6.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.picocontainer.injectors.AbstractInjector.newInstance(AbstractInjector.java:145)\r\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:342)\r\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\r\n\tat org.picocontainer.injectors.AbstractInjectionFactory$LifecycleAdapter.getComponentInstance(AbstractInjectionFactory.java:56)\r\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\r\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\r\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\r\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:40)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat jdk.internal.reflect.GeneratedMethodAccessor17.invoke(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat com.intellij.rt.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:66)\r\n\tat com.intellij.rt.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:109)\r\n",
  "status": "failed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Go to Login page",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Enter \u0027auto-test-manager@onyx.com\u0027 Text in Email Field",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Enter \u0027check\u0027 Text in Password Field",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Click on \u0027Sign In\u0027 Button",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 6
    }
  ],
  "location": "GlobalSteps.goToPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "auto-test-manager@onyx.com",
      "offset": 7
    }
  ],
  "location": "LoginSteps.inputEmail(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "check",
      "offset": 7
    }
  ],
  "location": "LoginSteps.inputPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Sign In",
      "offset": 10
    }
  ],
  "location": "LoginSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 10,
  "name": "Check Profile Page",
  "description": "",
  "id": "profile-page---department-manager;check-profile-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@all"
    },
    {
      "line": 9,
      "name": "@smoke"
    },
    {
      "line": 9,
      "name": "@profile"
    },
    {
      "line": 9,
      "name": "@test"
    },
    {
      "line": 9,
      "name": "@auto-test-manager"
    },
    {
      "line": 9,
      "name": "@onyx.com"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "Go to Profile page",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Requested Page Available",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "\u0027Menu\u0027 Block is Appeared",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "\u0027Status Block\u0027 Block is Appeared",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "\u0027Information Block\u0027 Block is Appeared",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "\u0027SDT - Current\u0027 Block is Appeared",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "\u0027SDT - Future\u0027 Block is Appeared",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "\u0027SDT left\u0027 Block is Appeared",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "\u0027SDT used\u0027 Block is Appeared",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "\u0027SDT at own expense\u0027 Block is Appeared",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "\u0027Working Hours information Card\u0027 Block is Appeared",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "\u0027SDT Request Card\u0027 Block is Appeared",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "\u0027Documentation Card\u0027 Block is Appeared",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "\u0027Начислено часов:\u0027 Block is Appeared",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "\u0027Требуется часов:\u0027 Block is Appeared",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "Check Hours Required In Profile Page",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Click \u0027Make request\u0027 Button",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Redirect to the Expected Page Worked",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "Click \u0027Back\u0027 Button",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "Click \u0027Details\u0027 Button",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "Click \u0027Back\u0027 Button",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Profile",
      "offset": 6
    }
  ],
  "location": "GlobalSteps.goToPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Menu",
      "offset": 1
    }
  ],
  "location": "ProfileSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Status Block",
      "offset": 1
    }
  ],
  "location": "ProfileSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Information Block",
      "offset": 1
    }
  ],
  "location": "ProfileSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "SDT - Current",
      "offset": 1
    }
  ],
  "location": "ProfileSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "SDT - Future",
      "offset": 1
    }
  ],
  "location": "ProfileSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "SDT left",
      "offset": 1
    }
  ],
  "location": "ProfileSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "SDT used",
      "offset": 1
    }
  ],
  "location": "ProfileSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "SDT at own expense",
      "offset": 1
    }
  ],
  "location": "ProfileSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Working Hours information Card",
      "offset": 1
    }
  ],
  "location": "ProfileSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "SDT Request Card",
      "offset": 1
    }
  ],
  "location": "ProfileSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Documentation Card",
      "offset": 1
    }
  ],
  "location": "ProfileSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Начислено часов:",
      "offset": 1
    }
  ],
  "location": "ProfileSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Требуется часов:",
      "offset": 1
    }
  ],
  "location": "ProfileSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.checkHoursRequired()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Make request",
      "offset": 7
    }
  ],
  "location": "ProfileSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButtonAppeared()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Back",
      "offset": 7
    }
  ],
  "location": "ProfileSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Details",
      "offset": 7
    }
  ],
  "location": "ProfileSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Back",
      "offset": 7
    }
  ],
  "location": "ProfileSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 193900,
  "error_message": "java.lang.NoClassDefFoundError: Could not initialize class app.driver.SharedDriver\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor6.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.picocontainer.injectors.AbstractInjector.newInstance(AbstractInjector.java:145)\r\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:342)\r\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\r\n\tat org.picocontainer.injectors.AbstractInjectionFactory$LifecycleAdapter.getComponentInstance(AbstractInjectionFactory.java:56)\r\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\r\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\r\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\r\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:40)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat jdk.internal.reflect.GeneratedMethodAccessor17.invoke(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat com.intellij.rt.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:66)\r\n\tat com.intellij.rt.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:109)\r\n",
  "status": "failed"
});
formatter.uri("profile_recruiter.feature");
formatter.feature({
  "line": 1,
  "name": "Profile Page - Recruiter",
  "description": "",
  "id": "profile-page---recruiter",
  "keyword": "Feature"
});
formatter.before({
  "duration": 194200,
  "error_message": "java.lang.NoClassDefFoundError: Could not initialize class app.driver.SharedDriver\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor6.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.picocontainer.injectors.AbstractInjector.newInstance(AbstractInjector.java:145)\r\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:342)\r\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\r\n\tat org.picocontainer.injectors.AbstractInjectionFactory$LifecycleAdapter.getComponentInstance(AbstractInjectionFactory.java:56)\r\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\r\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\r\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\r\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:40)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat jdk.internal.reflect.GeneratedMethodAccessor17.invoke(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat com.intellij.rt.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:66)\r\n\tat com.intellij.rt.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:109)\r\n",
  "status": "failed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Go to Login page",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Enter \u0027auto-test@onyx.com\u0027 Text in Email Field",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Enter \u0027check\u0027 Text in Password Field",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Click on \u0027Sign In\u0027 Button",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 6
    }
  ],
  "location": "GlobalSteps.goToPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "auto-test@onyx.com",
      "offset": 7
    }
  ],
  "location": "LoginSteps.inputEmail(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "check",
      "offset": 7
    }
  ],
  "location": "LoginSteps.inputPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Sign In",
      "offset": 10
    }
  ],
  "location": "LoginSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 10,
  "name": "Check Profile Page",
  "description": "",
  "id": "profile-page---recruiter;check-profile-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@all"
    },
    {
      "line": 9,
      "name": "@smoke"
    },
    {
      "line": 9,
      "name": "@profile2222344343"
    },
    {
      "line": 9,
      "name": "@test"
    },
    {
      "line": 9,
      "name": "@auto-test"
    },
    {
      "line": 9,
      "name": "@onyx.com"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "Go to Profile page",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Requested Page Available",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "\u0027Menu\u0027 Block is Appeared",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "\u0027Status Block\u0027 Block is Appeared",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "\u0027Information Block\u0027 Block is Appeared",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "\u0027SDT - Current\u0027 Block is Appeared",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "\u0027SDT - Future\u0027 Block is Appeared",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "\u0027SDT left\u0027 Block is Appeared",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "\u0027SDT used\u0027 Block is Appeared",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "\u0027SDT at own expense\u0027 Block is Appeared",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "\u0027Working Hours information Card\u0027 Block is Appeared",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "\u0027SDT Request Card\u0027 Block is Appeared",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "\u0027Documentation Card\u0027 Block is Appeared",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "\u0027Начислено часов:\u0027 Block is Appeared",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "\u0027Требуется часов:\u0027 Block is Appeared",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "Check Hours Required In Profile Page",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Click \u0027Make request\u0027 Button",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Redirect to the Expected Page Worked",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "Click \u0027Back\u0027 Button",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "Click \u0027Details\u0027 Button",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "Click \u0027Back\u0027 Button",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Profile",
      "offset": 6
    }
  ],
  "location": "GlobalSteps.goToPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Menu",
      "offset": 1
    }
  ],
  "location": "ProfileSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Status Block",
      "offset": 1
    }
  ],
  "location": "ProfileSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Information Block",
      "offset": 1
    }
  ],
  "location": "ProfileSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "SDT - Current",
      "offset": 1
    }
  ],
  "location": "ProfileSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "SDT - Future",
      "offset": 1
    }
  ],
  "location": "ProfileSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "SDT left",
      "offset": 1
    }
  ],
  "location": "ProfileSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "SDT used",
      "offset": 1
    }
  ],
  "location": "ProfileSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "SDT at own expense",
      "offset": 1
    }
  ],
  "location": "ProfileSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Working Hours information Card",
      "offset": 1
    }
  ],
  "location": "ProfileSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "SDT Request Card",
      "offset": 1
    }
  ],
  "location": "ProfileSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Documentation Card",
      "offset": 1
    }
  ],
  "location": "ProfileSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Начислено часов:",
      "offset": 1
    }
  ],
  "location": "ProfileSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Требуется часов:",
      "offset": 1
    }
  ],
  "location": "ProfileSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.checkHoursRequired()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Make request",
      "offset": 7
    }
  ],
  "location": "ProfileSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButtonAppeared()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Back",
      "offset": 7
    }
  ],
  "location": "ProfileSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Details",
      "offset": 7
    }
  ],
  "location": "ProfileSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Back",
      "offset": 7
    }
  ],
  "location": "ProfileSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 143600,
  "error_message": "java.lang.NoClassDefFoundError: Could not initialize class app.driver.SharedDriver\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor6.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.picocontainer.injectors.AbstractInjector.newInstance(AbstractInjector.java:145)\r\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:342)\r\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\r\n\tat org.picocontainer.injectors.AbstractInjectionFactory$LifecycleAdapter.getComponentInstance(AbstractInjectionFactory.java:56)\r\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\r\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\r\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\r\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:40)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat jdk.internal.reflect.GeneratedMethodAccessor17.invoke(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat com.intellij.rt.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:66)\r\n\tat com.intellij.rt.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:109)\r\n",
  "status": "failed"
});
formatter.uri("sdt_hr.feature");
formatter.feature({
  "line": 1,
  "name": "SDT Page - HR",
  "description": "",
  "id": "sdt-page---hr",
  "keyword": "Feature"
});
formatter.before({
  "duration": 141200,
  "error_message": "java.lang.NoClassDefFoundError: Could not initialize class app.driver.SharedDriver\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor6.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.picocontainer.injectors.AbstractInjector.newInstance(AbstractInjector.java:145)\r\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:342)\r\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\r\n\tat org.picocontainer.injectors.AbstractInjectionFactory$LifecycleAdapter.getComponentInstance(AbstractInjectionFactory.java:56)\r\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\r\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\r\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\r\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:40)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat jdk.internal.reflect.GeneratedMethodAccessor17.invoke(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat com.intellij.rt.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:66)\r\n\tat com.intellij.rt.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:109)\r\n",
  "status": "failed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Go to Login page",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Enter \u0027auto-test-hr@onyx.com\u0027 Text in Email Field",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Enter \u0027check\u0027 Text in Password Field",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Click on \u0027Sign In\u0027 Button",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 6
    }
  ],
  "location": "GlobalSteps.goToPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "auto-test-hr@onyx.com",
      "offset": 7
    }
  ],
  "location": "LoginSteps.inputEmail(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "check",
      "offset": 7
    }
  ],
  "location": "LoginSteps.inputPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Sign In",
      "offset": 10
    }
  ],
  "location": "LoginSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 10,
  "name": "Std Page Appeared",
  "description": "",
  "id": "sdt-page---hr;std-page-appeared",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@all"
    },
    {
      "line": 9,
      "name": "@smoke"
    },
    {
      "line": 9,
      "name": "@sdt"
    },
    {
      "line": 9,
      "name": "@test"
    },
    {
      "line": 9,
      "name": "@auto-test-hr"
    },
    {
      "line": 9,
      "name": "@onyx.com"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "Go to Sdt page",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Requested Page Available",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "\u0027Create new\u0027 Button is Appeared",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "\u0027View All\u0027 Button is Appeared",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "\u0027Hide\u0027 Button is Appeared",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "\u0027Today\u0027 Button is Appeared",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "\u0027Prev\u0027 Button is Appeared",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "\u0027Next\u0027 Button is Appeared",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "\u0027Calendar\u0027 Block is Appered in SdtPage",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "\u0027SDT left\u0027 Block is Appered in SdtPage",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Click on \u0027Prev\u0027 Button in SDT Page",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Click on \u0027Prev\u0027 Button in SDT Page",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Click on \u0027Today\u0027 Button in SDT Page",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Click on \u0027Next\u0027 Button in SDT Page",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Click on \u0027View All\u0027 Button in SDT Page",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Click on \u0027Hide\u0027 Button in SDT Page",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Click on \u0027Create new\u0027 Button in SDT Page",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Redirect to the Expected Page Worked",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Sdt",
      "offset": 6
    }
  ],
  "location": "GlobalSteps.goToPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Create new",
      "offset": 1
    }
  ],
  "location": "SdtSteps.isButtonAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "View All",
      "offset": 1
    }
  ],
  "location": "SdtSteps.isButtonAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Hide",
      "offset": 1
    }
  ],
  "location": "SdtSteps.isButtonAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Today",
      "offset": 1
    }
  ],
  "location": "SdtSteps.isButtonAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Prev",
      "offset": 1
    }
  ],
  "location": "SdtSteps.isButtonAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Next",
      "offset": 1
    }
  ],
  "location": "SdtSteps.isButtonAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Calendar",
      "offset": 1
    }
  ],
  "location": "SdtSteps.isBlockAppearedCalendar(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "SDT left",
      "offset": 1
    }
  ],
  "location": "SdtSteps.isBlockAppearedCalendar(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Prev",
      "offset": 10
    }
  ],
  "location": "SdtSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Prev",
      "offset": 10
    }
  ],
  "location": "SdtSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Today",
      "offset": 10
    }
  ],
  "location": "SdtSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Next",
      "offset": 10
    }
  ],
  "location": "SdtSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "View All",
      "offset": 10
    }
  ],
  "location": "SdtSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Hide",
      "offset": 10
    }
  ],
  "location": "SdtSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Create new",
      "offset": 10
    }
  ],
  "location": "SdtSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButtonAppeared()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 136700,
  "error_message": "java.lang.NoClassDefFoundError: Could not initialize class app.driver.SharedDriver\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor6.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.picocontainer.injectors.AbstractInjector.newInstance(AbstractInjector.java:145)\r\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:342)\r\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\r\n\tat org.picocontainer.injectors.AbstractInjectionFactory$LifecycleAdapter.getComponentInstance(AbstractInjectionFactory.java:56)\r\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\r\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\r\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\r\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:40)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat jdk.internal.reflect.GeneratedMethodAccessor17.invoke(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat com.intellij.rt.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:66)\r\n\tat com.intellij.rt.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:109)\r\n",
  "status": "failed"
});
formatter.uri("sdt_manager.feature");
formatter.feature({
  "line": 1,
  "name": "SDT Page - Department Manager",
  "description": "",
  "id": "sdt-page---department-manager",
  "keyword": "Feature"
});
formatter.before({
  "duration": 323500,
  "error_message": "java.lang.NoClassDefFoundError: Could not initialize class app.driver.SharedDriver\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor6.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.picocontainer.injectors.AbstractInjector.newInstance(AbstractInjector.java:145)\r\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:342)\r\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\r\n\tat org.picocontainer.injectors.AbstractInjectionFactory$LifecycleAdapter.getComponentInstance(AbstractInjectionFactory.java:56)\r\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\r\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\r\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\r\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:40)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat jdk.internal.reflect.GeneratedMethodAccessor17.invoke(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat com.intellij.rt.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:66)\r\n\tat com.intellij.rt.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:109)\r\n",
  "status": "failed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Go to Login page",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Enter \u0027auto-test-manager@onyx.com\u0027 Text in Email Field",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Enter \u0027check\u0027 Text in Password Field",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Click on \u0027Sign In\u0027 Button",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 6
    }
  ],
  "location": "GlobalSteps.goToPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "auto-test-manager@onyx.com",
      "offset": 7
    }
  ],
  "location": "LoginSteps.inputEmail(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "check",
      "offset": 7
    }
  ],
  "location": "LoginSteps.inputPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Sign In",
      "offset": 10
    }
  ],
  "location": "LoginSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 10,
  "name": "Std Page Appeared",
  "description": "",
  "id": "sdt-page---department-manager;std-page-appeared",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@all"
    },
    {
      "line": 9,
      "name": "@smoke"
    },
    {
      "line": 9,
      "name": "@sdt"
    },
    {
      "line": 9,
      "name": "@test"
    },
    {
      "line": 9,
      "name": "@auto-test-manager"
    },
    {
      "line": 9,
      "name": "@onyx.com"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "Go to Sdt page",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Requested Page Available",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "\u0027Create new\u0027 Button is Appeared",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "\u0027View All\u0027 Button is Appeared",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "\u0027Hide\u0027 Button is Appeared",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "\u0027Today\u0027 Button is Appeared",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "\u0027Prev\u0027 Button is Appeared",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "\u0027Next\u0027 Button is Appeared",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "\u0027Calendar\u0027 Block is Appered in SdtPage",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "\u0027SDT left\u0027 Block is Appered in SdtPage",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Click on \u0027Prev\u0027 Button in SDT Page",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Click on \u0027Prev\u0027 Button in SDT Page",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Click on \u0027Today\u0027 Button in SDT Page",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Click on \u0027Next\u0027 Button in SDT Page",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Click on \u0027View All\u0027 Button in SDT Page",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Click on \u0027Hide\u0027 Button in SDT Page",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Click on \u0027Create new\u0027 Button in SDT Page",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Redirect to the Expected Page Worked",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Sdt",
      "offset": 6
    }
  ],
  "location": "GlobalSteps.goToPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Create new",
      "offset": 1
    }
  ],
  "location": "SdtSteps.isButtonAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "View All",
      "offset": 1
    }
  ],
  "location": "SdtSteps.isButtonAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Hide",
      "offset": 1
    }
  ],
  "location": "SdtSteps.isButtonAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Today",
      "offset": 1
    }
  ],
  "location": "SdtSteps.isButtonAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Prev",
      "offset": 1
    }
  ],
  "location": "SdtSteps.isButtonAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Next",
      "offset": 1
    }
  ],
  "location": "SdtSteps.isButtonAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Calendar",
      "offset": 1
    }
  ],
  "location": "SdtSteps.isBlockAppearedCalendar(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "SDT left",
      "offset": 1
    }
  ],
  "location": "SdtSteps.isBlockAppearedCalendar(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Prev",
      "offset": 10
    }
  ],
  "location": "SdtSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Prev",
      "offset": 10
    }
  ],
  "location": "SdtSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Today",
      "offset": 10
    }
  ],
  "location": "SdtSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Next",
      "offset": 10
    }
  ],
  "location": "SdtSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "View All",
      "offset": 10
    }
  ],
  "location": "SdtSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Hide",
      "offset": 10
    }
  ],
  "location": "SdtSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Create new",
      "offset": 10
    }
  ],
  "location": "SdtSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButtonAppeared()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 161200,
  "error_message": "java.lang.NoClassDefFoundError: Could not initialize class app.driver.SharedDriver\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor6.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.picocontainer.injectors.AbstractInjector.newInstance(AbstractInjector.java:145)\r\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:342)\r\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\r\n\tat org.picocontainer.injectors.AbstractInjectionFactory$LifecycleAdapter.getComponentInstance(AbstractInjectionFactory.java:56)\r\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\r\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\r\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\r\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:40)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat jdk.internal.reflect.GeneratedMethodAccessor17.invoke(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat com.intellij.rt.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:66)\r\n\tat com.intellij.rt.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:109)\r\n",
  "status": "failed"
});
formatter.uri("sdt_recruiter.feature");
formatter.feature({
  "line": 1,
  "name": "SDT Page - Recruiter",
  "description": "",
  "id": "sdt-page---recruiter",
  "keyword": "Feature"
});
formatter.before({
  "duration": 196000,
  "error_message": "java.lang.NoClassDefFoundError: Could not initialize class app.driver.SharedDriver\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor6.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.picocontainer.injectors.AbstractInjector.newInstance(AbstractInjector.java:145)\r\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:342)\r\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\r\n\tat org.picocontainer.injectors.AbstractInjectionFactory$LifecycleAdapter.getComponentInstance(AbstractInjectionFactory.java:56)\r\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\r\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\r\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\r\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:40)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat jdk.internal.reflect.GeneratedMethodAccessor17.invoke(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat com.intellij.rt.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:66)\r\n\tat com.intellij.rt.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:109)\r\n",
  "status": "failed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Go to Login page",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Enter \u0027auto-test@onyx.com\u0027 Text in Email Field",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Enter \u0027check\u0027 Text in Password Field",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Click on \u0027Sign In\u0027 Button",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 6
    }
  ],
  "location": "GlobalSteps.goToPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "auto-test@onyx.com",
      "offset": 7
    }
  ],
  "location": "LoginSteps.inputEmail(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "check",
      "offset": 7
    }
  ],
  "location": "LoginSteps.inputPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Sign In",
      "offset": 10
    }
  ],
  "location": "LoginSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 10,
  "name": "Std Page Appeared",
  "description": "",
  "id": "sdt-page---recruiter;std-page-appeared",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@all"
    },
    {
      "line": 9,
      "name": "@smoke"
    },
    {
      "line": 9,
      "name": "@sdt"
    },
    {
      "line": 9,
      "name": "@test"
    },
    {
      "line": 9,
      "name": "@auto-test"
    },
    {
      "line": 9,
      "name": "@onyx.com"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "Go to Sdt page",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Requested Page Available",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "\u0027Create new\u0027 Button is Appeared",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "\u0027View All\u0027 Button is Appeared",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "\u0027Hide\u0027 Button is Appeared",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "\u0027Today\u0027 Button is Appeared",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "\u0027Prev\u0027 Button is Appeared",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "\u0027Next\u0027 Button is Appeared",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "\u0027Calendar\u0027 Block is Appered in SdtPage",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "\u0027SDT left\u0027 Block is Appered in SdtPage",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Click on \u0027Prev\u0027 Button in SDT Page",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Click on \u0027Prev\u0027 Button in SDT Page",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Click on \u0027Today\u0027 Button in SDT Page",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Click on \u0027Next\u0027 Button in SDT Page",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Click on \u0027View All\u0027 Button in SDT Page",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Click on \u0027Hide\u0027 Button in SDT Page",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Click on \u0027Create new\u0027 Button in SDT Page",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Redirect to the Expected Page Worked",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Sdt",
      "offset": 6
    }
  ],
  "location": "GlobalSteps.goToPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Create new",
      "offset": 1
    }
  ],
  "location": "SdtSteps.isButtonAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "View All",
      "offset": 1
    }
  ],
  "location": "SdtSteps.isButtonAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Hide",
      "offset": 1
    }
  ],
  "location": "SdtSteps.isButtonAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Today",
      "offset": 1
    }
  ],
  "location": "SdtSteps.isButtonAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Prev",
      "offset": 1
    }
  ],
  "location": "SdtSteps.isButtonAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Next",
      "offset": 1
    }
  ],
  "location": "SdtSteps.isButtonAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Calendar",
      "offset": 1
    }
  ],
  "location": "SdtSteps.isBlockAppearedCalendar(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "SDT left",
      "offset": 1
    }
  ],
  "location": "SdtSteps.isBlockAppearedCalendar(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Prev",
      "offset": 10
    }
  ],
  "location": "SdtSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Prev",
      "offset": 10
    }
  ],
  "location": "SdtSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Today",
      "offset": 10
    }
  ],
  "location": "SdtSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Next",
      "offset": 10
    }
  ],
  "location": "SdtSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "View All",
      "offset": 10
    }
  ],
  "location": "SdtSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Hide",
      "offset": 10
    }
  ],
  "location": "SdtSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Create new",
      "offset": 10
    }
  ],
  "location": "SdtSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButtonAppeared()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 137000,
  "error_message": "java.lang.NoClassDefFoundError: Could not initialize class app.driver.SharedDriver\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor6.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.picocontainer.injectors.AbstractInjector.newInstance(AbstractInjector.java:145)\r\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:342)\r\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\r\n\tat org.picocontainer.injectors.AbstractInjectionFactory$LifecycleAdapter.getComponentInstance(AbstractInjectionFactory.java:56)\r\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\r\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\r\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\r\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:40)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat jdk.internal.reflect.GeneratedMethodAccessor17.invoke(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat com.intellij.rt.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:66)\r\n\tat com.intellij.rt.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:109)\r\n",
  "status": "failed"
});
formatter.uri("sdtnew_emailcheck.feature");
formatter.feature({
  "line": 1,
  "name": "eMail Delivery Check",
  "description": "",
  "id": "email-delivery-check",
  "keyword": "Feature"
});
formatter.before({
  "duration": 178900,
  "error_message": "java.lang.NoClassDefFoundError: Could not initialize class app.driver.SharedDriver\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor6.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.picocontainer.injectors.AbstractInjector.newInstance(AbstractInjector.java:145)\r\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:342)\r\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\r\n\tat org.picocontainer.injectors.AbstractInjectionFactory$LifecycleAdapter.getComponentInstance(AbstractInjectionFactory.java:56)\r\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\r\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\r\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\r\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:40)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat jdk.internal.reflect.GeneratedMethodAccessor17.invoke(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat com.intellij.rt.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:66)\r\n\tat com.intellij.rt.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:109)\r\n",
  "status": "failed"
});
formatter.background({
  "line": 3,
  "name": "Login",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Go to Login page",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Enter \u0027automation@onyx.com\u0027 Text in Email Field",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Enter \u00279dSQ#mPofVaaZHgKQrs*\u0027 Text in Password Field",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Click on \u0027Sign In\u0027 Button",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 6
    }
  ],
  "location": "GlobalSteps.goToPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "automation@onyx.com",
      "offset": 7
    }
  ],
  "location": "LoginSteps.inputEmail(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "9dSQ#mPofVaaZHgKQrs*",
      "offset": 7
    }
  ],
  "location": "LoginSteps.inputPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Sign In",
      "offset": 10
    }
  ],
  "location": "LoginSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 10,
  "name": "Create new sdt day",
  "description": "",
  "id": "email-delivery-check;create-new-sdt-day",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@ignore"
    },
    {
      "line": 9,
      "name": "@test"
    },
    {
      "line": 9,
      "name": "@sdtemailcheck"
    },
    {
      "line": 9,
      "name": "@smoke"
    },
    {
      "line": 9,
      "name": "@automation"
    },
    {
      "line": 9,
      "name": "@onyx.com"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "Go to Sdt New page",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Requested Page Available",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Email Delete message",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "\u0027Menu\u0027 Field is Appered in SDT NEW Page",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "\u0027Create new Sdt\u0027 Field is Appered in SDT NEW Page",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "\u0027Amount\u0027 Field is Appered in SDT NEW Page",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "\u0027Create Date\u0027 Field is Appered in SDT NEW Page",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "\u0027Acting\u0027 Field is Appered in SDT NEW Page",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "\u0027Save\u0027 Button is Appered in SDT NEW Page",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "\u0027Back to list\u0027 Button is Appered in SDT NEW Page",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Go to Sdt page",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Requested Page Available",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "Pre Delete SDT",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Requested Page Available",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "Go to Sdt New page",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "Requested Page Available",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "Enter \u00271\u0027 Text in Amount Field in SDT NEW Page",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "To push \u0027ENTER\u0027 in SDT NEW Page",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "Enter Name \u0027junior1@onyx.com\u0027 In Person Field in SDT NEW Page",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "Click \u0027Add\u0027 Button in SDT NEW Page",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "Click \u0027Save\u0027 Button in SDT NEW Page",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "To push \u0027OK\u0027 in SDT NEW Page",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "Redirect to the Expected Page Worked",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "Go to Sdt page",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "Requested Page Available",
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "Click \u0027SDT\u0027 Button in SDT NEW Page",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "Redirect to the Expected Page Worked",
  "keyword": "Then "
});
formatter.step({
  "line": 52,
  "name": "Click \u0027delete\u0027 Button in SDT NEW Page",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "To push \u0027OK\u0027 in SDT NEW Page",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "Redirect to the Expected Page Worked",
  "keyword": "Then "
});
formatter.step({
  "line": 57,
  "name": "Wait for 5 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "Email Received",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Sdt New",
      "offset": 6
    }
  ],
  "location": "GlobalSteps.goToPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EmailTest.testPrepareInboxFolder2()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Menu",
      "offset": 1
    }
  ],
  "location": "SdtNewSteps.isFieldNewSdtPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Create new Sdt",
      "offset": 1
    }
  ],
  "location": "SdtNewSteps.isFieldNewSdtPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Amount",
      "offset": 1
    }
  ],
  "location": "SdtNewSteps.isFieldNewSdtPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Create Date",
      "offset": 1
    }
  ],
  "location": "SdtNewSteps.isFieldNewSdtPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Acting",
      "offset": 1
    }
  ],
  "location": "SdtNewSteps.isFieldNewSdtPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Save",
      "offset": 1
    }
  ],
  "location": "SdtNewSteps.isButtonAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Back to list",
      "offset": 1
    }
  ],
  "location": "SdtNewSteps.isButtonAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Sdt",
      "offset": 6
    }
  ],
  "location": "GlobalSteps.goToPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SdtNewSteps.preDeleteSdt()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Sdt New",
      "offset": 6
    }
  ],
  "location": "GlobalSteps.goToPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 7
    }
  ],
  "location": "SdtNewSteps.inputAmountField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "ENTER",
      "offset": 9
    }
  ],
  "location": "SdtNewSteps.toPushKeys(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "junior1@onyx.com",
      "offset": 12
    }
  ],
  "location": "SdtNewSteps.inputActingField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Add",
      "offset": 7
    }
  ],
  "location": "SdtNewSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Save",
      "offset": 7
    }
  ],
  "location": "SdtNewSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "OK",
      "offset": 9
    }
  ],
  "location": "SdtNewSteps.toPushKeys(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButtonAppeared()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Sdt",
      "offset": 6
    }
  ],
  "location": "GlobalSteps.goToPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "SDT",
      "offset": 7
    }
  ],
  "location": "SdtNewSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButtonAppeared()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "delete",
      "offset": 7
    }
  ],
  "location": "SdtNewSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "OK",
      "offset": 9
    }
  ],
  "location": "SdtNewSteps.toPushKeys(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButtonAppeared()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EmailTest.testPrepareInboxFolder()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 3479000,
  "error_message": "java.lang.NoClassDefFoundError: Could not initialize class app.driver.SharedDriver\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor6.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.picocontainer.injectors.AbstractInjector.newInstance(AbstractInjector.java:145)\r\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:342)\r\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\r\n\tat org.picocontainer.injectors.AbstractInjectionFactory$LifecycleAdapter.getComponentInstance(AbstractInjectionFactory.java:56)\r\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\r\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\r\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\r\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:40)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat jdk.internal.reflect.GeneratedMethodAccessor17.invoke(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat com.intellij.rt.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:66)\r\n\tat com.intellij.rt.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:109)\r\n",
  "status": "failed"
});
formatter.uri("sdtnew_hr.feature");
formatter.feature({
  "line": 1,
  "name": "SDT-New Page - HR",
  "description": "",
  "id": "sdt-new-page---hr",
  "keyword": "Feature"
});
formatter.before({
  "duration": 155600,
  "error_message": "java.lang.NoClassDefFoundError: Could not initialize class app.driver.SharedDriver\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor6.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.picocontainer.injectors.AbstractInjector.newInstance(AbstractInjector.java:145)\r\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:342)\r\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\r\n\tat org.picocontainer.injectors.AbstractInjectionFactory$LifecycleAdapter.getComponentInstance(AbstractInjectionFactory.java:56)\r\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\r\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\r\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\r\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:40)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat jdk.internal.reflect.GeneratedMethodAccessor17.invoke(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat com.intellij.rt.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:66)\r\n\tat com.intellij.rt.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:109)\r\n",
  "status": "failed"
});
formatter.background({
  "line": 3,
  "name": "Login",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Go to Login page",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Enter \u0027auto-test-hr@onyx.com\u0027 Text in Email Field",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Enter \u0027check\u0027 Text in Password Field",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Click on \u0027Sign In\u0027 Button",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 6
    }
  ],
  "location": "GlobalSteps.goToPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "auto-test-hr@onyx.com",
      "offset": 7
    }
  ],
  "location": "LoginSteps.inputEmail(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "check",
      "offset": 7
    }
  ],
  "location": "LoginSteps.inputPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Sign In",
      "offset": 10
    }
  ],
  "location": "LoginSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 10,
  "name": "Create new sdt day",
  "description": "",
  "id": "sdt-new-page---hr;create-new-sdt-day",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@all"
    },
    {
      "line": 9,
      "name": "@test"
    },
    {
      "line": 9,
      "name": "@sdtnew"
    },
    {
      "line": 9,
      "name": "@smoke"
    },
    {
      "line": 9,
      "name": "@auto-test-hr"
    },
    {
      "line": 9,
      "name": "@onyx.com"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "Go to Sdt New page",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Requested Page Available",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "\u0027Menu\u0027 Field is Appered in SDT NEW Page",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "\u0027Create new Sdt\u0027 Field is Appered in SDT NEW Page",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "\u0027Amount\u0027 Field is Appered in SDT NEW Page",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "\u0027Create Date\u0027 Field is Appered in SDT NEW Page",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "\u0027Acting\u0027 Field is Appered in SDT NEW Page",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "\u0027Save\u0027 Button is Appered in SDT NEW Page",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "\u0027Back to list\u0027 Button is Appered in SDT NEW Page",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Go to Sdt page",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Requested Page Available",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "Pre Delete SDT",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Requested Page Available",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "Go to Sdt New page",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "Requested Page Available",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "Enter \u00271\u0027 Text in Amount Field in SDT NEW Page",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "To push \u0027ENTER\u0027 in SDT NEW Page",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "Enter Name \u0027junior1@onyx.com\u0027 In Person Field in SDT NEW Page",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "Click \u0027Add\u0027 Button in SDT NEW Page",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "Click \u0027Save\u0027 Button in SDT NEW Page",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "To push \u0027OK\u0027 in SDT NEW Page",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "Redirect to the Expected Page Worked",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "Go to Sdt page",
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "Requested Page Available",
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "Click \u0027SDT\u0027 Button in SDT NEW Page",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "Redirect to the Expected Page Worked",
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "Click \u0027delete\u0027 Button in SDT NEW Page",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "To push \u0027OK\u0027 in SDT NEW Page",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "Redirect to the Expected Page Worked",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Sdt New",
      "offset": 6
    }
  ],
  "location": "GlobalSteps.goToPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Menu",
      "offset": 1
    }
  ],
  "location": "SdtNewSteps.isFieldNewSdtPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Create new Sdt",
      "offset": 1
    }
  ],
  "location": "SdtNewSteps.isFieldNewSdtPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Amount",
      "offset": 1
    }
  ],
  "location": "SdtNewSteps.isFieldNewSdtPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Create Date",
      "offset": 1
    }
  ],
  "location": "SdtNewSteps.isFieldNewSdtPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Acting",
      "offset": 1
    }
  ],
  "location": "SdtNewSteps.isFieldNewSdtPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Save",
      "offset": 1
    }
  ],
  "location": "SdtNewSteps.isButtonAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Back to list",
      "offset": 1
    }
  ],
  "location": "SdtNewSteps.isButtonAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Sdt",
      "offset": 6
    }
  ],
  "location": "GlobalSteps.goToPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SdtNewSteps.preDeleteSdt()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Sdt New",
      "offset": 6
    }
  ],
  "location": "GlobalSteps.goToPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 7
    }
  ],
  "location": "SdtNewSteps.inputAmountField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "ENTER",
      "offset": 9
    }
  ],
  "location": "SdtNewSteps.toPushKeys(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "junior1@onyx.com",
      "offset": 12
    }
  ],
  "location": "SdtNewSteps.inputActingField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Add",
      "offset": 7
    }
  ],
  "location": "SdtNewSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Save",
      "offset": 7
    }
  ],
  "location": "SdtNewSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "OK",
      "offset": 9
    }
  ],
  "location": "SdtNewSteps.toPushKeys(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButtonAppeared()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Sdt",
      "offset": 6
    }
  ],
  "location": "GlobalSteps.goToPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "SDT",
      "offset": 7
    }
  ],
  "location": "SdtNewSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButtonAppeared()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "delete",
      "offset": 7
    }
  ],
  "location": "SdtNewSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "OK",
      "offset": 9
    }
  ],
  "location": "SdtNewSteps.toPushKeys(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButtonAppeared()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 146800,
  "error_message": "java.lang.NoClassDefFoundError: Could not initialize class app.driver.SharedDriver\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor6.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.picocontainer.injectors.AbstractInjector.newInstance(AbstractInjector.java:145)\r\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:342)\r\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\r\n\tat org.picocontainer.injectors.AbstractInjectionFactory$LifecycleAdapter.getComponentInstance(AbstractInjectionFactory.java:56)\r\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\r\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\r\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\r\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:40)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat jdk.internal.reflect.GeneratedMethodAccessor17.invoke(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat com.intellij.rt.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:66)\r\n\tat com.intellij.rt.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:109)\r\n",
  "status": "failed"
});
formatter.uri("sdtnew_manager.feature");
formatter.feature({
  "line": 1,
  "name": "SDT-New Page - Department Manager",
  "description": "",
  "id": "sdt-new-page---department-manager",
  "keyword": "Feature"
});
formatter.before({
  "duration": 181100,
  "error_message": "java.lang.NoClassDefFoundError: Could not initialize class app.driver.SharedDriver\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor6.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.picocontainer.injectors.AbstractInjector.newInstance(AbstractInjector.java:145)\r\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:342)\r\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\r\n\tat org.picocontainer.injectors.AbstractInjectionFactory$LifecycleAdapter.getComponentInstance(AbstractInjectionFactory.java:56)\r\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\r\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\r\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\r\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:40)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat jdk.internal.reflect.GeneratedMethodAccessor17.invoke(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat com.intellij.rt.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:66)\r\n\tat com.intellij.rt.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:109)\r\n",
  "status": "failed"
});
formatter.background({
  "line": 3,
  "name": "Login",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Go to Login page",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Enter \u0027auto-test-manager@onyx.com\u0027 Text in Email Field",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Enter \u0027check\u0027 Text in Password Field",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Click on \u0027Sign In\u0027 Button",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 6
    }
  ],
  "location": "GlobalSteps.goToPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "auto-test-manager@onyx.com",
      "offset": 7
    }
  ],
  "location": "LoginSteps.inputEmail(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "check",
      "offset": 7
    }
  ],
  "location": "LoginSteps.inputPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Sign In",
      "offset": 10
    }
  ],
  "location": "LoginSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 10,
  "name": "Create new sdt day",
  "description": "",
  "id": "sdt-new-page---department-manager;create-new-sdt-day",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@all"
    },
    {
      "line": 9,
      "name": "@test"
    },
    {
      "line": 9,
      "name": "@sdtnew"
    },
    {
      "line": 9,
      "name": "@smoke"
    },
    {
      "line": 9,
      "name": "@auto-test-manager"
    },
    {
      "line": 9,
      "name": "@onyx.com"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "Go to Sdt New page",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Requested Page Available",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "\u0027Menu\u0027 Field is Appered in SDT NEW Page",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "\u0027Create new Sdt\u0027 Field is Appered in SDT NEW Page",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "\u0027Amount\u0027 Field is Appered in SDT NEW Page",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "\u0027Create Date\u0027 Field is Appered in SDT NEW Page",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "\u0027Acting\u0027 Field is Appered in SDT NEW Page",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "\u0027Save\u0027 Button is Appered in SDT NEW Page",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "\u0027Back to list\u0027 Button is Appered in SDT NEW Page",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Go to Sdt page",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Requested Page Available",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "Pre Delete SDT",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Requested Page Available",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "Go to Sdt New page",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "Requested Page Available",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "Enter \u00271\u0027 Text in Amount Field in SDT NEW Page",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "To push \u0027ENTER\u0027 in SDT NEW Page",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "Enter Name \u0027junior1@onyx.com\u0027 In Person Field in SDT NEW Page",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "Click \u0027Add\u0027 Button in SDT NEW Page",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "Click \u0027Save\u0027 Button in SDT NEW Page",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "To push \u0027OK\u0027 in SDT NEW Page",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "Redirect to the Expected Page Worked",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "Go to Sdt page",
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "Requested Page Available",
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "Click \u0027SDT\u0027 Button in SDT NEW Page",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "Redirect to the Expected Page Worked",
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "Click \u0027delete\u0027 Button in SDT NEW Page",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "To push \u0027OK\u0027 in SDT NEW Page",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "Redirect to the Expected Page Worked",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Sdt New",
      "offset": 6
    }
  ],
  "location": "GlobalSteps.goToPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Menu",
      "offset": 1
    }
  ],
  "location": "SdtNewSteps.isFieldNewSdtPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Create new Sdt",
      "offset": 1
    }
  ],
  "location": "SdtNewSteps.isFieldNewSdtPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Amount",
      "offset": 1
    }
  ],
  "location": "SdtNewSteps.isFieldNewSdtPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Create Date",
      "offset": 1
    }
  ],
  "location": "SdtNewSteps.isFieldNewSdtPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Acting",
      "offset": 1
    }
  ],
  "location": "SdtNewSteps.isFieldNewSdtPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Save",
      "offset": 1
    }
  ],
  "location": "SdtNewSteps.isButtonAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Back to list",
      "offset": 1
    }
  ],
  "location": "SdtNewSteps.isButtonAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Sdt",
      "offset": 6
    }
  ],
  "location": "GlobalSteps.goToPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SdtNewSteps.preDeleteSdt()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Sdt New",
      "offset": 6
    }
  ],
  "location": "GlobalSteps.goToPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 7
    }
  ],
  "location": "SdtNewSteps.inputAmountField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "ENTER",
      "offset": 9
    }
  ],
  "location": "SdtNewSteps.toPushKeys(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "junior1@onyx.com",
      "offset": 12
    }
  ],
  "location": "SdtNewSteps.inputActingField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Add",
      "offset": 7
    }
  ],
  "location": "SdtNewSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Save",
      "offset": 7
    }
  ],
  "location": "SdtNewSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "OK",
      "offset": 9
    }
  ],
  "location": "SdtNewSteps.toPushKeys(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButtonAppeared()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Sdt",
      "offset": 6
    }
  ],
  "location": "GlobalSteps.goToPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "SDT",
      "offset": 7
    }
  ],
  "location": "SdtNewSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButtonAppeared()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "delete",
      "offset": 7
    }
  ],
  "location": "SdtNewSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "OK",
      "offset": 9
    }
  ],
  "location": "SdtNewSteps.toPushKeys(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButtonAppeared()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 143300,
  "error_message": "java.lang.NoClassDefFoundError: Could not initialize class app.driver.SharedDriver\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor6.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.picocontainer.injectors.AbstractInjector.newInstance(AbstractInjector.java:145)\r\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:342)\r\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\r\n\tat org.picocontainer.injectors.AbstractInjectionFactory$LifecycleAdapter.getComponentInstance(AbstractInjectionFactory.java:56)\r\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\r\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\r\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\r\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:40)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat jdk.internal.reflect.GeneratedMethodAccessor17.invoke(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat com.intellij.rt.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:66)\r\n\tat com.intellij.rt.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:109)\r\n",
  "status": "failed"
});
formatter.uri("sdtnew_recruiter.feature");
formatter.feature({
  "line": 1,
  "name": "SDT-New Page - Recruiter",
  "description": "",
  "id": "sdt-new-page---recruiter",
  "keyword": "Feature"
});
formatter.before({
  "duration": 618800,
  "error_message": "java.lang.NoClassDefFoundError: Could not initialize class app.driver.SharedDriver\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor6.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.picocontainer.injectors.AbstractInjector.newInstance(AbstractInjector.java:145)\r\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:342)\r\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\r\n\tat org.picocontainer.injectors.AbstractInjectionFactory$LifecycleAdapter.getComponentInstance(AbstractInjectionFactory.java:56)\r\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\r\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\r\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\r\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:40)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat jdk.internal.reflect.GeneratedMethodAccessor17.invoke(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat com.intellij.rt.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:66)\r\n\tat com.intellij.rt.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:109)\r\n",
  "status": "failed"
});
formatter.background({
  "line": 3,
  "name": "Login",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Go to Login page",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Enter \u0027auto-test@onyx.com\u0027 Text in Email Field",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Enter \u0027check\u0027 Text in Password Field",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Click on \u0027Sign In\u0027 Button",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 6
    }
  ],
  "location": "GlobalSteps.goToPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "auto-test@onyx.com",
      "offset": 7
    }
  ],
  "location": "LoginSteps.inputEmail(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "check",
      "offset": 7
    }
  ],
  "location": "LoginSteps.inputPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Sign In",
      "offset": 10
    }
  ],
  "location": "LoginSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 10,
  "name": "Create new sdt day",
  "description": "",
  "id": "sdt-new-page---recruiter;create-new-sdt-day",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@all"
    },
    {
      "line": 9,
      "name": "@test"
    },
    {
      "line": 9,
      "name": "@sdtnew2222222"
    },
    {
      "line": 9,
      "name": "@smoke"
    },
    {
      "line": 9,
      "name": "@auto-test"
    },
    {
      "line": 9,
      "name": "@onyx.com"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "Go to Sdt New page",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Requested Page Available",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "\u0027Menu\u0027 Field is Appered in SDT NEW Page",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "\u0027Create new Sdt\u0027 Field is Appered in SDT NEW Page",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "\u0027Amount\u0027 Field is Appered in SDT NEW Page",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "\u0027Create Date\u0027 Field is Appered in SDT NEW Page",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "\u0027Acting\u0027 Field is Appered in SDT NEW Page",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "\u0027Save\u0027 Button is Appered in SDT NEW Page",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "\u0027Back to list\u0027 Button is Appered in SDT NEW Page",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Go to Sdt page",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Requested Page Available",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "Pre Delete SDT",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Requested Page Available",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "Go to Sdt New page",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "Requested Page Available",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "Enter \u00271\u0027 Text in Amount Field in SDT NEW Page",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "To push \u0027ENTER\u0027 in SDT NEW Page",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "Enter Name \u0027junior1@onyx.com\u0027 In Person Field in SDT NEW Page",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "Click \u0027Add\u0027 Button in SDT NEW Page",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "Click \u0027Save\u0027 Button in SDT NEW Page",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "To push \u0027OK\u0027 in SDT NEW Page",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "Redirect to the Expected Page Worked",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "Click on \u0027View All\u0027 Button in SDT Page",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "Click \u0027SDT auto-test\u0027 Button in SDT NEW Page",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "Go to Sdt New page",
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "Requested Page Available",
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "Enter \u00271\u0027 Text in Amount Field in SDT NEW Page",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "To push \u0027ENTER\u0027 in SDT NEW Page",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "Enter Name \u0027junior1@onyx.com\u0027 In Person Field in SDT NEW Page",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "Click \u0027Add\u0027 Button in SDT NEW Page",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "Click \u0027Save\u0027 Button in SDT NEW Page",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "To push \u0027OK\u0027 in SDT NEW Page",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "A Warning Has Appeared In SDT New Page",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "Go to Sdt page",
  "keyword": "When "
});
formatter.step({
  "line": 59,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "Requested Page Available",
  "keyword": "Then "
});
formatter.step({
  "line": 62,
  "name": "Click \u0027SDT\u0027 Button in SDT NEW Page",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "Redirect to the Expected Page Worked",
  "keyword": "Then "
});
formatter.step({
  "line": 66,
  "name": "Click \u0027delete\u0027 Button in SDT NEW Page",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "To push \u0027OK\u0027 in SDT NEW Page",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "Redirect to the Expected Page Worked",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Sdt New",
      "offset": 6
    }
  ],
  "location": "GlobalSteps.goToPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Menu",
      "offset": 1
    }
  ],
  "location": "SdtNewSteps.isFieldNewSdtPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Create new Sdt",
      "offset": 1
    }
  ],
  "location": "SdtNewSteps.isFieldNewSdtPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Amount",
      "offset": 1
    }
  ],
  "location": "SdtNewSteps.isFieldNewSdtPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Create Date",
      "offset": 1
    }
  ],
  "location": "SdtNewSteps.isFieldNewSdtPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Acting",
      "offset": 1
    }
  ],
  "location": "SdtNewSteps.isFieldNewSdtPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Save",
      "offset": 1
    }
  ],
  "location": "SdtNewSteps.isButtonAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Back to list",
      "offset": 1
    }
  ],
  "location": "SdtNewSteps.isButtonAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Sdt",
      "offset": 6
    }
  ],
  "location": "GlobalSteps.goToPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SdtNewSteps.preDeleteSdt()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Sdt New",
      "offset": 6
    }
  ],
  "location": "GlobalSteps.goToPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 7
    }
  ],
  "location": "SdtNewSteps.inputAmountField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "ENTER",
      "offset": 9
    }
  ],
  "location": "SdtNewSteps.toPushKeys(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "junior1@onyx.com",
      "offset": 12
    }
  ],
  "location": "SdtNewSteps.inputActingField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Add",
      "offset": 7
    }
  ],
  "location": "SdtNewSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Save",
      "offset": 7
    }
  ],
  "location": "SdtNewSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "OK",
      "offset": 9
    }
  ],
  "location": "SdtNewSteps.toPushKeys(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButtonAppeared()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "View All",
      "offset": 10
    }
  ],
  "location": "SdtSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "SDT auto-test",
      "offset": 7
    }
  ],
  "location": "SdtNewSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Sdt New",
      "offset": 6
    }
  ],
  "location": "GlobalSteps.goToPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 7
    }
  ],
  "location": "SdtNewSteps.inputAmountField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "ENTER",
      "offset": 9
    }
  ],
  "location": "SdtNewSteps.toPushKeys(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "junior1@onyx.com",
      "offset": 12
    }
  ],
  "location": "SdtNewSteps.inputActingField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Add",
      "offset": 7
    }
  ],
  "location": "SdtNewSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Save",
      "offset": 7
    }
  ],
  "location": "SdtNewSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "OK",
      "offset": 9
    }
  ],
  "location": "SdtNewSteps.toPushKeys(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SdtNewSteps.isAvailableErrorMassage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Sdt",
      "offset": 6
    }
  ],
  "location": "GlobalSteps.goToPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "SDT",
      "offset": 7
    }
  ],
  "location": "SdtNewSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButtonAppeared()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "delete",
      "offset": 7
    }
  ],
  "location": "SdtNewSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "OK",
      "offset": 9
    }
  ],
  "location": "SdtNewSteps.toPushKeys(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButtonAppeared()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 145700,
  "error_message": "java.lang.NoClassDefFoundError: Could not initialize class app.driver.SharedDriver\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor6.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.picocontainer.injectors.AbstractInjector.newInstance(AbstractInjector.java:145)\r\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:342)\r\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\r\n\tat org.picocontainer.injectors.AbstractInjectionFactory$LifecycleAdapter.getComponentInstance(AbstractInjectionFactory.java:56)\r\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\r\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\r\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\r\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:40)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat jdk.internal.reflect.GeneratedMethodAccessor17.invoke(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat com.intellij.rt.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:66)\r\n\tat com.intellij.rt.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:109)\r\n",
  "status": "failed"
});
formatter.uri("userID_hr.feature");
formatter.feature({
  "line": 1,
  "name": "User ID Page - HR",
  "description": "",
  "id": "user-id-page---hr",
  "keyword": "Feature"
});
formatter.before({
  "duration": 149800,
  "error_message": "java.lang.NoClassDefFoundError: Could not initialize class app.driver.SharedDriver\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor6.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.picocontainer.injectors.AbstractInjector.newInstance(AbstractInjector.java:145)\r\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:342)\r\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\r\n\tat org.picocontainer.injectors.AbstractInjectionFactory$LifecycleAdapter.getComponentInstance(AbstractInjectionFactory.java:56)\r\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\r\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\r\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\r\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:40)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat jdk.internal.reflect.GeneratedMethodAccessor17.invoke(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat com.intellij.rt.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:66)\r\n\tat com.intellij.rt.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:109)\r\n",
  "status": "failed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Go to Login page",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Enter \u0027auto-test-hr@onyx.com\u0027 Text in Email Field",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Enter \u0027check\u0027 Text in Password Field",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Click on \u0027Sign In\u0027 Button",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 6
    }
  ],
  "location": "GlobalSteps.goToPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "auto-test-hr@onyx.com",
      "offset": 7
    }
  ],
  "location": "LoginSteps.inputEmail(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "check",
      "offset": 7
    }
  ],
  "location": "LoginSteps.inputPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Sign In",
      "offset": 10
    }
  ],
  "location": "LoginSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 10,
  "name": "Check User ID Page",
  "description": "",
  "id": "user-id-page---hr;check-user-id-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@all"
    },
    {
      "line": 9,
      "name": "@smoke"
    },
    {
      "line": 9,
      "name": "@userid"
    },
    {
      "line": 9,
      "name": "@test"
    },
    {
      "line": 9,
      "name": "@auto-test-hr"
    },
    {
      "line": 9,
      "name": "@onyx.com"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "Go to User ID page",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Requested Page Available",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Is \u0027Menu\u0027 Block is Appeared in User ID Page",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Is \u0027User\u0027 Block is Appeared in User ID Page",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Is \u0027Full Name\u0027 Block is Appeared in User ID Page",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Is \u0027Phone\u0027 Block is Appeared in User ID Page",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Is \u0027Email\u0027 Block is Appeared in User ID Page",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Is \u0027Logout\u0027 Button is Appeared in User ID Page",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Is \u0027Change password\u0027 Button is Appeared in User ID Page",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Click on \u0027Change Password\u0027 Button in User Page",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Redirect to the Expected Page Worked",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "Click \u0027Back\u0027 Button",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Redirect to the Expected Page Worked",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "Click on \u0027Logout\u0027 Button in User Page",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "Redirect to the Expected Page Worked",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "User ID",
      "offset": 6
    }
  ],
  "location": "GlobalSteps.goToPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Menu",
      "offset": 4
    }
  ],
  "location": "UserIDSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "User",
      "offset": 4
    }
  ],
  "location": "UserIDSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Full Name",
      "offset": 4
    }
  ],
  "location": "UserIDSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Phone",
      "offset": 4
    }
  ],
  "location": "UserIDSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Email",
      "offset": 4
    }
  ],
  "location": "UserIDSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Logout",
      "offset": 4
    }
  ],
  "location": "UserIDSteps.isButtonAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Change password",
      "offset": 4
    }
  ],
  "location": "UserIDSteps.isButtonAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Change Password",
      "offset": 10
    }
  ],
  "location": "UserSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButtonAppeared()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Back",
      "offset": 7
    }
  ],
  "location": "ProfileSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButtonAppeared()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Logout",
      "offset": 10
    }
  ],
  "location": "UserSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButtonAppeared()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 149000,
  "error_message": "java.lang.NoClassDefFoundError: Could not initialize class app.driver.SharedDriver\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor6.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.picocontainer.injectors.AbstractInjector.newInstance(AbstractInjector.java:145)\r\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:342)\r\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\r\n\tat org.picocontainer.injectors.AbstractInjectionFactory$LifecycleAdapter.getComponentInstance(AbstractInjectionFactory.java:56)\r\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\r\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\r\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\r\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:40)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat jdk.internal.reflect.GeneratedMethodAccessor17.invoke(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat com.intellij.rt.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:66)\r\n\tat com.intellij.rt.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:109)\r\n",
  "status": "failed"
});
formatter.uri("userID_manager.feature");
formatter.feature({
  "line": 1,
  "name": "User ID Page - Department Manager",
  "description": "",
  "id": "user-id-page---department-manager",
  "keyword": "Feature"
});
formatter.before({
  "duration": 153400,
  "error_message": "java.lang.NoClassDefFoundError: Could not initialize class app.driver.SharedDriver\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor6.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.picocontainer.injectors.AbstractInjector.newInstance(AbstractInjector.java:145)\r\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:342)\r\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\r\n\tat org.picocontainer.injectors.AbstractInjectionFactory$LifecycleAdapter.getComponentInstance(AbstractInjectionFactory.java:56)\r\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\r\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\r\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\r\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:40)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat jdk.internal.reflect.GeneratedMethodAccessor17.invoke(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat com.intellij.rt.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:66)\r\n\tat com.intellij.rt.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:109)\r\n",
  "status": "failed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Go to Login page",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Enter \u0027auto-test-manager@onyx.com\u0027 Text in Email Field",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Enter \u0027check\u0027 Text in Password Field",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Click on \u0027Sign In\u0027 Button",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 6
    }
  ],
  "location": "GlobalSteps.goToPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "auto-test-manager@onyx.com",
      "offset": 7
    }
  ],
  "location": "LoginSteps.inputEmail(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "check",
      "offset": 7
    }
  ],
  "location": "LoginSteps.inputPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Sign In",
      "offset": 10
    }
  ],
  "location": "LoginSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 10,
  "name": "Check User ID Page",
  "description": "",
  "id": "user-id-page---department-manager;check-user-id-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@all"
    },
    {
      "line": 9,
      "name": "@smoke"
    },
    {
      "line": 9,
      "name": "@userid"
    },
    {
      "line": 9,
      "name": "@test"
    },
    {
      "line": 9,
      "name": "@auto-test-manager"
    },
    {
      "line": 9,
      "name": "@onyx.com"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "Go to User ID page",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Requested Page Available",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Is \u0027Menu\u0027 Block is Appeared in User ID Page",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Is \u0027User\u0027 Block is Appeared in User ID Page",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Is \u0027Full Name\u0027 Block is Appeared in User ID Page",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Is \u0027Phone\u0027 Block is Appeared in User ID Page",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Is \u0027Email\u0027 Block is Appeared in User ID Page",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Is \u0027Logout\u0027 Button is Appeared in User ID Page",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Is \u0027Change password\u0027 Button is Appeared in User ID Page",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Click on \u0027Change Password\u0027 Button in User Page",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Redirect to the Expected Page Worked",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "Click \u0027Back\u0027 Button",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Redirect to the Expected Page Worked",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "Click on \u0027Logout\u0027 Button in User Page",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "Redirect to the Expected Page Worked",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "User ID",
      "offset": 6
    }
  ],
  "location": "GlobalSteps.goToPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Menu",
      "offset": 4
    }
  ],
  "location": "UserIDSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "User",
      "offset": 4
    }
  ],
  "location": "UserIDSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Full Name",
      "offset": 4
    }
  ],
  "location": "UserIDSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Phone",
      "offset": 4
    }
  ],
  "location": "UserIDSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Email",
      "offset": 4
    }
  ],
  "location": "UserIDSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Logout",
      "offset": 4
    }
  ],
  "location": "UserIDSteps.isButtonAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Change password",
      "offset": 4
    }
  ],
  "location": "UserIDSteps.isButtonAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Change Password",
      "offset": 10
    }
  ],
  "location": "UserSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButtonAppeared()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Back",
      "offset": 7
    }
  ],
  "location": "ProfileSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButtonAppeared()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Logout",
      "offset": 10
    }
  ],
  "location": "UserSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButtonAppeared()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 143600,
  "error_message": "java.lang.NoClassDefFoundError: Could not initialize class app.driver.SharedDriver\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor6.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.picocontainer.injectors.AbstractInjector.newInstance(AbstractInjector.java:145)\r\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:342)\r\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\r\n\tat org.picocontainer.injectors.AbstractInjectionFactory$LifecycleAdapter.getComponentInstance(AbstractInjectionFactory.java:56)\r\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\r\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\r\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\r\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:40)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat jdk.internal.reflect.GeneratedMethodAccessor17.invoke(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat com.intellij.rt.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:66)\r\n\tat com.intellij.rt.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:109)\r\n",
  "status": "failed"
});
formatter.uri("userID_recruiter.feature");
formatter.feature({
  "line": 1,
  "name": "User ID Page - Recruiter",
  "description": "",
  "id": "user-id-page---recruiter",
  "keyword": "Feature"
});
formatter.before({
  "duration": 143400,
  "error_message": "java.lang.NoClassDefFoundError: Could not initialize class app.driver.SharedDriver\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor6.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.picocontainer.injectors.AbstractInjector.newInstance(AbstractInjector.java:145)\r\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:342)\r\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\r\n\tat org.picocontainer.injectors.AbstractInjectionFactory$LifecycleAdapter.getComponentInstance(AbstractInjectionFactory.java:56)\r\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\r\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\r\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\r\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:40)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat jdk.internal.reflect.GeneratedMethodAccessor17.invoke(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat com.intellij.rt.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:66)\r\n\tat com.intellij.rt.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:109)\r\n",
  "status": "failed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Go to Login page",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Enter \u0027auto-test@onyx.com\u0027 Text in Email Field",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Enter \u0027check\u0027 Text in Password Field",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Click on \u0027Sign In\u0027 Button",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 6
    }
  ],
  "location": "GlobalSteps.goToPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "auto-test@onyx.com",
      "offset": 7
    }
  ],
  "location": "LoginSteps.inputEmail(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "check",
      "offset": 7
    }
  ],
  "location": "LoginSteps.inputPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Sign In",
      "offset": 10
    }
  ],
  "location": "LoginSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 10,
  "name": "Check User ID Page",
  "description": "",
  "id": "user-id-page---recruiter;check-user-id-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@all"
    },
    {
      "line": 9,
      "name": "@smoke"
    },
    {
      "line": 9,
      "name": "@userid"
    },
    {
      "line": 9,
      "name": "@test"
    },
    {
      "line": 9,
      "name": "@auto-test"
    },
    {
      "line": 9,
      "name": "@onyx.com"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "Go to User ID page",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Requested Page Available",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Is \u0027Menu\u0027 Block is Appeared in User ID Page",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Is \u0027User\u0027 Block is Appeared in User ID Page",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Is \u0027Full Name\u0027 Block is Appeared in User ID Page",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Is \u0027Phone\u0027 Block is Appeared in User ID Page",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Is \u0027Email\u0027 Block is Appeared in User ID Page",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Is \u0027Logout\u0027 Button is Appeared in User ID Page",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Is \u0027Change password\u0027 Button is Appeared in User ID Page",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Click on \u0027Change Password\u0027 Button in User Page",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Redirect to the Expected Page Worked",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "Click \u0027Back\u0027 Button",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Redirect to the Expected Page Worked",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "Click on \u0027Logout\u0027 Button in User Page",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "Redirect to the Expected Page Worked",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "User ID",
      "offset": 6
    }
  ],
  "location": "GlobalSteps.goToPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Menu",
      "offset": 4
    }
  ],
  "location": "UserIDSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "User",
      "offset": 4
    }
  ],
  "location": "UserIDSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Full Name",
      "offset": 4
    }
  ],
  "location": "UserIDSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Phone",
      "offset": 4
    }
  ],
  "location": "UserIDSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Email",
      "offset": 4
    }
  ],
  "location": "UserIDSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Logout",
      "offset": 4
    }
  ],
  "location": "UserIDSteps.isButtonAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Change password",
      "offset": 4
    }
  ],
  "location": "UserIDSteps.isButtonAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Change Password",
      "offset": 10
    }
  ],
  "location": "UserSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButtonAppeared()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Back",
      "offset": 7
    }
  ],
  "location": "ProfileSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButtonAppeared()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Logout",
      "offset": 10
    }
  ],
  "location": "UserSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButtonAppeared()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 174400,
  "error_message": "java.lang.NoClassDefFoundError: Could not initialize class app.driver.SharedDriver\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor6.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.picocontainer.injectors.AbstractInjector.newInstance(AbstractInjector.java:145)\r\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:342)\r\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\r\n\tat org.picocontainer.injectors.AbstractInjectionFactory$LifecycleAdapter.getComponentInstance(AbstractInjectionFactory.java:56)\r\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\r\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\r\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\r\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:40)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat jdk.internal.reflect.GeneratedMethodAccessor17.invoke(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat com.intellij.rt.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:66)\r\n\tat com.intellij.rt.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:109)\r\n",
  "status": "failed"
});
formatter.uri("user_accountManager.feature");
formatter.feature({
  "line": 1,
  "name": "User Page - Account Manager",
  "description": "",
  "id": "user-page---account-manager",
  "keyword": "Feature"
});
formatter.before({
  "duration": 145000,
  "error_message": "java.lang.NoClassDefFoundError: Could not initialize class app.driver.SharedDriver\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor6.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.picocontainer.injectors.AbstractInjector.newInstance(AbstractInjector.java:145)\r\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:342)\r\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\r\n\tat org.picocontainer.injectors.AbstractInjectionFactory$LifecycleAdapter.getComponentInstance(AbstractInjectionFactory.java:56)\r\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\r\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\r\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\r\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:40)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat jdk.internal.reflect.GeneratedMethodAccessor17.invoke(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat com.intellij.rt.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:66)\r\n\tat com.intellij.rt.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:109)\r\n",
  "status": "failed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Go to Login page",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Enter \u0027auto-test-limon4-zorgan@nexteum.com\u0027 Text in Email Field",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Enter \u0027check\u0027 Text in Password Field",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Click on \u0027Sign In\u0027 Button",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 6
    }
  ],
  "location": "GlobalSteps.goToPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "auto-test-limon4-zorgan@nexteum.com",
      "offset": 7
    }
  ],
  "location": "LoginSteps.inputEmail(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "check",
      "offset": 7
    }
  ],
  "location": "LoginSteps.inputPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Sign In",
      "offset": 10
    }
  ],
  "location": "LoginSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 10,
  "name": "Check User Page",
  "description": "",
  "id": "user-page---account-manager;check-user-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@all"
    },
    {
      "line": 9,
      "name": "@smoke"
    },
    {
      "line": 9,
      "name": "@user"
    },
    {
      "line": 9,
      "name": "@test"
    },
    {
      "line": 9,
      "name": "@auto-test-limon4-zorgan"
    },
    {
      "line": 9,
      "name": "@nexteum.com"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "Go to User page",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "THead is Available in User Page",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "\u0027Create new\u0027 Button is Available in User Page",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "\u0027Users\u0027 Button is Available in User Page",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "\u0027New\u0027 Button is Available in User Page",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "\u0027Terminated\u0027 Button is Available in User Page",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Click on \u0027Users\u0027 Button in User Page",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Click on \u0027New\u0027 Button in User Page",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Click on \u0027Terminated\u0027 Button in User Page",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Click on \u0027All\u0027 Button in User Page",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Click on \u0027Create New\u0027 Button in User Page",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "User",
      "offset": 6
    }
  ],
  "location": "GlobalSteps.goToPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UserSteps.assertNameTable()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Create new",
      "offset": 1
    }
  ],
  "location": "UserSteps.isButtonAvailable(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Users",
      "offset": 1
    }
  ],
  "location": "UserSteps.isButtonAvailable(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "New",
      "offset": 1
    }
  ],
  "location": "UserSteps.isButtonAvailable(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Terminated",
      "offset": 1
    }
  ],
  "location": "UserSteps.isButtonAvailable(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Users",
      "offset": 10
    }
  ],
  "location": "UserSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "New",
      "offset": 10
    }
  ],
  "location": "UserSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Terminated",
      "offset": 10
    }
  ],
  "location": "UserSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "All",
      "offset": 10
    }
  ],
  "location": "UserSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Create New",
      "offset": 10
    }
  ],
  "location": "UserSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 6234800,
  "error_message": "java.lang.NoClassDefFoundError: Could not initialize class app.driver.SharedDriver\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor6.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.picocontainer.injectors.AbstractInjector.newInstance(AbstractInjector.java:145)\r\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:342)\r\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\r\n\tat org.picocontainer.injectors.AbstractInjectionFactory$LifecycleAdapter.getComponentInstance(AbstractInjectionFactory.java:56)\r\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\r\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\r\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\r\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:40)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat jdk.internal.reflect.GeneratedMethodAccessor17.invoke(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat com.intellij.rt.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:66)\r\n\tat com.intellij.rt.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:109)\r\n",
  "status": "failed"
});
formatter.uri("user_createNew.feature");
formatter.feature({
  "line": 1,
  "name": "User Create New Page - Account Manager",
  "description": "",
  "id": "user-create-new-page---account-manager",
  "keyword": "Feature"
});
formatter.before({
  "duration": 133300,
  "error_message": "java.lang.NoClassDefFoundError: Could not initialize class app.driver.SharedDriver\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor6.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.picocontainer.injectors.AbstractInjector.newInstance(AbstractInjector.java:145)\r\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:342)\r\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\r\n\tat org.picocontainer.injectors.AbstractInjectionFactory$LifecycleAdapter.getComponentInstance(AbstractInjectionFactory.java:56)\r\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\r\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\r\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\r\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:40)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat jdk.internal.reflect.GeneratedMethodAccessor17.invoke(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat com.intellij.rt.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:66)\r\n\tat com.intellij.rt.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:109)\r\n",
  "status": "failed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Go to Login page",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Enter \u0027auto-test-limon4-zorgan@nexteum.com\u0027 Text in Email Field",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Enter \u0027check\u0027 Text in Password Field",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Click on \u0027Sign In\u0027 Button",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 6
    }
  ],
  "location": "GlobalSteps.goToPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "auto-test-limon4-zorgan@nexteum.com",
      "offset": 7
    }
  ],
  "location": "LoginSteps.inputEmail(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "check",
      "offset": 7
    }
  ],
  "location": "LoginSteps.inputPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Sign In",
      "offset": 10
    }
  ],
  "location": "LoginSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 10,
  "name": "Check User Page",
  "description": "",
  "id": "user-create-new-page---account-manager;check-user-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@all"
    },
    {
      "line": 9,
      "name": "@smoke"
    },
    {
      "line": 9,
      "name": "@userCreateNew"
    },
    {
      "line": 9,
      "name": "@test"
    },
    {
      "line": 9,
      "name": "@auto-test-limon4-zorgan"
    },
    {
      "line": 9,
      "name": "@nexteum.com"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "Go to User Create New page",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "\u0027Save\u0027 Button is Available in User Create New Page",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "\u0027back to list\u0027 Button is Available in User Create New Page",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Enter Name \u0027Vasya Gnom\u0027 In Name Text Field in User Create New Page",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Select Office \u0027Lustdorfska road (Odessa, Ukraine)\u0027 In Office Field in User Create New Page",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Select Department \u0027Development team\u0027 In Department Field in User Create New Page",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Select Team \u0027Display Team\u0027 In Team Field in User Create New Page",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Enter eMail \u0027vasyagnom@gmail.com\u0027 In eMail Text Field in User Create New Page",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Select Year \u00272019\u0027 In Create Date Year Field in User Create New Page",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Select Month \u0027Jul\u0027 In Create Date Month Field in User Create New Page",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Select Day \u002725\u0027 In Create Date Day Field in User Create New Page",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Select Hour \u002716\u0027 In Create Date Hour Field in User Create New Page",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Select Minute \u002720\u0027 In Create Date Minute Field in User Create New Page",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Enter Password \u0027password\u0027 In Password Text Field in User Create New Page",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Enter Sub Team \u0027CRM Team\u0027 In Sub Team Text Field in User Create New Page",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Enter Position \u0027QA Engineer\u0027 In Position Text Field in User Create New Page",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Enter Phone \u0027+380631234567\u0027 In Phone Text Field in User Create New Page",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Enter Skype \u0027vasyagnom\u0027 In Skype Text Field in User Create New Page",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Enter Personal eMail \u0027vasyagnom@gmail.com\u0027 In Personal eMail Text Field in User Create New Page",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Enter Salary \u00272500)\u0027 In Salary Text Field in User Create New Page",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "Select Sex \u0027male\u0027 In Sex Field in User Create New Page",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "Select Year \u00271980\u0027 In Birth Day Year Field in User Create New Page",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "Select Month \u0027Jun\u0027 In Birth Day Month Field in User Create New Page",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "Select Day \u00279\u0027 In Birth Day Day Field in User Create New Page",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "Select Marital Status \u0027married\u0027 In Marital Status Field in User Create New Page",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "Enter Text \u00272\u0027 In Children Field in User Create New Page",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "Enter Location \u0027Odessa\u0027 In Location Text Field in User Create New Page",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "Click on \u0027back to list\u0027 Field in User Create New Page",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "User Create New",
      "offset": 6
    }
  ],
  "location": "GlobalSteps.goToPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Save",
      "offset": 1
    }
  ],
  "location": "UserCreateNewSteps.isButtonAvailable(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "back to list",
      "offset": 1
    }
  ],
  "location": "UserCreateNewSteps.isButtonAvailable(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Vasya Gnom",
      "offset": 12
    }
  ],
  "location": "UserCreateNewSteps.inputNameField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Lustdorfska road (Odessa, Ukraine)",
      "offset": 15
    }
  ],
  "location": "UserCreateNewSteps.selectOfficeField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Development team",
      "offset": 19
    }
  ],
  "location": "UserCreateNewSteps.selectDepartmentField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Display Team",
      "offset": 13
    }
  ],
  "location": "UserCreateNewSteps.selectTeamField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "vasyagnom@gmail.com",
      "offset": 13
    }
  ],
  "location": "UserCreateNewSteps.inputEMailField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2019",
      "offset": 13
    }
  ],
  "location": "UserCreateNewSteps.selectCreateDateYear(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Jul",
      "offset": 14
    }
  ],
  "location": "UserCreateNewSteps.selectCreateDateMonth(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "25",
      "offset": 12
    }
  ],
  "location": "UserCreateNewSteps.selectCreateDateDay(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "16",
      "offset": 13
    }
  ],
  "location": "UserCreateNewSteps.selectCreateDateHour(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 15
    }
  ],
  "location": "UserCreateNewSteps.selectCreateDateMinute(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 16
    }
  ],
  "location": "UserCreateNewSteps.inputPasswordField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "CRM Team",
      "offset": 16
    }
  ],
  "location": "UserCreateNewSteps.inputSubTeamField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "QA Engineer",
      "offset": 16
    }
  ],
  "location": "UserCreateNewSteps.inputPositionField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "+380631234567",
      "offset": 13
    }
  ],
  "location": "UserCreateNewSteps.inputPhoneField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "vasyagnom",
      "offset": 13
    }
  ],
  "location": "UserCreateNewSteps.inputSkypeField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "vasyagnom@gmail.com",
      "offset": 22
    }
  ],
  "location": "UserCreateNewSteps.inputPersonalEMailField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2500)",
      "offset": 14
    }
  ],
  "location": "UserCreateNewSteps.inputSalaryField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "male",
      "offset": 12
    }
  ],
  "location": "UserCreateNewSteps.selectSexField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1980",
      "offset": 13
    }
  ],
  "location": "UserCreateNewSteps.selectBirthDayYear(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Jun",
      "offset": 14
    }
  ],
  "location": "UserCreateNewSteps.selectBirthDayMonth(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "9",
      "offset": 12
    }
  ],
  "location": "UserCreateNewSteps.selectBirthDayDay(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "married",
      "offset": 23
    }
  ],
  "location": "UserCreateNewSteps.inputMaritalStatusField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 12
    }
  ],
  "location": "UserCreateNewSteps.inputChildrenField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Odessa",
      "offset": 16
    }
  ],
  "location": "UserCreateNewSteps.inputLocationField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "back to list",
      "offset": 10
    }
  ],
  "location": "UserCreateNewSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 142300,
  "error_message": "java.lang.NoClassDefFoundError: Could not initialize class app.driver.SharedDriver\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor6.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.picocontainer.injectors.AbstractInjector.newInstance(AbstractInjector.java:145)\r\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:342)\r\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\r\n\tat org.picocontainer.injectors.AbstractInjectionFactory$LifecycleAdapter.getComponentInstance(AbstractInjectionFactory.java:56)\r\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\r\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\r\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\r\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:40)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat jdk.internal.reflect.GeneratedMethodAccessor17.invoke(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat com.intellij.rt.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:66)\r\n\tat com.intellij.rt.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:109)\r\n",
  "status": "failed"
});
formatter.uri("vacancyClosed_recruiter.feature");
formatter.feature({
  "line": 1,
  "name": "Vacancy Closed Page - Recruiter",
  "description": "",
  "id": "vacancy-closed-page---recruiter",
  "keyword": "Feature"
});
formatter.before({
  "duration": 202400,
  "error_message": "java.lang.NoClassDefFoundError: Could not initialize class app.driver.SharedDriver\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor6.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.picocontainer.injectors.AbstractInjector.newInstance(AbstractInjector.java:145)\r\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:342)\r\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\r\n\tat org.picocontainer.injectors.AbstractInjectionFactory$LifecycleAdapter.getComponentInstance(AbstractInjectionFactory.java:56)\r\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\r\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\r\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\r\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:40)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat jdk.internal.reflect.GeneratedMethodAccessor17.invoke(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat com.intellij.rt.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:66)\r\n\tat com.intellij.rt.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:109)\r\n",
  "status": "failed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Go to Login page",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Enter \u0027auto-test@onyx.com\u0027 Text in Email Field",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Enter \u0027check\u0027 Text in Password Field",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Click on \u0027Sign In\u0027 Button",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 6
    }
  ],
  "location": "GlobalSteps.goToPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "auto-test@onyx.com",
      "offset": 7
    }
  ],
  "location": "LoginSteps.inputEmail(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "check",
      "offset": 7
    }
  ],
  "location": "LoginSteps.inputPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Sign In",
      "offset": 10
    }
  ],
  "location": "LoginSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 10,
  "name": "Vacancy ID Page Appeared",
  "description": "",
  "id": "vacancy-closed-page---recruiter;vacancy-id-page-appeared",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@all"
    },
    {
      "line": 9,
      "name": "@smoke"
    },
    {
      "line": 9,
      "name": "@vacancyClosed"
    },
    {
      "line": 9,
      "name": "@test"
    },
    {
      "line": 9,
      "name": "@auto-test"
    },
    {
      "line": 9,
      "name": "@onyx.com"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "Go to Vacancy Closed page",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Requested Page Available",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "\u0027Menu\u0027 Block is Appeared",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Is Block Appeared \u0027Request\u0027 in Closed Vacancy Page",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Is Block Appeared \u0027Created\u0027 in Closed Vacancy Page",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Is Block Appeared \u0027By\u0027 in Closed Vacancy Page",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Checking status \u0027Central Status Vacancy\u0027 in Closed Vacancy Page",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Checking status \u0027Employed\u0027 in Closed Vacancy Page",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Click \u0027View Request Info\u0027 Button in Closed Vacancy Page",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Click \u0027Back\u0027 Button in Closed Vacancy Page",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Click \u0027View candidate History\u0027 Button in Closed Vacancy Page",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Is Block Appeared \u0027Candidate Status: Employed\u0027 in Closed Vacancy Page",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "Click \u0027Back To Candidates List\u0027 Button in Closed Vacancy Page",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "Click \u0027Candidate Employed Link\u0027 Button in Closed Vacancy Page",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "Is Block Appeared \u0027Employed\u0027 in Closed Vacancy Page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Vacancy Closed",
      "offset": 6
    }
  ],
  "location": "GlobalSteps.goToPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Menu",
      "offset": 1
    }
  ],
  "location": "ProfileSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Request",
      "offset": 19
    }
  ],
  "location": "VacancyClosedSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Created",
      "offset": 19
    }
  ],
  "location": "VacancyClosedSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "By",
      "offset": 19
    }
  ],
  "location": "VacancyClosedSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Central Status Vacancy",
      "offset": 17
    }
  ],
  "location": "VacancyClosedSteps.checkStatus(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Employed",
      "offset": 17
    }
  ],
  "location": "VacancyClosedSteps.checkStatus(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "View Request Info",
      "offset": 7
    }
  ],
  "location": "VacancyClosedSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Back",
      "offset": 7
    }
  ],
  "location": "VacancyClosedSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "View candidate History",
      "offset": 7
    }
  ],
  "location": "VacancyClosedSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Candidate Status: Employed",
      "offset": 19
    }
  ],
  "location": "VacancyClosedSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Back To Candidates List",
      "offset": 7
    }
  ],
  "location": "VacancyClosedSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Candidate Employed Link",
      "offset": 7
    }
  ],
  "location": "VacancyClosedSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Employed",
      "offset": 19
    }
  ],
  "location": "VacancyClosedSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 160900,
  "error_message": "java.lang.NoClassDefFoundError: Could not initialize class app.driver.SharedDriver\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor6.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.picocontainer.injectors.AbstractInjector.newInstance(AbstractInjector.java:145)\r\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:342)\r\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\r\n\tat org.picocontainer.injectors.AbstractInjectionFactory$LifecycleAdapter.getComponentInstance(AbstractInjectionFactory.java:56)\r\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\r\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\r\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\r\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:40)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat jdk.internal.reflect.GeneratedMethodAccessor17.invoke(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat com.intellij.rt.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:66)\r\n\tat com.intellij.rt.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:109)\r\n",
  "status": "failed"
});
formatter.uri("vacancyID_manager.feature");
formatter.feature({
  "line": 1,
  "name": "Vacancy ID Page - Department Manager",
  "description": "",
  "id": "vacancy-id-page---department-manager",
  "keyword": "Feature"
});
formatter.before({
  "duration": 139800,
  "error_message": "java.lang.NoClassDefFoundError: Could not initialize class app.driver.SharedDriver\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor6.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.picocontainer.injectors.AbstractInjector.newInstance(AbstractInjector.java:145)\r\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:342)\r\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\r\n\tat org.picocontainer.injectors.AbstractInjectionFactory$LifecycleAdapter.getComponentInstance(AbstractInjectionFactory.java:56)\r\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\r\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\r\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\r\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:40)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat jdk.internal.reflect.GeneratedMethodAccessor17.invoke(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat com.intellij.rt.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:66)\r\n\tat com.intellij.rt.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:109)\r\n",
  "status": "failed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Go to Login page",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Enter \u0027auto-test-manager@onyx.com\u0027 Text in Email Field",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Enter \u0027check\u0027 Text in Password Field",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Click on \u0027Sign In\u0027 Button",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 6
    }
  ],
  "location": "GlobalSteps.goToPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "auto-test-manager@onyx.com",
      "offset": 7
    }
  ],
  "location": "LoginSteps.inputEmail(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "check",
      "offset": 7
    }
  ],
  "location": "LoginSteps.inputPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Sign In",
      "offset": 10
    }
  ],
  "location": "LoginSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 10,
  "name": "Vacancy ID Page Appeared",
  "description": "",
  "id": "vacancy-id-page---department-manager;vacancy-id-page-appeared",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@all"
    },
    {
      "line": 9,
      "name": "@smoke"
    },
    {
      "line": 9,
      "name": "@vacancyid"
    },
    {
      "line": 9,
      "name": "@test"
    },
    {
      "line": 9,
      "name": "@auto-test-manager"
    },
    {
      "line": 9,
      "name": "@onyx.com"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "Go to Vacancy ID page",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Requested Page Available",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "\u0027Menu\u0027 Block is Appeared",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "\u0027Vacancy\u0027 Block is Appeared",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Is \u0027Request#\u0027 Block is Appeared in Vacancy ID Page",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Is \u0027Office\u0027 Block is Appeared in Vacancy ID Page",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Is \u0027Department\u0027 Block is Appeared in Vacancy ID Page",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Is \u0027Team\u0027 Block is Appeared in Vacancy ID Page",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Is \u0027Position\u0027 Block is Appeared in Vacancy ID Page",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Is \u0027Salary\u0027 Block is Appeared in Vacancy ID Page",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Is \u0027Test\u0027 Block is Appeared in Vacancy ID Page",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "Is \u0027English\u0027 Block is Appeared in Vacancy ID Page",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "Is \u0027Amount\u0027 Block is Appeared in Vacancy ID Page",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "Is \u0027Bonus\u0027 Block is Appeared in Vacancy ID Page",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "Is \u0027Responsibilities\u0027 Block is Appeared in Vacancy ID Page",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "Is \u0027Requirements\u0027 Block is Appeared in Vacancy ID Page",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "Is \u0027Plus\u0027 Block is Appeared in Vacancy ID Page",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "Is \u0027Created\u0027 Block is Appeared in Vacancy ID Page",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "Is \u0027By\u0027 Block is Appeared in Vacancy ID Page",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "Select User \u0027zorgan\u0027 In User Field in Vacancy ID Page",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "Click \u0027Send\u0027 Button in Vacancy ID Page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Vacancy ID",
      "offset": 6
    }
  ],
  "location": "GlobalSteps.goToPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Menu",
      "offset": 1
    }
  ],
  "location": "ProfileSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Vacancy",
      "offset": 1
    }
  ],
  "location": "ProfileSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Request#",
      "offset": 4
    }
  ],
  "location": "VacancyIDSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Office",
      "offset": 4
    }
  ],
  "location": "VacancyIDSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Department",
      "offset": 4
    }
  ],
  "location": "VacancyIDSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Team",
      "offset": 4
    }
  ],
  "location": "VacancyIDSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Position",
      "offset": 4
    }
  ],
  "location": "VacancyIDSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Salary",
      "offset": 4
    }
  ],
  "location": "VacancyIDSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Test",
      "offset": 4
    }
  ],
  "location": "VacancyIDSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "English",
      "offset": 4
    }
  ],
  "location": "VacancyIDSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Amount",
      "offset": 4
    }
  ],
  "location": "VacancyIDSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Bonus",
      "offset": 4
    }
  ],
  "location": "VacancyIDSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Responsibilities",
      "offset": 4
    }
  ],
  "location": "VacancyIDSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Requirements",
      "offset": 4
    }
  ],
  "location": "VacancyIDSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Plus",
      "offset": 4
    }
  ],
  "location": "VacancyIDSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Created",
      "offset": 4
    }
  ],
  "location": "VacancyIDSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "By",
      "offset": 4
    }
  ],
  "location": "VacancyIDSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "zorgan",
      "offset": 13
    }
  ],
  "location": "VacancyIDSteps.clickDropDownField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Send",
      "offset": 7
    }
  ],
  "location": "VacancyIDSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 128900,
  "error_message": "java.lang.NoClassDefFoundError: Could not initialize class app.driver.SharedDriver\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor6.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.picocontainer.injectors.AbstractInjector.newInstance(AbstractInjector.java:145)\r\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:342)\r\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\r\n\tat org.picocontainer.injectors.AbstractInjectionFactory$LifecycleAdapter.getComponentInstance(AbstractInjectionFactory.java:56)\r\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\r\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\r\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\r\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:40)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat jdk.internal.reflect.GeneratedMethodAccessor17.invoke(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat com.intellij.rt.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:66)\r\n\tat com.intellij.rt.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:109)\r\n",
  "status": "failed"
});
formatter.uri("vacancyID_recruiter.feature");
formatter.feature({
  "line": 1,
  "name": "Vacancy ID Page - Recruiter",
  "description": "",
  "id": "vacancy-id-page---recruiter",
  "keyword": "Feature"
});
formatter.before({
  "duration": 150000,
  "error_message": "java.lang.NoClassDefFoundError: Could not initialize class app.driver.SharedDriver\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor6.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.picocontainer.injectors.AbstractInjector.newInstance(AbstractInjector.java:145)\r\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:342)\r\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\r\n\tat org.picocontainer.injectors.AbstractInjectionFactory$LifecycleAdapter.getComponentInstance(AbstractInjectionFactory.java:56)\r\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\r\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\r\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\r\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:40)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat jdk.internal.reflect.GeneratedMethodAccessor17.invoke(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat com.intellij.rt.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:66)\r\n\tat com.intellij.rt.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:109)\r\n",
  "status": "failed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Go to Login page",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Enter \u0027auto-test@onyx.com\u0027 Text in Email Field",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Enter \u0027check\u0027 Text in Password Field",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Click on \u0027Sign In\u0027 Button",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 6
    }
  ],
  "location": "GlobalSteps.goToPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "auto-test@onyx.com",
      "offset": 7
    }
  ],
  "location": "LoginSteps.inputEmail(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "check",
      "offset": 7
    }
  ],
  "location": "LoginSteps.inputPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Sign In",
      "offset": 10
    }
  ],
  "location": "LoginSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 10,
  "name": "Vacancy ID Page Appeared",
  "description": "",
  "id": "vacancy-id-page---recruiter;vacancy-id-page-appeared",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@all"
    },
    {
      "line": 9,
      "name": "@smoke"
    },
    {
      "line": 9,
      "name": "@vacancyid"
    },
    {
      "line": 9,
      "name": "@test"
    },
    {
      "line": 9,
      "name": "@auto-test"
    },
    {
      "line": 9,
      "name": "@onyx.com"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "Go to Vacancy ID page",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Requested Page Available",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "\u0027Menu\u0027 Block is Appeared",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "\u0027Vacancy\u0027 Block is Appeared",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Is \u0027Request#\u0027 Block is Appeared in Vacancy ID Page",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Is \u0027Office\u0027 Block is Appeared in Vacancy ID Page",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Is \u0027Department\u0027 Block is Appeared in Vacancy ID Page",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Is \u0027Team\u0027 Block is Appeared in Vacancy ID Page",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Is \u0027Position\u0027 Block is Appeared in Vacancy ID Page",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Is \u0027Salary\u0027 Block is Appeared in Vacancy ID Page",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Is \u0027Test\u0027 Block is Appeared in Vacancy ID Page",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "Is \u0027English\u0027 Block is Appeared in Vacancy ID Page",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "Is \u0027Amount\u0027 Block is Appeared in Vacancy ID Page",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "Is \u0027Bonus\u0027 Block is Appeared in Vacancy ID Page",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "Is \u0027Responsibilities\u0027 Block is Appeared in Vacancy ID Page",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "Is \u0027Requirements\u0027 Block is Appeared in Vacancy ID Page",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "Is \u0027Plus\u0027 Block is Appeared in Vacancy ID Page",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "Is \u0027Created\u0027 Block is Appeared in Vacancy ID Page",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "Is \u0027By\u0027 Block is Appeared in Vacancy ID Page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Vacancy ID",
      "offset": 6
    }
  ],
  "location": "GlobalSteps.goToPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Menu",
      "offset": 1
    }
  ],
  "location": "ProfileSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Vacancy",
      "offset": 1
    }
  ],
  "location": "ProfileSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Request#",
      "offset": 4
    }
  ],
  "location": "VacancyIDSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Office",
      "offset": 4
    }
  ],
  "location": "VacancyIDSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Department",
      "offset": 4
    }
  ],
  "location": "VacancyIDSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Team",
      "offset": 4
    }
  ],
  "location": "VacancyIDSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Position",
      "offset": 4
    }
  ],
  "location": "VacancyIDSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Salary",
      "offset": 4
    }
  ],
  "location": "VacancyIDSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Test",
      "offset": 4
    }
  ],
  "location": "VacancyIDSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "English",
      "offset": 4
    }
  ],
  "location": "VacancyIDSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Amount",
      "offset": 4
    }
  ],
  "location": "VacancyIDSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Bonus",
      "offset": 4
    }
  ],
  "location": "VacancyIDSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Responsibilities",
      "offset": 4
    }
  ],
  "location": "VacancyIDSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Requirements",
      "offset": 4
    }
  ],
  "location": "VacancyIDSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Plus",
      "offset": 4
    }
  ],
  "location": "VacancyIDSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Created",
      "offset": 4
    }
  ],
  "location": "VacancyIDSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "By",
      "offset": 4
    }
  ],
  "location": "VacancyIDSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 155000,
  "error_message": "java.lang.NoClassDefFoundError: Could not initialize class app.driver.SharedDriver\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor6.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.picocontainer.injectors.AbstractInjector.newInstance(AbstractInjector.java:145)\r\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:342)\r\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\r\n\tat org.picocontainer.injectors.AbstractInjectionFactory$LifecycleAdapter.getComponentInstance(AbstractInjectionFactory.java:56)\r\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\r\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\r\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\r\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:40)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat jdk.internal.reflect.GeneratedMethodAccessor17.invoke(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat com.intellij.rt.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:66)\r\n\tat com.intellij.rt.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:109)\r\n",
  "status": "failed"
});
formatter.uri("vacancyNew_manager.feature");
formatter.feature({
  "line": 1,
  "name": "Vacancy-New Page - Department Manager",
  "description": "",
  "id": "vacancy-new-page---department-manager",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1129600,
  "error_message": "java.lang.NoClassDefFoundError: Could not initialize class app.driver.SharedDriver\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor6.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.picocontainer.injectors.AbstractInjector.newInstance(AbstractInjector.java:145)\r\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:342)\r\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\r\n\tat org.picocontainer.injectors.AbstractInjectionFactory$LifecycleAdapter.getComponentInstance(AbstractInjectionFactory.java:56)\r\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\r\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\r\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\r\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:40)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat jdk.internal.reflect.GeneratedMethodAccessor17.invoke(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat com.intellij.rt.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:66)\r\n\tat com.intellij.rt.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:109)\r\n",
  "status": "failed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Go to Login page",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Enter \u0027auto-test-manager@onyx.com\u0027 Text in Email Field",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Enter \u0027check\u0027 Text in Password Field",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Click on \u0027Sign In\u0027 Button",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 6
    }
  ],
  "location": "GlobalSteps.goToPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "auto-test-manager@onyx.com",
      "offset": 7
    }
  ],
  "location": "LoginSteps.inputEmail(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "check",
      "offset": 7
    }
  ],
  "location": "LoginSteps.inputPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Sign In",
      "offset": 10
    }
  ],
  "location": "LoginSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 10,
  "name": "Vacancy New Page Appeared",
  "description": "",
  "id": "vacancy-new-page---department-manager;vacancy-new-page-appeared",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@all"
    },
    {
      "line": 9,
      "name": "@smoke"
    },
    {
      "line": 9,
      "name": "@vacancynew"
    },
    {
      "line": 9,
      "name": "@test"
    },
    {
      "line": 9,
      "name": "@auto-test-manager"
    },
    {
      "line": 9,
      "name": "@onyx.com"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "Go to Vacancy New page",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Requested Page Available",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "\u0027Menu\u0027 Block is Appeared",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "\u0027Create new Vacancy\u0027 Block is Appeared",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Select Office \u0027Lustdorfska road (Odessa, Ukraine)\u0027 In Office Field in Vacancy New Page",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Select Department \u0027Development team\u0027 In Department Field in Vacancy New Page",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Select Team \u0027Display Team\u0027 In Team Field in Vacancy New Page",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Enter Position \u0027QA\u0027 In Position Text Field in Vacancy New Page",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Enter Salary \u00272500\u0027 In Salary Text Field in Vacancy New Page",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Select Test \u0027Yes\u0027 In Test Field in Vacancy New Page",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Select English \u0027Upper-Intermediate\u0027 In English Field in Vacancy New Page",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Enter Amount \u00272\u0027 In Amount Text Field in Vacancy New Page",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Enter Bonus \u0027100\u0027 In Bonus Text Field in Vacancy New Page",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Enter Responsibilities \u0027test\u0027 In Responsibilities Text Field in Vacancy New Page",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Enter Requirements \u0027test)\u0027 In Requirements Text Field in Vacancy New Page",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Enter Plus \u0027test\u0027 In Plus Text Field in Vacancy New Page",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Enter Reason \u0027test\u0027 In Reason Text Field in Vacancy New Page",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Click \u0027Back to List\u0027 Button in Vacancy New Page",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "Redirect to the Expected Page Worked",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Vacancy New",
      "offset": 6
    }
  ],
  "location": "GlobalSteps.goToPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Menu",
      "offset": 1
    }
  ],
  "location": "ProfileSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Create new Vacancy",
      "offset": 1
    }
  ],
  "location": "ProfileSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Lustdorfska road (Odessa, Ukraine)",
      "offset": 15
    }
  ],
  "location": "VacancyNewSteps.selectOfficeField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Development team",
      "offset": 19
    }
  ],
  "location": "VacancyNewSteps.selectDepartmentField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Display Team",
      "offset": 13
    }
  ],
  "location": "VacancyNewSteps.selectTeamField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "QA",
      "offset": 16
    }
  ],
  "location": "VacancyNewSteps.selectPositionField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2500",
      "offset": 14
    }
  ],
  "location": "VacancyNewSteps.selectSalaryField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Yes",
      "offset": 13
    }
  ],
  "location": "VacancyNewSteps.selectTestField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Upper-Intermediate",
      "offset": 16
    }
  ],
  "location": "VacancyNewSteps.selectEnglishField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 14
    }
  ],
  "location": "VacancyNewSteps.selectAmountField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 13
    }
  ],
  "location": "VacancyNewSteps.selectBonusField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 24
    }
  ],
  "location": "VacancyNewSteps.selectResponsibilitiesField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "test)",
      "offset": 20
    }
  ],
  "location": "VacancyNewSteps.selectRequirementsField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 12
    }
  ],
  "location": "VacancyNewSteps.selectPlusField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 14
    }
  ],
  "location": "VacancyNewSteps.selectReasonField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Back to List",
      "offset": 7
    }
  ],
  "location": "VacancyNewSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButtonAppeared()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 140800,
  "error_message": "java.lang.NoClassDefFoundError: Could not initialize class app.driver.SharedDriver\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor6.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.picocontainer.injectors.AbstractInjector.newInstance(AbstractInjector.java:145)\r\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:342)\r\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\r\n\tat org.picocontainer.injectors.AbstractInjectionFactory$LifecycleAdapter.getComponentInstance(AbstractInjectionFactory.java:56)\r\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\r\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\r\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\r\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:40)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat jdk.internal.reflect.GeneratedMethodAccessor17.invoke(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat com.intellij.rt.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:66)\r\n\tat com.intellij.rt.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:109)\r\n",
  "status": "failed"
});
formatter.uri("vacancyRecruiterCandidateID_recruiter.feature");
formatter.feature({
  "line": 1,
  "name": "Vacancy Recruiter Candidate ID Page - Recruiter",
  "description": "",
  "id": "vacancy-recruiter-candidate-id-page---recruiter",
  "keyword": "Feature"
});
formatter.before({
  "duration": 214600,
  "error_message": "java.lang.NoClassDefFoundError: Could not initialize class app.driver.SharedDriver\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor6.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.picocontainer.injectors.AbstractInjector.newInstance(AbstractInjector.java:145)\r\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:342)\r\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\r\n\tat org.picocontainer.injectors.AbstractInjectionFactory$LifecycleAdapter.getComponentInstance(AbstractInjectionFactory.java:56)\r\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\r\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\r\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\r\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:40)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat jdk.internal.reflect.GeneratedMethodAccessor17.invoke(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat com.intellij.rt.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:66)\r\n\tat com.intellij.rt.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:109)\r\n",
  "status": "failed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Go to Login page",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Enter \u0027auto-test@onyx.com\u0027 Text in Email Field",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Enter \u0027check\u0027 Text in Password Field",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Click on \u0027Sign In\u0027 Button",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 6
    }
  ],
  "location": "GlobalSteps.goToPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "auto-test@onyx.com",
      "offset": 7
    }
  ],
  "location": "LoginSteps.inputEmail(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "check",
      "offset": 7
    }
  ],
  "location": "LoginSteps.inputPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Sign In",
      "offset": 10
    }
  ],
  "location": "LoginSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 10,
  "name": "Vacancy Recruiter Candidate ID Page Appeared",
  "description": "",
  "id": "vacancy-recruiter-candidate-id-page---recruiter;vacancy-recruiter-candidate-id-page-appeared",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@all"
    },
    {
      "line": 9,
      "name": "@smoke"
    },
    {
      "line": 9,
      "name": "@vacancyrecruitercandidate"
    },
    {
      "line": 9,
      "name": "@test"
    },
    {
      "line": 9,
      "name": "@auto-test"
    },
    {
      "line": 9,
      "name": "@onyx.com"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "Go to Vacancy Recruiter Candidate ID page",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Requested Page Available",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "\u0027Menu\u0027 Block is Appeared",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Click \u0027View Request Info\u0027 Button in Page Recruiter Candidate",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Redirect to the Expected Page Worked",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Click \u0027Back\u0027 Button in Page Recruiter Candidate",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Click \u0027View candidate History\u0027 Button in Page Recruiter Candidate",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Redirect to the Expected Page Worked",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "Go to Vacancy Recruiter Candidate ID page",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Requested Page Available",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "Click \u0027Check Candidate Interest\u0027 Button in Page Recruiter Candidate",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Redirect to the Expected Page Worked",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "Go to Vacancy Recruiter Candidate ID page",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "Requested Page Available",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "Click \u0027Page Down\u0027 Button in Page Recruiter Candidate",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "Click \u0027Check onboarding\u0027 Button in Page Recruiter Candidate",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "Redirect to the Expected Page Worked",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "Go to Vacancy Recruiter Candidate ID page",
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "Requested Page Available",
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "Click \u0027Page Down\u0027 Button in Page Recruiter Candidate",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "Click \u0027Set interview time\u0027 Button in Page Recruiter Candidate",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "Redirect to the Expected Page Worked",
  "keyword": "Then "
});
formatter.step({
  "line": 53,
  "name": "Go to Vacancy Recruiter Candidate ID page",
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "Requested Page Available",
  "keyword": "Then "
});
formatter.step({
  "line": 57,
  "name": "Table Header \u0027Request\u0027 Block is Appeared in VRCID Page",
  "keyword": "Then "
});
formatter.step({
  "line": 58,
  "name": "Table Header \u0027Created\u0027 Block is Appeared in VRCID Page",
  "keyword": "Then "
});
formatter.step({
  "line": 59,
  "name": "Table Header \u0027By\u0027 Block is Appeared in VRCID Page",
  "keyword": "Then "
});
formatter.step({
  "line": 60,
  "name": "Checking buttons for status \u0027Central Status Vacancy\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 61,
  "name": "Checking buttons for status \u0027CV Received\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 62,
  "name": "Checking buttons for status \u0027Candidate is interested in vacancy\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 63,
  "name": "Checking buttons for status \u0027Closed by recrutier\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 64,
  "name": "Checking buttons for status \u0027Approved for the interview\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 65,
  "name": "Checking buttons for status \u0027Closed by department manager for interview\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 66,
  "name": "Checking buttons for status \u0027Interview timing approval\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 67,
  "name": "Checking buttons for status \u0027Interview\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 68,
  "name": "Checking buttons for status \u0027Closed by department manager for employment\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 69,
  "name": "Checking buttons for status \u0027Contract Concluding\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 70,
  "name": "Checking buttons for status \u0027Closed by department manager for employment\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 71,
  "name": "Checking buttons for status \u0027Start date of new employee is set\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 72,
  "name": "Checking buttons for status \u0027Closed. Candidate declined proposition\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 73,
  "name": "Click \u0027Add new Candidate for Vacancy\u0027 Button in Page Recruiter Candidate",
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "Redirect to the Expected Page Worked",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Vacancy Recruiter Candidate ID",
      "offset": 6
    }
  ],
  "location": "GlobalSteps.goToPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Menu",
      "offset": 1
    }
  ],
  "location": "ProfileSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "View Request Info",
      "offset": 7
    }
  ],
  "location": "VacancyRecruiterCandidatesIDSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButtonAppeared()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Back",
      "offset": 7
    }
  ],
  "location": "VacancyRecruiterCandidatesIDSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "View candidate History",
      "offset": 7
    }
  ],
  "location": "VacancyRecruiterCandidatesIDSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButtonAppeared()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Vacancy Recruiter Candidate ID",
      "offset": 6
    }
  ],
  "location": "GlobalSteps.goToPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Check Candidate Interest",
      "offset": 7
    }
  ],
  "location": "VacancyRecruiterCandidatesIDSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButtonAppeared()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Vacancy Recruiter Candidate ID",
      "offset": 6
    }
  ],
  "location": "GlobalSteps.goToPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Page Down",
      "offset": 7
    }
  ],
  "location": "VacancyRecruiterCandidatesIDSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Check onboarding",
      "offset": 7
    }
  ],
  "location": "VacancyRecruiterCandidatesIDSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButtonAppeared()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Vacancy Recruiter Candidate ID",
      "offset": 6
    }
  ],
  "location": "GlobalSteps.goToPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Page Down",
      "offset": 7
    }
  ],
  "location": "VacancyRecruiterCandidatesIDSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Set interview time",
      "offset": 7
    }
  ],
  "location": "VacancyRecruiterCandidatesIDSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButtonAppeared()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Vacancy Recruiter Candidate ID",
      "offset": 6
    }
  ],
  "location": "GlobalSteps.goToPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Request",
      "offset": 14
    }
  ],
  "location": "VacancyRecruiterCandidatesIDSteps.isTableHeaderAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Created",
      "offset": 14
    }
  ],
  "location": "VacancyRecruiterCandidatesIDSteps.isTableHeaderAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "By",
      "offset": 14
    }
  ],
  "location": "VacancyRecruiterCandidatesIDSteps.isTableHeaderAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Central Status Vacancy",
      "offset": 29
    }
  ],
  "location": "VacancyRecruiterCandidatesIDSteps.checkButtonForStatus(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "CV Received",
      "offset": 29
    }
  ],
  "location": "VacancyRecruiterCandidatesIDSteps.checkButtonForStatus(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Candidate is interested in vacancy",
      "offset": 29
    }
  ],
  "location": "VacancyRecruiterCandidatesIDSteps.checkButtonForStatus(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Closed by recrutier",
      "offset": 29
    }
  ],
  "location": "VacancyRecruiterCandidatesIDSteps.checkButtonForStatus(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Approved for the interview",
      "offset": 29
    }
  ],
  "location": "VacancyRecruiterCandidatesIDSteps.checkButtonForStatus(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Closed by department manager for interview",
      "offset": 29
    }
  ],
  "location": "VacancyRecruiterCandidatesIDSteps.checkButtonForStatus(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Interview timing approval",
      "offset": 29
    }
  ],
  "location": "VacancyRecruiterCandidatesIDSteps.checkButtonForStatus(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Interview",
      "offset": 29
    }
  ],
  "location": "VacancyRecruiterCandidatesIDSteps.checkButtonForStatus(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Closed by department manager for employment",
      "offset": 29
    }
  ],
  "location": "VacancyRecruiterCandidatesIDSteps.checkButtonForStatus(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Contract Concluding",
      "offset": 29
    }
  ],
  "location": "VacancyRecruiterCandidatesIDSteps.checkButtonForStatus(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Closed by department manager for employment",
      "offset": 29
    }
  ],
  "location": "VacancyRecruiterCandidatesIDSteps.checkButtonForStatus(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Start date of new employee is set",
      "offset": 29
    }
  ],
  "location": "VacancyRecruiterCandidatesIDSteps.checkButtonForStatus(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Closed. Candidate declined proposition",
      "offset": 29
    }
  ],
  "location": "VacancyRecruiterCandidatesIDSteps.checkButtonForStatus(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Add new Candidate for Vacancy",
      "offset": 7
    }
  ],
  "location": "VacancyRecruiterCandidatesIDSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButtonAppeared()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 179700,
  "error_message": "java.lang.NoClassDefFoundError: Could not initialize class app.driver.SharedDriver\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor6.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.picocontainer.injectors.AbstractInjector.newInstance(AbstractInjector.java:145)\r\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:342)\r\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\r\n\tat org.picocontainer.injectors.AbstractInjectionFactory$LifecycleAdapter.getComponentInstance(AbstractInjectionFactory.java:56)\r\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\r\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\r\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\r\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:40)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat jdk.internal.reflect.GeneratedMethodAccessor17.invoke(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat com.intellij.rt.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:66)\r\n\tat com.intellij.rt.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:109)\r\n",
  "status": "failed"
});
formatter.uri("vacancy_manager.feature");
formatter.feature({
  "line": 1,
  "name": "Vacancy Page - Department Manager",
  "description": "",
  "id": "vacancy-page---department-manager",
  "keyword": "Feature"
});
formatter.before({
  "duration": 155000,
  "error_message": "java.lang.NoClassDefFoundError: Could not initialize class app.driver.SharedDriver\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor6.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.picocontainer.injectors.AbstractInjector.newInstance(AbstractInjector.java:145)\r\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:342)\r\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\r\n\tat org.picocontainer.injectors.AbstractInjectionFactory$LifecycleAdapter.getComponentInstance(AbstractInjectionFactory.java:56)\r\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\r\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\r\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\r\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:40)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat jdk.internal.reflect.GeneratedMethodAccessor17.invoke(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat com.intellij.rt.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:66)\r\n\tat com.intellij.rt.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:109)\r\n",
  "status": "failed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Go to Login page",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Enter \u0027auto-test-manager@onyx.com\u0027 Text in Email Field",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Enter \u0027check\u0027 Text in Password Field",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Click on \u0027Sign In\u0027 Button",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 6
    }
  ],
  "location": "GlobalSteps.goToPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "auto-test-manager@onyx.com",
      "offset": 7
    }
  ],
  "location": "LoginSteps.inputEmail(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "check",
      "offset": 7
    }
  ],
  "location": "LoginSteps.inputPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Sign In",
      "offset": 10
    }
  ],
  "location": "LoginSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 10,
  "name": "Vacancy Page Appeared",
  "description": "",
  "id": "vacancy-page---department-manager;vacancy-page-appeared",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@all"
    },
    {
      "line": 9,
      "name": "@smoke"
    },
    {
      "line": 9,
      "name": "@vacancymanager"
    },
    {
      "line": 9,
      "name": "@test"
    },
    {
      "line": 9,
      "name": "@auto-test-manager"
    },
    {
      "line": 9,
      "name": "@onyx.com"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "Go to Vacancy page",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Requested Page Available",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "\u0027Menu\u0027 Block is Appeared",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "\u0027Vacancy index\u0027 Block is Appeared",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Click \u0027111\u0027 link in Vacancy Page",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Redirect to the Expected Page Worked",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Vacancy",
      "offset": 6
    }
  ],
  "location": "GlobalSteps.goToPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Menu",
      "offset": 1
    }
  ],
  "location": "ProfileSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Vacancy index",
      "offset": 1
    }
  ],
  "location": "ProfileSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "111",
      "offset": 7
    }
  ],
  "location": "VacancySteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButtonAppeared()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 164700,
  "error_message": "java.lang.NoClassDefFoundError: Could not initialize class app.driver.SharedDriver\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor6.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.picocontainer.injectors.AbstractInjector.newInstance(AbstractInjector.java:145)\r\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:342)\r\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\r\n\tat org.picocontainer.injectors.AbstractInjectionFactory$LifecycleAdapter.getComponentInstance(AbstractInjectionFactory.java:56)\r\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\r\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\r\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\r\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:40)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat jdk.internal.reflect.GeneratedMethodAccessor17.invoke(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat com.intellij.rt.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:66)\r\n\tat com.intellij.rt.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:109)\r\n",
  "status": "failed"
});
formatter.uri("vacancy_recruiter.feature");
formatter.feature({
  "line": 1,
  "name": "Vacancy Page - Recruiter",
  "description": "",
  "id": "vacancy-page---recruiter",
  "keyword": "Feature"
});
formatter.before({
  "duration": 184900,
  "error_message": "java.lang.NoClassDefFoundError: Could not initialize class app.driver.SharedDriver\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor6.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.picocontainer.injectors.AbstractInjector.newInstance(AbstractInjector.java:145)\r\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:342)\r\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\r\n\tat org.picocontainer.injectors.AbstractInjectionFactory$LifecycleAdapter.getComponentInstance(AbstractInjectionFactory.java:56)\r\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\r\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\r\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\r\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:40)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat jdk.internal.reflect.GeneratedMethodAccessor17.invoke(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat com.intellij.rt.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:66)\r\n\tat com.intellij.rt.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:109)\r\n",
  "status": "failed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Go to Login page",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Enter \u0027auto-test@onyx.com\u0027 Text in Email Field",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Enter \u0027check\u0027 Text in Password Field",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Click on \u0027Sign In\u0027 Button",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 6
    }
  ],
  "location": "GlobalSteps.goToPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "auto-test@onyx.com",
      "offset": 7
    }
  ],
  "location": "LoginSteps.inputEmail(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "check",
      "offset": 7
    }
  ],
  "location": "LoginSteps.inputPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Sign In",
      "offset": 10
    }
  ],
  "location": "LoginSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 10,
  "name": "Vacancy Page Appeared",
  "description": "",
  "id": "vacancy-page---recruiter;vacancy-page-appeared",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@all"
    },
    {
      "line": 9,
      "name": "@smoke"
    },
    {
      "line": 9,
      "name": "@vacancy1234"
    },
    {
      "line": 9,
      "name": "@test"
    },
    {
      "line": 9,
      "name": "@auto-test"
    },
    {
      "line": 9,
      "name": "@onyx.com"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "Go to Vacancy page",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Requested Page Available",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "\u0027Menu\u0027 Block is Appeared",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "\u0027Vacancy index\u0027 Block is Appeared",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Click \u0027111\u0027 link in Vacancy Page",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Redirect to the Expected Page Worked",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Vacancy",
      "offset": 6
    }
  ],
  "location": "GlobalSteps.goToPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Menu",
      "offset": 1
    }
  ],
  "location": "ProfileSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Vacancy index",
      "offset": 1
    }
  ],
  "location": "ProfileSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "111",
      "offset": 7
    }
  ],
  "location": "VacancySteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButtonAppeared()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 136600,
  "error_message": "java.lang.NoClassDefFoundError: Could not initialize class app.driver.SharedDriver\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor6.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.picocontainer.injectors.AbstractInjector.newInstance(AbstractInjector.java:145)\r\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:342)\r\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\r\n\tat org.picocontainer.injectors.AbstractInjectionFactory$LifecycleAdapter.getComponentInstance(AbstractInjectionFactory.java:56)\r\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\r\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\r\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\r\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:40)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat jdk.internal.reflect.GeneratedMethodAccessor17.invoke(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat com.intellij.rt.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:66)\r\n\tat com.intellij.rt.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:109)\r\n",
  "status": "failed"
});
formatter.uri("workingHoursInfo.feature");
formatter.feature({
  "line": 1,
  "name": "Workinghours Info Page - Recruiter",
  "description": "",
  "id": "workinghours-info-page---recruiter",
  "keyword": "Feature"
});
formatter.before({
  "duration": 153300,
  "error_message": "java.lang.NoClassDefFoundError: Could not initialize class app.driver.SharedDriver\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor6.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.picocontainer.injectors.AbstractInjector.newInstance(AbstractInjector.java:145)\r\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:342)\r\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\r\n\tat org.picocontainer.injectors.AbstractInjectionFactory$LifecycleAdapter.getComponentInstance(AbstractInjectionFactory.java:56)\r\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\r\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\r\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\r\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:40)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat jdk.internal.reflect.GeneratedMethodAccessor17.invoke(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat com.intellij.rt.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:66)\r\n\tat com.intellij.rt.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:109)\r\n",
  "status": "failed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Go to Login page",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Enter \u0027auto-test\u0027 Text in Email Field",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Enter \u0027check\u0027 Text in Password Field",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Click on \u0027Sign In\u0027 Button",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 6
    }
  ],
  "location": "GlobalSteps.goToPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "auto-test",
      "offset": 7
    }
  ],
  "location": "LoginSteps.inputEmail(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "check",
      "offset": 7
    }
  ],
  "location": "LoginSteps.inputPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Sign In",
      "offset": 10
    }
  ],
  "location": "LoginSteps.clickButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 10,
  "name": "Check Workinghours Info Page",
  "description": "",
  "id": "workinghours-info-page---recruiter;check-workinghours-info-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@all"
    },
    {
      "line": 9,
      "name": "@smoke"
    },
    {
      "line": 9,
      "name": "@workingHoursInfo"
    },
    {
      "line": 9,
      "name": "@test"
    },
    {
      "line": 9,
      "name": "@auto-test-limon4-zorgan"
    },
    {
      "line": 9,
      "name": "@nexteum.com"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "Go to Workinghours Info page",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Check Status Code and assert",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Wait for 1 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Requested Page Available",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "\u0027Menu\u0027 Block is Appeared",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Check Table Name In Working Hours Info Page",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Check Table Name Total In Working Hours Info Page",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Check Need Hours This Month In Working Hours Info Page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Workinghours Info",
      "offset": 6
    }
  ],
  "location": "GlobalSteps.goToPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResponseStatusCodeStep.checkStatusCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "GlobalSteps.sleep(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProfileSteps.nexteumButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Menu",
      "offset": 1
    }
  ],
  "location": "ProfileSteps.isBlockAppeared(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WorkinghoursInfoSteps.checkNameTable()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WorkinghoursInfoSteps.checkNameTableTotal()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WorkinghoursInfoSteps.checkNeedHoursThisMonth()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 130500,
  "error_message": "java.lang.NoClassDefFoundError: Could not initialize class app.driver.SharedDriver\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor6.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.picocontainer.injectors.AbstractInjector.newInstance(AbstractInjector.java:145)\r\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:342)\r\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\r\n\tat org.picocontainer.injectors.AbstractInjectionFactory$LifecycleAdapter.getComponentInstance(AbstractInjectionFactory.java:56)\r\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\r\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\r\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\r\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:40)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat jdk.internal.reflect.GeneratedMethodAccessor17.invoke(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat com.intellij.rt.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:66)\r\n\tat com.intellij.rt.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:109)\r\n",
  "status": "failed"
});
});