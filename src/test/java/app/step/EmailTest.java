package app.step;

import cucumber.api.java.en.Then;
import org.apache.log4j.BasicConfigurator;
import org.apache.log4j.Logger;

import javax.mail.*;
import javax.mail.search.FlagTerm;
import java.util.Properties;

import static junit.framework.Assert.assertEquals;
import static org.testng.Assert.assertTrue;
import static org.testng.Assert.fail;

public class EmailTest {

    private static final String MAIL_HOST = "mail.onyx.com";
    private static final String USER_LOGIN = "automation";
    private static final String USER_PASSWORD = "BRC4Yf@ShkXwKJzaT4!GeZ";

    private Logger logger = Logger.getLogger(EmailTest.class);

    static {
        BasicConfigurator.configure();
    }

    @Then("Email Delete message")
    public void testPrepareInboxFolder2() throws MessagingException {
        Session session = Session.getDefaultInstance(new Properties());
        Store store = session.getStore("imaps");
        store.connect(MAIL_HOST, USER_LOGIN, USER_PASSWORD);
        Folder inbox = store.getFolder("Inbox");
        inbox.open(Folder.READ_WRITE);
        Message[] messages = inbox.search(new FlagTerm(new Flags(Flags.Flag.SEEN), false));
        Message[] messages2 = inbox.search(new FlagTerm(new Flags(Flags.Flag.SEEN), true));
        inbox.setFlags(messages, new Flags(Flags.Flag.DELETED), true);
        inbox.setFlags(messages2, new Flags(Flags.Flag.DELETED), true);
        inbox.close(true);
        store.close();
    }

    @Then("Email Received")
    public void testPrepareInboxFolder() throws MessagingException {
        Session session = Session.getDefaultInstance(new Properties());
        Store store = session.getStore("imaps");
        store.connect(MAIL_HOST, USER_LOGIN, USER_PASSWORD);
        Folder inbox = store.getFolder("Inbox");
        inbox.open(Folder.READ_WRITE);
        int count = inbox.getMessageCount();
        int i = 0;
        if (count == i) {
            fail("Inbox have: " + count + " message");
        }
        Message[] messages = inbox.search(new FlagTerm(new Flags(Flags.Flag.SEEN), false));
        logger.info("--------- Available messages -------------");
        for (Message message : messages) {
            logger.info("Message Subject: " + message.getSubject());
            assertEquals(message.getSubject(), "SDT Request || Automation, Display Team");
            logger.info("Message From: " + message.getFrom()[0]);
            assertEquals(message.getFrom().length, 1);
            assertTrue(message.getFrom()[0].toString().contains("user-profile@onyx.com"));
            inbox.setFlags(messages, new Flags(Flags.Flag.DELETED), true);
            logger.info("--------------------------------------------------");
        }
        inbox.close(true);
        store.close();
    }
}