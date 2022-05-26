import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { text }) => {
  if (!text) throw 'Text?'
  const { video, channel } = await youtubeSearch(text)
  let teks = [...video, ...channel].map(v => {
    switch (v.type) {
      case 'video': return `
📌 *${v.title}* (${v.url})
⌚ Duration: ${v.durationH}
⏲️ Uploaded ${v.publishedTime}
👁️ ${v.view} views
      `.trim()
      case 'channel': return `
📌 *${v.channelName}* (${v.url})
🧑‍🤝‍🧑 _${v.subscriberH} (${v.subscriber}) Subscriber_
🎥 ${v.videoCount} video
`.trim()
    }
  }).filter(v => v).join('\n\n========================\n\n')
  m.reply(teks)
}
handler.help = ['', 'earch'].map(v => 'yds' + v + ' <pencarian>')
handler.tags = ['tools']
handler.command = /^yds(earch)?$/i

export default handler
