$(document).ready(function() {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBV82kBGIgsPaDiKlsymrkGvLeQXDFN1dA",
    authDomain: "redstring-54f21.firebaseapp.com",
    databaseURL: "https://redstring-54f21.firebaseio.com",
    projectId: "redstring-54f21",
    storageBucket: "redstring-54f21.appspot.com",
    messagingSenderId: "1038621036354"
  };
  firebase.initializeApp(config);

  var dbUser = firebase.database().ref().child('user');
  const $email = $('#email');
  const $password = $('#pw');
  const $btn_signin = $('#btn_signIn');

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log(user);
    } else {
      console.log("not logged in");
    }
  });

  $btn_signin.click(function(e) {
    const email = $email.val();
    const password = $password.val();
    const auth = firebase.auth();

    const promise = auth.signInWithEmailAndPassword(email, password);
    promise.catch(function(e) {
      console.log(e.message);
    });
    promise.then(function(e) {
      window.location.href = "./backstage_user_data.html";
    });
  });
});
