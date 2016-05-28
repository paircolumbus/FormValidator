describe('Input Validation', function() {
  it('valid password should have more than 7 characters', function() {
    expect(valid.passwordLength('79cdjj%%')).toBe(true);
  });

  it('invalid password should have 7 characters or less', function() {
    expect(valid.passwordLength('IO%#$j1')).toBe(false);
  });

  it('valid password should have a capital letter', function() {
    expect(valid.passwordCapitalization('abCdefghi')).toBe(true);
  });

  it('invalid password should not have a capital letter', function() {
    expect(valid.passwordCapitalization('abcdefghi')).toBe(false);
  });

  it('valid password should have a number', function() {
    expect(valid.passwordNumber('abcdef5hi')).toBe(true);
  });

  it('invalid password should not have a number', function() {
    expect(valid.passwordNumber('ab$!%efghi')).toBe(false);
  });

  it('should validate a valid email address', function() {
    expect(valid.email('test-email@somedomain.com')).toBe(true, 'with hyphen');
    expect(valid.email('test789@somedomain.ed')).toBe(true, 'with number');
    expect(valid.email('test.789@somedomain.ed')).toBe(true, 'with decimal');
  });

  it('should validate an invalid email address', function() {
    expect(valid.email('testemailsomedomain.com')).toBe(false, 'no @ symbol');
    expect(valid.email('testemail@somedomaincom')).toBe(false, 'no decimal');
    expect(valid.email('testemail@somedomai.ncom')).toBe(false, '4 char. after decimal');
  });
});
