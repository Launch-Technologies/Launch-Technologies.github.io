import { BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import { GoogleOAuthProvider } from "@react-oauth/google";
import { getRoutesBaseRoles } from './routes';
import { googleAuthClientId, useAuth } from "./auth";

function App() {
  const [logged] = useAuth();
  const allRoutes = getRoutesBaseRoles(logged);

  return (
    <>
      <GoogleOAuthProvider clientId={googleAuthClientId()}>
        <BrowserRouter>
          <Routes>{allRoutes}</Routes>
        </BrowserRouter>
      </GoogleOAuthProvider>
    </>
  );
}

export default App;
