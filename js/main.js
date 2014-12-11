// file: main.js


// add class selected to active nav
$(document).ready(function(){

	var path = window.location.pathname.split('/');

	$('.navbar .container ul li a[href*="'+path[1]+'"]').addClass("selected");
});


// centering popup
function openWindowCenter(url, title, w, h) {
	var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left;
	var dualScreenTop  = window.screenTop  != undefined ? window.screenTop  : screen.top;

	width  = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
	height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

	var left = ((width / 2) - (w / 2)) + dualScreenLeft;
	var top  = ((height / 2) - (h / 2)) + dualScreenTop;
	var newWindow = window.open(url, title, 'scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);

	if (window.focus) {
		newWindow.focus();
	}
}