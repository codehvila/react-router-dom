import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import Post from "./pages/Post";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1>My Blog</h1>
          <NavLink end to="/">
            Home
          </NavLink>
          <NavLink to="/posts">Posts</NavLink>
          <NavLink to="/about">About Our</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          <Route path={`/posts/:postId`} element={<Post />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
