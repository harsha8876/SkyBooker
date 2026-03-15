import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import ProtectedRoute from "../components/ProtectedRoute";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import FlightSearch from "../pages/FlightSearch";
import FlightResults from "../pages/FlightResults";
import PassengerDetails from "../pages/PassengerDetails";
import SeatSelection from "../pages/SeatSelection";
import PaymentPage from "../pages/PaymentPage";
import BookingConfirmation from "../pages/BookingConfirmation";
import MyTrips from "../pages/MyTrips";
import NotFound from "../pages/NotFound";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login/*" element={<Login />} />
        <Route path="/register/*" element={<Register />} />
        <Route path="/search" element={<FlightSearch />} />
        <Route path="/results" element={<FlightResults />} />

        <Route
          path="/passenger-details"
          element={
            <ProtectedRoute>
              <PassengerDetails />
            </ProtectedRoute>
          }
        />
        <Route
          path="/seat-selection"
          element={
            <ProtectedRoute>
              <SeatSelection />
            </ProtectedRoute>
          }
        />
        <Route
          path="/payment"
          element={
            <ProtectedRoute>
              <PaymentPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/booking-confirmation"
          element={
            <ProtectedRoute>
              <BookingConfirmation />
            </ProtectedRoute>
          }
        />
        <Route
          path="/my-trips"
          element={
            <ProtectedRoute>
              <MyTrips />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;