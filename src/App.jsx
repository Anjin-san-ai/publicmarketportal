import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import MHCLGApps from './pages/MHCLGApps';
import ResponsibleAI from './pages/ResponsibleAI';
import AgentBuilder from './pages/AgentBuilder';
import MCPMarketplace from './pages/MCPMarketplace';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mhclg-apps" element={<MHCLGApps />} />
            <Route path="/responsible-ai" element={<ResponsibleAI />} />
            <Route path="/agent-builder" element={<AgentBuilder />} />
            <Route path="/mcp-marketplace" element={<MCPMarketplace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
