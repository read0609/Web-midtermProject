window.onload = function() {
  //Registration_reciprocal
  //var document.getElementById("Registration_reciprocal");


  //registration
  var NetReg = document.getElementById("Network_registration");
  var OnsiteReg = document.getElementById("Onsite_registration");
  var NetText = document.getElementById("Network_text");
  var OnsiteText = document.getElementById("Onsite_text");
  var RegWin = document.getElementById("Registration_window");
  var NetTTouch = false,
    OnsiteTTouch = false;

  NetReg.addEventListener("mouseover", function() {
    NetReg.style.width = "110px";
    NetReg.style.padding = "0 10px";
    NetText.style.display = "block";
    OnsiteReg.style.display = "none";
    NetTTouch = true;
  });

  OnsiteReg.addEventListener("mouseover", function() {
    NetReg.style.display = "none";
    OnsiteReg.style.width = "110px";
    OnsiteReg.style.padding = "0 10px";
    OnsiteText.style.display = "block";
    OnsiteTTouch = true;
  });

  RegWin.addEventListener("mouseout", function() {
    if (OnsiteTTouch) {
      OnsiteReg.style.width = "200px";
      OnsiteReg.style.padding = "0 60px 0 60px";
      NetReg.style.display = "block";
      OnsiteText.style.display = "none";
      OnsiteTTouch = false;
    }
    if (NetTTouch) {
      OnsiteReg.style.display = "block";
      NetReg.style.width = "200px";
      NetReg.style.padding = "0 60px 0 60px";
      NetText.style.display = "none";
      NetTTouch = false;
    }
  });

  //Introduction
  var lefTri = document.getElementById("left_Tri");
  var rigTri = document.getElementById("right_Tri");
  var GroupIntr = document.getElementsByClassName("Group_intr");
  var IndexIntr = 0;
  GroupIntr[IndexIntr].style.display = "flex";
  lefTri.addEventListener("click", function() {
    GroupIntr[IndexIntr].style.display = "none";
    if (IndexIntr == 5) {
      IndexIntr = 0;
    } else IndexIntr++;
    GroupIntr[IndexIntr].style.display = "flex";
  });

  rigTri.addEventListener("click", function() {
    GroupIntr[IndexIntr].style.display = "none";
    if (IndexIntr == 0) {
      IndexIntr = 5;
    } else IndexIntr--;
    GroupIntr[IndexIntr].style.display = "flex";
  });

  //otherIntroduce
  var scoIntr = document.getElementById("scoreIntro");
  var equipIntr = document.getElementById("equipmentIntro");
  var checkIntr = document.getElementById("checkIntro");
  var scoText = document.getElementById("text_scoreIntro");
  var equipText = document.getElementById("text_equipmentIntro");
  var checkText = document.getElementById("text_checkIntro");
  var otherIntro = document.getElementById("otherIntro");
  var scoTTouch = false,
    equipTTouch = false,
    checkTTouch = false;

  scoIntr.addEventListener("mouseover", function() {
    scoIntr.style.width = "150px";
    scoIntr.style.borderRadius = "0";
    scoText.style.display = "flex";
    equipIntr.style.display = "none";
    checkIntr.style.display = "none";
  });

  scoText.addEventListener("mouseover", function() {
    scoTTouch = true;
    res(scoTTouch, scoText, scoText, [equipIntr, checkText]);
  });

  scoText.addEventListener("mouseout", function() {
    scoTTouch = false;
    res(scoTTouch, scoText, scoText, [equipIntr, checkText]);
  });

  scoIntr.addEventListener("mouseout", function() {
    if (!scoTTouch) {
      scoTTouch = true;
    }
    res(scoTTouch, scoText, scoText, [equipIntr, checkText]);
  });

  function res(x, self, selfT, other) {
    if (!x) {
      self.style.width = "300px";
      self.style.borderRadius = "150px";
      selfT.style.display = "none";
      other[0].style.display = "flex";
      other[1].style.display = "flex";
    }
  }

  /*equipIntr.addEventListener("mouseover", function() {
    equipIntr.style.width = "150px";
    equipIntr.style.borderRadius = "0";
    equipText.style.display = "flex";
    scoIntr.style.display = "none";
    checkIntr.style.display = "none";
    equipTTouch = true;
  });

  checkIntr.addEventListener("mouseover", function() {
    checkIntr.style.width = "150px";
    checkIntr.style.borderRadius = "0";
    checkText.style.display = "flex";
    equipIntr.style.display = "none";
    scoIntr.style.display = "none";
    checkTTouch = true;
  });

  otherIntro.addEventListener("mouseout", function() {
    if (scoTTouch) {


      scoIntr.style.width = "300px";
      scoIntr.style.borderRadius = "150px";
      scoText.style.display = "none";
      equipIntr.style.display = "flex";
      checkIntr.style.display = "flex";
      scoTTouch = false;
    }
    if (equipTTouch) {
      equipIntr.style.width = "300px";
      equipIntr.style.borderRadius = "150px";
      equipText.style.display = "none";
      scoIntr.style.display = "flex";
      checkIntr.style.display = "flex";
      equipTTouch = false;
    }
    if (checkTTouch) {
      checkIntr.style.width = "300px";
      checkIntr.style.borderRadius = "150px";
      checkText.style.display = "none";
      equipIntr.style.display = "flex";
      scoIntr.style.display = "flex";
      checkTTouch = false;
    }
  });*/



}
