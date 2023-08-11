import { Routes, Route } from "react-router-dom";
import "./styles.css";
import Navbar from "./components/Navbar";
import Resume from "./pages/resumePage";
import Home from "./pages/homePage";
import About from "./pages/aboutPage";
import Contact from "./pages/contactPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="pHead">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}
export default App;
