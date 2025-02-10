//#RIAS
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "obidikechikadibia@gmail.com";
global.location = "Ondo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://tkm:Aqi6tqwyv5IwDHncTtVi5XtMGZvfndDJ@dpg-cqahogtds78s739sl81g-a.oregon-postgres.render.com/takudzwa";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Toxic1239/RIASGREMORYBOT";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vaex2BtGU3BRQoeEsl0U";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vaex2BtGU3BRQoeEsl0U";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/c21ae479aab857b4f8006.jpg";
global.devs = "2348086541281";
global.sudo = process.env.SUDO || "2348086541281";
global.owner = process.env.OWNER_NUMBER || "2348086541281";
global.style = process.env.STYLE || "1";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/84a935261759d92084744.mp4";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://riasgremorybot-xcqv.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEFqbk5Ldm1TRTdNbmRmRHZjS3lKOCt6bFl5blNpYStLWFVsZjdhaTczZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTEFBWG9xcjk5VmpLcElXc3cwbGoyUHZXRDJRaWZVS1VFRGxvS1BBYWhGOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNUFF5dU5EQzU1K0orcHlsZ1NGQTM0eWpsMVhVYmZGbGtVN3l4QWNpWjM0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIvVzRhdGhiYkY2YlJkaWJWeXVuUkFHM2hvSjB3ZVJlYVEzOFhoRlhtZFNrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtLMmJ4QWcxaXRIOWhzU0lMcy8zaTZMTUxERUpMK1BIT1hDWEkyY0dsR3M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im03WGdXK2J3NTJ3TWp5a2srWGdOUlBRVmcrL016WnJZYjhzOTNDL1V5ejA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0NwL2FrL0JWNG9tZUw3dUN1Z0dHdUxQWG0rSmlheWRGc3F4TE5TQlBVMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM0Y0dG9YT3dySDFFbXFGaTFQd0hRZ3lsUHN1THJTNE9uOC80WW1QSjNETT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imk3dk9FZG9jZFhRbGNIenNENDVqdml1dytNM0JsZm5kTDRWcUtqWDRuZHQzRUpPdHZnZ2dDOWVibVhDOERBc3B2YUhHS0dBYXFpN2M1Z21kZm8wUWhBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NiwiYWR2U2VjcmV0S2V5IjoiWHhjekVUcUgyUm9iRDhYZ1RabHM1WmhxdWd5N1RhNGh3WGo1U1dEZU9vVT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiOHRIakVuTkRRbENRMzlaRzFCWVZBdyIsInBob25lSWQiOiI0NjQ2ZjI1Yy0xZGIyLTRlNWYtYmZkNS1iM2VhMWM4YTA5OTAiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVEhXMnpqallOVCtxeXB6NzVlc1RTY0I1a21ZPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkUxMUg2dVk1N2Q5ODhMV1JLRDlqOGJRaUNCRT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJKUEtQRFJQNCIsIm1lIjp7ImlkIjoiMjM0ODE2ODk4NTkxMjoyOEBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSlBHeU9ZRkVQalFxTDBHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiZVFWcXlvb1ZRT0Z0TjNhY0wrSklZeFlLZEt5NCtKcFVTMlZuWi9VQmhqST0iLCJhY2NvdW50U2lnbmF0dXJlIjoiWm1idEsvQWw3SjRCa1dTSmwrU0FLWWJ1SHZXNzhoS1k4WlFYT2VzMDhxWWNmekZ4MDNkcDNYK052YllMRGNTSlRyWFJtOVlJNDRuaWVtQjcybEc5RFE9PSIsImRldmljZVNpZ25hdHVyZSI6IkNnMVlGSU5ISjBLbnZoWUNHMmRoVEwxTTl2QmJxTDFuL3hKRWR1dDFSejMxcWl3WDVRWGlYKzdJWkRyOWxvTmhHNlBhNnpiWVZYRDNlZ3VJWFV2d2p3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0ODE2ODk4NTkxMjoyOEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJYa0Zhc3FLRlVEaGJUZDJuQy9pU0dNV0NuU3N1UGlhVkV0bFoyZjFBWVl5In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM5MjA0NzQzfQ=="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.3.1",
  caption: process.env.CAPTION || "𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 𝗧𝗢𝗫𝗫𝗜𝗖 𝗕𝗢𝗬",
  author: process.env.PACK_AUTHER || "ᴛᴏxxɪᴄ ᴍᴅ",
  packname: process.env.PACK_NAME || "𝗥𝗜𝗔𝗦 𝗠𝗗",
  botname: process.env.BOT_NAME || "𝗥𝗜𝗔𝗦 𝗚𝗥𝗘𝗠𝗢𝗥𝗬",
  ownername: process.env.OWNER_NAME || "ᴛᴏxxɪᴄ",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-pBksWDImP6VuvvJTvqDsT3BlbkFJ2E8GhbpzjyRFkFaBI9Aj",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "HRKU-2fc4d785-535b-4113-8291-84c5d3d6d2c3",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "toxicmd12",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "RIAS").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
