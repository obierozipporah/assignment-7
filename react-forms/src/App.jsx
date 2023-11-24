import React, { useState } from 'react';
import NameForm from './Components/NameForm.jsx';
import EmailForm from './Components/EmailForm.jsx';
import PasswordForm from './Components/PasswordForm.jsx';

const LoginForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState('');

  const handleNameSubmit = (submittedName) => {
    setName(submittedName);
  };

  const handleEmailSubmit = (submittedEmail) => {
    setEmail(submittedEmail);
  };

  const handlePasswordSubmit = (submittedPassword) => {
    const correctName = 'user';
    const correctEmail = 'user@example.com';
    const correctPassword = 'password';

    if (
      name === correctName &&
      email === correctEmail &&
      submittedPassword === correctPassword
    ) {
      setIsLoggedIn(true);
      setError('');
    } else {
      setIsLoggedIn(false);
      setError('Invalid credentials');
    }
  };

  return (
    <div className="container">
      <h1>Login</h1>
      {isLoggedIn ? (
        <h2>Welcome, {name}</h2>
      ) : (
        <div>
          <NameForm onNameSubmit={handleNameSubmit} />
          <EmailForm onEmailSubmit={handleEmailSubmit} />
          <PasswordForm onPasswordSubmit={handlePasswordSubmit} />
          {error && <p className="error">{error}</p>}
        </div>
      )}
    </div>
  );
};

export default LoginForm;

