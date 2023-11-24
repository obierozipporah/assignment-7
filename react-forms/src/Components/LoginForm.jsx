import React, { useState } from 'react';
import NameForm from './NameForm';
import EmailForm from './EmailForm';
import PasswordForm from './PasswordForm';

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
    <div>
      {isLoggedIn ? (
        <h1>Welcome, {name}</h1>
      ) : (
        <div>
          <NameForm onNameSubmit={handleNameSubmit} />
          <EmailForm onEmailSubmit={handleEmailSubmit} />
          <PasswordForm onPasswordSubmit={handlePasswordSubmit} />
          {error && <p>{error}</p>}
        </div>
      )}
    </div>
  );
};

export default LoginForm;
