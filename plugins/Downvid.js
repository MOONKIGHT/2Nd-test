import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `Use example ${usedPrefix}${command} adaraya agamaki`
  let vid = (await youtubeSearch(text)).video[0]
  if (!vid) throw 'Video/Audio Cant download🥲'
  let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
  const url = 'https://www.youtube.com/watch?v=' + videoId
  await conn.sendHydrated(m.chat, `
┏━━━━━━━ 

 *---𝘝𝘐𝘋𝘌𝘖 DOWNLOADER---*

▷ *𝙏𝙄𝙏𝙇𝙀      :* ${title}
▷ *𝙑𝙄𝘿 𝙐𝙍𝙇   :* ${url}
▷ *𝙑𝙄𝘿 𝘿𝙄𝙎   :* ${description}
▷ *𝙋𝙐𝘽𝙇𝙄𝙎𝙃  :* ${publishedTime}
▷ *𝘿𝙐𝙍𝘼𝙏𝙄𝙊𝘕 :* ${durationH}
▷ *𝙑𝙄𝙒𝙀𝙎    :* ${viewH}

┗━━━━━━━━
  `.trim(), author, thumbnail, 'https://chat.whatsapp.com/HYVx0YL6dTz7SeVzQ1Lak5', 'SCRIPT', owner[0][0], 'Owner', [
    ['𝚅𝙸𝙳𝙴𝙾 720𝙿', `${usedPrefix}yd720 ${url}`],
    ['𝚅𝙸𝙳𝙴𝙾 480𝙿', `${usedPrefix}yd480 ${url}`],
    ['𝚅𝙸𝙳𝙴𝙾 360𝙿', `${usedPrefix}yd360 ${url}`]
  ], m, { asLocation: 1 })
}
handler.help = ['play', 'yt' ,'song'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^downvid|downvideo|viddown|vdown?$/i

handler.exp = 0
handler.limit = false

export default handler
