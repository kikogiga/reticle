$(".fixar-text").fitText();
$(".fixar-text2").fitText(1.2);
$(".fixar-text3").fitText(1.1, { minFontSize: '10px', maxFontSize: '15px' });


var snapper = new Snap({
  element: document.getElementById('content'),
  disable: 'right'
});

var addEvent = function addEvent(element, eventName, func) {
if (element.addEventListener) {
    return element.addEventListener(eventName, func, false);
  } else if (element.attachEvent) {
      return element.attachEvent("on" + eventName, func);
  }
};

addEvent(document.getElementById('open-left'), 'click', function(){
snapper.open('left');
});

/* Prevent Safari opening links when viewing as a Mobile App */
(function (a, b, c) {
  if(c in b && b[c]) {
      var d, e = a.location,
          f = /^(a|html)$/i;
      a.addEventListener("click", function (a) {
          d = a.target;
          while(!f.test(d.nodeName)) d = d.parentNode;
          "href" in d && (d.href.indexOf("http") || ~d.href.indexOf(e.host)) && (a.preventDefault(), e.href = d.href)
      }, !1)
  }
})(document, window.navigator, "standalone");




window.addEventListener('load', function () {
		FastClick.attach(document.body);
	}, false);