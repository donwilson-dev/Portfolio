import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer.jsx';
import Navigation from './components/Navigation.jsx';
import About from './pages/About.jsx';
import ApplicationShowcase from './pages/ApplicationShowcase.jsx';
import Contact from './pages/Contact.jsx';
import Home from './pages/Home.jsx';
import ProjectOverview from './pages/ProjectOverview.jsx';
import Projects from './pages/Projects.jsx';
import './styles/navigation.css';

function App() {
  return (
    <div className="app-shell">
      <Navigation />
      <main className="app-shell__content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects/:projectId" element={<ProjectOverview />} />
          <Route path="/projects/:projectId/showcase" element={<ApplicationShowcase />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
