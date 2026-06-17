import { useState } from "react";
import "../styles/RegistrationForm.css";
import { createRegistration } from "../api/registrationApi";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contact: "",
    department: "",
    state: "",
    city: "",
    address: "",
    working: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   if (
  //     !formData.fullName ||
  //     !formData.email ||
  //     !formData.contact
  //   ) {
  //     alert("Please fill all required fields");
  //     return;
  //   }

  //   sessionStorage.setItem(
  //     "registrationData",
  //     JSON.stringify(formData)
  //   );

  //   alert("Form Submitted!");
  // };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await createRegistration(formData);

    alert("Form Submitted");

    setFormData({
      fullName: "",
      email: "",
      contact: "",
      department: "",
      state: "",
      city: "",
      address: "",
      working: "",
    });
  } catch (error) {
    console.log(error);
  }
};

  return (
    <div className="container-fluid registration-container">
      <div className="mb-4">
        <h2>Registration Form</h2>
        <p className="text-muted">
          Central Hub for Personal Customization
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="form-label">
              Full Name *
            </label>
            <input
              type="text"
              className="form-control"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">
              Email Address *
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">
              Contact Number *
            </label>
            <input
              type="text"
              className="form-control"
              name="contact"
              placeholder="Contact Number"
              value={formData.contact}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">
              Department *
            </label>
            <select
              className="form-select"
              name="department"
              value={formData.department}
              onChange={handleChange}
              required
            >
              <option value="">
                Select Department
              </option>
              <option value="HR">HR</option>
              <option value="IT">IT</option>
              <option value="Finance">
                Finance
              </option>
              <option value="Marketing">
                Marketing
              </option>
            </select>
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">
              State *
            </label>
            <select
              className="form-select"
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
            >
              <option value="">
                Select State
              </option>
              <option value="Tamil Nadu">
                Tamil Nadu
              </option>
              <option value="Kerala">
                Kerala
              </option>
              <option value="Karnataka">
                Karnataka
              </option>
            </select>
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">
              City *
            </label>
            <select
              className="form-select"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            >
              <option value="">
                Select City
              </option>
              <option value="Chennai">
                Chennai
              </option>
              <option value="Coimbatore">
                Coimbatore
              </option>
              <option value="Trichy">
                Trichy
              </option>
            </select>
          </div>

          <div className="col-12 mb-3">
            <label className="form-label">
              Address
            </label>
            <textarea
              className="form-control"
              rows="3"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="col-12 mb-4">
            <label className="form-label d-block">
              Currently Working or Not
            </label>

            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="working"
                value="Yes"
                checked={formData.working === "Yes"}
                onChange={handleChange}
              />
              <label className="form-check-label">
                Yes
              </label>
            </div>

            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="working"
                value="No"
                checked={formData.working === "No"}
                onChange={handleChange}
              />
              <label className="form-check-label">
                No
              </label>
            </div>
          </div>

          <div className="col-12">
            <button
              type="submit"
              className="btn btn-primary px-5"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default RegistrationForm;