import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

import About from './pages/About';
import Contact from './pages/Contact';
import Hero from './pages/Hero';
import Projects from './pages/Projects';
import Skills from './pages/Skills';


function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path='/skills' element={<Skills />} />
      </Routes>
    </Layout>
  );
}

export default App;
