
import "./ResumePreview.css";
import html2pdf from "html2pdf.js";
import { useRef, useState } from "react";

function ResumePreview({
  formData,
  experiences,
  education,
  skills,
  languages,
  canDownload,
  selectedTemplate,
}) {
  const resumeRef = useRef(null);
  const [isExporting, setIsExporting] = useState(false);
  const [exportError, setExportError] = useState("");

  const formatDate = (date) => {
    if (!date) return "";

    const [year, month] = date.split("-");

    const formattedMonth = new Date(
      Number(year),
      Number(month) - 1
    ).toLocaleString("en-US", { month: "short" });

    return `${formattedMonth} ${year}`;
  };

  const downloadPDF = async () => {
    if (!canDownload || isExporting || !resumeRef.current) return;

    setIsExporting(true);
    setExportError("");

    const safeName = formData.fullName
      .trim()
      .replace(/[<>:"/\\|?*]/g, "")
      .replace(/\s+/g, "-");
    const exportStage = document.createElement("div");
    const exportElement = resumeRef.current.cloneNode(true);

    exportStage.className = "pdf-export-stage";
    exportElement.classList.add("pdf-export");
    exportStage.appendChild(exportElement);
    document.body.appendChild(exportStage);

    const options = {
      margin: [12, 12, 12, 12],
      filename: `${safeName || "My-Resume"}.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: {
        scale: 2,
        useCORS: true,
        scrollX: 0,
        scrollY: 0,
        backgroundColor: "#ffffff",
      },
      pagebreak: {
        mode: ["css", "legacy"],
        avoid: [".modern-item", ".preview-experience", ".preview-education"],
      },
      jsPDF: {
        unit: "mm",
        format: "a4",
        orientation: "portrait",
        compress: true,
      },
    };

    try {
      await html2pdf().set(options).from(exportElement).save();
    } catch {
      setExportError("The PDF could not be created. Please try again.");
    } finally {
      exportStage.remove();
      setIsExporting(false);
    }
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

        {languages.length > 0 && (
          <div className="modern-languages">
            <h2>Languages</h2>
            <ul className="preview-languages">
              {languages.map((language, index) => (
                <li className="preview-language" key={`${language.name}-${index}`}>
                  <span className="preview-language-name">{language.name}</span>
                  <span className="preview-language-level">{language.proficiency}</span>
                </li>
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

      {languages.length > 0 && (
        <>
          <hr />
          <h2>Languages</h2>
          <ul className="preview-languages">
            {languages.map((language, index) => (
              <li className="preview-language" key={`${language.name}-${index}`}>
                <span className="preview-language-name">{language.name}</span>
                <span className="preview-language-level">{language.proficiency}</span>
              </li>
            ))}
          </ul>
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
        disabled={!canDownload || isExporting}
        aria-live="polite"
      >
        {isExporting
          ? "Preparing your PDF…"
          : canDownload
            ? "Download resume PDF"
            : "Complete required fields"}
      </button>
      {exportError && <p className="pdf-export-error" role="alert">{exportError}</p>}
    </section>
  );
}

export default ResumePreview;
