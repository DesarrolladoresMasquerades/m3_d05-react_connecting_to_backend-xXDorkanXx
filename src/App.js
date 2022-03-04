import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import ApartmentsPage from "./pages/ApartmentsPage";
//import AddApartmentPage from "./pages/AddApartmentPage";
import ApartmentDetailPage from "./pages/ApartmentDetailPage";
import ApartmentEditPage from "./pages/ApartmentEditPage";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route exact path="/apartments/:apartmentId/edit" element={<ApartmentEditPage />} />
        <Route exact path="/apartments/:apartmentId" element={<ApartmentDetailPage />} />
        <Route exact path="/" element={<ApartmentsPage />} />
      </Routes>
    </div>
  );
}

export default App;
