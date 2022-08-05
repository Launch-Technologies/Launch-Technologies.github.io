import { GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import { googleAuthClientId, useAuth } from './auth';
import { getRoutesBaseRoles } from './routes';

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
