import { Route, Routes, useLocation } from 'react-router-dom';
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
  const { pathname } = useLocation();
  const isHomePage = pathname === '/';

  return (
    <div
      className={
        isHomePage ? 'app-shell app-shell--with-page-background app-shell--home' : 'app-shell'
      }
    >
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
