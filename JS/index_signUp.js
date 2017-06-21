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
  const GroupNum = $('#UserGroup')[0].Group.value;
  const $password = $('#pw');
  const $email = $('#email');
  const $GroupName = $('#GroupName');
  const $SongName = $('#SongName');
  const $btn_signUp = $('#btn_signUp');

  $btn_signUp.click(function(e) {
    const email = $email.val();
    const password = $password.val();
    const GroupName = $GroupName.val();
    const SongName = $SongName.val();
    const auth = firebase.auth();

    const promise = auth.createUserWithEmailAndPassword(email, password);
    promise.catch(function(e) {
      console.log(e.message);
    });
    promise.then(function(user) {
      const dbUserid = dbUser.child(user.uid);
      dbUserid.push({
        email: user.email,
        GroupNum: GroupNum,
        GroupName: GroupName,
        SongName: SongName
      });
      window.location.href = "./backstage_user_data.html";
    });
  });

})
