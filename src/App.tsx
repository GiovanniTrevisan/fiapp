import { useState } from 'react'
import Sidebar from './Sidebar'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Aulas from './pages/Aulas'
import Avisos from './pages/Avisos'
import Material from './pages/Material'
import NotasFaltas from './pages/NotasFaltas'
import Trabalhos from './pages/Trabalhos'
import IdDigital from './pages/IdDigital'
import './App.css'



function getPageTitle(pathname: string) {
  switch (pathname) {
    case '/fiapp/': return 'Home';
    case '/fiapp/aulas': return 'Aulas';
    case '/fiapp/avisos': return 'Avisos';
    case '/fiapp/material': return 'Material de Apoio';
    case '/fiapp/notas-faltas': return 'Notas e Faltas';
    case '/fiapp/trabalhos': return 'Trabalhos';
    case '/fiapp/id-digital': return 'ID Digital';
    default: return '';
  }
}

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const pageTitle = getPageTitle(location.pathname);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black">
      <header className="flex items-center p-4 bg-white dark:bg-black shadow w-screen">
        <button
          aria-label="Abrir menu"
          className="text-2xl mr-3 px-5 py-2"
          onClick={() => setSidebarOpen(true)}
        >
          <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
        </button>
        <div className="flex-1 flex justify-center items-center">
          <span className="text-lg text-center ml-[-51px]">{pageTitle}</span>
        </div>
      </header>

      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fiapp/aulas" element={<Aulas />} />
          <Route path="/fiapp/avisos" element={<Avisos />} />
          <Route path="/fiapp/material" element={<Material />} />
          <Route path="/fiapp/notas-faltas" element={<NotasFaltas />} />
          <Route path="/fiapp/trabalhos" element={<Trabalhos />} />
          <Route path="/fiapp/id-digital" element={<IdDigital />} />
        </Routes>
      </main>
    </div>
  );
}

export default App
