# AI Resume Builder

A modern, interactive Resume Builder built with React. Create professional resumes, organize your career information, choose from multiple templates, and export your resume as a PDF — all through a simple and clean interface.

## Overview

AI Resume Builder is a web application designed to make resume creation easier and more efficient. Users can enter their personal information, work experience, education, and skills, preview their resumes in real time, select different templates, and download their finished resumes as PDF files.

## Features

- **Interactive Dashboard** — Overview of resumes and resume statistics.
- **Personal Information Management** — Enter contact details, professional title, and summary.
- **Work Experience** — Add, edit, and manage professional experience.
- **Education Section** — Organize academic background and qualifications.
- **Skills Management** — Add relevant skills to your resume.
- **Multiple Resume Templates** — Choose between Modern, Professional, ATS Friendly, and Creative layouts.
- **Live Resume Preview** — Preview your resume while editing.
- **PDF Export** — Generate and download resumes as PDF files.
- **Form Validation** — Validate required fields and email information.
- **Persistent Data** — Keep your data stored locally using Local Storage.
- **Responsive UI** — Designed to work across different screen sizes.

## Templates

| Template | Description |
|---|---|
| Modern | Contemporary layout with a clean sidebar and structured content. |
| Professional | Classic professional design suitable for business applications. |
| ATS Friendly | Simple, structured layout designed with applicant tracking system readability in mind. |
| Creative | A more expressive layout with distinctive visual styling. |

## Tech Stack

- **React** — Component-based user interface.
- **JavaScript (ES6+)** — Application logic.
- **Vite** — Development environment and build tool.
- **React Router DOM** — Client-side navigation.
- **CSS3** — Styling, layouts, responsive design, and animations.
- **html2pdf.js** — PDF generation and export.
- **Local Storage** — Client-side data persistence.

## Project Structure

```text
src/
├── Components/
│   ├── Header.jsx
│   ├── Sidebar.jsx
│   ├── Dashboard.jsx
│   ├── StatsCard.jsx
│   ├── RecentResumes.jsx
│   ├── CreateResume.jsx
│   ├── PersonalInfo.jsx
│   ├── WorkExperience.jsx
│   ├── Education.jsx
│   ├── Skills.jsx
│   ├── TemplateSelector.jsx
│   └── ResumePreview.jsx
├── App.jsx
├── App.css
└── main.jsx
```

## Getting Started

### Prerequisites

Make sure you have installed:

- [Node.js](https://nodejs.org/)
- npm

### Installation

Clone the repository:

```bash
git clone https://github.com/amine-mohamed77/resume-builder.git
```

Navigate to the project directory:

```bash
cd resume-builder
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL displayed in your terminal to view the application.

## Usage

1. Open the application dashboard.
2. Click **Create Resume**.
3. Enter your personal and professional information.
4. Add your work experience, education, and skills.
5. Choose your preferred resume template.
6. Review the resume preview.
7. Download your resume as a PDF.

## Data Storage

The application uses browser Local Storage to persist user data between page refreshes.

> Data is stored locally in the user's browser and is not synced to a remote database.

## Future Improvements

- AI-powered resume writing assistance.
- Multiple resume management.
- User authentication and accounts.
- Cloud storage and database integration.
- More customizable templates.
- Export customization.
- Resume scoring and optimization.
- Job-specific resume customization.

## Screenshots

_Add screenshots of the dashboard, resume editor, templates, and PDF preview here._

## Live Demo

_Add your deployed application URL here._

## Author

**Amin Mohamed**

- GitHub: [amine-mohamed77](https://github.com/amine-mohamed77)

---

Built with React and a focus on clean UI, reusable components, and practical functionality.
