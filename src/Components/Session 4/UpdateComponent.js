// import React, { useState , useEffect} from 'react'

// const UpdateComponent = () => {
//     const [count , setCount] = useState(0);
//     // useEffect(() => {
//     //     document.title = `Clicked ${count} times`;
//     // });
//     const changeCount = () => {
//         setCount(count + 1);
//     }
//     const [x , setX] = useState(0);
//     const [y , setY] = useState(0);
//     useEffect(() => {
//         const logMousePosition = (e) => {
//             setX(e.clientX);
//             setY(e.clientY);
//         }
//         window.addEventListener('mousemove' , logMousePosition);
//         return () => {
//             window.removeEventListener('mousemove' , logMousePosition);
//         }
//     });


//   return (
//     <>
//     {/* <button onClick={() => setCount(count + 1)}>Click</button> */}
//     <h1>Click {count} Times</h1>
//     <button onClick={() => changeCount()}>Click</button>
//     <h2>X-- {x} ---- Y----- {y}</h2>
//     </>
//   )
// }
// export default UpdateComponent;

/********************** */
import React, {  useEffect, useState } from "react";
import "./nav.css";
const UpdateComponent = () => {
//=============================================
  const [X, setX] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      let windowScroll = window.scrollY;
    //   console.log(windowScroll);
      windowScroll > 900 ? setX(true) : setX(false);
    });
  });
//=============================================
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 3000);
//=============================================
  return (
    <>
    {/* <div  className='loading' style={loading ? {display : 'none'} :{display : 'flex'}}>
    <span className="loader"></span>
    </div> */}
      {loading ? (
        <section className="loading"><span className="loader"></span></section>
      ) : undefined}
      <header className={X ? "headerStyle": undefined}>
        <nav>
          <span>Logo</span>
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>About</li>
            <li>Contact Us</li>
          </ul>
        </nav>
      </header> 
    </>
  );
};
export default UpdateComponent;