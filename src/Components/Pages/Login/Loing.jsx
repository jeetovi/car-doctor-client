 import { Link } from 'react-router-dom';
import img from '../../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvide';
const Loing = () => {
    const {signInUser } = useContext(AuthContext)

const handleLoginSubmit = event =>{
    event.preventDefault()
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password)
    
    signInUser(email,password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
}


    return (
        <div>
            
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row ">
    <div className=" mr-10  w-1/2">
  
  <img src={img} alt="" />
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
      <h1 className="text-5xl text-center font-bold">Login now!</h1>
       <form onSubmit={handleLoginSubmit}>
       <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" name='email' placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" name='password' placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
      
          <input className='className="btn btn-primary' type="submit" value="Login" />
        
        </div>
       </form>
       <p>New to card Doctors  <Link className='font-bold text-orange-500' to='/signup'>Sign UP </Link></p>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Loing;