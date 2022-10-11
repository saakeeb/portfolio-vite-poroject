import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
// import About from './Components/About/About';
// import Contact from './Components/Contact/Contact';
// import Projects from './Components/Projects/Projects';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
