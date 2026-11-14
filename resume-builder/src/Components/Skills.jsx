
import { useState } from "react";
import "./Skills.css";

function Skills({ skills, setSkills }) {
  const [skillInput, setSkillInput] = useState("");

  const addSkill = (e) => {
  e.preventDefault();

  const newSkill = skillInput.trim();

  if (!newSkill) return;

  const alreadyExists = skills.some(
    (skill) => skill.toLowerCase() === newSkill.toLowerCase()
  );

  if (alreadyExists) {
    alert("This skill already exists!");
    return;
  }

  setSkills((prev) => [...prev, newSkill]);
  setSkillInput("");
};
const removeSkill = (skillToRemove) => {
  setSkills((prev) =>
    prev.filter((skill) => skill !== skillToRemove)
  );
};

  return (
    <section className="skills-section">
      <div className="section-heading">
        <h2>Skills</h2>
        <p>Add your professional skills.</p>
      </div>

      <form className="skills-form" onSubmit={addSkill}>
        <input
          type="text"
          value={skillInput}
          onChange={(e) => setSkillInput(e.target.value)}
          placeholder="e.g. React, JavaScript, Laravel"
        />

        <button type="submit">+ Add Skill</button>
      </form>

      <div className="skills-list">
        {skills.map((skill, index) => (
          <div className="skill-item" key={`${skill}-${index}`}>
            <span>{skill}</span>

            <button
              type="button"
              onClick={() => removeSkill(skill)}
              aria-label={`Remove ${skill}`}
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
