/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Stories from './pages/Stories';
import Contact from './pages/Contact';
import Values from './pages/Values';
import Membership from './pages/Membership';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/values" element={<Values />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/stories" element={<Stories />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
