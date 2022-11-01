import React, {useState} from 'react';
import {NavLink, useNavigate } from 'react-router-dom';
const Signup = () => {
  const navigate = useNavigate();

 
 const[user,setUser] = useState({
name: "",email:"",phone: "",password: "",cpassword: ""
 });
  
let name, value;
 const handleInputs = (e) => {
  console.log(e);
  name = e.target.name;
  value = e.target.value;

  setUser({...user,[name]:value});
 }
  const PostData = async (e) => {
  e.preventDefault();
  const { name,email,phone,password, cpassword} = user;
  const res = await fetch("/register", {
    method: "POST", 
    headers : {
        "Content-Type" : "application/json"
    },
    body: JSON.stringify({
      name,email,phone,password, cpassword
    })
});
const data = await res.json();
if (res.status === 422 || !data) {
    window.alert("Invalid Registration");
    console.log("Invalid registration");
} else {
    window.alert("successfull");
    console.log("successful");

    navigate('/Login');
}
  } 

 
  
  return ( 
        <div>
     <form method="POST" className="register-form" id="register-form">
     <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Name</label>
    <input type="text" class="form-control" name="name" id="name" aria-describedby="emailHelp"
     value = {user.name}
     onChange={handleInputs}/>
    <div id="emailHelp" class="form-text"></div>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" name = "email" id="email" aria-describedby="emailHelp" 
    value = {user.email}
    onChange={handleInputs}/>
    <div id="emailHelp" class="form-text"></div>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Phone Number</label>
    <input type="number" class="form-control" name="phone" id="phone" aria-describedby="emailHelp"
     value = {user.phone}
     onChange={handleInputs}/>  
    <div id="emailHelp" class="form-text"></div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" name="password" id="password"
     value = {user.password} 
     onChange={handleInputs}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">confirm Password</label>
    <input type="password" class="form-control" name = "cpassword" id="cpassword"
     value = {user.cpassword} 
     onChange={handleInputs}/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <div>
    <input type="submit" name="signup" id ="signup"
    Value = "Register" onClick={PostData}
    />
  </div>
</form>
        </div>
     );
}
 
export default Signup;
