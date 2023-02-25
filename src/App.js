import { Route, Routes } from "react-router-dom";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import "./App.css";

const App = () => {
  return (
    <div className="App container">
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Blog />} path="/blog/:id" />
      </Routes>
    </div>
  );
};

export default App;
