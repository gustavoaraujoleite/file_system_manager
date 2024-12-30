# **File System Manager**

File management application project that allows users to upload, view and delete files. This is a personal project built with a Node.js backend, Next.js frontend and employs Docker for containerized development.

---



## **Getting Started**

Follow these steps to set up and run the application locally.


## **Prerequisites**
- [Node.js](https://nodejs.org/) (v18+ recommended)
- [Docker](https://www.docker.com/)
- [Git](https://git-scm.com/)


## **Running the Application**
### Using Docker (Recommended)

1. Build and start the Docker containers:
   ```bash
   docker-compose up --build


2. Access the application:

Open your favorite browser or API Platform (Postman/Insomnia) and make a GET request call for: http://localhost:8080

The server should then return a "Succesfull" message.

## **Without Docker**

### Backend

1. Navigate to **server** directory:
    ```bash
    cd server

2. Install dependencies:
    ```bash
    npm install

3. Start backend server:
    ```bash
    npm run dev

### Frontend

1. Navigate to **frontend** directory:
    ```bash
    cd frontend

2. Install dependencies:
    ```bash
    npm install

3. Start frontend application:
    ```bash
    npm run dev


## **Project Structure**
```bash
root/
├── server/             # Backend code (Node.js)
├── frontend/           # Frontend code (Next.js)
├── docker-compose.yaml # Docker configuration
└── README.md           # Project documentation

```

## **Environment Variables**

