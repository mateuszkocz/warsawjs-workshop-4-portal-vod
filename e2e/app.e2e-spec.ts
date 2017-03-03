import { WarsawjsWorkshop4VodPage } from './app.po';

describe('warsawjs-workshop4-vod App', () => {
  let page: WarsawjsWorkshop4VodPage;

  beforeEach(() => {
    page = new WarsawjsWorkshop4VodPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
