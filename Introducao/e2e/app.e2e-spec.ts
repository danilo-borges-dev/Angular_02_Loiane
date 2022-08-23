import { IntroducaoPage } from './app.po';

describe('introducao App', () => {
  let page: IntroducaoPage;

  beforeEach(() => {
    page = new IntroducaoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
