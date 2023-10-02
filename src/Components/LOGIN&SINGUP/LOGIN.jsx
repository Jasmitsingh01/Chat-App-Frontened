import React, { useState } from "react";
import CSS from "../STYLE/Login.module.css";
import Img from "../IMAGES/meetme.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
let user;
function LOGIN() {
  const [Error, setError] = useState("");
  const Navigate = useNavigate();
  const Login = async(e) => {
    e.preventDefault();

    const Data = {
      Email: e.target.email.value,
      Password: e.target.Password.value,
    };
    user={
      name:Data.Email,
    }
const Send=await axios.post("http://localhost:8000/login",Data)
if(Send.data.operation==='true'){
  localStorage.setItem('Auth',Send.data.Token)
  Navigate('/App');
}
else{
  setError("Please try Again")
}
  };
  return (
    <div className={CSS.MAIN}>
      <div>{Error}</div>
      <div className={CSS.LOGOSECTION}>
        <h1>JS CHAT'S</h1>
        <img src={Img} alt="LoGO" className={CSS.LOGO} />
      </div>
      <form
        className={CSS.form}
        onSubmit={(e) => {
          Login(e);
        }}
        method="post"
      >
        <label htmlFor="email" className={CSS.label}>
          Email
        </label>
        <input type="email" name="email" className={CSS.input} required />
        <label htmlFor="Password" className={CSS.label}>
          Password
        </label>
        <input type="Password" name="Password" className={CSS.input} required />
        <button type="submit" className={CSS.button}>
          LOGIN
        </button>
      </form>
      <Link to={'/singup'} style={{color:'white',textAlign:'center'}}>singup</Link>
    </div>
  );
}

export default LOGIN;
export {user};