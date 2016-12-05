import { TestClIPage } from './app.po';

describe('test-cl-i App', function() {
  let page: TestClIPage;

  beforeEach(() => {
    page = new TestClIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
