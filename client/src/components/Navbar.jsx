import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <section>
        <Link to='/'>Home</Link>
        <Link to='/test'>Show List</Link>
        <Link to='/showdetails'>Single Show Expanded View</Link>
      </section>
      <section>
        <Link to='/logintest'>Log In</Link>
      </section>
    </>
  )
}

export default Navbar