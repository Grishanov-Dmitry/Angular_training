import { UserAccountPage } from './app.po';

describe('user-account App', function() {
  let page: UserAccountPage;

  beforeEach(() => {
    page = new UserAccountPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
