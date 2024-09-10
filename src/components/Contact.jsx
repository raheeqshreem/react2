import { useState } from "react";

export default function Contact() {
    const [formInputs,setFormInput] = useState({
      name:"",
      email:"",
      age:"",
    });

    const handleChange = (e)=>{
const {name,value} = e.target
setFormInput
({...formInputs,
  [name]:value ,
})
    }
const submitForm = (e)=>{
e.preventDefault();
console.log(formInputs)

}

    return (
      <>
      <form onSubmit={submitForm}>
        <label>User Name </label>
        <input type="text" value={formInputs.name}  name ='name' onChange={handleChange} />
  
        <label>Email </label>
        <input type="email" value={formInputs.email}  name ='email' onChange={handleChange} />
        <label>Age </label>
        <input type="text" value={formInputs.age} name ='age' onChange={handleChange} />
  
        <hr />
        <button type='submit'>Submit</button>

       
      </form>
      </>
    )
  }