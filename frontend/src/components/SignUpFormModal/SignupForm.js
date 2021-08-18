import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";


function SignupForm() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [image, setImage] = useState(null);
  const [errors, setErrors] = useState([]);


  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.createUser({ email, username, password, image }))
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        });
    }
    return setErrors(['Password and Confirm Password DO NOT MATCH']);
  };

  const updateFile = (e) => {
    const file = e.target.files[0];
    if (file) setImage(file);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <ul className="signupErrorsContainer">
          {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>
        <div className="signupContainer">
          <label>
              Email
              <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              />
          </label>
          <label>
              Username
              <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              />
          </label>
          <label>
              Password
              <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              />
          </label>
          <label>
              Confirm Password
              <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              />
          </label>
          <label>
            <input type="file" onChange={updateFile} />
          </label>
          <button type="submit" style={{cursor: 'pointer'}}>Sign Up</button>
        </div>
      </form>
    </div>
  );
}

export default SignupForm;
