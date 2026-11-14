
import { useState } from "react";
import "./Education.css";

function Education({ education, setEducation }) {
  const [errors, setErrors] = useState({});

  const handleChange = (id, e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    const currentEducation = education.find((item) => item.id === id);

    const updatedStartDate =
      name === "startDate" ? value : currentEducation?.startDate;

    const updatedEndDate =
      name === "endDate" ? value : currentEducation?.endDate;

    setEducation((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              [name]: newValue,
              ...(name === "currentlyStudying" && checked
                ? { endDate: "" }
                : {}),
            }
          : item
      )
    );

    setErrors((prev) => {
      const updatedErrors = { ...prev };
      const currentErrors = { ...updatedErrors[id] };

      if (["school", "degree", "field"].includes(name)) {
        if (value.trim()) {
          delete currentErrors[name];
        } else {
          currentErrors[name] = `${{
            school: "School / University",
            degree: "Degree",
            field: "Field of Study",
          }[name]} is required.`;
        }
      }

      if (name === "startDate" || name === "endDate") {
        if (
          updatedStartDate &&
          updatedEndDate &&
          updatedEndDate < updatedStartDate
        ) {
          currentErrors.date =
            "End Date cannot be before Start Date.";
        } else {
          delete currentErrors.date;
        }
      }

      if (name === "currentlyStudying" && checked) {
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

  const addEducation = () => {
    const newErrors = {};

    education.forEach((item) => {
      const itemErrors = {};

      if (!item.school.trim()) {
        itemErrors.school = "School / University is required.";
      }

      if (!item.degree.trim()) {
        itemErrors.degree = "Degree is required.";
      }

      if (!item.field.trim()) {
        itemErrors.field = "Field of Study is required.";
      }

      if (
        !item.currentlyStudying &&
        item.startDate &&
        item.endDate &&
        item.endDate < item.startDate
      ) {
        itemErrors.date =
          "End Date cannot be before Start Date.";
      }

      if (Object.keys(itemErrors).length > 0) {
        newErrors[item.id] = itemErrors;
      }
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    setEducation((prev) => [
      ...prev,
      {
        id: Date.now(),
        school: "",
        degree: "",
        field: "",
        startDate: "",
        endDate: "",
        currentlyStudying: false,
      },
    ]);
  };

  const removeEducation = (id) => {
    setEducation((prev) =>
      prev.filter((item) => item.id !== id)
    );

    setErrors((prev) => {
      const updatedErrors = { ...prev };
      delete updatedErrors[id];
      return updatedErrors;
    });
  };

  return (
    <section className="education-section">
      <div className="section-heading">
        <h2>Education</h2>
        <p>Add your educational background.</p>
      </div>

      {education.map((item) => (
        <div className="education-card" key={item.id}>
          <div className="education-card-heading">
            <h3>Education Details</h3>

            <button
              type="button"
              className="remove-btn"
              onClick={() => removeEducation(item.id)}
            >
              Remove
            </button>
          </div>

          <div className="education-grid">
            <div className="form-group">
              <label>School / University</label>
              <input
                name="school"
                value={item.school}
                onChange={(e) => handleChange(item.id, e)}
                placeholder="University name"
                aria-invalid={!!errors[item.id]?.school}
              />

              {errors[item.id]?.school && (
                <p className="error-message">
                  {errors[item.id].school}
                </p>
              )}
            </div>

            <div className="form-group">
              <label>Degree</label>
              <input
                name="degree"
                value={item.degree}
                onChange={(e) => handleChange(item.id, e)}
                placeholder="Bachelor's Degree"
                aria-invalid={!!errors[item.id]?.degree}
              />

              {errors[item.id]?.degree && (
                <p className="error-message">
                  {errors[item.id].degree}
                </p>
              )}
            </div>

            <div className="form-group">
              <label>Field of Study</label>
              <input
                name="field"
                value={item.field}
                onChange={(e) => handleChange(item.id, e)}
                placeholder="Computer Science"
                aria-invalid={!!errors[item.id]?.field}
              />

              {errors[item.id]?.field && (
                <p className="error-message">
                  {errors[item.id].field}
                </p>
              )}
            </div>

            <div className="form-group">
              <label>Start Date</label>
              <input
                type="month"
                name="startDate"
                value={item.startDate}
                onChange={(e) => handleChange(item.id, e)}
              />
            </div>

            {!item.currentlyStudying && (
              <div className="form-group">
                <label>End Date</label>
                <input
                  type="month"
                  name="endDate"
                  value={item.endDate}
                  onChange={(e) => handleChange(item.id, e)}
                />
              </div>
            )}

            <div className="form-group full-width">
              <label className="currently-studying">
                <input
                  type="checkbox"
                  name="currentlyStudying"
                  checked={!!item.currentlyStudying}
                  onChange={(e) => handleChange(item.id, e)}
                />
                I currently study here
              </label>
            </div>

            {errors[item.id]?.date && (
              <p className="error-message">
                {errors[item.id].date}
              </p>
            )}
          </div>
        </div>
      ))}

      <button
        type="button"
        className="add-experience-btn"
        onClick={addEducation}
      >
        + Add Education
      </button>
    </section>
  );
}

export default Education;
