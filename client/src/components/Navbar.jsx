import { Link } from 'react-router-dom'
import '../App.css'

const Navbar = ({ token, isAdmin }) => {

  const signOutHandler = () => {
    console.log(`hey minami`);
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