
import "./ResumePreview.css";
import html2pdf from "html2pdf.js";
import { useRef } from "react";

function ResumePreview({
  formData,
  experiences,
  education,
  skills,
  canDownload,
  selectedTemplate,
}) {
  const resumeRef = useRef(null);

  const formatDate = (date) => {
    if (!date) return "";

    const [year, month] = date.split("-");

    const formattedMonth = new Date(
      Number(year),
      Number(month) - 1
    ).toLocaleString("en-US", { month: "short" });

    return `${formattedMonth} ${year}`;
  };

  const downloadPDF = () => {
    if (!canDownload) return;

    const element = resumeRef.current;

    const safeName = formData.fullName
      .trim()
      .replace(/[<>:"/\\|?*]/g, "")
      .replace(/\s+/g, "-");

    const options = {
      margin: 0,
      filename: `${safeName || "My-Resume"}.pdf`,
      image: {
        type: "jpeg",
        quality: 0.98,
      },
      html2canvas: {
        scale: 2,
        useCORS: true,
      },
      jsPDF: {
        unit: "mm",
        format: "a4",
        orientation: "portrait",
      },
    };

    html2pdf().set(options).from(element).save();
  };

  // Modern Template
  const renderModernTemplate = () => (
    <div className="modern-layout">
      <aside className="modern-sidebar">
        <div className="modern-contact">
          <h2>Contact</h2>

          {formData.email && <p>{formData.email}</p>}
          {formData.phone && <p>{formData.phone}</p>}
          {formData.address && <p>{formData.address}</p>}
        </div>

        {skills.length > 0 && (
          <div className="modern-skills">
            <h2>Skills</h2>

            <ul>
              {skills.map((skill, index) => (
                <li key={`${skill}-${index}`}>{skill}</li>
              ))}
            </ul>
          </div>
        )}
      </aside>

      <main className="modern-main">
        <header className="modern-header">
          <h1>{formData.fullName || "Your Name"}</h1>
          <h3>{formData.jobTitle || "Professional Title"}</h3>
        </header>

        {formData.summary && (
          <section className="modern-section">
            <h2>Professional Summary</h2>
            <p>{formData.summary}</p>
          </section>
        )}

        {experiences.length > 0 && (
          <section className="modern-section">
            <h2>Work Experience</h2>

            {experiences.map((experience) => (
              <div
                key={experience.id}
                className="modern-item"
              >
                <h3>{experience.position}</h3>
                <p className="modern-company">
                  {experience.company}
                </p>

                <p className="modern-date">
                  {formatDate(experience.startDate)}
                  {experience.startDate || experience.endDate
                    ? " - "
                    : ""}
                  {experience.currentlyWorking
                    ? "Present"
                    : formatDate(experience.endDate)}
                </p>

                {experience.description && (
                  <p>{experience.description}</p>
                )}
              </div>
            ))}
          </section>
        )}

        {education.length > 0 && (
          <section className="modern-section">
            <h2>Education</h2>

            {education.map((item) => (
              <div
                key={item.id}
                className="modern-item"
              >
                <h3>{item.degree}</h3>
                <p>{item.school}</p>

                {item.field && <p>{item.field}</p>}

                <p className="modern-date">
                  {formatDate(item.startDate)}
                  {item.startDate || item.endDate
                    ? " - "
                    : ""}
                  {item.currentlyStudying
                    ? "Present"
                    : formatDate(item.endDate)}
                </p>
              </div>
            ))}
          </section>
        )}
      </main>
    </div>
  );

  // Other Templates
  const renderOtherTemplates = () => (
    <>
      <div className="resume-header">
        <div className="resume-heading">
          <h1>{formData.fullName || "Your Name"}</h1>
          <h3>{formData.jobTitle || "Professional Title"}</h3>
        </div>

        <div className="preview-contact">
          {formData.email && <p>{formData.email}</p>}
          {formData.phone && <p>{formData.phone}</p>}
          {formData.address && <p>{formData.address}</p>}
        </div>
      </div>

      {formData.summary && (
        <>
          <hr />
          <h2>Professional Summary</h2>
          <p>{formData.summary}</p>
        </>
      )}

      {experiences.length > 0 && (
        <>
          <hr />
          <h2>Work Experience</h2>

          {experiences.map((experience) => (
            <div
              key={experience.id}
              className="preview-experience"
            >
              <h3>{experience.position}</h3>
              <p>{experience.company}</p>

              <p>
                {formatDate(experience.startDate)}
                {experience.startDate || experience.endDate
                  ? " - "
                  : ""}
                {experience.currentlyWorking
                  ? "Present"
                  : formatDate(experience.endDate)}
              </p>

              {experience.description && (
                <p>{experience.description}</p>
              )}
            </div>
          ))}
        </>
      )}

      {education.length > 0 && (
        <>
          <hr />
          <h2>Education</h2>

          {education.map((item) => (
            <div
              key={item.id}
              className="preview-education"
            >
              <h3>{item.degree}</h3>
              <p>{item.school}</p>

              {item.field && <p>{item.field}</p>}

              <p>
                {formatDate(item.startDate)}
                {item.startDate || item.endDate ? " - " : ""}
                {item.currentlyStudying
                  ? "Present"
                  : formatDate(item.endDate)}
              </p>
            </div>
          ))}
        </>
      )}

      {skills.length > 0 && (
        <>
          <hr />
          <h2>Skills</h2>

          <div className="preview-skills">
            {skills.map((skill, index) => (
              <span
                key={`${skill}-${index}`}
                className="preview-skill"
              >
                {skill}
              </span>
            ))}
          </div>
        </>
      )}
    </>
  );

  return (
    <section className="resume-preview">
      <div
        className={`resume-paper template-${selectedTemplate}`}
        ref={resumeRef}
      >
        {selectedTemplate === "modern"
          ? renderModernTemplate()
          : renderOtherTemplates()}
      </div>

      <button
        type="button"
        className="download-pdf-btn"
        onClick={downloadPDF}
        disabled={!canDownload}
      >
        {canDownload
          ? "Download Resume PDF"
          : "Complete Required Fields"}
      </button>
    </section>
  );
}

export default ResumePreview;
