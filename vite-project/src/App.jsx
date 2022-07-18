import "./App.css";
import { useFetch } from "./services/useFetch";
import { useState } from "react";
import { useEffect } from "react";
import { Card } from "./components/Card/Card";
import { Header } from "./layout/Header";

function App() {
  const LINK = "https://fakestoreapi.com/products";
  const [storeData, setStoreData] = useState([]);

  const { data } = useFetch(LINK);

  useEffect(() => {
    setStoreData(data);
  }, [data]);

  return (
    <div className="App">
      <Header />
      <div className="card_wrapper w-full">
        {storeData?.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default App;
