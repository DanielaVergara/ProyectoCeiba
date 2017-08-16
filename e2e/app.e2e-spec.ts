import { ProyectoCeibaPage } from './app.po';

describe('proyecto-ceiba App', () => {
  let page: ProyectoCeibaPage;

  beforeEach(() => {
    page = new ProyectoCeibaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
