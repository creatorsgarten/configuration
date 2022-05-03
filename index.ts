import * as github from '@pulumi/github'

const creator = (username: string) =>
  new github.TeamMembership(`membership-for-${username}`, {
    teamId: '6011674',
    username,
  })

creator('betich')
creator('dtinth')
creator('heypoom')
creator('pankace')
