import { CwiczeniaPage } from './app.po';

describe('cwiczenia App', function() {
  let page: CwiczeniaPage;

  beforeEach(() => {
    page = new CwiczeniaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
