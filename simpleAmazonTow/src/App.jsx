import { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import AllProdcuts from "./Components/Products/AllProducts/AllProdcuts";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header></Header>
      <AllProdcuts></AllProdcuts>
    </div>
  );
}

export default App;
