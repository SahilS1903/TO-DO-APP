# TO-DO List Application

This TO-DO List Application is a simple yet powerful tool to help you manage your tasks efficiently. It allows users to create, update, delete, and view their tasks in a user-friendly interface.

## Features

- User authentication (sign up, login, logout)
- Create, read, update, and delete tasks
- Mark tasks as completed
- Filter tasks by status (all, active, completed)
- Responsive design for mobile and desktop

## Screenshots

### Sign Up Page

![Signup Page](Frontend/assets/Signup.png)

### Login Page

![Login Page](Frontend/assets/Login.png)

### Home Page

![Home Page](Frontend/assets/Home.png)

### Task Creation

![Task Creation](Frontend/assets/addNewTask.png)

### Task List

![Task List](Frontend/assets/Status.png)

## Getting Started

### Prerequisites

- Node.js (version 14 or later)
- MongoDB (latest version)
- Git

### Installation

Follow these steps to set up the project locally.

1. **Clone the repository:**

   ```bash
   git clone https://github.com/SahilS1903/TO-DO.git
   cd TO-DO
   ```

2. **Set up the backend:**

   Navigate to the backend folder and install the dependencies:

   ```bash
   cd backend
   npm install
   ```

3. **Set up the frontend:**

   Open another terminal, navigate to the frontend folder and install the dependencies:

   ```bash
   cd frontend
   npm install
   ```

### Configuration

1. **Backend Configuration:**

   - Set up your MongoDB connection string and other necessary variables in the `.env` file.

2. **Frontend Configuration:**
   - If needed, configure any environment variables required for the React app.

### Running the Project

1. **Start the backend server:**

   Navigate to the backend directory and run:

   ```bash
   npm run dev
   ```

2. **Start the frontend application:**

   Open another terminal, navigate to the frontend directory, and run:

   ```bash
   npm run dev
   ```

### Usage

- Access the frontend at `http://localhost:5173` and interact with the application.
- The backend API will be available at `http://localhost:3000`.

## References

- [Node.js Documentation](https://nodejs.org/docs)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Express.js Documentation](https://expressjs.com/)

## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
