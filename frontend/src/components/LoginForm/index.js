import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';




function LoginForm() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  if (sessionUser) return (
    <Redirect to="/" />
  );


  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  }


  const DemoLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(sessionActions.login({credential:'demo@user.io', password:'password'}));
    if (data.errors) {
      setErrors(data.errors);
    }
  };



  return (
    <form onSubmit={handleSubmit}>
      <ul className="loginErrorsContainer">
        {errors.map((error, idx) => <li key={idx} className="error-list">{error}</li>)}
      </ul>
      <div className="loginContainer">
        <label>
          Username or Email
          <input
            type="text"
            value={credential}
            onChange={(e) => setCredential(e.target.value)}
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
        <button type="submit" style={{cursor: 'pointer'}}>Log In</button>
        <button type="submit" style={{cursor: 'pointer'}} onClick={DemoLogin}>Demo</button>
      </div>
    </form>
  );
}

export default LoginForm;
