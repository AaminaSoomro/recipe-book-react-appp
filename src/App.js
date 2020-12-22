import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Recipes from "./components/Recipe";
import Axios from "axios";

function App() {
  const [search, setSerach] = useState("chicken");
  const [recipes, setRecipes] = useState([]);

  const APP_ID = "d4b81b97";
  const APP_KEY = "5ee1d86ff984135b26a92c81892256bc	";

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const res = await Axios.get(
      `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    setRecipes(res.data.hits);
  };

  const onInputChange = e => {
    setSerach(e.target.value);
  };

  const onSearchClick = () => {
    getRecipes();
  };
  return (
    <div className="App">
      <Header
        search={search}
        onInputChange={onInputChange}
        onSearchClick={onSearchClick}
      />
      <div className="container">
        <Recipes recipes={recipes} />
      </div>
    </div>
  );
}

export default App;