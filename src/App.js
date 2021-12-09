import React from "react";
import Home from "../src/components/pages/Home";
import About from "../src/components/pages/About";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";


export default function App() {
  return (
    <Router>
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/pages/Home">Home</Link>
            </li>
            <li>
              <Link to="/pages/About">About</Link>
            </li>
          </ul>
        </nav> */}

        {/*  <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route exact path="/pages/About" element={<About/>}>
          </Route>
          <Route exact path="/pages/Home" element={<Home/>}>
          </Route>
          
       
        </Routes>
      </div>
    </Router>
  );
}
