import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import App from "./App";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import GamesPage from "./pages/GamesPage";
import SelectedGamePage from "./pages/SelectedGamePage";
import ProfilePage from "./pages/ProfilePage";
import LuckyWorldCupPage from "./pages/LuckyWorldCupPage";

export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { 
    path: "/games", 
    element: <GamesPage />,
    children: [
      { path: ":gameId", element: <SelectedGamePage /> },
    ],
  },
  { path: "/Games/LuckyWorldCup", element: <LuckyWorldCupPage /> },
  { path: "/register", element: <RegisterPage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/profile", element: <ProfilePage /> },
]);
