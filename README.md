# Image Description App

A React Vite web app for AI-powered image description, built as a graduation project.

## Features

- Upload images (PNG/JPEG) via file input or drag-and-drop.
- Display AI-generated descriptions from an API.
- Styled with Tailwind CSS  and DaisyUI.
- Responsive design with Home, About, and Help pages.

## Tech Stack

- **Front-end**: React, Vite, Tailwind CSS , DaisyUI, React Router, Axios
- **Back-end**: Django, Django REST Framework ("see backend repo")
- **AI Model**: ...... ("see AI Model repo")

## Setup

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/image-description-app.git
   cd image-description-app
   ```
2. **Install dependencies**:

   ```bash
   npm install
   ```
3. **Run the development server**:

   ```bash
   npm run dev
   ```
4. **Access the app** at `http://localhost:5173`.
5. **Backend**:
   - Ensure the Django backend is running at `http://localhost:8000/api/upload/`.
   - See backend repo for setup.

## Usage

- Navigate to the Home page.
- Upload or drag-and-drop an image (max 5MB).
- Click "Get Description" to view the AI-generated description.
- Use the Reset button to clear the form.

## Contributing

- Fork the repo and create a pull request with your changes.
- Report issues in the Issues tab.

## Team

- Emad Mostafa - Front-end Developer
- Ahemd Ezzat - AI Model, Backend
- Ahemd Samir - Backend
- Yousef Ezzat - Docs