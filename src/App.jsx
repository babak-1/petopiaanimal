import { useEffect } from "react";
import "./App.css";
import Layout from "./Layout";

function App() {
  useEffect(() => {
    localStorage.setItem("search", JSON.stringify({ city: null, query: null }));
  }, []);
  return (
    <div>
      <Layout />
    </div>
  );
}

export default App;
