/* ====================================================================== */
/* ===== Ready Event ==================================================== */
/* ====================================================================== */

$(document).ready(function() {
});

/* ====================================================================== */
/* ===== Load Event ===================================================== */
/* ====================================================================== */

$(window).load(function() {

  /* ============================================================ */
  /* ----- > Google Analytics ----------------------------------- */
  /* ============================================================ */

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-XXXXX-X']); // // TODO: Edit.
  _gaq.push(['_setDomainName', 'your-domain-goes-here.com']); // TODO: Edit.
  _gaq.push(['_setAllowLinker', true]);
  _gaq.push(['_trackPageview']);
  (function () {
    var ga = document.createElement('script');
    ga.type = 'text/javascript';
    ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(ga, s);
  })();

});