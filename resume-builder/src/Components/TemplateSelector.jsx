
import "./TemplateSelector.css";

const templates = [
  {
    id: "modern",
    name: "Modern",
    description: "Clean and modern design",
  },
  {
    id: "professional",
    name: "Professional",
    description: "Perfect for corporate jobs",
  },
  {
    id: "ats",
    name: "ATS Friendly",
    description: "Simple and easy to scan",
  },
  {
    id: "creative",
    name: "Creative",
    description: "Unique and stylish design",
  },
];

function TemplateSelector({ selectedTemplate, setSelectedTemplate }) {
  return (
    <section className="template-selector">
      <div className="section-heading">
        <h2>Choose Your Template</h2>
        <p>Select a design for your resume.</p>
      </div>

      <div className="template-grid">
        {templates.map((template) => (
          <button
            type="button"
            key={template.id}
            className={`template-card ${
              selectedTemplate === template.id ? "active" : ""
            } ${template.id === "professional" ? "recommended" : ""}`}
            aria-pressed={selectedTemplate === template.id}
            onClick={() => setSelectedTemplate(template.id)}
          >
            {template.id === "professional" && (
              <span className="template-badge">Recruiter favorite</span>
            )}
            <div className={`template-thumbnail ${template.id}`}>
              <div className="thumbnail-header"></div>
              <div className="thumbnail-line"></div>
              <div className="thumbnail-line short"></div>
              <div className="thumbnail-section"></div>
              <div className="thumbnail-line"></div>
              <div className="thumbnail-line short"></div>
            </div>

            <div className="template-info">
              <h3>{template.name}</h3>
              <p>{template.description}</p>
            </div>

            {selectedTemplate === template.id && (
              <span className="template-selected">Selected</span>
            )}
          </button>
        ))}
      </div>
    </section>
  );
}

export default TemplateSelector;
