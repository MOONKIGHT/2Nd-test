import { promises } from 'fs'
import { join } from 'path'
import { xpRange } from '../lib/levelling.js'
let tags = {
  'main': 'Main',
}
const defaultMenu = {
  before: `
╭─「 %me 」
│ 👋🏻 Hi, %name!
│
│
│
│ 𝙍𝙐𝙉 𝙏𝙄𝙈𝙀: *%uptime (%muptime)*
╰────
                   
                    
   ⢀ ⠘⢑⠡⡀           
      ⢲⣶⣿⣦⡀         
    ⠐⢠⣿⣿⣿⣿⣷⣀        
     ⢸⣿⣿⣿⣿⣿⣿⣧       
    ⢰⣿⣿⣿⣿⣿⣿⣿⣷⣶      
    ⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣆     
    ⢹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣄⡀   
         ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ ᴍᴅ   
    ⢀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡧   
     ⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇   
     ⠘⣿⣿⣿⣿⣿⣿⣿⣿⠿⠋    
      ⠙⠿⣿⣿⠿⠛⠋⠁      
                    

━━━━━━━━━
𝙈𝘼𝙄𝙉 𝙈𝙀𝙉𝙐
ʜᴇʟᴘ
ᴊᴏɪɴ
ᴍᴇɴᴜ
ʜᴇʟᴘ
ᴘᴀɴᴇʟ
━━━━━━━━━━━
𝙎𝙏𝙄𝘾𝙆𝙀𝙍 𝙈𝙀𝙉𝙐
sᴍᴇᴍᴇ (ᴇx:.sᴍᴇᴍᴇ ɪᴍᴀsʜ|ɴɪᴅᴜsʜᴀ)
ᴀᴛᴛᴘ (ᴛᴇxᴛ)
ɢᴇᴛᴇxɪғ
sᴛɪᴄᴋᴇʀ (ᴄᴀᴘᴛɪᴏɴ|ᴍᴇɴᴛɪᴏɴ ᴍᴇᴅɪᴀ)
sᴛɪᴋᴇʀ (ᴜʀʟ)
sᴛɪᴄᴋᴇʀɢɪғ (ᴄᴀᴘᴛɪᴏɴ|ᴍᴇɴᴛɪᴏɴ ᴍᴇᴅɪᴀ)
sᴛɪᴋᴇʀɢɪғ (ᴜʀʟ)
sᴛɪᴄᴋᴇʀʟɪɴᴇ (ᴜʀʟ)
ᴛᴏɪᴍɢ (ᴍᴇɴᴛɪᴏɴ
ᴛᴏɪᴍɢ2 (ᴍᴇɴᴛɪᴏɴ)
ᴛᴛᴘ (ᴛᴇxᴛ)
ᴡᴍ (ᴘᴀᴄᴋɴᴀᴍᴇ|ᴀᴜᴛʜᴏʀ)
━━━━━━━━━━
𝙂𝙍𝙊𝙐𝙋 𝙈𝙀𝙉𝙐
ᴇɴᴀʙʟᴇ
ᴅᴇᴀᴀʙʟᴇ
ɪɴғᴏɢʀᴏᴜᴘ
ʟɪɴᴋɢʀᴏᴜᴘ
ʜɪᴅᴇᴛᴀɢ
ɢʀᴏᴜᴘ (ᴏᴘᴇɴ/ᴄʟᴏsᴇ)
ᴀᴅᴅ (ᴜsᴇʀ)
ʙᴀɴᴄʜᴀ
ᴋɪᴄᴋ (ᴜsᴇʀ)
ʟᴇᴀᴠᴇɢᴄ
ʟᴇᴀᴠᴇɢᴄᴀʟʟ
ᴛᴀɢᴀʟʟ
ᴜɴʙᴀɴᴄʜᴀᴛ
━━━━━━━━━━━━
𝙄𝙉𝙏𝙀𝙍𝙉𝙀𝙏 𝙈𝙀𝙉𝙐
ɢᴏᴏɢʟᴇ
ɢᴏᴏɢʟᴇғ
ɢɪᴍᴀɢᴇ
ᴘɪɴᴛᴇʀᴇsᴛ
ғᴇᴛᴄʜ
ɢᴇᴛ
ᴡɪᴋɪᴘᴇᴅɪᴀ
━━━━━━━━━━━━━
𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿 𝙈𝙀𝙉𝙐
ғᴀᴄᴇʙᴏᴏᴋ
ɢɪᴛᴄʟᴏɴᴇ
ɪɢ
ɪɢsᴛᴀʟᴋ
ᴛɪᴋᴛᴏᴋ
ᴡᴀʟʟᴘᴀᴘᴇʀ
ᴡᴀʟʟᴘᴀᴘᴇʀ2
ᴘʟᴀʏ
ʏᴛ
ʏᴛs
ʏᴛᴍᴘ3
ʏᴛᴍᴘ4
ʏᴛᴀ
ʏᴛᴠ
━━━━━━━━━
𝙏𝙊𝙊𝙇 𝙈𝙀𝙉𝙐
ɢɪᴍᴀɢᴇ
ɪᴍᴀɢᴇ
ᴘɪɴɢ
sᴘᴇᴇᴅ
ᴅᴇʟ
ʀᴇᴀᴅᴍᴏʀᴇ
ʀᴇᴀᴅᴠɪᴡᴇᴏᴍᴄᴇ
sᴛʏʟᴇ
ᴛᴛs
ʏᴛs
━━━━━━━━━━
𝙊𝙒𝙉𝙀𝙍 𝙈𝙀𝙉𝙐
ʙʀᴏᴀᴅᴄᴀsᴛ
ʙᴄ
ʙᴄᴄʜᴀᴛs
ʙᴄɢᴄ
ᴇɴᴀʙʟᴇ
ᴅᴇsᴀʙʟᴇ
ʙᴀɴᴄʜᴀᴛ
ʙᴀɴ
ʟᴇᴀᴠᴇɢᴄ
ʟᴇᴀᴠᴇɢᴄᴀʟʟ
ᴜɴʙᴀɴ
━━━━━━━━━━
𝙄𝙉𝙁𝙊 𝙈𝙀𝙉𝙐
ᴏᴡɴᴇʀ
ᴄʀᴇᴀᴛᴏʀ
ᴅᴏɴᴀsɪ
ᴘɪɴɢ
sᴘᴇᴇᴅ
━━━━━━━━━━
𝘼𝙐𝘿𝙄𝙊 𝙈𝙀𝙉𝙐
ᴛᴏᴍᴘ3
ᴛᴏᴠɴ
ʙᴀss
ʙʟᴏᴡɴ
ᴅᴇᴇᴘ
ᴇᴀʀʀᴀᴘᴇ
ғᴀsᴛ
ғᴀᴛ
ɴɪɢʜᴛᴄᴏʀᴇ
ʀᴇᴠᴇʀsᴇ
ʀᴏʙᴏᴛ
sʟᴏᴡ
sᴍᴏᴏᴛʜ
%readmore`.trimStart(),
  header: '.',
  body: '.',
  footer: '.',
  after: `
*𝙞𝙢𝙖𝙨𝙃*
${'```𝙫31 𝙧𝙚𝙘𝙤𝙙𝙚```'}
`,
}
let handler = async (m, { conn, usedPrefix: _p, __dirname }) => {
  try {
    let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
    let { exp, limit, level, role } = global.db.data.users[m.sender]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let name = await conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long', timeZone: 'Asia/Jakarta' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      timeZone: 'Asia/Jakarta'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      timeZone: 'Asia/Jakarta'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    for (let plugin of help)
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!(tag in tags) && tag) tags[tag] = tag
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Powered by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%islimit/g, menu.limit ? '(Limit)' : '')
                .replace(/%isPremium/g, menu.premium ? '(Premium)' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    let text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.getName(conn.user.jid),
      npmname: _package.name,
      npmdesc: _package.description,
      version: _package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
      level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    const pp = await conn.profilePictureUrl(conn.user.jid, 'image').catch(_ => './src/avatar_contact.png')
    conn.sendHydrated(m.chat, text.trim(), author, pp, 'https://chat.whatsapp.com/HYVx0YL6dTz7SeVzQ1Lak5', 'GROUP', owner[0][0], 'Owner', [
      ['𝙎𝘾𝙍𝙄𝙋𝙏', '/sc'],
      ['𝙂𝙍𝙊𝙐𝙋', '/alive'],
      ['𝙊𝙒𝙉𝙀𝙍', '/owner']
    ], m, { asLocation: 1 })
  } catch (e) {
    conn.reply(m.chat, ' sedang error', m)
    throw e
  }
}
handler.help = ['menu', 'help', 'panel']
handler.tags = ['main']
handler.command = /^(menu|m|help|\?)$/i

handler.exp = 3

export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
