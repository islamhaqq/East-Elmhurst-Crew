import { EastElmhurstCrewPage } from './app.po';

describe('east-elmhurst-crew App', function() {
  let page: EastElmhurstCrewPage;

  beforeEach(() => {
    page = new EastElmhurstCrewPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
