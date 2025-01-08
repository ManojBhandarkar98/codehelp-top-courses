import { toast } from "react-toastify";
import { apiUrl, filterData } from "./data";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { useEffect, useState } from "react";
import Spinner from "./components/Spinner";

const App = () => {

  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true)

  async function fetchData() {
    setLoading(true);
    try {
      let response = await fetch(apiUrl);
      let output = response.json();
      setCourses(output.data);

    }
    catch (error) {
      toast.error("Network error")
    }
    setLoading(false);
  }
  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Filter filterData={filterData} />
      </div>
      <div>
        {
          loading ? <Spinner /> : <Cards courses={courses} />
        }

      </div>

    </div>
  );
};

export default App;
