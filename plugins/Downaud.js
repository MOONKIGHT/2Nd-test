import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `Use example ${usedPrefix}${command} adaraya agamaki`
  let vid = (await youtubeSearch(text)).video[0]
  if (!vid) throw 'Video/Audio 𝘤𝘢𝘯𝘵 𝘥𝘰𝘸𝘯𝘭𝘰𝘢𝘥'
  let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
  const url = 'https://www.youtube.com/watch?v=' + videoId
  await conn.sendHydrated(m.chat, `
┏━━━━━━━ 

 *---AUDIO DOWNLOADER---*

▷ *𝙏𝙄𝙏𝙇𝙀      :* ${title}
▷ *𝙑𝙄𝘿 𝙐𝙍𝙇   :* ${url}
▷ *𝙑𝙄𝘿 𝘿𝙄𝙎   :* ${description}
▷ *𝙋𝙐𝘽𝙇𝙄𝙎𝙃  :* ${publishedTime}
▷ *𝘿𝙐𝙍𝘼𝙏𝙄𝙊𝘕 :* ${durationH}
▷ *𝙑𝙄𝙒𝙀𝙎    :* ${viewH}

┗━━━━━━━━

  `.trim(), author, thumbnail, 'https://chat.whatsapp.com/HYVx0YL6dTz7SeVzQ1Lak5', 'SCRIPT', owner[0][0], 'Owner', [
    ['𝙳𝙾𝙲𝚄𝙼𝙴𝙽𝚃 𝚃𝚈𝙿𝙴', `${usedPrefix}yda ${url}`],
    ['𝙽𝙾𝚁𝙼𝙰𝙻 𝚃𝚈𝙿𝙴', `${usedPrefix}ydan ${url}`]
  ], m, { asLocation: 1 })
}
handler.help = ['play', 'yt' ,'song'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^downaud|downaudio|auddown|adown?$/i

handler.exp = 0
handler.limit = false

export default handler
