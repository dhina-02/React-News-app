import { useState } from "react";
import NavBar from "./components/NavBar";
import NewsBoard from "./components/NewsBoard";

const App = () => {
  const [category,setCategory] = useState("general")
  return (
    <div className="news-page">
      <NavBar setCategory={setCategory} />
      <NewsBoard category={category} />
    </div>
  );
};

export default App;
