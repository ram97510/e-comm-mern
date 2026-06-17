import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import VerifyOTP from "./pages/VerifyOTP";
import Dashboard from "./pages/Dashboard";
import ProductList from "./pages/ProductList";
import RegistrationForm from "./pages/RegistrationForm";
import List from "./pages/List";
import ProtectedRoute from "./components/ProtectedRoute";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/otp" element={<VerifyOTP />} />

        <Route path="/dashboard" element={
          <ProtectedRoute>
            <Layout><Dashboard /></Layout>
          </ProtectedRoute>
        } />

        <Route path="/products" element={
          <ProtectedRoute>
            <Layout><ProductList /></Layout>
          </ProtectedRoute>
        } />

        <Route path="/register" element={
          <ProtectedRoute>
            <Layout><RegistrationForm /></Layout>
          </ProtectedRoute>
        } />

        <Route path="/list" element={
          <ProtectedRoute>
            <Layout><List /></Layout>
          </ProtectedRoute>
        } />

      </Routes>
    </BrowserRouter>
  );
}

export default App;