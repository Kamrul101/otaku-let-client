import { Link } from "react-router-dom";
import logo from '../../../../assets/rsz_1logo.png';

const Navbar = () => {

  const navItems = (
    <>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/about'>All Toys</Link>
      </li>
      <li>
        <Link to='/about'>My Toys</Link>
      </li>
      <li>
        <Link to='/about'>Add Toys</Link>
      </li>
      <li>
        <Link to='/about'>Blogs</Link>
      </li>
      
      
      
    </>
  );
  return (
    <div className="navbar text-white mb-6 bg-slate-500">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-500 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          <img className="rounded-lg" src={logo} alt="Otaku Let" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navItems}
          
        </ul>
      </div>
      <div className="navbar-end">
     
      
      
      <Link className="btn btn-error text-white" to='/login'>Login</Link>
      
     
   
      </div>
    </div>
  );
};

export default Navbar;
