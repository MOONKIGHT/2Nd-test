import { youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper';
let handler = async (m, { conn, args, isPrems, isOwner }) => {
  if (!args || !args[0]) throw 'Url?'
  let { thumbnail, video, title } = await youtubedl(args[0])
      .catch(async () => await youtubedlv2(args[0]))
  let link = await video['480p'].download()
  const isY = /y(es)/gi.test(args[1])
  const limitedSize = (isPrems || isOwner ? 99 : 70) * 1024
  let isLimit = limitedSize < video['360p'].fileSize
  if (!isY) await conn.sendFile(m.chat, thumbnail, 'thumbnail.jpg', `
*𝙏𝙄𝙏𝙀𝙇:* ${title}
*𝙎𝙄𝙕𝙀:* ${video['480p'].fileSizeH}

*480P DOWNLOADER*
`.trim(), m)
if (!isLimit) await conn.sendFile(m.chat, link, title + '.mp3', `
*𝙏𝙄𝙏𝙀𝙇:* ${title}
*🗎 𝙎𝙄𝙕𝙀:* ${video['480p'].fileSizeH}
*480P DOWNLOADER*
`.trim(), m, null, {
  asDocument: 0
})
}
handler.help = ['hd', 'v'].map(v => 'yd' + v + ` <url> <without message>`)
handler.tags = ['downloader']
handler.command = /^yd(480|480p)?$/i
handler.limit = false
handler.exp = 0


export default handler

