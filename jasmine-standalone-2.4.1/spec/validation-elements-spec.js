describe('Initial DOM', function() {
  
  var error;

  beforeEach(function() {
    
    setStyleFixtures(styleFixture);
    setFixtures(HTMLFixture);

    error = errorElement();
    hideMessages();
    validateInputs();
  });

  it('email input should be present', function() {
    expect(input('email')).toBeInDOM();
    expect(input('email').attr('placeholder')).toEqual('Email');
  });

  it('password input should be present', function() {
    expect(input('password')).toBeInDOM();
    expect(input('password').attr('placeholder')).toEqual('Password');
  });

  it('submit input should be present', function() {
    expect(input('submit')).toBeInDOM();
    expect(input('submit').attr('value')).toEqual('Sign In');
  });

  it('error messages should not be visible', function() {
    expect(error.invalidEmail).not.toBeVisible();
    expect(error.shortPassword).not.toBeVisible();
    expect(error.noCapitalPassword).not.toBeVisible();
    expect(error.noNumberPassword).not.toBeVisible();
  });

  it('element should return the appropriate message', function() {
    expect(error.invalidEmailText).toEqual('Please enter a valid email address');
    expect(error.shortPasswordText).toEqual('Your password should be at least 8 characters long');
    expect(error.noCapitalPasswordText).toEqual('Your password should contain at least one capital letter');
    expect(error.noNumberPasswordText).toEqual('Your password should contain at least one number (0-9)');
  });
});
