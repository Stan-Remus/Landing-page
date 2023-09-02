import React from 'react';
import whatsapp from '../../assets/whatsapp-icon.png';
import chat from '../../assets/Chat.png';
import Input from '../input.component/input.component';
import { useState } from 'react';
import './contact.style.scss';

const Contact = () => {
    const[username, setUsername] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
  
    const [values, setValues] = useState({
      username: "",
      email: "",
      password: "",
      confirmPassword: ""
    });
  
    
  
    const handleSubmit = (e) => {
      e.preventDefault();
    }
    
    const handleChange = (e) => {
      setValues({...values, [e.target.name]: e.target.value})
    }

    const inputs = [
        {
          id:1,
          name:"username",
          type:"text",
          placeholder: "Username",
          label: "Username",
          errorMessage: "Username should be 3-16 characters and shouldn't include any special characters!",
          pattern: "^[A-Za-z0-9]{3,16}$",
          required: true,
        },
        {
          id:2,
          name:"email",
          type:"email",
          placeholder: "Email",
          label: "Email",
          errorMessage: "It should be a valid email address!",
          required: true,
        },
        {
          id:3,
          name:"password",
          type:"password",
          placeholder: "Password",
          label: "Password",
          errorMessage: "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
          pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
          required: true,
        },
        {
          id:4,
          name:"confirmPassword",
          type:"password",
          placeholder: "Confirm Password",
          label: "Confirm Password",
          errorMessage: "Passwords don't match!",
          pattern: values.password,
          required: true,
        }
      ]

  return (
    <div id="contactUs" className='contact-section-container'>
    <div className='contact-top-container'>
        <img src={chat} alt='' />
        <h1 className='contact-title'>Still have doubts? Contact us!!</h1>
        <div className='contact-yellow-line'></div>
    </div>
    <div className='contact-bottom-container'>
      <div className='contact-bottom-left-container'>
        <p className='contact-bottom-email-text'>Offer a direct means of communication. It can be <span className='contact-bottom-span'>contato@email.com.br</span></p>
        <p className='contact-bottom-email-text'>Or create a form on the side to get in touch as soon as possible!</p>
        <div className='contact-whatsapp'>
          <img src={whatsapp} alt='' />
          <p>Hey! We are on whatsapp!</p>
        </div>
      </div>
      <div className='contact-bottom-right-container'>
        <form onSubmit={handleSubmit}>
          {inputs.map((input) => (
            <Input key={input.id} {...input} value={values[input.name]} onChange={handleChange}/>
            ))}
          <button className="contact-send-button">Login</button>
        </form>
      </div>
    </div>
</div>
  )
}

export default Contact