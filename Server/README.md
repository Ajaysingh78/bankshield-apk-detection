# Suspicious App Scanner

## Overview

The Suspicious App Scanner is a web application built using the MERN stack (MongoDB, Express, React, Node.js) that allows users to find suspicious applications by either pasting a link or uploading an app file. The application features a dual login system with user and admin roles.

## Features

- **User Role:**
  - Users can register and log in to their accounts.
  - Users can paste links or upload files for scanning.
  - Users can view their scan history.

- **Admin Role:**
  - Admins can log in to access a dashboard that displays an overview of submissions and user activity.
  - Admins can view all user submissions.
  - Admins have access to a fraud reporting form to report any suspicious activities.

## Project Structure

```
suspicious-app-scanner
├── client
│   ├── public
│   │   └── index.html
│   ├── src
│   │   ├── components
│   │   │   ├── Admin
│   │   │   │   ├── Dashboard.jsx
│   │   │   │   ├── FraudForm.jsx
│   │   │   │   └── SubmissionsList.jsx
│   │   │   ├── Auth
│   │   │   │   ├── Login.jsx
│   │   │   │   └── Register.jsx
│   │   │   ├── Scanner
│   │   │   │   ├── LinkScanner.jsx
│   │   │   │   └── FileUploader.jsx
│   │   │   └── User
│   │   │       ├── Dashboard.jsx
│   │   │       └── ScanHistory.jsx
│   │   ├── context
│   │   │   └── AuthContext.jsx
│   │   ├── services
│   │   │   ├── api.js
│   │   │   └── auth.js
│   │   ├── App.jsx
│   │   └── index.jsx
│   ├── package.json
│   └── README.md
├── server
│   ├── config
│   │   ├── db.js
│   │   └── auth.js
│   ├── controllers
│   │   ├── authController.js
│   │   ├── scanController.js
│   │   └── fraudController.js
│   ├── middleware
│   │   ├── auth.js
│   │   └── admin.js
│   ├── models
│   │   ├── User.js
│   │   ├── Scan.js
│   │   └── FraudReport.js
│   ├── routes
│   │   ├── auth.js
│   │   ├── scan.js
│   │   └── admin.js
│   ├── utils
│   │   └── scanner.js
│   ├── app.js
│   ├── server.js
│   └── package.json
└── README.md
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the client and server directories and install dependencies:
   ```
   cd client
   npm install
   cd ../server
   npm install
   ```

3. Set up your MongoDB database and update the connection string in `server/config/db.js`.

4. Start the server:
   ```
   cd server
   node server.js
   ```

5. Start the client:
   ```
   cd client
   npm start
   ```

## License

This project is licensed under the MIT License.