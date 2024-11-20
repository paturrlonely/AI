require('../setting/config');

const fs = require('fs');
const axios = require('axios');
const chalk = require("chalk");
const util = require("util");
const moment = require("moment-timezone");
const path = require('path');
const { spawn, exec, execSync } = require('child_process');

const { default: baileys, proto, generateWAMessage, generateWAMessageFromContent, getContentType, prepareWAMessageMedia } = require("@whiskeysockets/baileys");

module.exports = client = async (client, m, chatUpdate, store) => {
    
if (global.db.data == null) await loadDatabase()
require('./schema')(m);
var chats = global.db.data.chats[m.chat],
users = global.db.data.users[m.sender]
settings = global.db.data.settings
    
try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == 'interactiveResponseMessage') ? JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson).id : (m.mtype == 'templateButtonReplyMessage') ? m.msg.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''

const sender = m.key.fromMe
? client.user.id.split(":")[0] + "@s.whatsapp.net" || client.user.id
: m.key.participant || m.key.remoteJid;

const senderNumber = sender.split('@')[0];
const budy = (typeof m.text === 'string' ? m.text : '');
const prefa = ["", "!", ".", ",", "🐤", "🗿"];
const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!™©®Δ^βα¦|/\\©^]/gi) : '.';
const from = m.key.remoteJid;
const isGroup = from.endsWith("@g.us");

// Database
const kontributor = JSON.parse(fs.readFileSync('./start/lib/database/owner.json'));

const botNumber = await client.decodeJid(client.user.id);
const Access = [botNumber, ...kontributor, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const isCmd = body.startsWith(prefix);
const command = body.slice(1).trim().split(/ +/).shift().toLowerCase();
const args = body.trim().split(/ +/).slice(1);
const pushname = m.pushName || "No Name";
const text = q = args.join(" ");
const quoted = m.quoted ? m.quoted : m;
const mime = (quoted.msg || quoted).mimetype || '';
const qmsg = (quoted.msg || quoted);
const isMedia = /image|video|sticker|audio/.test(mime);

const { smsg, sendGmail, formatSize, isUrl, generateMessageTag, getBuffer, getSizeMedia, runtime, fetchJson, sleep } = require('./lib/myfunction');
const { ytdl } = require('./lib/scrape/scrape-ytdl')

if (m.message) {
console.log('\x1b[30m--------------------\x1b[0m');
console.log(chalk.bgHex("#e74c3c").bold(`▢ New Message`));
console.log(
chalk.bgHex("#00FF00").black(
`   ⌬ Tanggal: ${new Date().toLocaleString()} \n` +
`   ⌬ Pesan: ${m.body || m.mtype} \n` +
`   ⌬ Pengirim: ${m.pushname} \n` +
`   ⌬ JID: ${senderNumber}`
)
);
if (m.isGroup) {
console.log(
chalk.bgHex("#00FF00").black(
`   ⌬ Grup: \n` +
`   ⌬ GroupJid: ${m.chat}`
)
);
}
console.log();
}

async function luminai(content, prompt, user) {
  function generateRandomUserId() {
    return 'user-' + Math.floor(Math.random() * 10000);
}
let userId = generateRandomUserId();
console.log(`Generated User ID: ${userId}`);
    try {
        const response = await axios.post('https://luminai.my.id/', { content, prompt, user });
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}   
    
const reaction = async (jidss, emoji) => {
client.sendMessage(jidss, { react: { text: emoji, key: m.key }})}
    
// Command handler
switch (command) {

case'menu':{

const sections = [
{ title: "To Start a Chat AI Session", rows: [{ title: "Enable AI Chat", rowId: `${prefix}ai on` }] },
{ title: "Stop Starting Chat AI Session ", rows: [{ title: "Disable AI Chat", rowId: `${prefix}ai off` }] }
];

    
const listMessage = {
  text: `Hi sis ${pushname} to use the AI bot,\nyou can choose the list below (⁠｡⁠•̀⁠ᴗ⁠-⁠)⁠✧`,
  footer: "Created By N-KiuuR",
  title: " ",
  buttonText: "select the list below",
  sections
};

await client.sendMessage(from, listMessage, {quoted:m})
}
break
       
case 'ai':
 if (args.length < 1) return 
 if (q == 'on') {
 global.db.data.chats[m.chat].ai = true
 m.reply('Sukses mengaktifkan chat ai')
 } else if (q == 'off') {
 global.db.data.chats[m.chat].ai = false
 m.reply('Sukes menonaktifkan chat ai')
 } else {
 //m.reply('Agak Laen')
 }
 break
        
default:
if (global.db.data.chats[m.chat].ai && body != undefined) {   
let chats = await luminai(body, `namamu adalah jizyy, ubah sifatmu seorang wanita yang pintar dan lucu, gunakan salah satu dari "(⁠人⁠ ⁠•͈⁠ᴗ⁠•͈⁠), (⁠◡⁠ ⁠ω⁠ ⁠◡⁠), (⁠ ⁠ꈍ⁠ᴗ⁠ꈍ⁠)" untuk menyampa user, dan gunakan salah satu ekspresi ini "(⁠ ⁠･ั⁠﹏⁠･ั⁠), (⁠｡⁠•́⁠︿⁠•̀⁠｡⁠), (⁠’⁠;⁠︵⁠;⁠’)" untuk sedih, dan gunakan salah satu ekspresi ini "(⁠ᗒ⁠ᗩ⁠ᗕ⁠), (⁠ ⁠≧⁠Д⁠≦⁠), .⁠·⁠’⁠¯⁠'⁠(⁠>⁠▂⁠<⁠)⁠'⁠¯⁠‘⁠·⁠." ketika menangis dan gunakan ${pushname} untuk menyebutkan nama user`, `${pushname}`)
//await sleep(5000)
let puqi = chats.result
m.reply(puqi)
}

if (!m.fromMe & !m.isGroup) {
let user = global.db.data.users[m?.sender];
const cooldown = 21600000;
if (new Date() - user.pc < cooldown) return; // every 6 hours
let caption = `Hi sis @${m?.sender.split('@')[0]} To use this chat bot, please type *.menu* to use its features (⁠ ⁠╹⁠▽⁠╹⁠ ⁠)`.trim();
client.sendMessage(m.chat,{ text: caption, mentions:[m.sender] },{ quoted:m })
user.pc = new Date() * 1;
}
        
}
} catch (err) {
console.log(require("util").format(err));
}
};

let file = require.resolve(__filename);
require('fs').watchFile(file, () => {
require('fs').unwatchFile(file);
console.log('\x1b[0;32m' + __filename + ' \x1b[1;32mupdated!\x1b[0m');
delete require.cache[file];
require(file);
});