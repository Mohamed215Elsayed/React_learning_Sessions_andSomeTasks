// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import './Users.css';
// const SingleUser = () => {
//   const { id } = useParams();
//   const [users, setUsers] = useState({});
//   const api_url_usr = `https://dummyjson.com/users/${id}`;

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(api_url_usr);
//         setUsers(response.data);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchData();
//   }, [id, api_url_usr]);

//   return (
//     <div className="container">
//       {users.length > 0 && (
//         users.map((el) => (
//           <div key={el.id} className="user">
//             <img src={el.image} alt={el.title} />
//             <h4>{el.firstName} {el.maidenName} {el.lastName}</h4>
//             <p>{el.email}</p>
//           </div>
//         ))
//       )
//       //  : (
//       //   <div className="user">
//       //     <h4>Loading user data...</h4>
//       //   </div>
//       // )
//       }
//     </div>
//   );
// };

// export default SingleUser;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './Users.css';

const SingleUser = () => {
  const { id } = useParams();
  const [users, setUsers] = useState({});
  const api_url_usr = `https://dummyjson.com/users/${id}`;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(api_url_usr);
        setUsers([response.data]); // Wrap the response data in an array
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id, api_url_usr]);

  return (
    <div className="container">
      {users.length > 0 ? (
        users.map((el) => (
          <div key={el.id} className="user">
            <img src={el.image} alt={el.title} />
            <h4>{el.firstName} {el.maidenName} {el.lastName}</h4>
            <p>{el.email}</p>
          </div>
        ))
      )
        : (
          <div className="user">
            <h4>Loading user data...</h4>
          </div>
        )}
    </div>
  );
};

export default SingleUser;