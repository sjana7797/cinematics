import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

function RoutesPage() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default RoutesPage;
