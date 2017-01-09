import { browser, element, by } from 'protractor';



describe('profile testing',function(){
  const expectedTitle = 'Github Search';
  const expectedPlaceholder = 'Enter Github Username..';

  beforeEach(function () {
    browser.get('');
  });

  it(`should have a title ${expectedTitle}`, function () {
    expect(element(by.className('navbar-brand')).getText()).toEqual(expectedTitle);
  });

  it(`should display a placeholder ${expectedPlaceholder}`, function () {
    expect(element(by.className('form-control')).getAttribute('placeholder')).toEqual(expectedPlaceholder);
  })
});
