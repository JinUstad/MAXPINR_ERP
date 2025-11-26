#!/bin/bash

# Installs the repository's shared git hooks into .git/hooks

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
GIT_DIR="${ROOT_DIR}/.git"
HOOKS_DIR="${GIT_DIR}/hooks"
PRE_COMMIT_TARGET="${HOOKS_DIR}/pre-commit"
PRE_COMMIT_CHECK="${SCRIPT_DIR}/pre-commit-check.sh"

if [ ! -d "$GIT_DIR" ]; then
  echo "❌ This script must be run from inside a git repository (missing .git directory)." >&2
  exit 1
fi

if [ ! -x "$PRE_COMMIT_CHECK" ]; then
  echo "❌ Expected executable script at ${PRE_COMMIT_CHECK}." >&2
  echo "   Make sure the shared pre-commit script exists and is executable." >&2
  exit 1
fi

mkdir -p "$HOOKS_DIR"

cat > "$PRE_COMMIT_TARGET" <<'EOF'
#!/bin/bash
set -e
ROOT_DIR="$(git rev-parse --show-toplevel)"
"${ROOT_DIR}/scripts/pre-commit-check.sh"
EOF

chmod +x "$PRE_COMMIT_TARGET"

echo "✅ Pre-commit hook installed at ${PRE_COMMIT_TARGET}"
echo "   It runs scripts/pre-commit-check.sh on every commit."

