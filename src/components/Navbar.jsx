import { Link } from 'react-router-dom';
import { AuthContext } from '../context/auth.context';
import { useContext } from 'react';
const Navbar = () => {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider `value` prop
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
  return (
    <nav>
      {!isLoggedIn && (
        <>
          <Link to='/signup'>
            <button>Sign UPPER!</button>
          </Link>

          <Link to='/login'>
            <button>Log in!</button>
          </Link>
        </>
      )}
      {isLoggedIn && (
        <>
          <Link to='/'>
            <button onClick={logOutUser}>Log out!</button>
          </Link>
          <Link to='/places-create'>
            <button>Create a place</button>
          </Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;
