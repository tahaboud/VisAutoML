import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dataset from "./pages/Dataset";
import Home from "./pages/Home";
import Model from "./pages/Model";
import Review from "./pages/Review";
import Select from "./pages/Select";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dataset" element={<Dataset />} />
        <Route path="/review" element={<Review />} />
        <Route path="/select" element={<Select />} />
        <Route path="/model" element={<Model />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
