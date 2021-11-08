import React from "react"
import "./css/uifonts.css";
import "./css/props.css";
import "./css/App.css";


// screens

import Header from "./screens/header";

import Sidebar from "./screens/sidebar";

import HomePage from "./screens/home";

import Rightbar from "./screens/rightbar";

import CoursePage from "./screens/course";
// screen


function App() {
  return (
<div className="App flex">
    <Sidebar />
    <div className="app-content">
    <CoursePage />
    </div>
</div>
  );
}



{/* <div className="App flex">
<Sidebar />
<div className="app-content">
<HomePage />
</div>
<Rightbar />
</div> */}



//  demofbbb
// function App() {
//   //<Rightbar />
//   return (
//   );
// }

export default App;
