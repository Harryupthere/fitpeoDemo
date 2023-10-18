import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import config from "./config/config";
import Dashboard from "./components/dashboard/dashboard";
function App() {
  return (
    <BrowserRouter>
    <div>
        <Routes>
            <Route path={`${config.baseUrl}`} element={<Dashboard />} />
        </Routes>
    </div>
</BrowserRouter>
  );
}

export default App;
