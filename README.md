# Alfredo Pasquel Portfolio Backend

This repository contains the backend code for [Alfredo Pasquel](https://www.linkedin.com/in/alfredo-pasquel/)'s personal portfolio website. The backend serves APIs for fetching software and audio engineering project data.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Server](#running-the-server)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## Features

- **RESTful API**: Provides endpoints for software and audio projects.
- **CORS Enabled**: Allows cross-origin requests from the frontend application.
- **Easy Configuration**: Simple setup with environment variables.

---

## Getting Started

### Prerequisites

- **Node.js** (v14 or later)
- **npm** (v6 or later)
- **Git**

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/your-backend-repo.git
   cd your-backend-repo
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Set Up Environment Variables**

   Create a `.env` file in the root directory if needed.

### Running the Server

```bash
npm start
```

- The server will be running at `http://localhost:5001` by default.

---

## API Endpoints

### **GET /api/software-projects**

- **Description**: Retrieves a list of software engineering projects.
- **Response Example**:

  ```json
  [
    {
      "id": 1,
      "title": "Needle Drop",
      "description": "A music discovery platform that connects users with emerging artists.",
      "link": "https://needle-drop.netlify.app/"
    },
    {
      "id": 2,
      "title": "Iridescent Prism",
      "description": "A visualization tool for exploring complex data structures.",
      "link": "https://iridescent-prism.netlify.app/"
    }
  ]
  ```

### **GET /api/audio-projects**

- **Description**: Retrieves a list of audio engineering projects.
- **Response Example**:

  ```json
  [
    {
      "id": 1,
      "title": "Alfredo Pasquel Music",
      "description": "A showcase of my audio engineering projects, including soundtracks and sound effects.",
      "link": "https://alfredopasquelmusic.netlify.app/"
    }
  ]
  ```

---

## Project Structure

```
src/
├── data/
│   ├── audioProjects.js          # Audio projects data
│   └── softwareProjects.js       # Software projects data
├── routes/
│   ├── audioProjects.js          # Audio projects API routes
│   └── softwareProjects.js       # Software projects API routes
├── server.js                     # Main server file
└── .env                          # Environment variables (if any)
```

---

## Technologies Used

- **Node.js**: JavaScript runtime environment.
- **Express.js**: Web framework for Node.js.
- **Cors**: Package to enable CORS.
- **Axios**: (If used) HTTP client for Node.js.

---

## Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the Repository**

2. **Create a Feature Branch**

   ```bash
   git checkout -b feature/YourFeature
   ```

3. **Commit Your Changes**

   ```bash
   git commit -m "Add YourFeature"
   ```

4. **Push to the Branch**

   ```bash
   git push origin feature/YourFeature
   ```

5. **Open a Pull Request**

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Contact

- **Name**: Alfredo Pasquel
- **Email**: [your.email@example.com](mailto:your.email@example.com) <!-- Replace with your actual email -->
- **LinkedIn**: [linkedin.com/in/alfredo-pasquel](https://www.linkedin.com/in/alfredo-pasquel/)