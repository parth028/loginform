import React, { useState } from "react";

function Form(props) {
  const [validationMessages, setValidationMessages] = useState([]);
  const [formData, setFormData] = useState({});
  const [passwordShown, setPasswordShown] = useState(false);
  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  const handleClick = (evt) => {
    validateForm();
    if (validationMessages.length > 0) {
      evt.preventDefault();
    }
  };
  const validateForm = () => {
    const { username, password } = formData;
    setValidationMessages([]);
    let messages = [];
    if (!username) {
      messages.push("First Name is required");
    }
    if (!password) {
      messages.push("Last Name is required");
    }

    setValidationMessages(messages);
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100vw",
          background: "#009966",
        }}
      >
        <form style={{ display: "flex", flexDirection: "column" }}>
          <label>First Name</label>
          <input
            value={formData.firstName || ""}
            onChange={handleChange}
            type="text"
            name="firstName"
          />
          <label>Last Name</label>
          <input
            type={passwordShown ? "text" : "password"}
            value={formData.password || ""}
            placeholder="Password"
            name="password"
            onChange={handleChange}
          />

          <span>
            <button onClick={togglePassword}>see</button>
          </span>
          <br />
          <button type="button" onClick={handleClick}>
            Save
          </button>
        </form>

        <div>
          {validationMessages.length > 0}
          <ul>
            {validationMessages.map((vm) => (
              <li key={vm}>{vm}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Form;
