const signupForm = document.getElementById('signup-form');
const emailField = document.getElementById('email');
const passwordField = document.getElementById('password');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = emailField.value;
  const password = passwordField.value;
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(({ user }) => {
      return user.getIdToken().then((idToken) => {
        //TODO: Update second url to use the heroku address
        window.location.host == '0.0.0.0:3000' ? window.location.href = `http://localhost:8080/callback/${idToken}` : window.location.href = `http://localhost:8080/callback/${idToken}`;
      });
    })
    .catch((err) => {
      console.error(err.message);
      error.innerHTML = err.message;
    });
});