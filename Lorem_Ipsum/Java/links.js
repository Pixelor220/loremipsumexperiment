var links = ['../pages/blwg.html', '../pages/contents.html', '../pages/uselessideas.html'];
var texts = ['BLWG', 'CONTENT', 'USELESS IDEAS'];
console.log("<links %links.js>" + links);
console.log("<links.length %links.js>" + links.length);
for (var i = 0; i < links.length; i++) {
	console.log("<links #" + i + " %links.js>" + links[i]);
}
console.log("<texts %links.js>" + texts);
console.log("<text.length %links.js>" + texts.length);
for (var i = 0; i < texts.length; i++) {
	console.log("<texts #" + i + " %links.js>" + texts[i]);
}
document.write('<div class="align"><div class="leftmenu"><a href="../index.html"><img id="orangeblob" src="../images/icon.png"></a><ul>');
for (var i = 0; i < links.length; i++) {
	texts[i]
	document.write('<li id="link"><a href="' + links[i] + '">' + texts[i] + '</a></li>');
}
document.write('<li id="link"><a href="../pages/extras.html">EXTRAS</a></li></div><div class="rightmenu"><a href="login.html" id="login">LOGIN</a></div></div></ul>');