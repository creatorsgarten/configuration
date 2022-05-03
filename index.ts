import * as github from "@pulumi/github";

new github.TeamMembership("membership-for-heypoom", {
  teamId: "6011674",
  username: "heypoom",
});
new github.TeamMembership("membership-for-pankace", {
  teamId: "6011674",
  username: "pankace",
});
