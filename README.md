# DockerCompose Showcase: Spring Boot + React + Oracle DB

## Project Overview

This is a proof-of-concept (PoC) project aimed at demonstrating the integration of a Spring Boot backend, a React frontend, and an Oracle Database, all managed and deployed using Docker Compose. This project is intended for learning purposes, serving as a guide for developers looking to understand the setup and deployment of a full-stack application using modern technologies and containerization.

## Learning Outcomes

- Full-stack development with Spring Boot and React.
- Dockerizing and deploying applications using Docker and Docker Compose.
- Setting up and using Oracle Database within a Docker container.
- Configuring SSL for secure communication between services.

## Technologies Used
- **Oracle Database**: gvenzl/oracle-free:23-slim image used for the Oracle 23ai Free database.
- **Spring Boot**: Backend REST API, version 3.3.2.
- **Lombok**: Used in Spring Boot for reducing boilerplate code and logging.
- **Tomcat**: Used as the web server / servlet container for the Spring Boot application.
- **React**: Frontend SPA, version 18.3.1, built with Vite.
- **Nginx**: Used as the web server to serve the built React application.
- **Vite**: Build tool used for the React application.
- **TailwindCSS**: Utility-first CSS framework used in the React frontend.
- **TypeScript**: Used in the React frontend for type safety.
- **Shadcn/ui UI**: Shadcn UI is reusable UI components collection
- **Zod**: Schema validation used with React Hook Form for form validation.
- **React Hook Form**: Lightweight forms React library
- **Tanstack Query**: Data fetching React library
- **Eslint / Prettier**: Static analysis tool to standardise and force code style
- **Docker Compose**: Manages multi-container Docker applications.

## Prerequisites

- Docker and Docker Compose installed on your machine.
- Java 17 or higher installed.
- Node.js 14 or higher installed.

## Setup and Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/dockercompose-showcase.git
cd dockercompose-showcase
```

### 2. Backend (Spring Boot)

- Navigate to the backend directory:
```bash
cd backend
```
- Build the Spring Boot application:
```bash
mvn clean install
```
- Backend application will be dockerized: The Dockerfile for the backend uses Tomcat 10 with JDK 17. The application WAR file is deployed to Tomcat, with SSL configured via a keystore.p12 file.

### 3. Frontend (React)
- Navigate to the frontend directory:
```bash
cd ../frontend
```
- Install dependencies:
```bash
npm install
```
- Build the React application:
```bash
npm run build
```
- Frontend application will be dockerized: The Dockerfile for the frontend builds the React app and serves it using Nginx.

### 4. Database (Oracle SQL DB)
- Navigate to the db directory:
```bash
cd ../db
```
- Ensure/check the Dockerfile uses the gvenzl/oracle-free:23-slim image.
- Ensure/check the init_scripts directory is populated with SQL scripts to initialize the database.

### 5. Running the Application with Docker Compose
- Navigate to the root directory of the project:
```bash
cd ../
```

- Build Docker Compose:
```bash
docker-compose --build
```

- Run Docker Compose:
```bash
docker-compose up
```
#### This will:

- Start the Oracle Database.
- Deploy the Spring Boot application to Tomcat.
- Serve the React application with Nginx web server.

### 6. Access the application

Access web application using browser on the following addresses:
- Backend API: https://localhost:8443
- Frontend: http://localhost:3000
- Allow security warning for Self-Signed certificate.

Optionally access BE API using curl or postman:

Using Postman:
- Complete step ```Access web application using browser```
- Make sure to disable ```Enable SSL certificate verification```

Using CURL: 
```bash 
curl --location --request GET 'https://localhost:8443/api/regions'
```
