import React, { useState } from 'react'
import Css from '../STYLE/Singup.module.css'
import Img from "../IMAGES/meetme.png";
import axios from 'axios';
import {Link} from'react-router-dom'
function SINGUP() {
  const [Error, setError] = useState("");

  const singup=async(e)=>{
    e.preventDefault();
    const Data = {
      Email: e.target.email.value,
      Password: e.target.Password.value,
      Contact: e.target.contact.value,
    };
    const Send= await axios.post('http://localhost:8000/singup',Data);
    if(Send.data.operation==='true'){
       
      setError("Singup Successfully")
    }
    else{
      setError("Singup Failed")
    }
  }
  return (
    <div className={Css.main}>
     <div>{Error}</div>
      <div className={Css.LOGOSECTION}>
      <h1>JS CHAT'S</h1>

        <img src={Img} alt="LoGO" className={Css.LOGO} />
      </div>
      <form className={Css.form} onSubmit={(e)=>{singup(e)}} method="post">
      <label htmlFor="email" className={Css.label}>Email</label>
      <input type="email" name="email" className={Css.input} required />
      <label htmlFor="contact" className={Css.label}>Contact No</label>
      <input type="tel" name="contact" className={Css.input}    required/>
      <label htmlFor="Password" className={Css.label}>Password</label>
      <input type="Password" name="Password" className={Css.input}  required/>

      <button type="submit" className={Css.button} >
        Sinup
      </button>
      </form>
      <Link to={'/'} style={{color:'white',textAlign:'center'}}>login</Link>

    </div>
  )
}

export default SINGUP