var title = ['Bored', 'Google Chrome devs, LISTEN.', 'I`m Back', 'Trip To Korea', "BLWG page update"];
var subtitle = ['November 29, 2022', 'November 22, 2022', 'November 16, 2022', 'November 4, 2022', 'November 1, 2022']
var text = ["So bored <br> Have nothing to do <br> Black board <br> Is the only thing to stare at <br> Someone help me", 'Well, I`ve been trying to fix this bug for days. The cookies does not work. Sure, it`s the first time I`ve tried using it, but nothing out of like 7 things never seemed to work, and it was really frustrating me. Until, I found out that when I open a file like this... <p id="quote">file:///Users/user/Desktop/Pages/Lorem_Ipsum/pages/blwg.html</p> Google Chrome would not allow cookies! Google Chrome devs, fix this or make it a option in the settings!', "I'm back from Korea, and I got to work after a week of getting used to normal life again. Korea was awesome, and I had an awesome time there. I went to a lot of museums dedicated to really famous aincient people, and saw some really big doors. But now I'm back to work and opened a new page: useless ideas! This is an idea from my sister that she came up with at Korea. I hope you like it!", "I am enjoying a trip to Korea, but I won't let this interrupt my programming. Lorem Ipsum is still going to be updated as often as possible. As you probably can see, I added another page: Useless Ideas, by my sister. Be free to explore and laugh at these stupid ideas.", 'I just did an update for this page, so the previous posts are now gone. But there are massive advantages: first, I don`t have to mess around with code, second, I won`t make any mistakes and create unexplicable bugs. Hopefully I don`t have to do this kind of thing a lot, becuase as I said, it deletes all of the previous posts.']
console.log("<title %blwg.js> " + title);
console.log("<title.length %blwg.js> " + title.length);
console.log("<subtitle %blwg.js> " + subtitle);
console.log("<subtitle.length %blwg.js> " + subtitle.length);
console.log("<text %blwg.js> " + text);
console.log("<text.length> %blwg.js " + text.length);
for (var i = 0; i < title.length; i++) {
	console.log("<titles #" + i + " %blwg.js> " + title[i]);
	console.log("<subtitles #" + i + " %blwg.js> " + subtitle[i]);
	console.log("<texts #" + i + " %blwg.js> " + text[i]);
	document.write('<div class="postContent"><h3 class="title">' + title[i] + '<h4 class="undertitle">' + subtitle[i] + '</h4></h3><div class="paragraph">' + text[i] + '</div></div>');
}