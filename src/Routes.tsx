import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Hero } from "./pages/Hero";

export function RoutesComponent() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<Hero />} />
    </Routes>
  );
}
