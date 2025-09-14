import React, { useState } from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Monitoring from './components/Monitoring';
import Nutrition from './components/Nutrition';
import Education from './components/Education';
import Facilities from './components/Facilities';

function App() {
  const [activeSection, setActiveSection] = useState('dashboard');

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return <Dashboard />;
      case 'monitoring':
        return <Monitoring />;
      case 'nutrition':
        return <Nutrition />;
      case 'education':
        return <Education />;
      case 'facilities':
        return <Facilities />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderContent()}
      </main>
      
      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-green-500 p-2 rounded-lg">
                  <span className="text-white font-bold text-xl">SC</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">StuntingCare</h3>
                  <p className="text-gray-600">Sulawesi Utara</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Platform komprehensif untuk pencegahan stunting di Sulawesi Utara. 
                Membantu orang tua, kader kesehatan, dan tenaga medis dalam memantau 
                tumbuh kembang anak.
              </p>
              <p className="text-sm text-gray-500">
                © 2025 StuntingCare Sulawesi Utara. Hak cipta dilindungi.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Fitur Utama</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Dashboard Monitoring</li>
                <li>Kalkulator Gizi</li>
                <li>Panduan MPASI</li>
                <li>Edukasi Stunting</li>
                <li>Direktori Faskes</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Kontak</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Dinas Kesehatan Sulut</li>
                <li>Jl. 17 Agustus, Manado</li>
                <li>(0431) 863248</li>
                <li>info@stuntingcare-sulut.id</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;