import { creator, grantAdmin, team } from './lib'

creator('betich')
creator('chayapatr')
creator('dtinth')
creator('heypoom')
creator('msp5382')
creator('pankace')
creator('pp3times')
creator('PromptJS19')
creator('rayriffy')
creator('SaltyAom')

const websiteMaintainer = team('website', {
  name: 'Website',
  description: 'Website maintainer',
})
websiteMaintainer('dtinth')
websiteMaintainer('heypoom')
websiteMaintainer('chayapatr')
grantAdmin('creatorsgarten.org', [websiteMaintainer])
