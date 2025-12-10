import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import { DataProvider } from './context/DataContext';
import Home from './pages/Home';
import Library from './pages/Library';

// Mock placeholders for other pages
const Placeholder = ({ title }) => (
  <div className="pt-32 text-center">
    <h1 className="text-4xl font-bold mb-4">{title}</h1>
    <p className="text-[var(--color-text-muted)]">Coming Soon</p>
  </div>
);

function AppContent() {
  const location = useLocation();
  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)] text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/library" element={<Library />} />
        <Route path="/notes" element={<Placeholder title="My Notes" />} />
        <Route path="/mentorship" element={<Placeholder title="Mentorship" />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
