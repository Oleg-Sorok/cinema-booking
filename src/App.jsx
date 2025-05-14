import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Booking from './pages/Booking';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/booking/:id" element={<Booking />} />
    </Routes>
  </BrowserRouter>
);
export default App;
