import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Blogs from "./component/Blogs";
import Contact from "./component/Contact";
import Error from "./component/Error";
import Navigation from "./component/Navigation";
import Blog from "./component/Blog";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        {/* navbar */}
        <Navigation />
        {/* Routing */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:title" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
