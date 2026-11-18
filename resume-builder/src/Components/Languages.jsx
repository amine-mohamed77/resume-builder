import { useState } from "react";
import "./Languages.css";

const proficiencyOptions = [
  "Native",
  "Fluent",
  "Professional",
  "Conversational",
  "Basic",
];

function Languages({ languages, setLanguages }) {
  const [languageName, setLanguageName] = useState("");
  const [proficiency, setProficiency] = useState("Fluent");
  const [message, setMessage] = useState("");

  const addLanguage = (event) => {
    event.preventDefault();
    const name = languageName.trim();

    if (!name) {
      setMessage("Enter a language to add it.");
      return;
    }

    if (languages.some((language) => language.name.toLowerCase() === name.toLowerCase())) {
      setMessage("That language is already on your list.");
      return;
    }

    setLanguages((currentLanguages) => [...currentLanguages, { name, proficiency }]);
    setLanguageName("");
    setMessage("");
  };

  const removeLanguage = (nameToRemove) => {
    setLanguages((currentLanguages) =>
      currentLanguages.filter((language) => language.name !== nameToRemove)
    );
  };

  return (
    <section className="languages-section">
      <div className="section-heading">
        <h2>Languages</h2>
        <p>Add languages and your proficiency level.</p>
      </div>

      <form
        className="languages-form"
        onSubmit={addLanguage}
        onKeyDown={(event) => {
          if (event.key === "Enter" && (event.nativeEvent.isComposing || event.keyCode === 229)) event.preventDefault();
        }}
      >
        <label className="language-field">
          <span>Language</span>
          <input
            value={languageName}
            onChange={(event) => {
              setLanguageName(event.target.value);
              setMessage("");
            }}
            placeholder="e.g. Spanish"
            autoComplete="off"
          />
        </label>

        <label className="language-field">
          <span>Proficiency</span>
          <select
            value={proficiency}
            onChange={(event) => setProficiency(event.target.value)}
          >
            {proficiencyOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </label>

        <button type="submit" className="add-language-btn">Add language</button>
      </form>

      <p className="language-feedback" role="status" aria-live="polite">{message}</p>

      {languages.length > 0 && (
        <ul className="languages-list" aria-label="Added languages">
          {languages.map((language, index) => (
            <li className="language-item" key={`${language.name}-${index}`}>
              <span className="language-item-name">{language.name}</span>
              <span className="language-item-proficiency">{language.proficiency}</span>
              <button
                type="button"
                onClick={() => removeLanguage(language.name)}
                aria-label={`Remove ${language.name}`}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default Languages;
