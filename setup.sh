#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}Setting up your portfolio website development environment...${NC}"

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "Node.js is not installed. Please install Node.js and try again."
    exit 1
fi

# Install dependencies
echo -e "${BLUE}Installing dependencies...${NC}"
npm install

# Create a placeholder resume file if it doesn't exist
if [ ! -f "Isabel_resume.pdf" ]; then
    echo -e "${BLUE}Creating a placeholder resume file...${NC}"
    echo "This is a placeholder resume file. Replace with your actual resume." > Isabel_resume.pdf
fi

echo -e "${GREEN}Setup complete!${NC}"
echo -e "${GREEN}You can now start the development server with:${NC}"
echo -e "${GREEN}npm run dev${NC}"

# Ask if the user wants to start the dev server now
read -p "Do you want to start the development server now? (y/n) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo -e "${BLUE}Starting development server...${NC}"
    npm run dev
fi 