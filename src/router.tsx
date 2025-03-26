import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import App from "./App";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import PageNotFound from "./components/PageNotFound";

export const router = createBrowserRouter([
  { path: "/", element: <App />, errorElement: <PageNotFound />, },
  { path: "/register", element: <RegisterPage /> },
  { path: "/login", element: <LoginPage /> },

]);
