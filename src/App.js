import { BrowserRouter, Routes, Route } from "react-router-dom";
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
          <a href="/">Home</a>
          <a href="/posts">Posts</a>
          <a href="/about">About Our</a>
          <a href="/contact">Contact</a>
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
