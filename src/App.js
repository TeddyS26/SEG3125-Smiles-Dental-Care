import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import BookingPage from './components/BookingPage';
import ServicesPage from './components/ServicesPage';
import OurProfessionalsPage from './components/OurProfessionalsPage';
import ContactAboutUsPage from './components/ContactAboutUsPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/professionals" element={<OurProfessionalsPage />} />
        <Route path="/contact" element={<ContactAboutUsPage />} />
      </Routes>
    </Router>
  );
}

export default App;