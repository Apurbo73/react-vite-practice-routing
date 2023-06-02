
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Blogs from "./component/Blogs";
import Contact from "./component/Contact";
import Error from "./component/Error";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<Error />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
