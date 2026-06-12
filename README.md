# Yell

A Yelp-inspired business review platform. Browse local restaurants, leave reviews with star ratings, search by category, and view business hours and locations on Google Maps.

## Features

- **Businesses** — Create, edit, delete, and browse business listings
- **Reviews** — Star ratings and written reviews for any business
- **Categories** — Filter businesses by cuisine type (vegan, asian, mexican, etc.)
- **Search** — Find businesses by name, category, or open status
- **Google Maps** — Interactive map on each business page
- **Hours** — Add and edit business operating hours

## Tech Stack

| Layer | Tech |
|-------|------|
| Frontend | React 17, Redux, React Router |
| Backend | Flask, SQLAlchemy, Flask-Login |
| Database | PostgreSQL (Neon) |
| Maps | Google Maps API |
| Hosting | Render |

## Local Development

```bash
# Backend
pip install -r requirements.txt
flask db upgrade
flask seed all
flask run

# Frontend (separate terminal)
cd react-app
npm install
npm start
```

Create a `.env` file in the root directory (see `.env.example`).

## Deploy to Render

1. Create a Neon PostgreSQL database
2. Connect your GitHub repo to Render
3. Set environment variables: `DATABASE_URL`, `SECRET_KEY`, `REACT_APP_GOOGLE_MAPS_KEY`
4. Deploy using the included `render.yaml` blueprint
