("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
/*
╔⧉༻ [ 𝐕𝐥𝐤𝐲𝐫𝐞🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 +918436686758,917430922909
║ 
║ We won't be responsible for any kind of ban due to this bot.
║ νℓкуяє was made for fun purpose and to make group management easier.
║ It's your concern if you spam and gets your account banned.
║ Also, Forks won't be entertained.
║ If you fork this repo and edit plugins, it's your concern for further updates.
║ Forking Repo is fine. But if you edit something we will not provide any help.
║ In short, Fork At Your Own Risk.
╚════════════╝
*/
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
module.exports = async (update, νℓкуяє, νkmake, store, νℓpage) => {
system = require("fs");
Spinnies = require("spinnies");
spinner = {
interval: 80,
frames: ["◜", "◟", "◝", "◞", "◠", "◡", "⧬", "⧭", "⧬", "⧭"],
};
spinnies = new Spinnies({
color: "cyan",
succeedColor: "green",
spinner: spinner,
});
// spinnies.add("νℓкуяє", {
// text: "🛰️...",
// });
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
νTēxt = update.messages[0];
if (!νTēxt.message) return;
νTēxt.message =
Object.keys(νTēxt.message)[0] === "ephemeralMessage"
? νTēxt.message.ephemeralMessage.message
: νTēxt.message;
if (νTēxt.key && νTēxt.key.remoteJid === "status@broadcast") return;
if (!νℓкуяє.public && !νTēxt.key.fromMe && update.type === "notify") return;
if (νTēxt.key.id.startsWith("BAE5") && νTēxt.key.id.length === 16) return;
νℓcнαт = await νkmake(νℓкуяє, νTēxt, store);
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
await require("../Core/νc໐rē.js")(
νℓкуяє,
νℓcнαт,
update,
store,
spinnies,
νℓpage,
async (coreback) => {
gcMetaData = νℓcнαт.isGroup
? await νℓкуяє.groupMetadata(νℓcнαт.chat).catch((e) => {})
: "";
gcName = gcMetaData.subject || "no_subject";
gcOwner = gcMetaData.owner.split("@")[0] || "Unknown";
gcDescprition = gcMetaData.desc.toString() || "no description";
gcParticipants = νℓcнαт.isGroup ? await gcMetaData.participants : "";
gcAdmins = νℓcнαт.isGroup
? await gcParticipants.filter((v) => v.admin !== null).map((v) => v.id)
: "";
gcAdminCheck = νℓcнαт.isGroup ? gcAdmins.includes(νℓcнαт.sender) : false;
gcCreadted = require("moment")(
new Date(parseInt(gcMetaData.creation) * 1000)
).format("DD MMM YYYY HH:mm:ss");
try {
puser = await νℓкуяє.profilePictureUrl(νℓcнαт.sender, "image");
} catch {
puser = "https://i.postimg.cc/TPLYb38J/image.png";
}
try {
pgroup = await νℓкуяє.profilePictureUrl(νℓcнαт.chat, "image");
} catch {
pgroup = "https://i.postimg.cc/TPLYb38J/image.png";
}
Today = new Date();
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
νℓкуяє.νℓpage.get("/", function (rege, νℓp) {
νℓp.send(`<!DOCTYPE html>
<html>
<title>Vlkyre❣️by Kryknz</title>
<style>
#loader {
border: 20px solid #f3f3f3;
border-radius: 200%;
border-top: 20px solid #833025;
width: 120px;
height: 120px;
-webkit-animation: spin 4s linear infinite;
animation: spin 4s linear infinite;
}

@keyframes spin {
100% {
transform: rotate(360deg);
}
}

.center {
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
margin: auto;
}

@-webkit-keyframes spin {
0% {
-webkit-transform: rotate(0deg);
}

100% {
-webkit-transform: rotate(360deg);
}
}

@keyframes spin {
0% {
transform: rotate(0deg);
}

100% {
transform: rotate(360deg);
}
}

hr.new1 {
border-top: 1px solid rgb(167, 18, 18);
font-family: "Times New Roman", Times, serif;
}

body {
font-family: "Times New Roman", Times, serif;
}

hr.new2 {
border-top: 1px dashed rgb(146, 18, 18);
font-family: "Times New Roman", Times, serif;
}

hr.new3 {
border-top: 1px dotted #641010;
font-family: "Times New Roman", Times, serif;
}

hr.new4 {
border: 1px solid rgb(77, 12, 12);
font-family: "Times New Roman", Times, serif;
}

hr.new5 {
border: 10px solid rgb(9, 53, 9);
border-radius: 5px;
font-family: "Times New Roman", Times, serif;
}

p {
font-size: 14px;
color: #ffffff;
font-family: "Times New Roman", Times, serif;
}

mark.red {
color: #ffffff;
background: rgb(63, 13, 13);
border-radius: 4px;
font-weight: bold;
font-family: "Times New Roman", Times, serif;
}

mark.gry {
color: #ffffff;
background: #ffffff;
border-radius: 4px;
font-family: "Times New Roman", Times, serif;
}

hr {
display: block;
margin-top: 0.5em;
margin-bottom: 0.5em;
margin-left: auto;
margin-right: auto;
border-style: inset;
border-width: 1px;
border-color: red;
font-family: "Times New Roman", Times, serif;
}






/* 
|⬡═══════════════════════════════════════════════════════════════| (c)𝐕𝐥𝐤𝐲𝐫𝐞🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|
╔⧉༻ [ 𝐕𝐥𝐤𝐲𝐫𝐞🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 +918436686758,917430922909
║ 
║ We won't be responsible for any kind of ban due to this bot.
║ Vlkyre was made for fun purpose and to make group management easier.
║ It's your concern if you spam and gets your account banned.
║ Also, Forks won't be entertained.
║ If you fork this repo and edit plugins, it's your concern for further updates.
║ Forking Repo is fine. But if you edit something we will not provide any help.
║ In short, Fork At Your Own Risk.
╚════════════╝
|⬡═══════════════════════════════════════════════════════════════| (c)𝐕𝐥𝐤𝐲𝐫𝐞🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|  
*/
</style>

<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<script src="https://cdn.tailwindcss.com"></script>
</head>

<body>
<div id="loader" class="center"></div>
<script>
document.onreadystatechange = function () {
if (document.readyState !== "complete") {
document.querySelector("body").style.visibility = "hidden";
document.querySelector("#loader").style.visibility = "visible";
} else {
document.querySelector("#loader").style.display = "none";
document.querySelector("body").style.visibility = "visible";
}
};
</script>




<!-- <div class="loader"></div> -->

<body style="background-color: #1a1919">
<header class="text-gray-400 body-font">
<div id="Introduction" class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
<a href="#Groups"
class="flex title-font font-medium items-center text-white mb-4 md:mb-0 justify-center ">
<span class="ml-3 text-xl hover:text-red-600 "><b>🕊️ Try Vlkyre Bot</b> <I>(press me)</I></span>
</a>
<nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
<a href="/" class="mr-5 text-red-400 hover:text-white">🏠| Home </a>
<a href="#Commands" class="mr-5 text-red-400 hover:text-white">💻| Commands</a>
<a href="#FAQs" class="mr-5 text-red-400 hover:text-white">❓| FAQs</a>
<a href="#Groups" class="mr-5 text-red-400 hover:text-white">❣️| Groups</a>
<a href="#Console" class="mr-5 text-red-400 hover:text-white">💽| Console</a>
</nav>
</div>
</header>
<hr style="height:6px;border-top:1px solid #666666" />
<hr style="height: 0.5px; border-top: 2px solid #9c3028" />

<button onclick="window.location.href='https://github.com/KryKnz'" class="inline-flex 
items-center 
bg-red-700 
text-white 
py-1 px-3 
focus:outline-none 
hover:bg-gray-800 
rounded
text-base 
mt-0
md:mt-0">💡GitHub
<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="5"
class="w-4 h-4 ml-1" viewBox="0 0 24 24">
<path d="M5 12h14M12 5l7 7-7 7"></path>
</svg>
</button>

<section class="text-gray-400 body-font">
<div class="container px-5 py-24 mx-auto flex flex-wrap flex-col">
<img class="xl:w-1/4 lg:w-1/3 md:w-1/2 w-2/3 block mx-auto mb-10 object-cover object-center rounded-lg"
alt="hero" src="https://i.postimg.cc/TPLYb38J/image.png">
<div class="flex flex-col text-center w-full">
<p class="lg:w-2/3 mx-auto leading-relaxed text-base">
<mark class="red"><b></b>⧪:</b></mark>Vlkyre is an Advance <i>Whatsapp User-bot.</i>
<br>
<mark class="red"><b></b>⧪:</b></mark>Vlkyre Has Over 100+ Commands For <i>Moderation, Social,
Federation</i> And More.
<br>
<mark class="red"><b></b>⧪:</b></mark>Vlkyre Has It's Own Browser Based Console Where You Can
Check What Is Being Logged.
<br>
<mark class="red"><b></b>⧪:</b></mark> Vlkyre Has Dashboard Where User Can Check Their Own
Status <i>(To Check Join Vlkyre Group).</i>
<br>
<mark class="red"><b></b>⧪:</b></mark> To Find Out What Vlkyre Offers, Join Any <i>Vlkyre
Official Groups.</i>
<br>
<br>
</p>
<h1 class="text-xl font-medium title-font mb-4 text-white">Made With❣️by Kryknz</h1>
<h1 class="text-sm text-center font-family title-font mb-1 text-gray-400"><i>All Rights Reserved |
Licensed Under Apache License Version 2.0</i></h1>
<hr style="height:6px;border-top:1px solid #ffffff" />
<hr style="height: 0.5px; border-top: 2px solid #9c3028" />
</div>
</div>
</section>
<!--
╔⧉༻ 𝐕𝐥𝐤𝐲𝐫𝐞🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 (𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬) ══════════════════════════════════════════⬡|
║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 +918436686758,917430922909
║ 
║ We won't be responsible for any kind of ban due to this bot.
║ Vlkyre was made for fun purpose and to make group management easier.
║ It's your concern if you spam and gets your account banned.
║ Also, Forks won't be entertained.
║ If you fork this repo and edit plugins, it's your concern for further updates.
║ Forking Repo is fine. But if you edit something we will not provide any help.
║ In short, Fork At Your Own Risk.
╚═════════════════════════════════════════════════════════════════| (c)𝐕𝐥𝐤𝐲𝐫𝐞🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡| -->
<section class="text-gray-600 body-font">
<div id="Home" class="container px-5 py-24 mx-auto">
<div class="flex flex-wrap -m-4">
<div class="p-4 md:w-1/3">
<div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
<img class="lg:h-48 md:h-36 w-full object-cover object-center"
src="https://i.postimg.cc/nLNqccRh/vlkyre.gif" alt="blog">
<div class="p-6">
<h1 class="tracking-wider text-xs title-font font-medium text-red-600 mb-1"><I><b>made
with ❣️ by:</I></b></h1>
<h1 class="title-font text-lg font-medium text-red-600 mb-3">KryKnz</h1>
<p class="leading-relaxed mb-3">Head over to the sub menu of this category.</p>
<div class="flex items-center flex-wrap ">
<button onclick="window.location.href='/'"
class="inline-flex items-center bg-red-900 text-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-800 rounded text-base mt-4 md:mt-0">
<I>⚡Go Home Page</I>
<svg fill="none" stroke="currentColor" stroke-linecap="round"
stroke-linejoin="round" stroke-width="5" class="w-4 h-4 ml-1"
viewBox="0 0 24 24">
<path d="M5 12h14M12 5l7 7-7 7"></path>
</svg>
</button>

<span
class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
<svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none"
stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
<circle cx="12" cy="12" r="3"></circle>
</svg>open source
</span>
<span class="text-gray-400 inline-flex items-center leading-none text-sm">
<svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none"
stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
<path
d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z">
</path>
</svg>
</span>
</div>
</div>
</div>
</div>
<div class="p-4 md:w-1/3">
<div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
<img class="lg:h-48 md:h-36 w-full object-cover object-center"
src="https://i.postimg.cc/NFXMjgyG/Type-Writter.gif" alt="blog">
<div class="p-6">
<h1 class="tracking-wider text-xs title-font font-medium text-red-600 mb-1"><I><b>made
with ❣️ by:</I></b></h1>
<h1 class="title-font text-lg font-medium text-red-600 mb-3">KryKnz</h1>
<p class="leading-relaxed mb-3">Head over to the sub menu of this category.</p>
<div class="flex items-center flex-wrap">
<button onclick="window.location.href='/Console'"
class="inline-flex items-center bg-red-900 text-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-800 rounded text-base mt-4 md:mt-0">
<I>🛩️Go Console Page</I>
<svg fill="none" stroke="currentColor" stroke-linecap="round"
stroke-linejoin="round" stroke-width="5" class="w-4 h-4 ml-1"
viewBox="0 0 24 24">
<path d="M5 12h14M12 5l7 7-7 7"></path>
</svg>
</button>

<span
class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
<svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none"
stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
<circle cx="12" cy="12" r="3"></circle>
</svg>open source
</span>
<span class="text-gray-400 inline-flex items-center leading-none text-sm">
<svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none"
stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
<path
d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z">
</path>
</svg>
</span>
</div>
</div>
</div>
</div>
<div class="p-4 md:w-1/3">
<div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
<img class="lg:h-48 md:h-36 w-full object-cover object-center"
src="https://i.postimg.cc/tJdLRfzn/YouTube.gif" alt="blog">
<div class="p-6">
<h1 class="tracking-wider text-xs title-font font-medium text-red-600 mb-1"><I><b>made
with ❣️ by:</I></b></h1>
<h1 class="title-font text-lg font-medium text-red-600 mb-3">KryKnz</h1>
<p class="leading-relaxed mb-3">Head over to the sub menu of this category.</p>
<div class="flex items-center flex-wrap ">
<button onclick="window.location.href='https://tinyurl.com/Vlkyre-YouTube'"
class="inline-flex items-center bg-red-900 text-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-800 rounded text-base mt-4 md:mt-0">
<I>⭕Go YouTube Page</I>
<svg fill="none" stroke="currentColor" stroke-linecap="round"
stroke-linejoin="round" stroke-width="5" class="w-4 h-4 ml-1"
viewBox="0 0 24 24">
<path d="M5 12h14M12 5l7 7-7 7"></path>
</svg>
</button>

<span
class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
<svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none"
stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
<circle cx="12" cy="12" r="3"></circle>
</svg>open source
</span>
<span class="text-gray-400 inline-flex items-center leading-none text-sm">
<svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none"
stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
<path
d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z">
</path>
</svg>
</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<!--
╔⧉༻ 𝐕𝐥𝐤𝐲𝐫𝐞🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 (𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬) ══════════════════════════════════════════⬡|
║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 +918436686758,917430922909
║ 
║ We won't be responsible for any kind of ban due to this bot.
║ Vlkyre was made for fun purpose and to make group management easier.
║ It's your concern if you spam and gets your account banned.
║ Also, Forks won't be entertained.
║ If you fork this repo and edit plugins, it's your concern for further updates.
║ Forking Repo is fine. But if you edit something we will not provide any help.
║ In short, Fork At Your Own Risk.
╚═════════════════════════════════════════════════════════════════| (c)𝐕𝐥𝐤𝐲𝐫𝐞🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡| -->
<nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
<a href="/" class="mr-5 text-red-400 hover:text-white">| Home </a>
<a href="#Commands" class="mr-5 text-red-400 hover:text-white">| Commands</a>
<a href="#FAQs" class="mr-5 text-red-400 hover:text-white">| FAQs</a>
<a href="#Groups" class="mr-5 text-red-400 hover:text-white">| Groups</a>
<a href="#Console" class="mr-5 text-red-400 hover:text-white">| Console</a>
</nav>
<hr style="height:6px;border-top:1px solid #666666" />
<hr style="height: 0.5px; border-top: 2px solid #9c3028" />
<a href="#Introduction"
class="flex title-font font-medium items-center text-white mb-4 md:mb-0 justify-center"><span
class="ml-3 text-xl hover:text-red-600 "><b><I>🔔 Beginning...</I></b></span></a>



<section class="text-gray-400 body-font">
<div id="Groups" class="container px-5 py-24 mx-auto">
<h1 class="text-3xl font-medium title-font text-white mb-12 text-center text-white">🤩Official Vlkyre
Groups<br>⬡════⬡
</h1>

<div class="flex flex-wrap -m-4">
<div class="p-4 md:w-1/2 w-full">
<div class="h-full bg-red-800 bg-opacity-40 p-8 rounded">
<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
class="block w-5 h-5 text-gray-500 mb-4" viewBox="0 0 975.036 975.036">
<path
d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z">
</path>
</svg>
<p class="leading-relaxed mb-6">
⧪Join group to get auto verified and use vlkyre premium commands!<br>⧪Do Not
Forget To
Read Group Description!
</p>
<a class="inline-flex items-center">
<img alt="testimonial" src="https://i.postimg.cc/RCc7sFzw/DB.jpg"
class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center">
<span class="flex-grow flex flex-col pl-4">
<span class="title-font font-medium text-white">Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ 1</span>
<!-- <span class="text-gray-500 text-sm">▸ ♔𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥</span> -->
</span>
<button onclick="window.location.href='https://chat.whatsapp.com/${νℓкуяє.resp1}'"
class="ml-4 inline-flex text-gray-900 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
🤖Vlkyre-1
</button>
</a>
</div>
</div>
<div class="p-4 md:w-1/2 w-full">
<div class="h-full bg-red-800 bg-opacity-40 p-8 rounded">
<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
class="block w-5 h-5 text-gray-500 mb-4" viewBox="0 0 975.036 975.036">
<path
d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z">
</path>
</svg>
<p class="leading-relaxed mb-6">
⧪Join group to get auto verified and use vlkyre premium commands!<br>⧪Do Not
Forget To
Read Group Description!
</p>
<a class="inline-flex items-center">
<img alt="testimonial" src="https://i.postimg.cc/RCc7sFzw/DB.jpg"
class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center">
<span class="flex-grow flex flex-col pl-4">
<span class="title-font font-medium text-white">Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ 2</span>
<!-- <span class="text-gray-500 text-sm">▸ ♔𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥</span> -->
</span>
<button onclick="window.location.href='https://chat.whatsapp.com/${νℓкуяє.resp2}'"
class="ml-4 inline-flex text-gray-900 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
🤖Vlkyre-2
</button>
</a>
</div>
</div>
<div class="p-4 md:w-1/2 w-full">
<div class="h-full bg-red-800 bg-opacity-40 p-8 rounded">
<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
class="block w-5 h-5 text-gray-500 mb-4" viewBox="0 0 975.036 975.036">
<path
d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z">
</path>
</svg>
<p class="leading-relaxed mb-6">
⧪Join group to get auto verified and use vlkyre premium commands!<br>⧪Do Not
Forget To
Read Group Description!
</p>
<a class="inline-flex items-center">
<img alt="testimonial" src="https://i.postimg.cc/RCc7sFzw/DB.jpg"
class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center">
<span class="flex-grow flex flex-col pl-4">
<span class="title-font font-medium text-white">Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ 3</span>
<!-- <span class="text-gray-500 text-sm">▸ ♔𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥</span> -->
</span>
<button onclick="window.location.href='https://chat.whatsapp.com/${νℓкуяє.resp3}'"
class="ml-4 inline-flex text-gray-900 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
🤖Vlkyre-3
</button>
</a>
</div>
</div>
<div class="p-4 md:w-1/2 w-full">
<div class="h-full bg-red-800 bg-opacity-40 p-8 rounded">
<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
class="block w-5 h-5 text-gray-500 mb-4" viewBox="0 0 975.036 975.036">
<path
d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z">
</path>
</svg>

<p class="leading-relaxed mb-6">
⧪Join group to get auto verified and use vlkyre premium commands!<br>⧪Do Not
Forget To
Read Group Description!
</p>
<a class="inline-flex items-center">
<img alt="testimonial" src="https://i.postimg.cc/RCc7sFzw/DB.jpg"
class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center">
<span class="flex-grow flex flex-col pl-4">
<span class="title-font font-medium text-white">Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ 4</span>
<!-- <span class="text-gray-500 text-sm">▸ ♔𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥</span> -->
</span>
<button onclick="window.location.href='https://chat.whatsapp.com/${νℓкуяє.resp4}'"
class="ml-4 inline-flex text-gray-900 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
🤖Vlkyre-4
</button>
</a>
</div>
</div>

</div>
</div>
</section>
<!--
╔⧉༻ 𝐕𝐥𝐤𝐲𝐫𝐞🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 (𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬) ══════════════════════════════════════════⬡|
║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 +918436686758,917430922909
║ 
║ We won't be responsible for any kind of ban due to this bot.
║ Vlkyre was made for fun purpose and to make group management easier.
║ It's your concern if you spam and gets your account banned.
║ Also, Forks won't be entertained.
║ If you fork this repo and edit plugins, it's your concern for further updates.
║ Forking Repo is fine. But if you edit something we will not provide any help.
║ In short, Fork At Your Own Risk.
╚═════════════════════════════════════════════════════════════════| (c)𝐕𝐥𝐤𝐲𝐫𝐞🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡| -->
<nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
<a href="/" class="mr-5 text-red-400 hover:text-white">| Home </a>
<a href="#Commands" class="mr-5 text-red-400 hover:text-white">| Commands</a>
<a href="#FAQs" class="mr-5 text-red-400 hover:text-white">| FAQs</a>
<a href="#Groups" class="mr-5 text-red-400 hover:text-white">| Groups</a>
<a href="#Console" class="mr-5 text-red-400 hover:text-white">| Console</a>
</nav>
<hr style="height:6px;border-top:1px solid #666666" />
<hr style="height: 0.5px; border-top: 2px solid #9c3028" />
<a href="#Introduction"
class="flex title-font font-medium items-center text-white mb-4 md:mb-0 justify-center"><span
class="ml-3 text-xl hover:text-red-600 "><b><I>🔔 Beginning...</I></b></span></a>

<section class="text-gray-600 body-font">
<div class="container px-5 py-24 mx-auto">
<div class="flex flex-wrap -mx-4 -my-8">

<div class="py-8 px-4 lg:w-1/3">
<div class="h-full flex items-start">
<div class="w-12 flex-shrink-0 flex flex-col text-center leading-none">
<span class="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">💰</span>
<span class="font-medium text-lg text-gray-200 title-font leading-none">⧩</span>
</div>
<div class="flex-grow pl-6">
<h2 class="tracking-widest text-xs title-font font-medium text-red-400 mb-1"><b> /< ⟐>/
</b></h2>
<h1 class="title-font text-xl font-medium text-red-600 mb-3">GAME CATEGORY</h1>
<p class="leading-relaxed mb-5">
shop,
zoo,
inv,
buy,
pay,
hunt,
gamble,
fish,
daily,
work,
balance,
rob,
truthdare
</p>
<a class="inline-flex items-center">
<img alt="blog" src="https://i.postimg.cc/0y8YCLNk/Loading-GIF-Animation.gif"
class="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center">
<span class="flex-grow flex flex-col pl-3">
<span class="title-font font-medium text-gray-900">Alper Kamu</span>
</span>
</a>
</div>
</div>
</div>

<div class="py-8 px-4 lg:w-1/3">
<div class="h-full flex items-start">
<div class="w-12 flex-shrink-0 flex flex-col text-center leading-none">
<span class="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">⭕</span>
<span class="font-medium text-lg text-gray-200 title-font leading-none">⧩</span>
</div>
<div class="flex-grow pl-6">
<h2 class="tracking-widest text-xs title-font font-medium text-red-400 mb-1"><b> /< ⟐>/
</b></h2>
<h1 class="title-font text-xl font-medium text-red-600 mb-3">YOUTUBE FILTER CATEGORY
</h1>
<p class="leading-relaxed mb-5">
yt8d,
ytbassboost,
ytecho,
ytflanger,
ytnightcore,
ytphaser,
ytreverse,
ytslow,
ytspeed,
ytsubboost,
ytsuperslow,
ytsuperspeed,
ytsurround,
ytvaporwave,
ytvibrato
</p>
<a class="inline-flex items-center">
<img alt="blog" src="https://i.postimg.cc/0y8YCLNk/Loading-GIF-Animation.gif"
class="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center">
<span class="flex-grow flex flex-col pl-3">
<span class="title-font font-medium text-gray-900">Holden Caulfield</span>
</span>
</a>
</div>
</div>
</div>

<div class="py-8 px-4 lg:w-1/3">
<div class="h-full flex items-start">
<div class="w-12 flex-shrink-0 flex flex-col text-center leading-none">
<span class="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">🍰</span>
<span class="font-medium text-lg text-gray-200 title-font leading-none">⧩</span>
</div>
<div class="flex-grow pl-6">
<h2 class="tracking-widest text-xs title-font font-medium text-red-400 mb-1"><b> /< ⟐>/
</b></h2>
<h1 class="title-font text-xl font-medium text-red-600 mb-3">SOUND FILTER CATEGORY</h1>
<p class="leading-relaxed mb-5">
8d,
bassboost,
echo,
fast,
flanger,
nightcore,
phaser,
reverse,
slow,
speed,
subboost,
superslow,
superspeed,
surround,
vaporwave,
vibrato
</p>
<a class="inline-flex items-center">
<img alt="blog" src="https://i.postimg.cc/0y8YCLNk/Loading-GIF-Animation.gif"
class="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center">
<span class="flex-grow flex flex-col pl-3">
<span class="title-font font-medium text-gray-900">Henry Letham</span>
</span>
</a>
</div>
</div>
</div>

<div class="py-8 px-4 lg:w-1/3">
<div class="h-full flex items-start">
<div class="w-12 flex-shrink-0 flex flex-col text-center leading-none">
<span class="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">👑</span>
<span class="font-medium text-lg text-gray-200 title-font leading-none">⧩</span>
</div>
<div class="flex-grow pl-6">
<h2 class="tracking-widest text-xs title-font font-medium text-red-400 mb-1"><b> /< ⟐>/
</b></h2>
<h1 class="title-font text-xl font-medium text-red-600 mb-3">BOT OWNER</h1>
<p class="leading-relaxed mb-5">
join,
dyno,
ban,
unban,
broadcast,
bugreport,
help,
reboot,
broadcast,
leave,
spam
</p>
<a class="inline-flex items-center">
<img alt="blog" src="https://i.postimg.cc/0y8YCLNk/Loading-GIF-Animation.gif"
class="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center">
<span class="flex-grow flex flex-col pl-3">
<span class="title-font font-medium text-gray-900">Alper Kamu</span>
</span>
</a>
</div>
</div>
</div>

<div class="py-8 px-4 lg:w-1/3">
<div class="h-full flex items-start">
<div class="w-12 flex-shrink-0 flex flex-col text-center leading-none">
<span class="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">🍙</span>
<span class="font-medium text-lg text-gray-200 title-font leading-none">⧩</span>
</div>
<div class="flex-grow pl-6">
<h2 class="tracking-widest text-xs title-font font-medium text-red-400 mb-1"><b> /< ⟐>/
</b></h2>
<h1 class="title-font text-xl font-medium text-red-600 mb-3">ANIMATION CATEGORY</h1>
<p class="leading-relaxed mb-5">
bite,
blush,
bonk,
bored,
confused,
cry,
cuddle,
dance,
goodnight,
happy,
highfive,
hug,
kick,
kill,
kiss,
nervous,
pat,
poke,
punch,
sad,
scream,
slap,
smile,
stare,
wave,
wink,
yeet,
yes
</p>
<a class="inline-flex items-center">
<img alt="blog" src="https://i.postimg.cc/0y8YCLNk/Loading-GIF-Animation.gif"
class="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center">
<span class="flex-grow flex flex-col pl-3">
<span class="title-font font-medium text-gray-900">Holden Caulfield</span>
</span>
</a>
</div>
</div>
</div>

<div class="py-8 px-4 lg:w-1/3">
<div class="h-full flex items-start">
<div class="w-12 flex-shrink-0 flex flex-col text-center leading-none">
<span class="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">🔰</span>
<span class="font-medium text-lg text-gray-200 title-font leading-none">⧩</span>
</div>
<div class="flex-grow pl-6">
<h2 class="tracking-widest text-xs title-font font-medium text-red-400 mb-1"><b> /< ⟐>/
</b></h2>
<h1 class="title-font text-xl font-medium text-red-600 mb-3">GROUP MODERATION</h1>
<p class="leading-relaxed mb-5">
antilink,
autorank,
setwelcome,
delete,
promote,
demote,
warn,
unwarn,
invite,
lock,
unlock,
admins,
groupdp,
kick,
getdesc,
getdp,
tagall
</p>
<a class="inline-flex items-center">
<img alt="blog" src="https://i.postimg.cc/0y8YCLNk/Loading-GIF-Animation.gif"
class="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center">
<span class="flex-grow flex flex-col pl-3">
<span class="title-font font-medium text-gray-900">Henry Letham</span>
</span>
</a>
</div>
</div>
</div>

<div class="py-8 px-4 lg:w-1/3">
<div class="h-full flex items-start">
<div class="w-12 flex-shrink-0 flex flex-col text-center leading-none">
<span class="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">🦄</span>
<span class="font-medium text-lg text-gray-200 title-font leading-none">⧩</span>
</div>
<div class="flex-grow pl-6">
<h2 class="tracking-widest text-xs title-font font-medium text-red-400 mb-1"><b> /< ⟐>/
</b></h2>
<h1 class="title-font text-xl font-medium text-red-600 mb-3">RANDOM CATEGORY</h1>
<p class="leading-relaxed mb-5">
rank,
leaderboard,
joke,
meme,
trivia,
fact,
tr,
tts,
pokedex,
triggered
</p>
<a class="inline-flex items-center">
<img alt="blog" src="https://i.postimg.cc/0y8YCLNk/Loading-GIF-Animation.gif"
class="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center">
<span class="flex-grow flex flex-col pl-3">
<span class="title-font font-medium text-gray-900">Alper Kamu</span>
</span>
</a>
</div>
</div>
</div>

<div class="py-8 px-4 lg:w-1/3">
<div class="h-full flex items-start">
<div class="w-12 flex-shrink-0 flex flex-col text-center leading-none">
<span class="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">🎨</span>
<span class="font-medium text-lg text-gray-200 title-font leading-none">⧩</span>
</div>
<div class="flex-grow pl-6">
<h2 class="tracking-widest text-xs title-font font-medium text-red-400 mb-1"><b> /< ⟐>/
</b></h2>
<h1 class="title-font text-xl font-medium text-red-600 mb-3">PERSONALITY CATEGORY</h1>
<p class="leading-relaxed mb-5">
gaycheck,
lesbocheck,
beautycheck,
dumbcheck,
gay,
lesbo,
beauty,
dumb
</p>
<a class="inline-flex items-center">
<img alt="blog" src="https://i.postimg.cc/0y8YCLNk/Loading-GIF-Animation.gif"
class="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center">
<span class="flex-grow flex flex-col pl-3">
<span class="title-font font-medium text-gray-900">Holden Caulfield</span>
</span>
</a>
</div>
</div>
</div>

<div class="py-8 px-4 lg:w-1/3">
<div class="h-full flex items-start">
<div class="w-12 flex-shrink-0 flex flex-col text-center leading-none">
<span class="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">🥃</span>
<span class="font-medium text-lg text-gray-200 title-font leading-none">⧩</span>
</div>
<div class="flex-grow pl-6">
<h2 class="tracking-widest text-xs title-font font-medium text-red-400 mb-1"><b> /< ⟐>/
</b></h2>
<h1 class="title-font text-xl font-medium text-red-600 mb-3">ADULT 18+ CATEGORY</h1>
<p class="leading-relaxed mb-5">
4k,
blowjob,
milf,
milk,
pussy,
slut,
tikporn
</p>
<a class="inline-flex items-center">
<img alt="blog" src="https://i.postimg.cc/0y8YCLNk/Loading-GIF-Animation.gif"
class="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center">
<span class="flex-grow flex flex-col pl-3">
<span class="title-font font-medium text-gray-900">Henry Letham</span>
</span>
</a>
</div>
</div>
</div>

<div class="py-8 px-4 lg:w-1/3">
<div class="h-full flex items-start">
<div class="w-12 flex-shrink-0 flex flex-col text-center leading-none">
<span class="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">🍑</span>
<span class="font-medium text-lg text-gray-200 title-font leading-none">⧩</span>
</div>
<div class="flex-grow pl-6">
<h2 class="tracking-widest text-xs title-font font-medium text-red-400 mb-1"><b> /< ⟐>/
</b></h2>
<h1 class="title-font text-xl font-medium text-red-600 mb-3">HENTAI 16+ CATEGORY</h1>
<p class="leading-relaxed mb-5">
ass,
bdsm,
cum,
doujin,
feet,
femdom,
foxgirl,
glasses,
hentai,
maid,
masturbation,
netorare,
orgy,
panties,
pussy,
school,
tentacles,
thighs,
uniform,
yuri
</p>
<a class="inline-flex items-center">
<img alt="blog" src="https://i.postimg.cc/0y8YCLNk/Loading-GIF-Animation.gif"
class="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center">
<span class="flex-grow flex flex-col pl-3">
<span class="title-font font-medium text-gray-900">Alper Kamu</span>
</span>
</a>
</div>
</div>
</div>

<div class="py-8 px-4 lg:w-1/3">
<div class="h-full flex items-start">
<div class="w-12 flex-shrink-0 flex flex-col text-center leading-none">
<span class="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">🔎</span>
<span class="font-medium text-lg text-gray-800 title-font leading-none">18</span>
</div>
<div class="flex-grow pl-6">
<h2 class="tracking-widest text-xs title-font font-medium text-red-400 mb-1"><b> /< ⟐>/
</b></h2>
<h1 class="title-font text-xl font-medium text-red-600 mb-3">SEARCH CATEGORY</h1>
<p class="leading-relaxed mb-5">
ytsearch,
lyrics,
github,
pinterest,
weather,
google,
wikipedia,
ud,
tenor,
gif,
wallpaper
</p>
<a class="inline-flex items-center">
<img alt="blog" src="https://i.postimg.cc/0y8YCLNk/Loading-GIF-Animation.gif"
class="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center">
<span class="flex-grow flex flex-col pl-3">
<span class="title-font font-medium text-gray-900">Holden Caulfield</span>
</span>
</a>
</div>
</div>
</div>

<div class="py-8 px-4 lg:w-1/3">
<div class="h-full flex items-start">
<div class="w-12 flex-shrink-0 flex flex-col text-center leading-none">
<span class="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">📥</span>
<span class="font-medium text-lg text-gray-800 title-font leading-none">18</span>
</div>
<div class="flex-grow pl-6">
<h2 class="tracking-widest text-xs title-font font-medium text-red-400 mb-1"><b> /< ⟐>/
</b></h2>
<h1 class="title-font text-xl font-medium text-red-600 mb-3">DOWNLOADER CATEGORY</h1>
<p class="leading-relaxed mb-5">
yta,
play,
song,
sing,
ytmp3,
music,
ytplay,
ytaudio,
ytmusic,
youtubemusic
</p>
<a class="inline-flex items-center">
<img alt="blog" src="https://i.postimg.cc/0y8YCLNk/Loading-GIF-Animation.gif"
class="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center">
<span class="flex-grow flex flex-col pl-3">
<span class="title-font font-medium text-gray-900">Henry Letham</span>
</span>
</a>
</div>
</div>
</div>

</div>
</div>
</section>

<!--
╔⧉༻ 𝐕𝐥𝐤𝐲𝐫𝐞🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 (𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬) ══════════════════════════════════════════⬡|
║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 +918436686758,917430922909
║ 
║ We won't be responsible for any kind of ban due to this bot.
║ Vlkyre was made for fun purpose and to make group management easier.
║ It's your concern if you spam and gets your account banned.
║ Also, Forks won't be entertained.
║ If you fork this repo and edit plugins, it's your concern for further updates.
║ Forking Repo is fine. But if you edit something we will not provide any help.
║ In short, Fork At Your Own Risk.
╚═════════════════════════════════════════════════════════════════| (c)𝐕𝐥𝐤𝐲𝐫𝐞🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡| -->
<nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
<a href="/" class="mr-5 text-red-400 hover:text-white">| Home </a>
<a href="#Commands" class="mr-5 text-red-400 hover:text-white">| Commands</a>
<a href="#FAQs" class="mr-5 text-red-400 hover:text-white">| FAQs</a>
<a href="#Groups" class="mr-5 text-red-400 hover:text-white">| Groups</a>
<a href="#Console" class="mr-5 text-red-400 hover:text-white">| Console</a>
</nav>
<hr style="height:6px;border-top:1px solid #666666" />
<hr style="height: 0.5px; border-top: 2px solid #9c3028" />
<a href="#Introduction"
class="flex title-font font-medium items-center text-white mb-4 md:mb-0 justify-center"><span
class="ml-3 text-xl hover:text-red-600 "><b><I>🔔 Beginning...</I></b></span></a>


<section class="text-gray-400 body-font">
<div id="FAQs" class="container px-5 py-24 mx-auto flex flex-wrap">
<h1 class="text-3xl font-medium title-font text-white mb-12 text-center text-white"><b>❓Frequently
Asked Questions - FAQs<br>⬡════⬡
</b></h1>
<div class="flex flex-wrap w-full">
<div class="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
<div class="flex relative pb-12">
<div class="h-full w-10 absolute inset-0 flex items-center justify-center">
<div class="h-full w-1 bg-gray-800 pointer-events-none"></div>
</div>
<div
class="flex-shrink-0 w-10 h-10 rounded-full bg-red-800 inline-flex items-center justify-center text-white relative z-10">
<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
</svg>
</div>
<div class="flex-grow pl-4">
<h2 class="font-medium title-font text-sm text-red-400 mb-1 tracking-wider">∘ What is
the
reason/topic
of
Vlkyre? ∘</h2>
<p class="leading-relaxed"><I>: Vlkyre is an advance whatsapp user-bot. you can use the
bot in your respective groups that will help you with many advance commands
within whatsapp...
</I></p>
</div>
</div>
<div class="flex relative pb-12">
<div class="h-full w-10 absolute inset-0 flex items-center justify-center">
<div class="h-full w-1 bg-gray-800 pointer-events-none"></div>
</div>
<div
class="flex-shrink-0 w-10 h-10 rounded-full bg-red-800 inline-flex items-center justify-center text-white relative z-10">
<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
<path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
</svg>
</div>
<div class="flex-grow pl-4">
<h2 class="font-medium title-font text-sm text-red-400  mb-1 tracking-wider">∘ How Can I
Add Vlkyre To
My
Own Groups? ∘</h2>
<p class="leading-relaxed"><I>: Send your group chat links to any admins of vlkyre
official
And ask
Them to add vlkyre in your group.
</I></p>
</div>
</div>
<div class="flex relative pb-12">
<div class="h-full w-10 absolute inset-0 flex items-center justify-center">
<div class="h-full w-1 bg-gray-800 pointer-events-none"></div>
</div>
<div
class="flex-shrink-0 w-10 h-10 rounded-full bg-red-800 inline-flex items-center justify-center text-white relative z-10">
<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
<circle cx="12" cy="5" r="3"></circle>
<path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
</svg>
</div>
<div class="flex-grow pl-4">
<h2 class="font-medium title-font text-sm text-red-400  mb-1 tracking-wider">∘ How Can I
Get Verified
To
Use Vlkyre? ∘</h2>
<p class="leading-relaxed"><I>: Join any vlkyre official group.For video help, visit
vlkyre youtube channel located in home page....
</I></p>
</div>
</div>
<div class="flex relative pb-12">
<div class="h-full w-10 absolute inset-0 flex items-center justify-center">
<div class="h-full w-1 bg-gray-800 pointer-events-none"></div>
</div>
<div
class="flex-shrink-0 w-10 h-10 rounded-full bg-red-800 inline-flex items-center justify-center text-white relative z-10">
<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
<circle cx="12" cy="7" r="4"></circle>
</svg>
</div>
<div class="flex-grow pl-4">
<h2 class="font-medium title-font text-sm text-red-400  mb-1 tracking-wider">∘ I have
forked the repo
but
bot doesn't want to run.Help Me! ∘
<br>
</h2>
<p class="leading-relaxed"><I>: Read vlkyre github readme...
</I></p>
</div>
</div>
<div class="flex relative">
<div
class="flex-shrink-0 w-10 h-10 rounded-full bg-red-800 inline-flex items-center justify-center text-white relative z-10">
<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
<path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
<path d="M22 4L12 14.01l-3-3"></path>
</svg>
</div>
<div class="flex-grow pl-4">
<h2 class="font-medium title-font text-sm text-red-400  mb-1 tracking-wider">∘ How Do I
Deploy or Get
My
Own Vlkyre userbot? ∘</h2>
<p class="leading-relaxed"><I>: For now our code doesn't allow any user to self host.
You may try yourself but no support from our side!
To use or add vlkyre in your group, please join official groups...
</I></p>
</div>
</div>
</div>
<img class="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12"
src="https://i.postimg.cc/nLNqccRh/vlkyre.gif" alt="step">
</div>
</div>
</section>
<!--
╔⧉༻ 𝐕𝐥𝐤𝐲𝐫𝐞🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 (𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬) ══════════════════════════════════════════⬡|
║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 +918436686758,917430922909
║ 
║ We won't be responsible for any kind of ban due to this bot.
║ Vlkyre was made for fun purpose and to make group management easier.
║ It's your concern if you spam and gets your account banned.
║ Also, Forks won't be entertained.
║ If you fork this repo and edit plugins, it's your concern for further updates.
║ Forking Repo is fine. But if you edit something we will not provide any help.
║ In short, Fork At Your Own Risk.
╚═════════════════════════════════════════════════════════════════| (c)𝐕𝐥𝐤𝐲𝐫𝐞🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡| -->
<nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
<a href="/" class="mr-5 text-red-400 hover:text-white">| Home </a>
<a href="#Commands" class="mr-5 text-red-400 hover:text-white">| Commands</a>
<a href="#FAQs" class="mr-5 text-red-400 hover:text-white">| FAQs</a>
<a href="#Groups" class="mr-5 text-red-400 hover:text-white">| Groups</a>
<a href="#Console" class="mr-5 text-red-400 hover:text-white">| Console</a>
</nav>
<hr style="height:6px;border-top:1px solid #666666" />
<hr style="height: 0.5px; border-top: 2px solid #9c3028" />
<a href="#Introduction"
class="flex title-font font-medium items-center text-white mb-4 md:mb-0 justify-center"><span
class="ml-3 text-xl hover:text-red-600 "><b><I>🔔 Beginning...</I></b></span></a>


<section class="text-gray-400 body-font">
<div id="Console" class="container px-5 py-24 mx-auto">
<div class="flex flex-wrap w-full mb-20">
<div class="lg:w-1/2 w-full mb-6 lg:mb-0">
<h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-white"><b>🎐Live Information
of Bot</b></h1>
<p class="lg:w-1/2 w-full leading-relaxed text-gray-300"><I>📢Below You Can Check
All Information Logged By Vlkyre!</I></p>
<div class="h-1 w-20 bg-yellow-500 rounded"></div>
</div>
</div>
<div class="flex flex-wrap -m-4">
<div class="xl:w-1/4 md:w-1/2 p-4">
<div class="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
<img class="h-40 rounded w-full object-cover object-center mb-6" src=${pgroup}
alt="content">
<h3 class="tracking-wider text-red-500 text-xs font-medium title-font"><b>🔰 GROUP
INFORMATION CONSOLE</b></h3>
<h2 class="text-lg text-white font-medium title-font mb-4"> </h2>
<p class="leading-relaxed text-base"><b>🧀 Group Name:</b><br>> <I>${gcName}</I></p>
<p class="leading-relaxed text-base"><b>👑 Group Owner:</b><br>> <I>${gcOwner}</I></p>
<p class="leading-relaxed text-base"><b>💬 Group Id:</b><br>> <I>${
νℓcнαт.chat
}</I></p>
<p class="leading-relaxed text-base"><b>⏰ Created On:</b><br>> <I>${gcCreadted}</I></p>
</div>
</div>
<div class="xl:w-1/4 md:w-1/2 p-4">
<div class="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
<img class="h-40 rounded w-full object-cover object-center mb-6" src=${puser} alt="content">
<h3 class="tracking-wider text-red-500 text-xs font-medium title-font"><b>🧛🏻‍♂️ USER
INFORMATION CONSOLE</b></h3>
<h2 class="text-lg text-white font-medium title-font mb-4"> </h2>
<p class="leading-relaxed text-base"><b>❣️ User Name:</b><br>> <I>${
νℓкуяє.pushname
}</I></p>
<p class="leading-relaxed text-base"><b>📱 User Number:</b><br>> <I>${
νℓcнαт.sender
}</I></p>
<p class="leading-relaxed text-base"><b>❓ Is User Admin:</b><br>> <I>${gcAdminCheck}</I></p>
</div>
</div>
<div class="xl:w-1/4 md:w-1/2 p-4">
<div class="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
<img class="h-40 rounded w-full object-cover object-center mb-6"
src="https://i.postimg.cc/YqvyCVj0/Clock-icon.gif" alt="content">
<h3 class="tracking-wider text-red-500 text-xs font-medium title-font"><b>⏰ DATE/TIME
INFORMATION CONSOLE</b></h3>
<h2 class="text-lg text-white font-medium title-font mb-4"> </h2>
<p class="leading-relaxed text-base"><b>⏰ Time:</b><br>> <I>${Today.getHours()}h :
${Today.getMinutes()}m : ${Today.getSeconds()}s</I></p>
<p class="leading-relaxed text-base"><b>🗓️ Date:</b><br>> <I>${Today.getDate()}d : ${
Today.getMonth() + 1
}m : ${Today.getFullYear()}y</I></p>
</div>
</div>
<div class="xl:w-1/4 md:w-1/2 p-4">
<div class="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
<img class="h-40 rounded w-full object-cover object-center mb-6"
src="https://i.postimg.cc/3RpmqXwK/Animation.gif" alt="content">
<h3 class="tracking-wider text-red-500 text-xs font-medium title-font"><b>🖊️ COMMAND
INFORMATION CONSOLE</b></h3>
<h2 class="text-lg text-white font-medium title-font mb-4"> </h2>
<p class="leading-relaxed text-base"><b>🖊️ Command Executed:</b><br>> <I>${
νℓкуяє.command
}</I></p>
<p class="leading-relaxed text-base"><b>🍀 Message Body:</b><br>> <I>${
νℓкуяє.budy || νℓкуяє.mtype
}</I></p>
<p class="leading-relaxed text-base"><b>🚦 Execution Status:</b><br>> <I>${coreback}</I></p>
</div>
</div>
</div>
</div>
</section>
<!--
╔⧉༻ 𝐕𝐥𝐤𝐲𝐫𝐞🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 (𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬) ══════════════════════════════════════════⬡|
║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 +918436686758,917430922909
║ 
║ We won't be responsible for any kind of ban due to this bot.
║ Vlkyre was made for fun purpose and to make group management easier.
║ It's your concern if you spam and gets your account banned.
║ Also, Forks won't be entertained.
║ If you fork this repo and edit plugins, it's your concern for further updates.
║ Forking Repo is fine. But if you edit something we will not provide any help.
║ In short, Fork At Your Own Risk.
╚═════════════════════════════════════════════════════════════════| (c)𝐕𝐥𝐤𝐲𝐫𝐞🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡| -->
<a href="#Introduction"
class="flex title-font font-medium items-center text-white mb-4 md:mb-0 justify-center"><span
class="ml-3 text-xl hover:text-red-600 "><b><I>🔔 Beginning...</I></b></span></a>
<nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center"></nav>
<hr style="height:6px;border-top:1px solid #666666" />
<hr style="height: 0.5px; border-top: 2px solid #9c3028" />

<footer class="text-gray-400 body-font">
<div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
<a class="flex title-font font-medium items-center md:justify-start justify-center text-red-500">
<span class="ml-3 text-xl hover:text-red-600">❝ Ⓒ𝐕𝐋𝐊𝐘𝐑𝐄™ <I>Powered By KryKnz</I> ❞</span>
</a>
<p class="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">
<b>𝐒𝐢𝐧𝐜𝐞 𝟐𝟎𝟐𝟏: </b>
<a href="https://github.com/Kryknz/Vlkyre/blob/%F0%9D%90%95%F0%9D%90%A5%F0%9D%90%A4%F0%9D%90%B2%F0%9D%90%AB%F0%9D%90%9E%E2%96%B2%F0%9D%90%96%F0%9D%90%A1%F0%9D%90%9A%F0%9D%90%AD%F0%9D%90%AC%F0%9D%90%80%F0%9D%90%A9%F0%9D%90%A9/LICENSE"
class="text-gray-500 ml-1 hover:text-gray-200" target="_blank"
rel="noopener noreferrer"><i>Licensed Under Apache License Version 2.0</i></a>
</p>
<span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
<a class="text-gray-400">
<svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
class="w-5 h-5" viewBox="0 0 24 24">
<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
</svg>
</a>
<a class="ml-3 text-gray-400">
<svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
class="w-5 h-5" viewBox="0 0 24 24">
<path
d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z">
</path>
</svg>

</a>
<a class="ml-3 text-gray-400">
<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
<rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
<path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
</svg>
</a>
<a class="ml-3 text-gray-400">
<svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
<path stroke="none"
d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z">
</path>
<circle cx="4" cy="4" r="2" stroke="none"></circle>
</svg>
</a>
</span>
</div>
</footer>
</body>
</body>

</html>`);
});
// spinnies.succeed("νℓкуяє", { text: coreback });
}
);
};
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
/*
╔⧉༻ [ 𝐕𝐥𝐤𝐲𝐫𝐞🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 +918436686758,917430922909
║ 
║ We won't be responsible for any kind of ban due to this bot.
║ νℓкуяє was made for fun purpose and to make group management easier.
║ It's your concern if you spam and gets your account banned.
║ Also, Forks won't be entertained.
║ If you fork this repo and edit plugins, it's your concern for further updates.
║ Forking Repo is fine. But if you edit something we will not provide any help.
║ In short, Fork At Your Own Risk.
╚════════════╝
*/
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
