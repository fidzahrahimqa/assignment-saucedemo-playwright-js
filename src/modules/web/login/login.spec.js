import { test } from '../../../core/fixtures/webFixtures.js';
import { users, loginErrors } from '../../../core/utils/testData.js';
import { allure } from 'allure-playwright';
import { createBugReport } from '../../../core/utils/bugReporter.js';

test.describe('@auth Authentication - Login Feature', () => {
  test.afterEach(async ({}, testInfo) => {
    await createBugReport(testInfo);
  });

  test('TC_FP_001 @smoke @critical - Successful login', async ({ loginPage }) => {

    allure.epic('Authentication');
    allure.feature('Login');
    allure.severity('critical');

    await allure.step('Navigate to login page', async () => {

      await loginPage.navigate('/');
    });

    await allure.step('Login with valid credentials', async () => {
      await loginPage.login(
        users.validUser.username,
        users.validUser.password
      );
    });

    await allure.step('Verify successful login and inventory page visible', async () => {
      await loginPage.assertSuccessfulLogin();
    });

  });


  test('TC_FP_003 @regression @positive - Successful login after failed attempt', async ({ loginPage }) => {

    allure.epic('Authentication');
    allure.feature('Login');
    allure.severity('normal');

    await allure.step('Navigate to login page', async () => {
      await loginPage.navigate('/');
    });

    await allure.step('Attempt login with invalid password', async () => {
      await loginPage.login('standard_user', 'wrong_password');
      await loginPage.assertLoginFailedWithMessage(loginErrors.invalidCredentials);
    });

    await allure.step('Retry login with valid credentials', async () => {
      await loginPage.login(
        users.validUser.username,
        users.validUser.password
      );
      await loginPage.assertSuccessfulLogin2();
    });

  });


  test('TC_FN_001 @regression @negative - Login fails with invalid password', async ({ loginPage }) => {

    allure.epic('Authentication');
    allure.feature('Login');
    allure.severity('normal');

    await allure.step('Navigate to login page', async () => {
      await loginPage.navigate('/');
    });

    await allure.step('Login using invalid password', async () => {
      await loginPage.login('standard_user', 'invalid_password');
    });

    await allure.step('Verify error message displayed', async () => {
      await loginPage.assertLoginFailedWithMessage(
        loginErrors.invalidCredentials
      );
    });

  });


  test('TC_FN_002 @regression @negative - Login fails when username is empty', async ({ loginPage }) => {

    allure.epic('Authentication');
    allure.feature('Login');
    allure.severity('minor');

    await allure.step('Navigate to login page', async () => {
      await loginPage.navigate('/');
    });

    await allure.step('Attempt login with empty username', async () => {
      await loginPage.login('', 'secret_sauce');
    });

    await allure.step('Verify required field validation message', async () => {
      await loginPage.assertLoginFailedWithMessage(
        loginErrors.usernameRequired
      );
    });

  });

});