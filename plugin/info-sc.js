import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)

let str = `https://chat.whatsapp.com/CElgl37YTIJKzugfUYIwX6`
conn.sendButtonDoc(m.chat, str, wm, '..','Bilek', ftextt, m)
}
handler.command = handler.help = ['gcbot']
handler.tags = ['info']

export default handler
