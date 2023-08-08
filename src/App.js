import NavBar from "./components/common/NavBar";
import Home from "./home/Home";
import Recipes from "./home/Recipes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeDetails from "./components/common/RecipeDetails";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes/:recipeId" element={<RecipeDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
