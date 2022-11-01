import React, {useContext, useState} from 'react';
import { NavLink , useNavigate} from 'react-router-dom';
import { UserContext } from '../App';

const Login = () => {

    const {state, dispatch} = useContext(UserContext);

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const LoginUser = async (e) => {
        e.preventDefault();

        const res = await fetch('/signin', {
            method: "POST",
            headers : {
                "Content-Type":"application/json" 
            },
            body:JSON.stringify({
                email, password
            })
        });

        const data = await res.json();

        if (res.status === 400 || !data) {
            window.alert("Invalid credientials");

        } else {
            dispatch({type:"USER", payload:true})
            window.alert("Login successfull");
            navigate('/');
        }
    }

    // function myFunction() {
    //     var x = document.getElementById("password");
    //     if (x.type === "password") {
    //       x.type = "text";
    //     } else {
    //       x.type = "password";
    //     }
    //   }
  return (
    <>
    <section className="vh-100" >
            <div className='container py-5 h-100'>
                <div className='row d-flex align-items-center justify-content-center h-100'>
                <div class="col-md-8 col-lg-7 col-xl-6">
      </div>
                    <div className='col-md-7 col-lg-5 col-xl-5 offset-xl-1'>
                        <h2 className='form-title'>Sign-in</h2>
                        <form method = "POST" className='register-form' id='register-form'>
                    
                            
                            <div className="form-outline mb-4">
                                {/* <label htmlFor="email">Email</label> */}
                                <label class="form-label" for="form1Example13">Email address</label>
                                <input type="text" name = "email" className="form-control form-control-lg" id="email" aria-describedby="emailHelp" 
                                 value = {email}
                                 onChange = {(e) => setEmail(e.target.value)}
                                 placeholder="Enter Email"/>
                                {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                            </div>
                            
                            
                            <div className="form-outline mb-4">
                                {/* <label htmlFor="password">Password</label> */}
                                <label class="form-label" for="form1Example23">Password</label>
                                <input type="password" name='password' className="form-control form-control-lg" id="password" 
                                value={password}
                                onChange = {(e) => setPassword(e.target.value)}
                                 placeholder="Password"/>
                                 {/* <input type="checkbox" onclick={myFunction}/>Show Password */}
                            </div>

                            <div className='form-group form-buton' >
                                <input type = "submit" name = "signin" id = "signin" className='btn btn-primary btn-lg btn-block' 
                                value = "Log in" 
                                onClick = {LoginUser}
                                />
                            </div>
                            <p style={{color:"black", fontWeight:"bold"}}>Forgot Password <NavLink to = "/password-reset">Click Here</NavLink></p>
                        
                        
                        
                        </form>
                    </div>
                    <NavLink to = "/Signup" className="signin-image-link" >Not register yet</NavLink> 
                </div>
            </div>
        </section>
    </>
  )
}

export default Login;