let handler = async (m, { conn }) => {
let ppown = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
let teksbio = `*───────[ BIODATA OWNER ]───────*
*💌 Nama* : 𝚅𝙴𝙽-𝙱𝙾𝚃𝚉
*✉️ Nama RL* : levi
*♂️ Gender* : Laki - laki
*🕋 Agama* : Islam
*⏰ Tanggal lahir* : 7 desember 2007
*🎨 Umur* : 14
*🧮 Kelas* : 7
*🧩 Hobby* : Nonton Hanime, Chatting, Recode script bot
*💬 Sifat* : Idiot, Tidak Ramah, Kanjut, Prik, Pedofil
*🗺️ Tinggal* : Indo, berau, kaltim, suaran
*❤️ Suka* : warnah kuning & biru, Hanime, waifu, loli, trap, furry, kucing
*💔 Benci* : autis, anak epep, seleb

*───────[ SOSIAL MEDIA ]───────*
*📷 instagran* : https://instagram.com/imleviofc?igshid=YmMyMTA2M2Y=
*🇫  Facebook* : https://www.facebook.com/erdiansyah.teddy.3
*🏮 Tiktok* : https://www.tiktok.com/@leviatnansyah?_t=8UnaVTcn97p&_r=1
*🐈 Github:* https://github.com/ImleviOfc

`
conn.sendHydrated(m.chat, teksbio, wm, ppown, "wa.me/" + nomorown, "💬 ᴄʜᴀᴛs", null,null, [["ᴅᴏɴᴀsɪ", '.donasi'], [null, null],[null,null]], m)
}
handler.help = ['bioowner']
handler.tags = ['info']
handler.command = /^(bioowner)$/i

export default handler
