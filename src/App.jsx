import { useState } from "react";
import ArticlesList from "./components.jsx/ArticlesList";
import NavBar from "./components.jsx/NavBar";

function App() {
  const [topic, setTopic] = useState("");
  return (
    <>
      <NavBar />
      <ArticlesList topic={topic} />
    </>
  );
}

export default App;
