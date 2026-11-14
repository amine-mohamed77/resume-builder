
import "./PersonalInfo.css";

function PersonalInfo({
  formData,
  handleChange,
  confirmEmail,
  setConfirmEmail,
  validationErrors,
}) {
  const emailIsInvalid =
    formData.email &&
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);

  const emailMismatch =
    confirmEmail && formData.email !== confirmEmail;

  return (
    <section className="personal-info">
      <div className="personal-info-heading">
        <h2>Personal Information</h2>
        <p>Enter your personal details to get started.</p>
      </div>

      <form>
        {/* Full Name */}
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            id="fullName"
            type="text"
            name="fullName"
            placeholder="Enter your full name"
            value={formData.fullName}
            onChange={handleChange}
            aria-invalid={validationErrors.fullName}
          />

          {validationErrors.fullName && (
            <p className="error-message">
              Full Name is required.
            </p>
          )}
        </div>

        {/* Email */}
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            aria-invalid={Boolean(emailIsInvalid)}
          />

          {emailIsInvalid && (
            <p className="error-message">
              Please enter a valid email address.
            </p>
          )}

          {validationErrors.email && !formData.email && (
            <p className="error-message">
              Email Address is required.
            </p>
          )}
        </div>

        {/* Confirm Email */}
        <div className="form-group">
          <label htmlFor="confirmEmail">
            Confirm Email Address
          </label>
          <input
            id="confirmEmail"
            type="email"
            placeholder="Confirm your email"
            value={confirmEmail}
            onChange={(e) => setConfirmEmail(e.target.value)}
            aria-invalid={Boolean(emailMismatch)}
          />

          {emailMismatch && (
            <p className="error-message">
              Email addresses do not match.
            </p>
          )}

          {validationErrors.confirmEmail && !confirmEmail && (
            <p className="error-message">
              Please confirm your email address.
            </p>
          )}
        </div>

        {/* Phone Number */}
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            id="phone"
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
            aria-invalid={validationErrors.phone}
          />

          {validationErrors.phone && (
            <p className="error-message">
              Phone Number is required.
            </p>
          )}
        </div>

        {/* Address */}
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            id="address"
            type="text"
            name="address"
            placeholder="Enter your address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>

        {/* Professional Title */}
        <div className="form-group">
          <label htmlFor="jobTitle">Professional Title</label>
          <input
            id="jobTitle"
            type="text"
            name="jobTitle"
            placeholder="e.g. Frontend Developer"
            value={formData.jobTitle}
            onChange={handleChange}
            aria-invalid={validationErrors.jobTitle}
          />

          {validationErrors.jobTitle && (
            <p className="error-message">
              Professional Title is required.
            </p>
          )}
        </div>

        {/* Professional Summary */}
        <div className="form-group">
          <label htmlFor="summary">Professional Summary</label>
          <textarea
            id="summary"
            name="summary"
            placeholder="Write a short professional summary..."
            rows="5"
            value={formData.summary}
            onChange={handleChange}
          />
        </div>
      </form>
    </section>
  );
}

export default PersonalInfo;
