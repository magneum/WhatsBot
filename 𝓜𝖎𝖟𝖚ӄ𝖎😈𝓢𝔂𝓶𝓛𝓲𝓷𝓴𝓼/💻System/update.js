//⬡==================⬡-----------------⦿   © 𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿-----------------⬡==================⬡`;
const Heroku = require(`heroku-client`);
const ℓιєηт = require(`../../𝓜𝖎𝖟𝖚ӄ𝖎🧀𝓒𝓻𝓪𝓽𝓮/catch`);
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const _𝔏𝔞𝔟_ = require(`../../𝓜𝖎𝖟𝖚ӄ𝖎🧀𝓒𝓻𝓪𝓽𝓮/_𝔏𝔞𝔟_`);
var heroku = new Heroku({
  token: _𝔏𝔞𝔟_.HEROKU_API,
});
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
//⬡==================⬡-----------------⦿   © 𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿-----------------⬡==================⬡`;
module.exports = {
  name: `update`,
  description: `ᴛʜɪꜱ ᴄᴏᴍᴍᴀɴᴅ ᴄᴀɴ ʙᴇ ᴜꜱᴇᴅ ᴛᴏ ᴜᴘᴅᴀᴛᴇ ᴛʜᴇ ʙᴏᴛ`,
  𝓜𝓮𝓮6ʍօʀɛ: `${ᴋᴇɪ}`,
  async handle(𝓚𝓻𝓪𝓴𝓲𝓷𝔃, chat, 𝓜𝖎𝖟𝖚ӄ𝖎, arg, 𝓜𝓲𝔃𝓾𝓴𝓲𝓢𝓲𝓽𝓻𝓮𝓹) {
    try {
      //⬡==================⬡-----------------⦿   © 𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿-----------------⬡==================⬡`;
      const 𝓜𝖎𝖟𝖚ӄ𝖎𝔊𝔦𝔱 = require(`simple-git`)();
      await 𝓜𝖎𝖟𝖚ӄ𝖎𝔊𝔦𝔱.fetch();
      var 𝓢𝓮𝓷𝓭𝓮𝓻𝓘𝓓 = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
      var 𝓢𝓮𝓷𝓭𝓮𝓻𝓒𝓸𝓷𝓯𝓲𝓰 = 𝓢𝓮𝓷𝓭𝓮𝓻𝓘𝓓.substring(0, 𝓢𝓮𝓷𝓭𝓮𝓻𝓘𝓓.length - 15);
      var 𝙵𝚎𝚝𝚌𝚑𝙼𝚒𝚣𝚞𝚔𝚒𝙽𝚎𝚜𝚜 = await 𝓜𝖎𝖟𝖚ӄ𝖎𝔊𝔦𝔱.log([
        `KrakinzLab..origin/KrakinzLab`,
      ]);
      //⬡==================⬡-----------------⦿   © 𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿-----------------⬡==================⬡`;
      if (!𝓜𝖎𝖟𝖚ӄ𝖎.fromMe) {
        return await 𝓚𝓻𝓪𝓴𝓲𝓷𝔃
          .sendMessage(
            𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
            {
              url: _𝔏𝔞𝔟_.ERROR,
            },
            MessageType.image,
            {
              mimetype: Mimetype.png,
              contextInfo: {
                mentionedJid: [𝓜𝖎𝖟𝖚ӄ𝖎.sender],
              },
              caption: `_© 𝐌𝐢𝐳𝐮𝐤𝐢 𝐁𝐨𝐭_

𝗔𝗵𝗺 •@${𝓢𝓮𝓷𝓭𝓮𝓻𝓒𝓸𝓷𝓯𝓲𝓰},⚠️𝙉𝙞𝙘𝙚 𝙏𝙧𝙮 𝘽𝙪𝙩 𝙊𝙣𝙡𝙮 𝙈𝙮 𝙊𝙬𝙣𝙚𝙧 𝘾𝙖𝙣 𝙪𝙨𝙚 𝙩𝙝𝙖𝙩 𝙘𝙤𝙢𝙢𝙖𝙣𝙙!`,
            }
          )
          .catch((error) => ℓιєηт.catch(error, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 𝓜𝖎𝖟𝖚ӄ𝖎));
      }
      await 𝓚𝓻𝓪𝓴𝓲𝓷𝔃
        .sendMessage(
          𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
          {
            url: _𝔏𝔞𝔟_.UPT,
          },
          MessageType.image,
          {
            mimetype: Mimetype.png,
            contextInfo: {
              mentionedJid: [𝓜𝖎𝖟𝖚ӄ𝖎.sender],
            },
            caption: `_© 𝐌𝐢𝐳𝐮𝐤𝐢 𝐁𝐨𝐭_

𝗔𝗵𝗺 •@${𝓢𝓮𝓷𝓭𝓮𝓻𝓒𝓸𝓷𝓯𝓲𝓰},ʏᴏᴜʀ 𝓜𝖎𝖟𝖚ӄ𝖎 ʙᴏᴛ ɪꜱ ɴᴏᴡ ᴜᴘᴅᴀᴛɪɴɢ.ᴘʟᴇᴀꜱᴇ ᴡᴀɪᴛ ꜰᴏʀ 30-60ꜱᴇᴄ

⚠️𝗜𝗳 𝗶𝘁 𝘄𝗮𝘀 𝗮 𝗕𝗜𝗚 ⚡𝐌𝐢𝐳𝐮𝐤𝐢™ 𝘂𝗽𝗱𝗮𝘁𝗲,
𝘁𝗵𝗲𝗻 𝗣𝗹𝗲𝗮𝘀𝗲 𝗿𝗲𝗱𝗲𝗽𝗹𝗼𝘆 𝘆𝗼𝘂𝗿 𝗯𝗼𝘁!`,
          }
        )
        .catch((error) => ℓιєηт.catch(error, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 𝓜𝖎𝖟𝖚ӄ𝖎));
      heroku
        .delete(`/apps/` + _𝔏𝔞𝔟_.HEROKU_BOT_NAME + `/dynos/` + `worker`)
        .then((x) => console.log(x));
    } catch (error) {
      ℓιєηт.catch(error, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 𝓜𝖎𝖟𝖚ӄ𝖎);
      console.log(error);
    }
  },
};
//⬡==================⬡-----------------⦿   © 𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿-----------------⬡==================⬡`;
