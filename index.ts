import { creator, grantAdmin, team } from './lib'

// If you participated in our events and consider yourself a creator,
// feel free to add your username to the list below and be invited into
// the creatorsgarten organization.
creator('betich')
creator('chayapatr')
creator('C0M3TZZ')
creator('dtinth')
creator('heypoom')
creator('msp5382')
creator('narze')
creator('pankace')
creator('pp3times')
creator('PromptJS19')
creator('rayriffy')
creator('SaltyAom')

// Website team
const websiteMaintainer = team('website', {
  name: 'Website',
  description: 'Website maintainers',
})
websiteMaintainer('dtinth')
websiteMaintainer('heypoom')
websiteMaintainer('chayapatr')
grantAdmin('creatorsgarten.org', websiteMaintainer)
