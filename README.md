# Dine-Easy
GoFood - Food Delivery Web Application
Project Overview
GoFood is a full-stack food delivery web application that allows users to browse restaurants, add items to their cart, and place orders seamlessly. Built using the MERN stack, it provides a responsive and user-friendly interface for an enhanced food ordering experience.

Features
User Authentication: Secure login and registration for customers.
Restaurant & Menu Browsing: View available restaurants and their menu items.
Cart & Order Management: Add items to the cart and place orders.
Order Checkout: Seamless checkout process for placing orders.
Responsive Design: Optimized for both desktop and mobile devices.

Technologies Used
Frontend: React, CSS
Backend: Node.js, Express.js
Database: MongoDB
State Management: React Context API
API Communication: REST APIs
Prerequisites
Before running the project, ensure you have:

Node.js (v14 or higher)
MongoDB installed and running locally or a cloud database connection


Git for cloning the repository
Getting Started
1. Clone the Repository
git clone https://github.com/AR-796/GoFood.git
cd GoFood

3. Set Up the Backend
Navigate to the backend directory:
cd backend


Install dependencies:
npm install


Create a .env file in the backend directory and configure environment variables:
PORT=5000
MONGODB_URI=<your_mongodb_connection_string>
JWT_SECRET=<your_jwt_secret>


Start the backend server:
npm start


3. Set Up the Frontend
Navigate to the frontend directory:
cd ../frontend

Install dependencies:
npm install

Start the frontend application:
npm start

4. Access the Application
Open your browser and go to: http://localhost:3000

Usage
Users: Can sign up, browse restaurants, add items to their cart, and place orders.
Admin (if applicable): Can manage restaurants, menus, and order statuses.

Related Projects
Check out another project: Smart Chat Bot – A web application that facilitates real-time customer support interactions using WebSockets and AI-driven features.

Contributing
Contributions are welcome! Feel free to submit a pull request or open an issue for improvements.

License
This project is licensed under the MIT License.
