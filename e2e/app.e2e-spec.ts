import { ClassicCarsPage } from './app.po';

describe('classic-cars App', function() {
  let page: ClassicCarsPage;

  beforeEach(() => {
    page = new ClassicCarsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
