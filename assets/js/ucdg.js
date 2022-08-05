
//Function to add title and menu of guide and footer
	"use strict";
		if (document.documentElement.lang === "en") {
		var index = ["/wet4/development/cxo149/gcweb/nutheme/designs/various/gcmenu-include-en.html", "/wet4/development/cxo149/gcweb/nutheme/designs/various/gcfooter-include-en.html"];
}
if (document.documentElement.lang === "fr") {var index = ["/wet4/development/cxo149/gcweb/nutheme/designs/various/gcmenu-include-fr.html", "/wet4/development/cxo149/gcweb/nutheme/designs/various/gcfooter-include-fr.html"];}
		var injectSpot = ["menu-include", "footer-include"];
var request = new XMLHttpRequest();
(function loop(i, length) {
    if (i>= length) {
        return;
    }
    var url = index[i];

    request.open("GET", url, true);
    request.onreadystatechange = function() {
        if(request.readyState === XMLHttpRequest.DONE && request.status === 200) {
    document.getElementById(injectSpot[i]).innerHTML =
      this.responseText;
            loop(i + 1, length);
        }
    };
    request.send();
})(0, index.length);

