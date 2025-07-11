import { creator, grantAdmin, grantWriteAccess, team } from './lib'

// If you participated in our events and consider yourself a creator,
// feel free to add your username to the list below and be invited into
// the creatorsgarten organization.
//
// Once you are invited, please accept the invitation within 7 days,
// otherwise the invitation will expire.
//
// Once you are a member, you can go to the member list page at
// <https://github.com/orgs/creatorsgarten/people> and change the
// membership visibility to "Public." This will add the Creatorsgarten
// logo to your GitHub profile.
//
// As a member, you can also create Public and Private repositories
// in this organization when you work on related projects.
//
// Note that adding yourself to this list here doesn’t automatically
// grant you access to extra repositories beyond what you currently have
// access to. To access certain repositories, you must be a part of the
// respective team. The list of teams and their members are below this
// list.
//
// PLEASE KEEP THIS LIST SORTED ALPHABETICALLY.
//
creator('1tpp')
creator('AmiPhaphadha')
creator('Anriryitira')
creator('antronic')
creator('badgooooor')
creator('balabeltmimi')
creator('betich')
creator('C0M3TZZ')
creator('chayapatr')
creator('DeltaThetaS')
creator('DEmayonnaise')
creator('DrowningToast')
creator('dtinth')
creator('dtinth-bot')
creator('FloatKasemtan')
creator('GGolfz')
creator('Gusb3ll')
creator('heypoom')
creator('hunt')
creator('IssadaornNk')
creator('Issawat')
creator('JajarKo')
creator('jukbot')
creator('kana2011th')
creator('Kittonn')
creator('kunnooon')
creator('Kuuuuuuuu')
creator('Leomotors')
creator('lebrancconvas')
creator('mikkipastel')
creator('Mixko50')
creator('msp5382')
creator('NakZaa')
creator('narze')
creator('nattpapat')
creator('ong22280')
creator('pankace')
creator('papatsry-ok')
creator('pattvira')
creator('peamz4')
creator('PhantipK')
creator('pp3times')
creator('PromptJS19')
creator('Qu1etboy')
creator('rayriffy')
creator('richeyphu')
creator('runyasak')
creator('SaltyAom')
creator('saltyaom-engine')
creator('siravijbb')
creator('sleepntsheep')
creator('tao-Isaman')
creator('tententgc')
creator('thitiwat-t')
creator('Thunyatorn')
creator('tinarskii')
creator('touchvarit')
creator('varkaria')
creator('wasdee')
creator('xb1g')
creator('wit03')
creator('ptteerat')
creator('nantipatsoften')

// Website team
const websiteMaintainer = team('website', {
  name: 'Website',
  description: 'Website maintainers',
})
websiteMaintainer('betich')
websiteMaintainer('dtinth')
websiteMaintainer('heypoom')
websiteMaintainer('rayriffy')
websiteMaintainer('chayapatr')
websiteMaintainer('SaltyAom')
websiteMaintainer('wit03')
grantAdmin('creatorsgarten.org', websiteMaintainer)
grantAdmin('grtn.org', websiteMaintainer)

// Event organizers can manage the discussions repository.
const eventOrganizer = team('organizers', {
  name: 'Event organizers',
  description: 'Event organizers',
})
eventOrganizer('betich')
eventOrganizer('chayapatr')
eventOrganizer('dtinth')
eventOrganizer('heypoom')
eventOrganizer('JajarKo')
eventOrganizer('narze')
eventOrganizer('PhantipK')
eventOrganizer('rayriffy')
eventOrganizer('SaltyAom')
eventOrganizer('ptteerat')
grantWriteAccess('discussions', eventOrganizer)

// Hacktoberfest Museum maintainers
const hacktoberfestMuseumMaintainer = team('hacktoberfestmuseum', {
  name: 'Hacktoberfest Museum',
  description: 'Hacktoberfest museum maintainers',
})
hacktoberfestMuseumMaintainer('Gusb3ll')
hacktoberfestMuseumMaintainer('heypoom')
hacktoberfestMuseumMaintainer('intaniger')
hacktoberfestMuseumMaintainer('Leomotors')
hacktoberfestMuseumMaintainer('ryanrw')
hacktoberfestMuseumMaintainer('runyasak')
hacktoberfestMuseumMaintainer('siravijbb')
hacktoberfestMuseumMaintainer('tinarskii')
grantWriteAccess('hacktoberfest-museum', hacktoberfestMuseumMaintainer)

// VOD team
const vodTeam = team('vod', {
  name: 'VOD team',
  description: 'Videos on demand team',
})
vodTeam('dtinth')
vodTeam('rayriffy')
vodTeam('wiput1999')
grantWriteAccess('videos', vodTeam)

// bosf23 team
const bosf23 = team('bosf23', {
  name: 'BOSF23',
  description: 'Bangkok Open Source Festival 2023',
})
bosf23('bombnp')
bosf23('chaya-tan')
bosf23('xb1g')
grantWriteAccess('open.source.in.th', bosf23)

// Kaogeek Discord bot team
const kaogeek = team('kaogeek', {
  name: 'Kaogeek bot admins',
  description: 'Kao.Geek Discord bot admins',
})
const kaogeekDev = team('kaogeek-dev', {
  name: 'Kaogeek bot developers',
  description: 'Kao.Geek Discord bot developers',
})
kaogeek('Gusb3ll')
kaogeek('LagSeeN')
kaogeek('Leomotors')
kaogeek('masuru-aomsin')
kaogeek('narze')
kaogeek('opecgame')
kaogeek('quarkhadron')
kaogeek('SaltyAom')
kaogeek('ST4RCHASER')
kaogeek('wiput1999')
grantAdmin('kaogeek-discord-bot', kaogeek)
kaogeekDev('beam41')
kaogeekDev('buskun')
kaogeekDev('samithiwat')
grantWriteAccess('kaogeek-discord-bot', kaogeekDev)
