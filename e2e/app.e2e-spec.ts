import { SurfClientV2Page } from './app.po';

describe('surf-client-v2 App', () => {
  let page: SurfClientV2Page;

  beforeEach(() => {
    page = new SurfClientV2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
