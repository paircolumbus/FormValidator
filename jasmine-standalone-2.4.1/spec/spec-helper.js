var HTMLFixture = `<div class="container">
                    <form name="sign_in" action="#" method="put">
                      <input type="text" placeholder="Email"><br />
                      <input type="password" placeholder="Password"><br />
                      <input type="submit" value="Sign In">
                    </form>
                    <ul class="errors">
                      <li>Please enter a valid email address</li>
                      <li>Your password should be at least 8 characters long</li>
                      <li>Your password should contain at least one capital letter</li>
                      <li>Your password should contain at least one number (0-9)</li>
                    </ul>
                  </div>`;

var styleFixture = `.errors li {
                                  color: red;
                                  display: none;
                                }`;


function set(element, value) {
  input(element).val(value);
  return inputValue(element);
}

function get(element) {
  return inputValue(element);
}
