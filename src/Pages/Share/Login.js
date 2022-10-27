import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContex } from '../../Contaxt/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import toast, { Toaster } from 'react-hot-toast';
import { useState } from 'react';

const Login = () => {

    const {googleSingup, login, singInGithub} = useContext(AuthContex)
    const [error, setError] = useState('')
    const location = useLocation()
    const from = location.state?.from?.pathname || "/"


    const navigate = useNavigate()



    
    const handleGoogleSingup =()=>{
        const provider = new GoogleAuthProvider()

        googleSingup(provider)
        .then((res)=>{
            const user = res.user
            console.log(user)
            navigate(from, {replace: true})

        })
        .catch(e => console.error(e)) 
    }

    const githubProvider=new GithubAuthProvider()


    const handleGithub = ()=>{
        singInGithub(githubProvider)
        .then(()=>{
            toast.success('Successfully login') 
            navigate(from, {replace: true})
        })
        .catch(e=>console.error(e))
    }


    const handleSignin =(e)=>{
        e.preventDefault()
        const form = e.target
        const email = form.email.value 
        const password = form.password.value 
        console.log(email, password)

        login(email, password)
        .then((res)=>{
            console.log(res.user)
           
            setError('')
            form.reset()
            toast.success('Successfully login')    
            navigate(from, {replace: true})
        })
        .catch(e=>{
            console.error(e)
            setError(e.message)
        })
    }



    return (
        <div>
            <div className="">
                <div className="hero-content flex-col">
                    <div className="card flex-shrink-0  w-full max-w-lg shadow-2xl bg-base-100">
                    <h1 className="text-3xl text-center font-bold mt-5">Login now!</h1>

                       <form onSubmit={handleSignin} className="card-body">
                           <div className="form-control">
                                <label className="label">
                                  <span className="label-text">Email</span>
                                </label>
                                <input name="email" type="email" placeholder="email" className="input input-bordered" />
                           </div>
                                <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name="password" type="password" placeholder="password" className="input input-bordered" />

                                    <p className='my-2 text-red-600'>{error}</p>

                            </div>

                                <button type="submit" className="btn btn-primary ">Login</button>



                            <div>
                            <p>Or</p>
                            
                            <Link onClick={handleGoogleSingup} className="form-control mt-6">
                                <button className="btn btn-outline "> <FaGoogle className='mr-3 text-blue-400 text-2xl'></FaGoogle> Continue with google</button>
                            </Link>


                            <Link className="form-control mt-6">

                                <button onClick={handleGithub} className="btn btn-outline "> <FaGithub className='mr-3 text-green-400 text-2xl'></FaGithub>   Continue with github</button>
                            </Link>
                        </div>
                         <p>New to It education? Please <Link to="/register" className='text-blue-600'>Register</Link></p>
                        </form>

                        

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;