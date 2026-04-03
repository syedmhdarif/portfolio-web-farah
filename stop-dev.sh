#!/bin/bash
echo "🔍 Looking for Vite dev server..."
VITE_PID=$(lsof -ti:5173 2>/dev/null)

if [ -n "$VITE_PID" ]; then
  echo "🛑 Stopping Vite dev server (PID: $VITE_PID)..."
  kill $VITE_PID 2>/dev/null
  echo "✅ Dev server stopped."
else
  echo "ℹ️  No Vite server is running on port 5173."
fi
