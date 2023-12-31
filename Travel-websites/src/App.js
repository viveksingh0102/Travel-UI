import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Packages from './components/Packages/Packages';
import About from './components/About/About';
import Shop from './components/Shop/Shop';
import Pages from './components/Pages/Pages';
import News from './components/News/News';
import Contact from './components/Contact/Contact';
import BookNow from './components/BookNow/BOOKNOW';
import Sign from './components/logsign/Sign';

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = () => {
    setIsSignedIn(true);
    setIsNavBarOpen(true);
    navigate('/landing');
  };

  return (
    <>
      {isSignedIn && <NavBar isOpen={isNavBarOpen} />}
      <Routes>
        {/* <NavBar /> */}
        <Route
          path="/"
          element={isSignedIn ? <navigate to="/landing" /> : <Sign onSignIn={handleSignIn} />}
        />
        <Route path="/landing" element={<Home />} />
        <Route path="/package" element={<Packages />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/page" element={<Pages />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/booknow" element={<BookNow />} />
        {isSignedIn && (
          <>

            {/* <Route path="/package" element={<Packages />} />
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/page" element={<Pages />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/booknow" element={<BookNow />} /> */}
          </>
        )}
      </Routes>
    </>
  );
}

export default App;
