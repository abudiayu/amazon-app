import React, {useState} from 'react';
import classes from "./signUp.module.css";
import { Link } from 'react-router-dom';
import {auth} from "../../../Utility/firebase";
import { signInWithEmailAndPassword,createUserWithEmailAndPassword, } from 'firebase/auth';

// must fixxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("")
  // console.log(email,password)


  const authHandler = async (e) => {
    e.preventDefault();
    const action = e.currentTarget.name; // ✔ Safe and correct

    if (action === "signIn") {
      signInWithEmailAndPassword(auth, email, password)
        .then((userInfo) => console.log(userInfo))
        .catch((err) => setError(err.message));
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userInfo) => console.log(userInfo))
        .catch((err) => setError(err.message));
    }
  };

  return (
      <section className={classes.login}>
        <Link>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/603px-Amazon_logo.svg.png"  
            alt="" />
        
        </Link>
        <div className={classes.login_container}>
          <form action="">
            <h1>Sign In</h1>
              <div>
                <label htmlFor="email">Email</label>
                <input 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}  //we call it controled Input 
                    type="email" id='password'  
                    placeholder='abudy@gmail.com'
                />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input 
                    type="password" id='password'
                    onChange={(e)=> setPassword(e.target.value)}
                    />
              </div>
              <button 
                type='submit'
                name='signIn'
                onClick={authHandler}
                className={classes.login_signInButton}>
                  Sign In
                  
              </button>
              {/* create acount */}
              <p>
                By signing in, you agree to Amazones' Terms, 
                Privacy Policy, and Cookie Notice.
              </p>
              <button 
                type='submit'
                name='signUp'
                onClick={authHandler}
                className={classes.login_registerButton}>
                Create Your Amazon Account
              </button>
          </form>
        </div>
      </section>    

  )
}

export default Auth;
