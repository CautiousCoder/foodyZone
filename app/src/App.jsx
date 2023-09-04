import { Fragment, useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import GlobalStyle from "./Styles/GlobalStyle";
import ItemSection from "./Components/ItemSection";

// eslint-disable-next-line react-refresh/only-export-components
export const BASE_URL = "http://localhost:9000";
const App = () => {
  const [data, setDate] = useState([]);
  const [loading, setLoding] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fatchFoodData = async () => {
      setLoding(true);
      try {
        const response = await fetch(BASE_URL);
        const jsonData = await response.json();
        console.log(jsonData);
        setDate(jsonData);
        setLoding(false);
      } catch (err) {
        setError(`Failed to fetch data. ${err}`);
      }
    };

    fatchFoodData();
  }, []);

  if (error) return <h2>{error}</h2>;
  if (loading) return <h2>Loading....</h2>;
  return (
    <Fragment>
      <GlobalStyle />
      <Navbar />
      <ItemSection foods={data} />
    </Fragment>
  );
};

export default App;
