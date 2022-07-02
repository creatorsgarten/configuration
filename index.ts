import * as github from '@pulumi/github'

const creator = (username: string) =>
  new github.TeamMembership(`membership-for-${username}`, {
    teamId: '6011674',
    username,
  })

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
