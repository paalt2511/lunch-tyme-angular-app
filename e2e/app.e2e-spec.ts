import { BottleAppPage } from './app.po';

describe('bottle-app App', () => {
  let page: BottleAppPage;

  beforeEach(() => {
    page = new BottleAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
