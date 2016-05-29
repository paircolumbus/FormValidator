describe('DOM elements validation interaction', function() {
  
  var error;
  
  beforeEach(function() {
    
    setStyleFixtures(styleFixture);
    setFixtures(HTMLFixture);
    
    error = errorElement();
    hideMessages();
    validateInputs();
  });

  it('shows invalid email message', function() {
    set('email', 'testgmail.com');
    set('password', 'Abc123!!');
    input('submit').click();
    
    expect(error.invalidEmail).toBeVisible('invalid email');
    expect(error.shortPassword).not.toBeVisible('short password');
    expect(error.noNumberPassword).not.toBeVisible('no number password');
    expect(error.noCapitalPassword).not.toBeVisible('no capital password');
  });

  it('shows short password message', function() {
    set('email', 'test@gmail.com');
    set('password', 'Abc123!');
    input('submit').click();
    
    expect(error.invalidEmail).not.toBeVisible('invalid email');
    expect(error.shortPassword).toBeVisible('short password');
    expect(error.noNumberPassword).not.toBeVisible('no number password');
    expect(error.noCapitalPassword).not.toBeVisible('no capital password');
  });

  it('shows no number password message', function() {
    set('email', 'test@gmail.com');
    set('password', 'Abcdef!!');
    input('submit').click();
    
    expect(error.invalidEmail).not.toBeVisible('invalid email');
    expect(error.shortPassword).not.toBeVisible('short password');
    expect(error.noNumberPassword).toBeVisible('no number password');
    expect(error.noCapitalPassword).not.toBeVisible('no capital password');
  });

  it('shows no capital password message', function() {
    set('email', 'test@gmail.com');
    set('password', 'abc123!!');
    input('submit').click();
    
    expect(error.invalidEmail).not.toBeVisible('invalid email');
    expect(error.shortPassword).not.toBeVisible('short password');
    expect(error.noNumberPassword).not.toBeVisible('no number password');
    expect(error.noCapitalPassword).toBeVisible('no capital password');
  });

  it('shows all error messages', function() {
    set('email', 'test@gmailcom');
    set('password', 'badtest');
    input('submit').click();
    
    expect(error.invalidEmail).toBeVisible('invalid email');
    expect(error.shortPassword).toBeVisible('short password');
    expect(error.noNumberPassword).toBeVisible('no number password');
    expect(error.noCapitalPassword).toBeVisible('no capital password');
  });
});
