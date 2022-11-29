var images = ["https://www.patrickgillespie.com/static/media/2400.e2cfd8f0c8da96a24978.jpg", "https://i.chzbgr.com/full/8554232832/h1D7E4444/funny-memes-youll-love-it", "https://i.kym-cdn.com/photos/images/original/001/096/575/9fa.png"];
var link = ['https://www.patrickgillespie.com/', 'https://memebase.cheezburger.com/tag/countryballs', 'none']
var captions = ['An amazing gallery by Patrick Gillespie', 'Countryballs meme (2)', 'Countryballs meme (1)']
console.log("<images %contents.js> " + images);
console.log("<images.length %contents.js> " + images.length);
console.log("<captions %contents.js> " + captions);
console.log("<captions.length %contents.js> " + captions.length);
console.log("<links %contents.js> " + link);
console.log("<links.length %contents.js> " + link.length);
for (var i = 0; i < images.length; i++) {
	console.log("<images #" + i + " %contents.js> " + images[i]);
	console.log("<captions #" + i + " %contents.js> " + captions[i]);
	console.log("<links #" + i + " %contents.js> " + link[i]);
	if (captions[i] === 'none') {
		if (link[i] === 'none') {
			document.write('<li id="image"><img src="' + images[i] + '"></li>');
		} else {
		document.write('<li id="image"><a href="' + link[i] + '"><img src="' + images[i] + '"></a></li>');
		}
	} else {
		if (link[i] === 'none') {
			document.write('<p class="paragraph" id="links">' + captions[i] + '</p><li id="image"><img src="' + images[i] + '"></li>');
		} else {
			document.write('<p class="paragraph" id="links">' + captions[i] + '</p><li id="image"><a href="' + link[i] + '"><img src="' + images[i] + '"></a></li>');
		}
	}
}