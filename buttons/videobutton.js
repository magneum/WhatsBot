//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ voxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
//  ║⧉༻ 🤖𝐕𝐨𝐱𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
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
module.exports = async (voxbot, voxchat, 𝚌𝚘𝚗𝚝є𝚡𝚝, νidē໐) => {
  if (voxbot.isReply) {
    var receiver =
      voxbot.mtype == "extendedTextMessage" &&
      voxbot.message.extendedTextMessage.contextInfo != null
        ? voxbot.message.extendedTextMessage.contextInfo.participant || ""
        : "";
    await voxbot
      .sendMessage(
        voxchat.chat,
        {
          image: { url: νidē໐ },
          caption: `*📢Id:* ${voxchat.chat}
${𝚌𝚘𝚗𝚝є𝚡𝚝}`,
          footer: "*voxbot by magneum*\n*💻HomePage:* https://bit.ly/magneum",
          buttons: [
            {
              buttonId: `${voxbot.prefix}Dashboard`,
              buttonText: { displayText: `${voxbot.prefix}Dashboard` },
              type: 1,
            },
            {
              buttonId: `${voxbot.prefix}Help`,
              buttonText: { displayText: `${voxbot.prefix}Help` },
              type: 1,
            },
          ],
          headerType: 5,
          mentions: [voxchat.sender, receiver],
        },
        {
          contextInfo: { mentionedJid: [voxchat.sender, receiver] },
          quoted: voxchat,
        }
      )
      .catch((e) => console.log(e));
    ("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ voxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
  } else if (voxbot.mentionByTag) {
    var receiver =
      voxbot.mtype == "extendedTextMessage" &&
      voxbot.message.extendedTextMessage.contextInfo != null
        ? voxbot.message.extendedTextMessage.contextInfo.mentionedJid
        : [];
    await voxbot
      .sendMessage(
        voxchat.chat,
        {
          image: { url: νidē໐ },
          caption: `*📢Id:* ${voxchat.chat}
${𝚌𝚘𝚗𝚝є𝚡𝚝}`,
          footer: "*voxbot by magneum*\n*💻HomePage:* https://bit.ly/magneum",
          buttons: [
            {
              buttonId: `${voxbot.prefix}Dashboard`,
              buttonText: { displayText: `${voxbot.prefix}Dashboard` },
              type: 1,
            },
            {
              buttonId: `${voxbot.prefix}Help`,
              buttonText: { displayText: `${voxbot.prefix}Help` },
              type: 1,
            },
          ],
          headerType: 5,
          mentions: [voxchat.sender, receiver],
        },
        {
          contextInfo: { mentionedJid: [voxchat.sender, receiver] },
          quoted: voxchat,
        }
      )
      .catch((e) => console.log(e));
    ("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ voxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
  } else {
    return await voxbot
      .sendMessage(
        voxchat.chat,
        {
          image: { url: νidē໐ },
          caption: `*📢Id:* ${voxchat.chat}
${𝚌𝚘𝚗𝚝є𝚡𝚝}`,
          footer: "*voxbot by magneum*\n*💻HomePage:* https://bit.ly/magneum",
          buttons: [
            {
              buttonId: `${voxbot.prefix}Dashboard`,
              buttonText: { displayText: `${voxbot.prefix}Dashboard` },
              type: 1,
            },
            {
              buttonId: `${voxbot.prefix}Help`,
              buttonText: { displayText: `${voxbot.prefix}Help` },
              type: 1,
            },
          ],
          headerType: 5,
          mentions: [voxchat.sender],
        },
        {
          contextInfo: { mentionedJid: [voxchat.sender] },
          quoted: voxchat,
        }
      )
      .catch((e) => console.log(e));
  }
};
