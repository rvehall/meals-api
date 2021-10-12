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
        return idToken
        // redirect to callback;
      });
    })
    .catch((err) => {
      console.error(err.message);
      error.innerHTML = err.message;
    });
});