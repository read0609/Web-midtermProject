$(document).ready(function() {
  //Registration_reciprocal
  //var reciprocal = $("Registration_reciprocal");
  var startDay = new Date();
  var endDay = new Date('2017/11/06 08:00');
  var spantime = (endDay - startDay) / 1000;
  var units = $(".unit");
  $(this).everyTime('1s', function(i) {
    spantime--;
    var d = Math.floor(spantime / (24 * 3600));
    var h = Math.floor((spantime % (24 * 3600)) / 3600);
    var m = Math.floor((spantime % 3600) / (60));
    var s = Math.floor(spantime % 60);

    if (spantime > 0) {
      units.eq(0).text(d);
      units.eq(1).text(h);
      units.eq(2).text(m);
      units.eq(3).text(s);
    } else { // 避免倒數變成負的
      units.eq(0).text(0);
      units.eq(1).text(0);
      units.eq(2).text(0);
      units.eq(3).text(0);
    }
  });

  //registration
  var NetReg = $("#Network_registration");
  var OnsiteReg = $("#Onsite_registration");
  var NetText = $("#Network_text");
  var OnsiteText = $("#Onsite_text");
  var RegWin = $("#Registration_window");
  var NetRegTouch = false;
  OnsiteRegTouch = false;

  function HoverReg(self, selfT, other) {
    self.css({
      "width": "220px",
      "padding": "0 10px"
    });
    selfT.css("display", "flex");
    other.css("display", "none");
  };

  function ResetReg(Reset, self, selfT, other) {
    if (Reset) {
      self.css({
        "width": "300px",
        "padding": "0 60px 0 60px"
      });
      selfT.css("display", "none");
      other.css("display", "flex");
      Reset = false;
    }
    return Reset;
  }

  NetReg.mousemove(function() {
    HoverReg(NetReg, NetText, OnsiteReg);
    NetRegTouch = true;
  });

  OnsiteReg.mousemove(function() {
    HoverReg(OnsiteReg, OnsiteText, NetReg);
    OnsiteRegTouch = true;
  });

  RegWin.mouseleave(function() {
    NetRegTouch = ResetReg(NetRegTouch, NetReg, NetText, OnsiteReg);
    OnsiteRegTouch = ResetReg(OnsiteRegTouch, OnsiteReg, OnsiteText, NetReg);
  });

  //Introduction
  var lefTri = $("#left_Tri");
  var rigTri = $("#right_Tri");
  var GroupIntr = $(".Group_intr");
  var IndexIntr = 0;
  GroupIntr.eq(IndexIntr).css("display", "flex");

  lefTri.click(function() {
    GroupIntr.eq(IndexIntr).css("display", "none");
    if (IndexIntr == 5) {
      IndexIntr = 0;
    } else IndexIntr++;
    GroupIntr.eq(IndexIntr).css("display", "flex");
  });

  rigTri.click(function() {
    GroupIntr.eq(IndexIntr).css("display", "none");
    if (IndexIntr == 0) {
      IndexIntr = 5;
    } else IndexIntr--;
    GroupIntr.eq(IndexIntr).css("display", "flex");
  });


  //otherIntroduce
  var scoIntr = $("#scoreIntro");
  var equipIntr = $("#equipmentIntro");
  var checkIntr = $("#checkIntro");
  var scoText = $("#text_scoreIntro");
  var equipText = $("#text_equipmentIntro");
  var checkText = $("#text_checkIntro");
  var otherIntro = $("#otherIntro");
  var scoIntrTouch = false,
    equipIntrTouch = false,
    checkIntrTouch = false;

  function HoverIntr(self, selfT, other) {
    self.css({
      "width": "150px",
      "borderRadius": "0"
    });
    selfT.css("display", "flex");
    other[0].css("display", "none");
    other[1].css("display", "none");
  }

  function ResetIntr(Reset, self, selfT, other) {
    if (Reset) {
      self.css({
        "width": "300px",
        "borderRadius": "150px"
      });
      selfT.css("display", "none");
      other[0].css("display", "flex");
      other[1].css("display", "flex");
      Reset = false;
    }
    return Reset;
  }

  scoIntr.mousemove(function() {
    HoverIntr(scoIntr, scoText, [equipIntr, checkIntr]);
    scoIntrTouch = true;
  });

  equipIntr.mousemove(function() {
    HoverIntr(equipIntr, equipText, [scoIntr, checkIntr]);
    equipIntrTouch = true;
  });

  checkIntr.mousemove(function() {
    HoverIntr(checkIntr, checkText, [equipIntr, scoIntr]);
    checkIntrTouch = true;
  });

  otherIntro.mouseleave(function() {
    scoIntrTouch = ResetIntr(scoIntrTouch, scoIntr, scoText, [equipIntr, checkIntr]);
    equipIntrTouch = ResetIntr(equipIntrTouch, equipIntr, equipText, [scoIntr, checkIntr]);
    checkIntrTouch = ResetIntr(checkIntrTouch, checkIntr, checkText, [equipIntr, scoIntr]);
  });


});
