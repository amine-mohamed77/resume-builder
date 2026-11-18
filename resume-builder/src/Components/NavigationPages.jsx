import { useState } from "react";
import { Link } from "react-router-dom";
import RecentResumes from "./RecentResumes";
import TemplateSelector from "./TemplateSelector";
import "./NavigationPages.css";

function PageHeading({ eyebrow, title, description }) {
  return (
    <div className="workspace-page-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export function MyResumesPage() {
  return (
    <section className="workspace-page">
      <PageHeading
        eyebrow="YOUR LIBRARY"
        title="My Resumes"
        description="Review the resumes in your workspace."
      />
      <RecentResumes title="All Resumes" showViewAll={false} />
    </section>
  );
}

export function TemplatesPage() {
  const [selectedTemplate, setSelectedTemplate] = useState("modern");

  return (
    <section className="workspace-page">
      <PageHeading
        eyebrow="DESIGN LIBRARY"
        title="Templates"
        description="Choose a starting point for your next resume."
      />
      <TemplateSelector
        selectedTemplate={selectedTemplate}
        setSelectedTemplate={setSelectedTemplate}
      />
      <div className="templates-action">
        <Link
          to={`/create-resume?template=${encodeURIComponent(selectedTemplate)}`}
          className="create-resume-btn"
        >
          Continue with this template
        </Link>
      </div>
    </section>
  );
}

export function SettingsPage() {
  return (
    <section className="workspace-page">
      <PageHeading
        eyebrow="WORKSPACE"
        title="Settings"
        description="Manage your account and workspace preferences."
      />
      <div className="settings-notice">
        <h3>Settings are not available yet</h3>
        <p>
          You can still browse your resumes and choose templates from the navigation.
        </p>
      </div>
    </section>
  );
}
