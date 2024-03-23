import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import '../App.css';
function Email() {
  const [state, handleSubmit] = useForm("myyrdvjw");
  if (state.succeeded) {
      return <p style={{fontSize: "20px", color: "teal", fontWeight: "bold"}}>Thanks for joining!</p>;
  }
  return (
      <form onSubmit={handleSubmit}>
          <input 
          style={{border: "4px solid teal"}}
        className='input-box'
        placeholder="Enter Name"
        id="name"
        type="name" 
        name="name"
      />
      {/* <label htmlFor="email" style={{display: "block",}}>
      </label> */}
      <input
       style={{border: "4px solid teal"}}
        className='input-box'
        placeholder=" Enter Email"
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix=" Enter Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
       style={{border: "4px solid teal"}}
        placeholder="Message"
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button className='btn-box' style={{display: "block", textAlign: "center"}} type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}
export default Email