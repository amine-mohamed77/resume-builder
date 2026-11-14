
import { useState } from "react";
import "./WorkExperience.css";

function WorkExperience({ experiences, setExperiences }) {
  const [errors, setErrors] = useState({});

  const handleChange = (id, e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setExperiences((prev) =>
      prev.map((experience) =>
        experience.id === id
          ? {
              ...experience,
              [name]: newValue,
              ...(name === "currentlyWorking" && checked
                ? { endDate: "" }
                : {}),
            }
          : experience
      )
    );

    setErrors((prev) => {
      const updatedErrors = { ...prev };
      const currentErrors = { ...updatedErrors[id] };

      if (name === "position" || name === "company") {
        if (value.trim()) {
          delete currentErrors[name];
        } else {
          currentErrors[name] =
            name === "position"
              ? "Job position is required."
              : "Company name is required.";
        }
      }

      if (name === "startDate" || name === "endDate") {
        const experience = experiences.find((item) => item.id === id);

        const startDate =
          name === "startDate" ? value : experience?.startDate;

        const endDate =
          name === "endDate" ? value : experience?.endDate;

        if (
          startDate &&
          endDate &&
          endDate < startDate
        ) {
          currentErrors.date =
            "End Date cannot be before Start Date.";
        } else {
          delete currentErrors.date;
        }
      }

      if (name === "currentlyWorking" && checked) {
        delete currentErrors.date;
      }

      if (Object.keys(currentErrors).length > 0) {
        updatedErrors[id] = currentErrors;
      } else {
        delete updatedErrors[id];
      }

      return updatedErrors;
    });
  };

  const addExperience = () => {
    const newErrors = {};

    experiences.forEach((experience) => {
      const experienceErrors = {};

      if (!experience.position.trim()) {
        experienceErrors.position = "Job position is required.";
      }

      if (!experience.company.trim()) {
        experienceErrors.company = "Company name is required.";
      }

      if (
        !experience.currentlyWorking &&
        experience.startDate &&
        experience.endDate &&
        experience.endDate < experience.startDate
      ) {
        experienceErrors.date =
          "End Date cannot be before Start Date.";
      }

      if (Object.keys(experienceErrors).length > 0) {
        newErrors[experience.id] = experienceErrors;
      }
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    setExperiences((prev) => [
      ...prev,
      {
        id: Date.now(),
        company: "",
        position: "",
        startDate: "",
        endDate: "",
        description: "",
        currentlyWorking: false,
      },
    ]);
  };

  const removeExperience = (id) => {
    setExperiences((prev) =>
      prev.filter((experience) => experience.id !== id)
    );

    setErrors((prev) => {
      const updatedErrors = { ...prev };
      delete updatedErrors[id];
      return updatedErrors;
    });
  };

  return (
    <section className="experience-section">
      <div className="section-heading">
        <h2>Work Experience</h2>
        <p>Add your previous work experience.</p>
      </div>

      {experiences.map((experience) => (
        <div className="experience-card" key={experience.id}>
          <div className="experience-card-heading">
            <h3>Experience Details</h3>

            <button
              type="button"
              onClick={() => removeExperience(experience.id)}
              className="remove-btn"
            >
              Remove
            </button>
          </div>

          <div className="experience-grid">
            <div className="form-group">
              <label>Job Position</label>
              <input
                name="position"
                value={experience.position}
                onChange={(e) => handleChange(experience.id, e)}
                placeholder="Frontend Developer"
                aria-invalid={!!errors[experience.id]?.position}
              />

              {errors[experience.id]?.position && (
                <p className="error-message">
                  {errors[experience.id].position}
                </p>
              )}
            </div>

            <div className="form-group">
              <label>Company Name</label>
              <input
                name="company"
                value={experience.company}
                onChange={(e) => handleChange(experience.id, e)}
                placeholder="Company name"
                aria-invalid={!!errors[experience.id]?.company}
              />

              {errors[experience.id]?.company && (
                <p className="error-message">
                  {errors[experience.id].company}
                </p>
              )}
            </div>

            <div className="form-group">
              <label>Start Date</label>
              <input
                type="month"
                name="startDate"
                value={experience.startDate}
                onChange={(e) => handleChange(experience.id, e)}
              />
            </div>

            {!experience.currentlyWorking && (
              <div className="form-group">
                <label>End Date</label>
                <input
                  type="month"
                  name="endDate"
                  value={experience.endDate}
                  onChange={(e) => handleChange(experience.id, e)}
                />
              </div>
            )}

            <div className="form-group full-width">
              <label className="currently-working">
                <input
                  type="checkbox"
                  name="currentlyWorking"
                  checked={!!experience.currentlyWorking}
                  onChange={(e) => handleChange(experience.id, e)}
                />
                I currently work here
              </label>
            </div>

            {errors[experience.id]?.date && (
              <p className="error-message">
                {errors[experience.id].date}
              </p>
            )}

            <div className="form-group full-width">
              <label>Description</label>
              <textarea
                name="description"
                value={experience.description}
                onChange={(e) => handleChange(experience.id, e)}
                placeholder="Describe your responsibilities and achievements..."
                rows="4"
              />
            </div>
          </div>
        </div>
      ))}

      <button
        type="button"
        className="add-experience-btn"
        onClick={addExperience}
      >
        + Add Experience
      </button>
    </section>
  );
}

export default WorkExperience;
