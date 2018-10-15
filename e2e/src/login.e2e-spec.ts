import { LoginPage } from './login.po';

describe('workspace-project login page', () => {
  let page: LoginPage;

  beforeEach(() => {
    page = new LoginPage();
  });

  it('should display login form', () => {
    page.navigateTo();
    expect(page.getLoginForm().isPresent()).toBeTruthy();
  });
});
