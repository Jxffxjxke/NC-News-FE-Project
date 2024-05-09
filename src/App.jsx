import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ArticlePage from "./pages/ArticlePage";
import NavBar from "./components.jsx/NavBar";
import Login from "./components.jsx/Login";

function App() {

  return (
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/articles/:article_id"
            element={<ArticlePage/>}
          />
          <Route
            path="/login"
            element={<Login/>}
          />
        </Routes>
      </Router>
  );
}

export default App;
