#!/bin/bash -e
# From https://github.com/fresh-app/factory/blob/main/sync.sh
export GIT_COMMITTER_NAME="creatorsgarten[bot]"
export GIT_AUTHOR_NAME="creatorsgarten[bot]"
export GIT_COMMITTER_EMAIL="creatorsgarten[bot]@users.noreply.github.com"
export GIT_AUTHOR_EMAIL="creatorsgarten[bot]@users.noreply.github.com"
cd stack
git add --all && git commit -m "Update stack" || echo "Nothing to commit"
git push