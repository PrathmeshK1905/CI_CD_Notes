# 📘 Cloud Notes — Full Stack CI/CD Deployed App

A cloud-hosted notes application built with **FastAPI, Docker, GitHub Actions CI/CD, and Render**.  
This project demonstrates how a modern full-stack application is built, automated, and deployed to production.

---

## 🚀 Live Demo

- Frontend: https://<your-frontend-url>.onrender.com  
- Backend API Docs: https://<your-backend-url>.onrender.com/docs  

---

## 🏗️ Architecture

Browser
|
Frontend (HTML/CSS/JS via Nginx in Docker)
|
Backend API (FastAPI in Docker)
|
SQLite Database


CI/CD Pipeline:



Git Push
↓
GitHub Actions (CI)
↓
Render Cloud (CD)
↓
Live Website


---

## ✨ Features

- Create, read, update, delete notes
- REST API using FastAPI
- Simple frontend UI
- Dockerized backend and frontend
- GitHub Actions CI pipeline
- Automatic deployment on Render
- HTTPS public URLs

---

## 🛠 Tech Stack

| Layer | Technology |
|-----|-----------|
Backend | FastAPI, SQLAlchemy, SQLite |
Frontend | HTML, CSS, JavaScript |
Containerization | Docker |
CI | GitHub Actions |
CD / Hosting | Render |
Web Server | Nginx |

---

## 📁 Project Structure



CI_CD_Notes/
│
├── backend/
│ ├── main.py
│ ├── models.py
│ ├── schemas.py
│ ├── database.py
│ ├── requirements.txt
│ └── Dockerfile
│
├── frontend/
│ ├── index.html
│ ├── style.css
│ ├── script.js
│ └── Dockerfile
│
└── .github/
└── workflows/
└── docker-ci.yml


---

## 🔍 Backend Explanation

- `models.py` defines database tables.
- `database.py` manages DB connection.
- `schemas.py` validates API input/output.
- `main.py` exposes REST APIs:
  - POST /notes
  - GET /notes
  - PUT /notes/{id}
  - DELETE /notes/{id}
  - GET /health

---

## 🌐 Frontend Explanation

- HTML renders UI.
- JavaScript communicates with backend using fetch().
- Backend URL is configured in `script.js`.

Frontend is served using Nginx inside Docker.

---

## 🐳 Docker

Backend and frontend are containerized separately.

### Backend Dockerfile

```Dockerfile
FROM python:3.10-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]

Frontend Dockerfile
FROM nginx:alpine
COPY . /usr/share/nginx/html

⚙️ CI with GitHub Actions

File: .github/workflows/docker-ci.yml

On every push:

Builds backend Docker image

Builds frontend Docker image

Pushes images to Docker Hub

This ensures the project always builds correctly.

☁️ CD with Render

Render is connected to the GitHub repository.

On every commit:

Pulls latest code

Builds Docker images

Runs containers

Updates the live application automatically

No manual deployment required.

🔁 CI/CD Flow
Code change
↓
Git push
↓
GitHub Actions builds containers
↓
Render redeploys automatically
↓
Live site updates

▶️ Run Locally

Backend:

cd backend
pip install -r requirements.txt
uvicorn main:app --reload


Frontend:

Open frontend/index.html in browser.

🐳 Run With Docker

Backend:

docker build -t cloud-notes-backend .
docker run -p 8000:8000 cloud-notes-backend


Frontend:

docker build -t cloud-notes-frontend .
docker run -p 3000:80 cloud-notes-frontend

🎯 What This Project Shows

Full-stack development

REST API design

Docker containerization

CI automation

Cloud deployment

Continuous delivery

💼 Resume Line

Built and deployed a full-stack notes application using FastAPI, Docker, GitHub Actions CI/CD, and Render cloud platform with automatic deployment on every commit.

🔮 Future Improvements

PostgreSQL database

Authentication system

Search and tags

Kubernetes deployment

Custom domain

Monitoring

👨‍💻 Author

Prathmesh Kulkarni
Cloud & DevOps Learning Project