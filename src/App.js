import React, { useEffect, useState } from "react";
import { apiUrl, filterData } from "./data";
import Navbar from "./component/Navbar";
import Filter from "./component/Filter";
import Cards from "./component/Cards";
import { toast } from "react-toastify";

const App = () => {
   const [courses, setCourses] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(apiUrl);
        const json = res.json();
        //save data into variable
        setCourses(json.data);
      }
      catch (error) {
        toast.error("Something went wrong"); 
      }
    }
    fetchData();
  },[]);

  return (
    <div>
      <Navbar />
      <Filter filterData={filterData} />
      <Cards apiUrl={courses} />
    </div>
  );
};

export default App;
