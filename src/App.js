import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Movie from "./components/Movie";
import Detail from "./routes/Detail";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Movie/:id" element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;
