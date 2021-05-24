# Lab8_Starter
WenTian

## Check your understanding q's (FILL OUT)
1. In your own words: Where would you fit your automated tests in your Bujo project development pipeline? (just write the letter)

*A*

2. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

*No, because in this case, a user write and send message to another user, it construct a connection/relationship between 2 components. Unit test won't allow that.*

3. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters

*Yes, becasue looks like this feature is a standalone feature which means it doesn't rely on other components. Unit test would allow that.*

4. What do you expect to happen if we run our puppeteer tests with the field “headless” set to true?

*If the field “headless” is set to true, test will run without showing the browswer UI.*

5. What would your beforeAll callback look like if you wanted to start from the settings page before every test case?

