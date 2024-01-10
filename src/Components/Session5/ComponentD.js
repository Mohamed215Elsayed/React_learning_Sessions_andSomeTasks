import React from 'react';
import {UserConsumer} from "./UserContext";
const ComponentD = () => {
  return (
    <UserConsumer>
        {(val) => <h1>Hello {val} from ComponentD</h1>}
    </UserConsumer>
  )
}

export default ComponentD;