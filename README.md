Project Name: Next.js Authentication (Sign Up & Login)
Overview
This project demonstrates the use of Next.js 13+ to implement basic Sign Up and Login pages with form validation. The architecture is focused on separating concerns and making the UI components reusable, which helps maintain and scale the project.

Key Features
Form Validation: Ensures proper data is entered by users.
Reusable UI Components: Sign Up and Login pages are built with modular components.
Clean Code Structure: The project follows a component-driven architecture to ensure maintainability.
Project Structure
my-next-app/
├── app/
│   ├ page.tsx                  #SignUp page (handles registration)
│   ├── Login/
│   │   └── page.tsx             # Login page (handles authentication)
│   ├── globals.css              # Global styles
│   ├── layout.tsx 
│   ├── page.tsx 
├── package.json
├── next.config.js
└── README.md
Component Architecture
1. SignUp Page
Location: app/page.tsx
Description: Handles the user registration process, including form submission and validation.
Main Components:

Form (Main Container): Contains the structure for the form inputs (Full Name, Email, Password) and button.
Validation: Local state handles form input values and errors. Upon form submission, it validates the inputs, ensuring correct data entry.

2. Login Page
Location: app/Login/page.tsx
Description: This page is responsible for handling user login and authentication.
Main Components:

Form (Main Container): Contains login form fields (Email, Password) and a button to submit the form.
Validation: Similar to the SignUp page, the Login page also validates the form before submission.

How to Run the Project

Clone the repository:
git clone https://github.com/johnson2611/Task_One.git
Navigate to the project directory:

cd Task_One
Install dependencies:

npm install
Run the development server:

npm run dev
Open your browser and go to http://localhost:3000 to see the app in action!
