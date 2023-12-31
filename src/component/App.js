import React from "react";
import Footer from "./Footer";
import AddToDo from "../containers/Addtodo";
import VisibleToDoList from "../containers/VisibleToDoList";

const App = () => (
  <div>
    <AddToDo />
    <VisibleToDoList />
    <Footer />
  </div>
);

export default App;
