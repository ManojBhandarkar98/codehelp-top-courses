import { toast } from "react-toastify";
import { apiUrl, filterData } from "./data";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { useEffect, useState } from "react";

const App = () => {

  const [courses, setCourses] = useState(null);
  
  async function fetchData() {
    try {
      let response = await fetch(apiUrl);
      let output = response.json();
      setCourses(output);
      
    }
    catch (error) {
      toast.error("Network error")
    }
  }
  useEffect(()=>{
    fetchData();
  },[])
  console.log(courses);
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Filter filterData={filterData} />
      </div>
      <div>
        <Cards />
      </div>

    </div>
  );
};

export default App;
