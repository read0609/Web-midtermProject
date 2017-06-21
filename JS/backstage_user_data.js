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

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log(user);
      user.providerData.forEach(function(profile) {
        console.log("Sign-in provider: " + profile.providerId);
        console.log("provider-specific UID: " + profile.uid);
        console.log("userName: " + profile.displayName);
        console.log("imageURL: " + profile.photoURL);
      });
      dbUser.child(firebase.auth().currentUser.uid).on('value', function(snapshot) {
        console.log(snapshot.val().GroupNum);
        //console.log(user.displayName);
        //console.log(snapshot.val().description);
        //console.log(snapshot.val().age);
        //console.log(snapshot.val().occupotion);
        var Group = ["個人組", "團體組", "演奏組", "創作組", "高中組"]
        $("#GroupNum").html(Group[snapshot.val().GroupNum]);
        $("#email").html(user.email);
        $("#GroupName").html(snapshot.val().GroupName);
        $("#SongName").html(snapshot.val().SongName);
      });
    } else {
      console.log("not logged in");
      window.location.href = "index.html";
    }
  });
});
