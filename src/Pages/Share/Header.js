import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContex } from '../../Contaxt/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';
import { FaBiSun, FaMoon, FaSun} from 'react-icons/fa'

const Header = () => {
  const {user, logOut, dark, setDark} = useContext(AuthContex)


  const handleSignout =()=>{
    logOut()
    .then(()=>{toast.success('Successfully login')   })
    .catch((e)=>console.error(e))
  }


  const handlecheck = (dark)=>{
      setDark(dark)
  }


    return (

          <div className="navbar bg-base-100 mb-40 md:mb-10 bg-fuchsia-100 drop-shadow-sm">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </label>
              <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/courses">Courses</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              </ul>
            </div>
            <img className='h-16 rounded-full' src="https://img.freepik.com/premium-vector/tech-center-logo-design-template_145155-3284.jpg?w=360" alt="" />
            <Link className="btn btn-ghost normal-case text-xl">It education</Link>









            <label className="swap swap-rotate">
  
            
              <p onClick={()=>handlecheck(!dark)} type="checkbox" >
                
                {
                  dark ? <FaMoon></FaMoon> : <FaSun></FaSun>
                
                }
                </p>
              

            
              
            </label>



          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/courses">Courses</Link></li>
              <li><Link to="faq">FAQ</Link></li>
              <li><Link to="/blog">Blog</Link></li>

            </ul>
          </div>


          <div className="navbar-end">




            {
              user?.uid ? 

              <>
              <li className='list-none mr-6'><Link onClick={handleSignout}>Logout</Link></li>
              <img title={user.displayName} className='h-10 w-10 rounded-full' src={user?.photoURL ? user.photoURL : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCB1iclV7Txnlqi-MjaZXWuec6CA1QP2N1Fg&usqp=CAU'}  alt="" />
            
              </>
              :

              <Link to="/login">Login</Link>

            }
        
          </div>

</div>

    );
};

export default Header;