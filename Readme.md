# Resume Editor - Frontend Development Internship Task

 <!-- Add screenshot if available -->

A web-based resume editor that allows users to upload, edit, enhance with AI, save, and download their resumes. Built with React.js for the frontend and FastAPI for the backend.

## Features

- **Resume Upload**: Accepts PDF or DOCX files (mock parsing)
- **Editable Resume Sections**:
  - Personal information
  - Professional summary
  - Work experience (add/remove entries)
  - Education (add/remove entries)
  - Skills (add/remove items)
- **AI Enhancement**: Mock AI improvement for each section
- **Save/Load**: Persist resume data to backend
- **Download**: Export resume as JSON file

## Technologies Used

### Frontend
- React.js (Functional components with Hooks)
- Axios for API communication
- TailwindCSS for styling

### Backend
- Python FastAPI
- JSON file storage (no database required)

## Installation

### Prerequisites
- Node.js (v14+)
- Python (3.7+)
- npm or yarn

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
2. Install dependencies:
   ```bash
   pip install fastapi uvicorn python-multipart
3. Run the Server:
   ```bash 
   uvicorn main:app --reload --port 8000
### Frontend Setup

1. Navigate to the frontend directory:
   ```bash 
   cd frontend
2. Install dependencies:
   ```bash
   npm install 
   npm i axios
3. Start the development server:
   ```bash
   npm start
# 
# Thanks for Reading ---->