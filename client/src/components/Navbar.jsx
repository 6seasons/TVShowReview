import { Link } from 'react-router-dom'
import '../App.css'

const Navbar = () => {
  return (
    <>
      <section>
        <Link className='Nav' to='/'>Home</Link>
        <Link className='Nav' to='/test'>Show List</Link>
        <Link className='Nav' to='/logintest'>Log In</Link>
        <Link className='Nav' to='/Admin'>Admin</Link>
        <Link className='Nav' to='/Profile'>Profile</Link>
        <Link className='Nav' to='/EditShowPage'>EditShow</Link>
      </section>
    </>
  )
}

export default Navbar