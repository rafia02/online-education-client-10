import React, { useContext } from 'react';
import { Link,  useNavigate } from 'react-router-dom';
import { AuthContex } from '../../Contaxt/AuthProvider';
import toast from 'react-hot-toast';


const Register = () => {

    const {createRegistar, profileUpdate} = useContext(AuthContex)


    const navigate = useNavigate()




    const handleRegister = (e)=>{
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value 
        const password = form.password.value 
        const photourl = form.photourl.value 
        console.log(email, name, password, photourl)

         createRegistar(email, password)
         .then(res=>{
            const user = res.user
            console.log(user)
            handleUpdate(name, photourl)
            form.reset()
            toast.success('Successfully sign up')   
            navigate('/')
         })
         .catch(e=> {
            console.error(e)
         })

    }

    const handleUpdate =(name, photourl)=>{
        const profile ={
            displayName: name,
            photoURL: photourl
        }

        profileUpdate(profile)
        .then(()=>{})
        .catch(e=>{
            console.error(e)
        })
    }


    


    return (
        <div className=''>
            <div className="">
                <div className="hero-content flex-col">
                    <div className="card flex-shrink-0 w-full  max-w-lg shadow-2xl bg-base-100">
                    <h1 className="text-3xl font-bold mt-5">Register now!</h1>

                       <form onSubmit={handleRegister} className="card-body">

                            <div className="form-control">
                                <label className="label">
                                  <span className="label-text">Name</span>
                                </label>
                                <input name="name" type="text" placeholder="Name" className="input input-bordered" />
                           </div>

                           <div className="form-control">
                                <label className="label">
                                  <span className="label-text">Photo URl</span>
                                </label>
                                <input name="photourl" type="text" placeholder="Photo URL" className="input input-bordered" />
                           </div>

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
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>


                                <button type="submit" className="btn btn-primary">Register</button>
    

                            <p>Already have an account? Please <Link to="/login" className='text-blue-600'>Log in</Link></p>

                        </form>
                        
                       
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;