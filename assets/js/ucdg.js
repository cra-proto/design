
//Function to add title and menu of guide and footer
function menuFooterInject() {
	"use strict";
		var index = ["/design/assets/includes/menu-include.html", "/design/assets/includes/footer-include.html"];
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

