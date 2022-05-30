import { Routes, Route } from "react-router-dom";
import Catalog from "../components/Catalog";
import Home from "../pages/Home";

function RoutesPage() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:category" element={<Catalog />} />
      <Route path="/:category/search/:keyword" element={<Catalog />} />
    </Routes>
  );
}

export default RoutesPage;
