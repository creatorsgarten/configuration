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
creator('betich')
creator('C0M3TZZ')
creator('chayapatr')
creator('DEmayonnaise')
creator('DrowningToast')
creator('dtinth')
creator('dtinth-bot')
creator('FloatKasemtan')
creator('GGolfz')
creator('Gusb3ll')
creator('heypoom')
creator('Issawat')
creator('kana2011th')
creator('Kittonn')
creator('Kuuuuuuuu')
creator('Leomotors')
creator('mikkipastel')
creator('Mixko50')
creator('msp5382')
creator('narze')
creator('pankace')
creator('pp3times')
creator('PromptJS19')
creator('rayriffy')
creator('richeyphu')
creator('SaltyAom')
creator('sleepntsheep')
creator('tao-Isaman')
creator('tententgc')
creator('thitiwat-t')
creator('tinarskii')
creator('varkaria')
creator('balabeltmimi')
creator('lebrancconvas')
creator('runyasak')
creator('siravijbb')

// Website team
const websiteMaintainer = team('website', {
  name: 'Website',
  description: 'Website maintainers',
})
websiteMaintainer('dtinth')
websiteMaintainer('heypoom')
websiteMaintainer('chayapatr')
grantAdmin('creatorsgarten.org', websiteMaintainer)

// Event organizers can manage the discussions repository.
const eventOrganizer = team('organizers', {
  name: 'Event organizers',
  description: 'Event organizers',
})
eventOrganizer('betich')
eventOrganizer('chayapatr')
eventOrganizer('dtinth')
eventOrganizer('heypoom')
eventOrganizer('narze')
eventOrganizer('rayriffy')
eventOrganizer('SaltyAom')
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
