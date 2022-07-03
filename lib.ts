import * as github from '@pulumi/github'

export const team = (key: string, options: github.TeamArgs) => {
  const team = new github.Team(key, { privacy: 'closed', ...options })
  return (username: string) =>
    new github.TeamMembership(`team-${key}-membership-for-${username}`, {
      teamId: team.id,
      username,
    })
}

export const creator = (username: string) =>
  new github.TeamMembership(`membership-for-${username}`, {
    teamId: '6011674',
    username,
  })
