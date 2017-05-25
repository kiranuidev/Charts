import { BichartsPage } from './app.po';

describe('bicharts App', () => {
  let page: BichartsPage;

  beforeEach(() => {
    page = new BichartsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
