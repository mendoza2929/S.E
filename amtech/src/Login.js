
import './Login.css'
import {Link } from "react-router-dom";



function Login() {

    


    return (
        <div className='login'>
            <Link to ='/'>
            <img className="login_logo" src="/assets/fclogo.png" alt=""/>
            </Link>
            <div className='login_container'>
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text"/>
                    <h5>Password</h5>
                    <input type="password"/>

                    <button className="login_signbutton">Sign In</button>
                
                </form>
                <p>By signing-in you agree to the FurballsCorner Condition.</p>
                 <button className='login_register'>Create your Furballs Account</button>
            </div>


        </div>
    )
}

export default Login
