#!/bin/bash

# Standalone script to run pre-commit checks manually
# This can be used for testing or running checks outside of git hooks

set -e  # Exit on any error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Get the root directory of the project
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
CLIENT_DIR="${ROOT_DIR}/Client"
SERVER_DIR="${ROOT_DIR}/Server"

echo "🔍 Running pre-commit checks..."
echo ""

# Check if Client directory exists
if [ ! -d "$CLIENT_DIR" ]; then
  echo -e "${RED}❌ Error: Client directory not found at ${CLIENT_DIR}${NC}"
  exit 1
fi

# Check if Server directory exists
if [ ! -d "$SERVER_DIR" ]; then
  echo -e "${RED}❌ Error: Server directory not found at ${SERVER_DIR}${NC}"
  exit 1
fi

# Step 1: Run lint in Client folder
echo -e "${YELLOW}📋 Step 1: Running ESLint in Client folder...${NC}"
cd "$CLIENT_DIR"

if ! npm run lint; then
  echo -e "${RED}❌ ESLint failed in Client folder!${NC}"
  echo ""
  echo -e "${RED}Please fix all lint errors before committing.${NC}"
  echo -e "${YELLOW}Common issues to check:${NC}"
  echo "  - Use of 'any' type (use proper types instead)"
  echo "  - Unused variables (remove unused variables)"
  exit 1
fi

echo -e "${GREEN}✅ Client lint check passed!${NC}"
echo ""

# Step 2: Run build in Server folder
echo -e "${YELLOW}🔨 Step 2: Running build in Server folder...${NC}"
cd "$SERVER_DIR"

if ! npm run build; then
  echo -e "${RED}❌ Build failed in Server folder!${NC}"
  echo ""
  echo -e "${RED}Please fix all build errors before committing.${NC}"
  exit 1
fi

echo -e "${GREEN}✅ Server build check passed!${NC}"
echo ""

echo -e "${GREEN}✨ All pre-commit checks passed!${NC}"
exit 0

