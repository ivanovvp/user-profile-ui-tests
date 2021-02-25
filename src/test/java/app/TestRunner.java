package app;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(
        features = "src/test/resources/features",
        glue = {"app.step", "app.driver"},
        tags = {"@test"},
        plugin = {"pretty",
                "html:test-outout",
                "html:target/site/cucumber-pretty",
                "json:target/cucumber.json"})

public class TestRunner extends AbstractTestNGCucumberTests {
}