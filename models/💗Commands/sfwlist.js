//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ voxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
//  ║⧉༻ 🤖𝐖𝐡𝐚𝐭𝐬𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile WhatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 voxbot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of voxbot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ voxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
require("../../logger/global.js");
var presentpath = require("path");
var tempname = presentpath.basename(__filename);
var finalname = tempname.slice(0, -3).toLowerCase();
module.exports = async (voxbot, voxchat, update, store) => {
  await voxbot.imagebutton(
    voxbot,
    voxchat,
    `*🔖Here, ${finalname} for ${voxbot.pushname || voxbot.Tname}:*
*🤖Hello, I am voxbot User-Bot🤖*
> Ⓒ𝐖𝐡𝐚𝐭𝐬𝐁𝐨𝐭: is a voxapp userbot with automation,moderation,music,games and 100+ commands!
> My developers are working on my code.



┌『 *🦄${finalname.toUpperCase()}🦄* 』
│║⦁ ${voxbot.prefix}waifu
│║⦁ ${voxbot.prefix}swaifu
│║⦁ ${voxbot.prefix}neko
│║⦁ ${voxbot.prefix}sneko
│║⦁ ${voxbot.prefix}shinobu
│║⦁ ${voxbot.prefix}sshinobu
│║⦁ ${voxbot.prefix}megumin
│║⦁ ${voxbot.prefix}smegumin
│║⦁ ${voxbot.prefix}awoo
│║⦁ ${voxbot.prefix}sawoo
│║⦁ ${voxbot.prefix}glomp
│║⦁ ${voxbot.prefix}sglomp
│║⦁ ${voxbot.prefix}handhold
│║⦁ ${voxbot.prefix}shandhold
│║⦁
│║⦁ ${voxbot.prefix}sbully
│║⦁ ${voxbot.prefix}scuddle
│║⦁ ${voxbot.prefix}scry
│║⦁ ${voxbot.prefix}shug
│║⦁ ${voxbot.prefix}skiss
│║⦁ ${voxbot.prefix}slick
│║⦁ ${voxbot.prefix}spat
│║⦁ ${voxbot.prefix}ssmug
│║⦁ ${voxbot.prefix}sbonk
│║⦁ ${voxbot.prefix}syeet
│║⦁ ${voxbot.prefix}sblush
│║⦁ ${voxbot.prefix}ssmile
│║⦁ ${voxbot.prefix}swave
│║⦁ ${voxbot.prefix}shighfive
│║⦁ ${voxbot.prefix}snom
│║⦁ ${voxbot.prefix}sbite
│║⦁ ${voxbot.prefix}sslap
│║⦁ ${voxbot.prefix}skill
│║⦁ ${voxbot.prefix}skick
│║⦁ ${voxbot.prefix}shappy
│║⦁ ${voxbot.prefix}swink
│║⦁ ${voxbot.prefix}spoke
│║⦁ ${voxbot.prefix}sdance
│║⦁ ${voxbot.prefix}scringe
┕╚═══════⋑`,
    "./public/voxbot.png"
  );
};
