import React, { useState } from 'react';
import Header from './components/layout/Header';
import DashboardView from './views/DashboardView';
import LessonView from './views/LessonView';
import Footer from './components/layout/Footer';

const App = () => {
  const [currentView, setCurrentView] = useState('lesson'); 
  
  return (
    // 1. Adicionei 'flex flex-col'
    // 2. REMOVI o 'pb-20'
    <div className="min-h-screen bg-[#020617] text-white font-sans selection:bg-purple-500 selection:text-white flex flex-col">
      
      <Header onViewChange={setCurrentView} currentView={currentView} />
      
      {/* 3. Adicionei 'flex-1' aqui. Isso faz o conteúdo empurrar o rodapé para baixo se a tela for grande */}
      <main className="max-w-[1600px] mx-auto p-4 md:p-6 lg:p-8 flex-1 w-full">
        {currentView === 'dashboard' ? (
          <DashboardView onNavigate={() => setCurrentView('lesson')} />
        ) : (
          <LessonView onBack={() => setCurrentView('dashboard')} />
        )}
      </main>

      <Footer /> 
      
    </div>
  );
};

export default App;