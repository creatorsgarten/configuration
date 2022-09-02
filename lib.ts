import * as github from '@pulumi/github'

/**
 * Invite a GitHub user into the organization.
 * @param username - The username of the user to invite.
 */
export const creator = (username: string) =>
  new github.TeamMembership(`membership-for-${username}`, {
    teamId: '6011674',
    username,
  })

/**
 * Creates a team on the GitHub organization.
 * @param key - A unique key for the team.
 * @param options - The options. Please specify `name` and `description`.
 * @returns An object representing the team.
 */
export const team = (key: string, options: github.TeamArgs): ITeam => {
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

export interface ITeam {
  /**
   * Invite a GitHub user into the team.
   */
  (username: string): github.TeamMembership
  key: string
  team: github.Team
}

/**
 * Grant teams admin rights to a GitHub repository.
 * @param name - The name of the repository.
 * @param t - An object returned by the `team` function.
 * @returns
 */
export const grantAdmin = (
  name: string,
  t: { key: string; team: github.Team },
) =>
  new github.TeamRepository(`team-${t.key}-repo-${name}`, {
    teamId: t.team.id,
    repository: name,
    permission: 'admin',
  })

/**
 * Grant teams write access to a GitHub repository.
 * @param name - The name of the repository.
 * @param t - An object returned by the `team` function.
 * @returns
 */
export const grantWriteAccess = (
  name: string,
  t: { key: string; team: github.Team },
) =>
  new github.TeamRepository(`team-${t.key}-repo-${name}`, {
    teamId: t.team.id,
    repository: name,
    permission: 'push',
  })
