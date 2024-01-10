// import "./App.css";
// // import Form from './Components/Session 4/Form';
// // import Products from "./Components/Session 4/Products";
// import UpdateComponent from './Components/Session 4/UpdateComponent';
// function App() {
//   return (
//     <div className="App">
//       {/* <Form/> */}
//       {/* <Products /> */}
//       <UpdateComponent/>
//     </div>
//   );
// }
// export default App;
/************************************* */
// import React from "react";
// import "./App.css";
// import Toolbar from "./Components/Session5/Toolbar";
// const ThemeContext = React.createContext('light')
// class App extends React.Component {
// //   render() {
// //     return <Toolbar theme="dark" />;
// //   }
// // }
// render() {
// return (<ThemeContext.Provider value="dark">
// <Toolbar />
// </ThemeContext.Provider>
//   )
// }
// }
// export default App;
/********************secrion5 */
// import "./App.css";
// import ComponentA from "./Components/Session5/ComponentA";
// // import ComponentB from "./Components/Session5/ComponentB";
// // import ComponentC from "./Components/Session5/ComponentC";
// // import ComponentD from "./Components/Session5/ComponentD";
// import {UserProvider} from "./Components/Session5/UserContext";
// function App() {
//   const username ="MOhamed";
//   return (
//     <div className="App">
//       <UserProvider value={username}>
//       <ComponentA  />
//       </UserProvider>
//     </div>
//   );
// }
// export default App;
/********Routing******* */
import "./App.css";
import Home from "./Components/Session5/Home";
import About from "./Components/Session5/About";
import { Routes, Route } from "react-router-dom";
import Nav from "./Components/Session5/Nav";
import PNF from "./Components/Session5/PNF";
import Products from "./Components/Session5/Products";
import FeaturedProducts from "./Components/Session5/FeaturedProducts";
import NewProducts from "./Components/Session5/NewProducts";
import Users from "./Components/Session5/Users";
import SingleUser from "./Components/Session5/SingleUser";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<PNF />} />

        <Route path="/products" element={<Products />}>
        <Route path="new" element={<NewProducts />} />
        <Route path="featured" element={<FeaturedProducts />} />
        </Route>

        <Route path="/users" element={<Users />} />

        <Route path="/users/:id" element={<SingleUser />} />
        </Routes>
    </div>
  );
}
export default App;

