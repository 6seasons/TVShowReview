import { Link, useNavigate } from 'react-router-dom';
import '../App.css';

const Navbar = ({ token, setToken, setUserID, isAdmin, setIsAdmin }) => {

  const navigate = useNavigate();

  const signOutHandler = () => {

    setToken(null);
    setUserID(null);
    setIsAdmin(false);
    navigate('/');
  }

  return (
    <>
      <section>
        <Link className='Nav' to='/'>Home</Link>
        <Link className='Nav' to='/ShowsPage'>Show List</Link>
        {token ? null : <Link className='Nav' to='/Login'>Log In</Link>}
        {!token ? null : <Link className='Nav' to='/Profile'>Profile</Link>}
        {!isAdmin ? null :  <Link className='Nav' to='/Admin'>Admin</Link>}
        {!token ? null : 
          <button onClick={signOutHandler}>Sign Out</button>
        }
      </section>
    </>
  )
}

export default Navbar