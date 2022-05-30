import { Routes, Route } from "react-router-dom";
import Catalog from "../pages/Catalog";
import Details from "../pages/Details";
import Home from "../pages/Home";

function RoutesPage() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:category" element={<Catalog />} />
      <Route path="/:category/search/:keyword" element={<Catalog />} />
      <Route path="/:category/:id" element={<Details />} />
    </Routes>
  );
}

export default RoutesPage;
