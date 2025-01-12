import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CarDetailsPage from "./pages/CarDetailPage";
import CreatorDashboard from "./pages/CreatorDashboard";
import ProfilePage from "./pages/ProfilePage";
import PaymentPage from "./pages/PaymentPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/car/:id" element={<CarDetailsPage />} />
        <Route path="/dashboard" element={<CreatorDashboard />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/payment" element={<PaymentPage />} />
      </Routes>
    </Router>
  );
}

export default App;
