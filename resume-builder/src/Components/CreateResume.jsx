
import { useState } from "react";
import PersonalInfo from "./PersonalInfo";
import ResumePreview from "./ResumePreview";
import WorkExperience from "./WorkExperience";
import Education from "./Education";
import Skills from "./Skills";
import "./CreateResume.css";
import TemplateSelector from "./TemplateSelector";

function CreateResume() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    jobTitle: "",
    summary: "",
  });

  const [experiences, setExperiences] = useState([]);
  const [education, setEducation] = useState([]);
  const [skills, setSkills] = useState([]);
  const [confirmEmail, setConfirmEmail] = useState("");
  const [selectedTemplate, setSelectedTemplate] = useState("modern");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
const validationErrors = {
  fullName: !formData.fullName.trim(),
  phone: !formData.phone.trim(),
  jobTitle: !formData.jobTitle.trim(),
  email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email),
  confirmEmail:
    !confirmEmail.trim() || formData.email !== confirmEmail,
};

const canDownload = !Object.values(validationErrors).some(Boolean);

  

  return (
    <div className="create-resume">
      <div className="create-resume-heading">
        <h1>Create New Resume</h1>
        <p>Build your professional resume.</p>
      </div>

      <div className="resume-builder">
        <div className="resume-editor">
        <PersonalInfo
  formData={formData}
  handleChange={handleChange}
  confirmEmail={confirmEmail}
  setConfirmEmail={setConfirmEmail}
  validationErrors={validationErrors}
/>

          <WorkExperience
            experiences={experiences}
            setExperiences={setExperiences}
          />
          <Education
            education={education}
            setEducation={setEducation}
          />
          <Skills
            skills={skills}
            setSkills={setSkills}
          />
        </div>
        <TemplateSelector
  selectedTemplate={selectedTemplate}
  setSelectedTemplate={setSelectedTemplate}
/>

    <ResumePreview
  formData={formData}
  experiences={experiences}
  education={education}
  skills={skills}
  canDownload={canDownload}
  selectedTemplate={selectedTemplate}
/>
      </div>
    </div>
  );
}

export default CreateResume;
