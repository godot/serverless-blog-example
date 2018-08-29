const API_GATEWAY = "https://k0rbjn3n47.execute-api.us-east-2.amazonaws.com/production/sessions"
const request = require('axios');

(() => {
  const buttons = document.querySelector("[data-submit]");

  if (!buttons) return;

  buttons.addEventListener("click", function(e) {
    e.preventDefault();
    var email = document.querySelector('[type="email"]');
    var password = document.querySelector('[type="password"]');

    const credentials = {
      email: email.value,
      password: password.value,
    }

    request.post(API_GATEWAY, { body: credentials });

    console.log(credentials);
  });
}).call(this);
