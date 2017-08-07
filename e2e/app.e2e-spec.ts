import { SellpagePage } from './app.po';

describe('sellpage App', () => {
  let page: SellpagePage;

  beforeEach(() => {
    page = new SellpagePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
