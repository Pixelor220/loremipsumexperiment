var texts = ['What if I eat cereal with a really big straw?'];
var date = ['November 29, 2022'];
var n = null;
console.log("<texts %ideas.js> " + texts);
console.log("<texts.length %ideas.js> " + texts.length);
for (var i = 0; i < texts.length; i++) {
	console.log("<text #" + i + " %contents.js> " + texts[i]);
}
for (var i = 0; i < texts.length; i++) {
	n = texts.length - i
	document.write('<div class="postContent"><h3 class="title">Number ' + n + '<h4 class="undertitle">' + date[i] + '</h4></h3><div class="paragraph">' + texts[i] + '</div></div>');
}