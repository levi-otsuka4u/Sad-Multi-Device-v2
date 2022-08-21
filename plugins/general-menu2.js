import moment from 'moment-timezone'
let handler = async (m, { conn, usedPrefix, __dirname, text, command }) => {
let date = moment.tz('Asia/Jakarta').format("dddd, Do MMMM, YYYY")
let time = moment.tz('Asia/Jakarta').format('HH:mm:ss')
conn.sendHydrated(m.chat, '*『 𝚅𝙴𝙽-𝙱𝙾𝚃𝚉 』*', `𝙷𝙰𝙸 𝙰𝙺𝚄 𝙰𝙳𝙰𝙻𝙰𝙷 𝚅𝙴𝙽-𝙱𝙾𝚃𝚉, 𝙱𝙾𝚃 𝙸𝙽𝙸 𝙳𝙸 𝙺𝙴𝙼𝙱𝙰𝙽𝙶𝙺𝙰𝙽 𝙾𝙻𝙴𝙷 𝙻𝙴𝚅𝙸. 𝙹𝙸𝙺𝙰 𝙼𝙴𝙽𝙴𝙼𝚄𝙺𝙰𝙽 𝚂𝙴𝙼𝙰𝙲𝙰𝙼 𝙱𝚄𝙶/𝙴𝚁𝚁𝙾𝚁 𝙻𝙰𝙿𝙾𝚁 𝙺𝙴 𝙾𝚆𝙽𝙴𝚁\n\nᴅᴀᴛᴇ: ${date}\nᴛɪᴍᴇ: ${time} ﹙ɢᴍᴛ +7:00)`.trim(), './media/broadcast.jpg', 'https://github.com/ImleviOfc', '𝙶𝙸𝚃𝙷𝚄𝙱', null, null, [
[`𝙼𝙴𝙽𝚄`, '.m'],
[`\.GW NGENTOD AMA BATANG PISANG😔`, 'Bilek']
], m, {asLocation: true})
}
handler.help = ['menu']
handler.tags = ['general']
handler.command = /^(menu)$/i

export default handler
