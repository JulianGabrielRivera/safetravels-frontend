import { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
// import { AuthContext } from '../context/auth.context';

const LoginPage = (props) => {
  // set the state so wehn you get into the page it will be blank with no values
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(undefined);

  // used to navigate to next page it is a custom hook
  const navigate = useNavigate();

  // const { storeToken, authenticateUser } = useContext(AuthContext);

  // handles the changes inside these text boxes
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  // what happens when you submt the form.
  const handleLoginSubmit = (e) => {
    e.preventDefault();

    // parsis body to send to back end
    const requestBody = { email, password };
    // this url is the direction we set up on the back end and passing it the object with the values of email and password once user is logged in
    axios
      .post('http://localhost:5005/auth/login', requestBody)
      .then((response) => {
        // storeToken(response.data.authToken);
        // authenticateUser();
        navigate('/');
        console.log(response);
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div className='LoginPage'>
      <h1>Log In</h1>

      <form onSubmit={handleLoginSubmit}>
        <label>Email:</label>
        <input type='email' name='email' value={email} onChange={handleEmail} />

        <label>Password:</label>
        <input
          type='password'
          name='password'
          value={password}
          onChange={handlePassword}
        />

        <button type='submit'>Login</button>
      </form>
      {errorMessage && <p className='error-message'>{errorMessage}</p>}

      <p>Don't have an account yet?</p>
      <Link to={'/signup'}> Sign Up</Link>
    </div>
  );
};

export default LoginPage;
