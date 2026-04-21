import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import HistoryPage from "./pages/HistoryPage"; // ✅ ADD THIS

function App() {
  const token = localStorage.getItem("token");

  return (
    <BrowserRouter>
      <Routes>

        {/* Protected Route */}
        <Route
          path="/"
          element={token ? <Home /> : <Navigate to="/login" />}
        />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected History */}
        <Route
          path="/history"
          element={token ? <HistoryPage /> : <Navigate to="/login" />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;