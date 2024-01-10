// import React,{useState} from 'react'
// import './form.css'
// const Form = () => {
//     const [fName , setFname] = useState(``);
//     const [lName , setLname] = useState(``);
//     const [email , setEmail] = useState(``);
    // const [outPut , setOutput] = useState(``)
    // const showData = () =>{
    //             setOutput(`${fName} ${lName} ${email}`)
    //         }
//   return (
//     <>
//     <div className='form'>
//     <input type='text' value={fName} placeholder='First Name' onChange={(e) => setFname(e.target.value)}/>
//     <input type='text' value={lName} placeholder='Last Name' onChange={(e) => setLname(e.target.value)} />
//     <input type='email' value={email} placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
//     <button>Submit Data </button>
//     <h1>{fName} {lName} {email}</h1>
//      {/*1 */}
//     {/* <button onClick={showData}>Submit Data </button>
//     <h1>{outPut}</h1> */}
//     </div>
//     </>
//   )
// }

// export default Form;
/******************************** */
import React, { useState } from 'react';
import './form.css';
const Form = () => {
  const [user, setUser] = useState({
    fname: '',
    lname: '',
    email: '',
  });
  const [output, setOutput] = useState('');
  const showData = () => {
    const { fname, lname, email } = user;
    setOutput(`${fname} ${lname} ${email}`);
  };

  return (
    <>
      <div className='form'>
        <input
          type='text'
          value={user.fname}
          placeholder='First Name'
          onChange={(e) => {
            setUser({ ...user, fname: e.target.value });
          }}
        />
        <input
          type='text'
          value={user.lname}
          placeholder='Last Name'
          onChange={(e) => {
            setUser({ ...user, lname: e.target.value });
          }}
        />
        <input
          type='text'
          value={user.email}
          placeholder='Email'
          onChange={(e) => {
            setUser({ ...user, email: e.target.value });
          }}
        />
        <button onClick={showData}>Submit Data</button>
        <h1>{output}</h1>
      </div>
    </>
  );
};

export default Form;