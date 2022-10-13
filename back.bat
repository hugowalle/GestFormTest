@echo off
cd backend/src
uvicorn listDivider:app --reload --port 8000