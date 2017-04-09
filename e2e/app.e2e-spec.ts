import { JelvixTestPage } from './app.po';

describe('jelvix-test App', () => {
  let page: JelvixTestPage;

  beforeEach(() => {
    page = new JelvixTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
