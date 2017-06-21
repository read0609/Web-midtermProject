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
  const $btn_signOut = $('#btn_signOut');

  firebase.auth().onAuthStateChanged(function(user) {
    if (!user) {
      window.location.href = "index.html";
    }
  });

  $btn_signOut.click(function() {
    console.log("log out!!");
    firebase.auth().signOut();
    console.log("log out!!");
  });
});
