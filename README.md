# Full-Stack Docker Application: Node.js, React, MongoDB & Nginx
<img width="1890" height="1010" alt="Screenshot 2025-08-11 220424" src="https://github.com/user-attachments/assets/c033705f-cf99-4b13-8368-dcef832c97f8" />


This repository serves as a complete, end-to-end example of a full-stack application containerized with Docker. It demonstrates a modern development workflow, showcasing how to build and orchestrate separate frontend, backend, and database services using Docker and Docker Compose.

The project is a simple "Message Board" where users can post messages that are stored in a database and displayed in real-time.

---

## Features

-   **Backend API:** A Node.js/Express server connected to a MongoDB database.
-   **Frontend Client:** A React application for the user interface.
-   **Containerized Services:** Each part of the stack (backend, frontend, database) runs in its own isolated Docker container.
-   **Production-Ready Frontend:** The React app is served via a lightweight, production-grade Nginx server.
-   **Multi-Stage Docker Builds:** The frontend `Dockerfile` uses a multi-stage build to create a small and secure final image.
-   **Orchestration:** Docker Compose is used to define and manage the multi-container application with a single command.
-   **Data Persistence:** A Docker named volume is used to persist MongoDB data, ensuring that messages are not lost when containers are stopped or removed.
-   **Developer-Friendly:** The backend setup includes a volume mount for live code reloading during development.

---

## Tech Stack & Architecture

The application is composed of three main services orchestrated by Docker Compose.

<img width="2048" height="2048" alt="Gemini_Generated_Image_40x8r140x8r140x8" src="https://github.com/user-attachments/assets/c703a599-6ab7-4f1f-bc1c-32883b7cb164" />

_**(Note: Replace this with a link to your architecture diagram if you have one!)**_

-   **Frontend:**
    -   React.js
    -   Nginx (as a reverse proxy and for serving static files)
-   **Backend:**
    -   Node.js
    -   Express.js
    -   Mongoose
-   **Database:**
    -   MongoDB
-   **DevOps / Containerization:**
    -   Docker
    -   Docker Compose

### How It Works

1.  The user accesses the application at `http://localhost:3000`.
2.  The request hits the **Nginx container**, which serves the static React application files.
3.  When the React app makes an API call (e.g., to `/api/messages`), the request goes back to the **Nginx container**.
4.  The `location /api` block in the Nginx configuration acts as a reverse proxy, forwarding the API request to the **Backend (Node.js) container** at `http://backend:5000`.
5.  The **Backend container** processes the request, interacts with the **MongoDB container** to fetch or save data.
6.  The data flows back through the same path to the user's browser.

---

## Prerequisites

Before you begin, ensure you have the following installed on your machine:
-   [Docker Desktop](https://www.docker.com/products/docker-desktop) (which includes Docker and Docker Compose)
-   [Git](https://git-scm.com/)

_Node.js and npm are **not** required on your local machine to run the project, as they are used inside the Docker containers._

---

## 🚀 Getting Started

Follow these steps to get the application up and running.

### Clone the Repository

Replace `your-username` with your actual GitHub username.

```bash
git clone https://github.com/Consultantsrihari/fullstack-docker-application.git
cd fullstack-docker-application
docker-compose up --build
docker-compose down
docker-compose down -v
---

