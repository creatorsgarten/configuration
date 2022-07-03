import * as github from '@pulumi/github'

export const team = (key: string, options: github.TeamArgs) => {
  const team = new github.Team(`team-${key}`, { privacy: 'closed', ...options })
  return Object.assign(
    (username: string) =>
      new github.TeamMembership(`team-${key}-membership-for-${username}`, {
        teamId: team.id,
        username,
      }),
    { key, team },
  )
}

export const creator = (username: string) =>
  new github.TeamMembership(`membership-for-${username}`, {
    teamId: '6011674',
    username,
  })

export const grant = (
  name: string,
  teams: { key: string; team: github.Team }[],
) => {
  return teams.map(
    (t) =>
      new github.TeamRepository(`team-${t.key}-repo-${name}`, {
        teamId: t.team.id,
        repository: name,
        permission: 'pull',
      }),
  )
}
