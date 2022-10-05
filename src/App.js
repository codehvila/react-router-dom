import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Posts from "./pages/Posts";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1>My Blog</h1>
          <Link to="/">Home</Link>
          <Link to="/posts">Posts</Link>
          <Link to="/about">About Our</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
