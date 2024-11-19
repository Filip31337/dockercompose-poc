# CHANGELOG

## [1.0.0] - 2024-08-01
- Initial setup
## [1.0.1] - 2024-11-18
- Readme update
- Add future improvements
## [1.0.1] - 2024-11-19
- Readme update
- Add future improvements

## Preparing for the job

### Backend (Spring Boot + Oracle DB)
- Spring Boot Documentation: https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/
- Spring Data JPA Documentation: https://docs.spring.io/spring-data/jpa/docs/current/reference/html/
- Oracle JDBC Driver Documentation: https://www.oracle.com/database/technologies/appdev/jdbc.html
- Lombok Documentation: https://projectlombok.org/
- TLS v1.2 Implementation in Spring Boot: https://docs.spring.io/spring-boot/docs/current/reference/html/howto.html#howto-configure-tls
- Tomcat Configuration for SSL/TLS: https://tomcat.apache.org/tomcat-10.0-doc/ssl-howto.html
### Frontend (React + Vite)
- React Documentation: https://react.dev/
- Vite Documentation: https://vitejs.dev/guide/
- React Hook Form Documentation: https://react-hook-form.com/get-started
- Zod Documentation: https://zod.dev/
- ShadCN/UI Documentation: https://ui.shadcn.dev/docs
- TanStack Query (React Query) Documentation: https://tanstack.com/query/v5/docs/react/overview
### Docker and DevOps
- Docker Documentation: https://docs.docker.com/
- Docker Compose Documentation: https://docs.docker.com/compose/

## Initial Setup
- Set up a multi-module project structure for backend (Spring Boot), frontend (React), and database (Oracle).
- Configured `pom.xml` for Spring Boot project with necessary dependencies:
  - Spring Boot Starter Web, Data JPA.
  - Oracle JDBC driver.
  - Lombok for reducing boilerplate code.

## Docker Integration
- Created Dockerfiles for:
  - Backend: Configured Tomcat to deploy the Spring Boot application with SSL support.
  - Frontend: Built and served the React application using Nginx.
  - Database: Used `gvenzl/oracle-free:23-slim` image with custom initialization scripts.
- Added `docker-compose.yml` to orchestrate the three services.

## Frontend Development
- Set up React application using Vite for fast builds and better development experience.
- Installed necessary dependencies including React Router, React Hook Form, Zod, TailwindCSS, Shadcn UI and Tanstack Query.
- Configured TypeScript and ESLint for static type checking and linting.

## Backend Development
- Developed RESTful APIs in Spring Boot for handling regions and countries.
- Configured Oracle DB connection with Spring Data JPA.
- Implemented CRUD operations using JPA for all entities using DTO.
- Create custom mapping form entities to DTO to avoid using MapStruct or simmilar libraries.

## Debugging & Testing
- Encountered and resolved CORS issues between frontend and backend during development.
- Added validation for form inputs using React Hook Form and Zod.
- Configured SSL for secure communication on the backend.
- Tested the full stack by running the application using Docker Compose and verified interactions between the frontend, backend, and database.
- Fixed bugs found during edit and create operations using slf4j logging to identify root cause.

## Deployment
- Deployed the application using Docker Compose.
- Verified the integration of all components and ensured the application crud operations runs smoothly.

## Future Improvements
- Add dev profile with mock data to enable npm run dev development.
- Implement CI/CD pipeline for automated testing and deployment.
- Add more comprehensive test cases, including integration tests.
- Explore scaling options using Docker Swarm or Kubernetes.
- Add maven wrapper and node wrapper so only docker is required for run
- Utilise Vite Dev server for faster development
