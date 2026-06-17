import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/form.css";

function VerifyOTP() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const inputRefs = useRef([]);

  const FIXED_OTP = "123456";

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;
    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    if (element.value !== "" && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleContinue = () => {
    const enteredOtp = otp.join("");
    if (enteredOtp === FIXED_OTP) {
      sessionStorage.setItem("isVerified", "true");
      navigate("/dashboard");

    } else {
      alert("Invalid OTP! Try 123456");
      setOtp(new Array(6).fill(""));
      inputRefs.current[0].focus();
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card text-center">

        <h2 className="auth-title">
          Verify OTP
        </h2>

        <p className="auth-subtitle">
          Enter <strong>123456</strong>
        </p>

        <div className="d-flex justify-content-between mb-4 gap-2">
          {otp.map((data, index) => (
            <input
              key={index}
              className="form-control otp-box"
              maxLength="1"
              ref={(el) => (inputRefs.current[index] = el)}
              value={data}
              onChange={(e) => handleChange(e.target, index)}
            />
          ))}
        </div>

        <button
          className="btn btn-primary w-100"
          onClick={handleContinue}
        >
          Continue
        </button>

      </div>
    </div>
  );
}

export default VerifyOTP;