import { Fragment, useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import GlobalStyle from "./Styles/GlobalStyle";
import ItemSection from "./Components/ItemSection";

// eslint-disable-next-line react-refresh/only-export-components
export const BASE_URL = "http://localhost:9000";
const App = () => {
  const [data, setDate] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [loading, setLoding] = useState(false);
  const [error, setError] = useState("");
  const [selectedBtn, setSelectedBtn] = useState("all");

  useEffect(() => {
    const fatchFoodData = async () => {
      setLoding(true);
      try {
        const response = await fetch(BASE_URL);
        const jsonData = await response.json();
        setDate(jsonData);
        setSearchData(jsonData);
        setLoding(false);
      } catch (err) {
        setError(`Failed to fetch data. ${err}`);
      }
    };

    fatchFoodData();
  }, []);

  const searchFood = (e) => {
    const searchValue = e.target.value;

    if (searchValue === "") {
      setSearchData(null);
      return;
    }

    const filter = data.filter((food) =>
      food.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setSearchData(filter);
  };

  const filterFoods = (type) => {
    if (type === "all") {
      setSearchData(data);
      setSelectedBtn("all");
      return;
    }
    const filter = data.filter((food) =>
      food.type.toLowerCase().includes(type.toLowerCase())
    );
    setSearchData(filter);
    setSelectedBtn(type);
  };

  if (error) return <h2>{error}</h2>;
  if (loading) return <h2>Loading....</h2>;
  return (
    <Fragment>
      <GlobalStyle />
      <Navbar searchFood={searchFood} filterFoods={filterFoods} />
      <ItemSection foods={searchData} />
    </Fragment>
  );
};

export default App;
