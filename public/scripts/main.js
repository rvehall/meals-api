const quotes = document.getElementById('quotes');
const error = document.getElementById('error');

var firebaseConfig = {
  apiKey: 'AIzaSyDlVk6uHnhCA7FhKnk3FCnDVeiJ5T420_8 ',
  authDomain: 'meals-97d2d.firebaseapp.com',
  projectId: 'meals-97d2d',
  storageBucket: 'meals-97d2d.appspot.com',
  messagingSenderId: '672203160400',
  appId: '1:672203160400:web:e8f0e1976739d3dfb4ca55',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE);

const displayQuotes = (allQuotes) => {
  let html = '';
  for (const quote of allQuotes) {
    html += `<blockquote class="wp-block-quote">
                <p>${quote.quote}. </p><cite>${quote.character}</cite>
            </blockquote>`;
  }
  return html;
};