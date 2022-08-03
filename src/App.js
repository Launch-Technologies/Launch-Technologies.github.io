import { BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import { getRoutesBaseRoles } from './routes';

function App() {
  const allRoutes = getRoutesBaseRoles(true);

  return (
    <>
      <BrowserRouter>
        <Routes>{allRoutes}</Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
