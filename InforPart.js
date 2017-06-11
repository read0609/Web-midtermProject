$(document).ready(function() {

  var startDay = new Date();
  var endDay = new Date('2017/11/06 08:00');
  var spantime = (endDay - startDay) / 1000;
  var dates = $(".index__intro__signup__countdown__main__date__num");
  $(this).everyTime('1s', function(i) {
    spantime--;
    var d = Math.floor(spantime / (24 * 3600));
    var h = Math.floor((spantime % (24 * 3600)) / 3600);
    var m = Math.floor((spantime % 3600) / (60));
    var s = Math.floor(spantime % 60);

    if (spantime > 0) {
      dates.eq(0).text(d);
      dates.eq(1).text(h);
      dates.eq(2).text(m);
      dates.eq(3).text(s);
    } else { // 避免倒數變成負的
      dates.eq(0).text(0);
      dates.eq(1).text(0);
      dates.eq(2).text(0);
      dates.eq(3).text(0);
    }
  });

  //registration
  var NetReg = $(".index__intro__signup__process__window__network");
  var OnsiteReg = $(".index__intro__signup__process__window__onsite");
  var NetText = $(".index__intro__signup__process__window__network__text");
  var OnsiteText = $(".index__intro__signup__process__window__onsite__text");
  var RegWin = $(".index__intro__signup__process__window");
  var NetRegTouch = false;
  OnsiteRegTouch = false;

  function HoverReg(self, selfT, other) {
    self.css({
      "width": "180px",
      "padding": "0 10px"
    });
    selfT.css("display", "flex");
    other.css("display", "none");
  };

  function ResetReg(Reset, self, selfT, other) {
    if (Reset) {
      self.css({
        "width": "240px",
        "padding": "0 60px"
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
  var lefTri = $(".index__intro__hexagon__triLeft");
  var rigTri = $(".index__intro__hexagon__triRight");
  var GroupIntr = $(".index__intro__hexagon__mainSqure__groupIntr");
  var changeL = $(".index__intro__hexagon__tri__arrow").eq(0);
  var changeR = $(".index__intro__hexagon__tri__arrow").eq(1);
  var he = $(".index__intro__hexagon");
  var IndexIntr = 0;
  GroupIntr.eq(IndexIntr).css("display", "flex");

  changeL.click(function() {
    GroupIntr.eq(IndexIntr).css("display", "none");
    if (IndexIntr == 5) {
      IndexIntr = 0;
    } else IndexIntr++;
    GroupIntr.eq(IndexIntr).css("display", "flex");
  });

  changeR.click(function() {
    GroupIntr.eq(IndexIntr).css("display", "none");
    if (IndexIntr == 0) {
      IndexIntr = 5;
    } else IndexIntr--;
    GroupIntr.eq(IndexIntr).css("display", "flex");
  });


  //otherIntroduce
  var scoIntr = $(".index__intro__otherIntro__scoreIntro");
  var equipIntr = $(".index__intro__otherIntro__equipmentIntro");
  var checkIntr = $(".index__intro__otherIntro__checkIntro");
  var scoText = $(".index__intro__otherIntro__scoreIntro__text");
  var equipText = $(".index__intro__otherIntro__equipmentIntro__text");
  var checkText = $(".index__intro__otherIntro__checkIntro__text");
  var otherIntro = $(".index__intro__otherIntro");
  var scoIntrTouch = false,
    equipIntrTouch = false,
    checkIntrTouch = false;

  function HoverIntr(self, selfT, other) {
    self.css({
      "font-size": "15px",
      "width": "200px",
      "borderRadius": "15px",
    });
    selfT.css("display", "flex");
    other[0].css("display", "none");
    other[1].css("display", "none");
  }

  function ResetIntr(Reset, self, selfT, other) {
    if (Reset) {
      self.css({
        "font-size": "25px",
        "width": "300px",
        "borderRadius": "150px",
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
