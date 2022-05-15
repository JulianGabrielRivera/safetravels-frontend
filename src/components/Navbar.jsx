import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to='/signup'>
        <button>Sign UPPER!</button>
      </Link>
      <Link to='/login'>
        <button>Log in!</button>
      </Link>
    </nav>
  );
};

export default Navbar;
