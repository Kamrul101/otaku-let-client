import { Link } from "react-router-dom";
import logo from '../../../../assets/rsz_1logo.png';
import { useContext } from "react";
import { AuthContext } from "../../../../Providers/AuthProviders";
import { FaUserCircle } from "react-icons/fa";


const Navbar = () => {
    const {user, logOut} = useContext(AuthContext);
  const handleLogOut =() =>{
    logOut()
    .then(()=>{})
    .catch(error => console.log(error))
  }
  
  const navItems = (
    <>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/allToys'>All Toys</Link>
      </li>
      <li>
        <Link to='/myToys'>My Toys</Link>
      </li>
      <li>
        <Link to='/addToys'>Add Toys</Link>
      </li>
      <li>
        <Link to='/blogs'>Blogs</Link>
      </li>
      
      
      
    </>
  );
  return (
    <div className="bg-slate-500">
        <div className="navbar text-white mb-6 md:w-3/4 mx-auto ">
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
        {
            user && <FaUserCircle className="text-4xl mr-2"></FaUserCircle>
        }
        {
            user? <Link onClick={handleLogOut} className="btn btn-error text-white" to='/login'>Logout</Link>:<Link className="btn btn-error text-white" to='/login'>Login</Link>
        }

      </div>
    </div>
    </div>
  );
};

export default Navbar;
