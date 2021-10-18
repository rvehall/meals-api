const loginForm = document.getElementById('login-form');
const emailField = document.getElementById('email');
const passwordField = document.getElementById('password');
loginForm.addEventListener('submit', (e) => {
  console.log(e);
  e.preventDefault();
  const email = emailField.value;
  const password = passwordField.value;
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(({ user }) => {
      return user.getIdToken().then((idToken) => {
        //TODO: change second route to heroku route
          window.location.host == '0.0.0.0:3000' ? window.location.href = `http://localhost:8080/callback/${idToken}` : window.location.href = `http://localhost:8080/callback/${idToken}`;
      });
    })
    .catch((err) => {
      console.error(err.message);
      error.innerHTML = err.message;
    });
});