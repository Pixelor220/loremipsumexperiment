// cookie manager (from grepper - bit.ly/3GreF3b)
function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}
// login code
// login details
function loginCheck() {
	if (getCookie('username') == null) {
		alert('You are not logged in.');
		console.log('<login %login.js> not logged in.');
	} else {
		console.log('<login> username = ' + getCookie('username'));
	}
}
// login detail storage
function login() {
	var uname = document.getElementById('username').value;
	console.log('<login %login.js> login request recieved.');
	console.log('<login %login.js> username is : ' + uname)
	setCookie('username', uname, 7)
	console.log('<login %login.js> cookieconfirm: username = ' + getCookie('username'));
}