window.onload = function() {
  //registration
  var NetReg = document.getElementById("Network_registration");
  var OnsiteReg = document.getElementById("Onsite_registration");
  var NetText = document.getElementById("Network_text");
  var OnsiteText = document.getElementById("Onsite_text");
  var NetTTouch = false,
    OnsiteTTouch = false;

  NetText.addEventListener("mouseover", function() {
    NetTTouch = true;
  });

  NetText.addEventListener("mouseout", function() {
    NetTTouch = false;
  });

  OnsiteText.addEventListener("mouseover", function() {
    OnsiteTTouch = true;
  });

  OnsiteText.addEventListener("mouseout", function() {
    OnsiteTTouch = false;
  });

  NetReg.addEventListener("mouseover", function() {
    NetReg.style.width = "110px";
    NetReg.style.padding = "0 10px";
    NetText.style.display = "block";
    OnsiteReg.style.display = "none";
  });


  NetReg.addEventListener("mouseout", function() {
    if (!NetTTouch) {
      NetReg.style.width = "200px";
      NetReg.style.padding = "0 60px 0 60px";
      NetText.style.display = "none";
      OnsiteReg.style.display = "block";
    }
  });

  OnsiteReg.addEventListener("mouseover", function() {
    OnsiteReg.style.width = "110px";
    OnsiteReg.style.padding = "0 10px";
    OnsiteText.style.display = "block";
    NetReg.style.display = "none";
  });

  OnsiteReg.addEventListener("mouseout", function() {
    if (!OnsiteTTouch) {
      OnsiteReg.style.width = "200px";
      OnsiteReg.style.padding = "0 60px 0 60px";
      OnsiteText.style.display = "none";
      NetReg.style.display = "block";
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


}
