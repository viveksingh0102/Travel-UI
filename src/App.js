import './App.css';
import { Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Packages from './components/Packages/Packages';
import About from './components/About/About';
import Shop from './components/Shop/Shop';
import Pages from './components/Pages/Pages';
import News from './components/News/News';
import Contact from './components/Contact/Contact';
import BookNow from './components/BookNow/BOOKNOW';
// import Goa from './components/Goa/Goa';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='package' element={<Packages />} />
        <Route path='about' element={<About />} />
        <Route path='shop' element={<Shop />} />
        <Route path='page' element={<Pages />} />
        <Route path='news' element={<News />} />
        <Route path='contact' element={<Contact />} />
        <Route path='booknow' element={<BookNow />} />
        {/* <Route path='goa' element={Goa} /> */}
      </Routes>
      {/* <Packages />
      <Shop />
      <About />
      <Pages />
      <News />
      <Contact />
      <BookNow /> */}
    </>
  );
}

export default App;
