#!/bin/bash

if [ ! -d "node_modules" ]; then
  echo "Installing dependencies..."
  npm install
fi

echo "Starting Snake Game..."
npm run dev
