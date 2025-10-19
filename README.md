# FishSpot — Fishing Spots Mobile App (MVP)

Overview
- FishSpot is a cross-platform mobile app to discover, share, and review fishing spots with regulations, maps, and community features.
- This starter scaffold uses:
  - Frontend: React Native (Expo) + TypeScript
  - Backend: Node.js + Express + TypeScript (simple in-memory store for MVP; swap to PostgreSQL / Prisma when ready)

Repository layout
- frontend/ — Expo React Native app (TypeScript)
- backend/  — Express API (TypeScript)
- README, .gitignore, docker-compose.yml (optional)

Quick start (local)
1. Frontend
   - cd frontend
   - npm install
   - npx expo start

2. Backend
   - cd backend
   - npm install
   - npm run dev
   - Default API: http://localhost:4000/api/spots

Next steps & suggestions
- Replace backend in-memory store with PostgreSQL + Prisma or Sequelize.
- Add authentication (Firebase Auth or Auth0).
- Integrate maps (Mapbox or Google Maps), offline tiles.
- Add image uploads to S3 or Firebase Storage.
- Add weather/tide integrations (OpenWeatherMap, Stormglass).