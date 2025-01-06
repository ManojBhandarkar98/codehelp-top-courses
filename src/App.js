import React from "react";
import { filterData } from "./data";
import Navbar from "./component/NavBar";
import Filter from "./component/Filter";

const App = () => {
  
  return (
    <div>
      <Navbar />
      <Filter filterData={filterData} />
      
    </div>
  );
};

export default App;
