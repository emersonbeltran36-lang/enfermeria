import { useState, useMemo, useEffect } from 'react';
import { 
  Stethoscope, 
  Pill, 
  Activity, 
  ClipboardList, 
  Menu, 
  X, 
  Home,
  BookOpen,
  Settings,
  HeartPulse,
  Thermometer,
  Search,
  Wifi,
  WifiOff
} from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

// Components
import ErrorBoundary from './components/ErrorBoundary';
import { Dashboard } from './components/Dashboard';
import { ProceduresView } from './components/ProceduresView';
import { PharmacologyView } from './components/PharmacologyView';
import { PathologiesView } from './components/PathologiesView';
import { AssessmentScalesView } from './components/AssessmentScalesView';
import { LabsView } from './components/LabsView';
import { DictionaryView } from './components/DictionaryView';
import { ClinicalCasesView } from './components/ClinicalCasesView';
import { SettingsView } from './components/SettingsView';
import { GlobalSearchView } from './components/GlobalSearchView';

// Types
type Section = 'home' | 'procedures' | 'pharmacology' | 'pathologies' | 'scales' | 'labs' | 'dictionary' | 'cases' | 'settings';

export default function App() {
  const [activeSection, setActiveSection] = useState<Section>('home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  // Network Status Monitor
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const handleGlobalSelectItem = (section: Section) => {
    setActiveSection(section);
    setSearchQuery('');
  };

  const menuItems = [
    { id: 'home', label: 'Inicio', icon: Home },
    { id: 'procedures', label: 'Procedimientos', icon: Stethoscope },
    { id: 'pharmacology', label: 'Farmacología', icon: Pill },
    { id: 'pathologies', label: 'Patologías', icon: Activity },
    { id: 'scales', label: 'Escalas de Valoración', icon: ClipboardList },
    { id: 'labs', label: 'Laboratorio', icon: Thermometer },
    { id: 'dictionary', label: 'Diccionario', icon: BookOpen },
    { id: 'cases', label: 'Casos Clínicos', icon: HeartPulse },
    { id: 'settings', label: 'Configuración', icon: Settings },
  ];

  const sectionTitles: Record<Section, string> = {
    home: 'Cuidar+',
    procedures: 'Procedimientos',
    pharmacology: 'Farmacología',
    pathologies: 'Patologías',
    scales: 'Escalas',
    labs: 'Laboratorio',
    dictionary: 'Diccionario',
    cases: 'Simulación',
    settings: 'Ajustes'
  };

  return (
    <div className="min-h-screen bg-medical-bg text-medical-text font-sans selection:bg-medical-blue/30 overflow-x-hidden">
      <ErrorBoundary>
        {/* Network Status Bar */}
        <AnimatePresence>
          {!isOnline && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="bg-medical-red text-white text-[10px] font-bold uppercase tracking-widest py-1 flex items-center justify-center gap-2 z-[100]"
            >
              <WifiOff size={12} /> Modo Offline - Algunos datos podrían estar desactualizados
            </motion.div>
          )}
        </AnimatePresence>

        {/* Sidebar Background Overlay */}
        <AnimatePresence>
          {isSidebarOpen && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSidebarOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
            />
          )}
        </AnimatePresence>

        {/* Sidebar */}
        <aside className={`fixed top-0 left-0 h-full w-72 bg-medical-sidebar border-r border-medical-border z-50 transition-transform duration-500 ease-out lg:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="p-8 h-full flex flex-col justify-between">
            <div className="space-y-12">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-medical-blue rounded-xl flex items-center justify-center text-white shadow-lg shadow-medical-blue/20">
                  <HeartPulse size={24} />
                </div>
                <h1 className="text-2xl font-black text-white tracking-tighter uppercase italic">Cuidar<span className="text-medical-blue">+</span></h1>
              </div>

              <nav className="space-y-1">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveSection(item.id as Section);
                      setIsSidebarOpen(false);
                      setSearchQuery('');
                    }}
                    className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-xl text-sm font-bold transition-all duration-300 relative group
                      ${activeSection === item.id 
                        ? 'bg-medical-blue/10 text-medical-blue' 
                        : 'text-medical-gray hover:bg-white/5 hover:text-white'}`}
                  >
                    <item.icon size={18} className={activeSection === item.id ? 'text-medical-blue' : 'text-medical-gray group-hover:text-white transition-colors'} />
                    {item.label}
                    {activeSection === item.id && (
                      <motion.div layoutId="active-pill" className="absolute left-0 w-1 h-6 bg-medical-blue rounded-r-full" />
                    )}
                  </button>
                ))}
              </nav>
            </div>

            <div className="p-4 bg-medical-card border border-medical-border rounded-2xl">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2 h-2 rounded-full bg-medical-green animate-pulse" />
                <p className="text-[10px] font-bold text-medical-gray uppercase tracking-widest leading-none">Sistema Operativo</p>
              </div>
              <p className="text-[10px] text-medical-gray leading-tight">Módulo de Vigilancia Clínica V2.4</p>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="lg:pl-72 min-h-screen transition-all duration-500">
          {/* Header */}
          <header className={`sticky top-0 z-30 p-4 lg:p-6 transition-all duration-300 border-b border-medical-border bg-medical-bg/80 backdrop-blur-xl`}>
            <div className="max-w-6xl mx-auto flex items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => setIsSidebarOpen(true)}
                  className="p-2 lg:hidden text-medical-gray hover:text-white transition-colors"
                >
                  <Menu size={24} />
                </button>
                <div className="hidden sm:block">
                   <h2 className="text-xs font-bold text-medical-gray uppercase tracking-widest">{activeSection === 'home' ? 'Monitor Principal' : sectionTitles[activeSection]}</h2>
                </div>
              </div>

              {/* Global Search */}
              <div className="flex-grow max-w-xl relative group">
                <div className="absolute inset-0 bg-medical-blue/5 rounded-xl blur-lg opacity-0 group-focus-within:opacity-100 transition-opacity" />
                <div className="relative flex items-center">
                  <Search className="absolute left-4 text-medical-gray group-focus-within:text-medical-blue transition-colors pointer-events-none" size={16} />
                  <input 
                    type="text" 
                    placeholder="Buscar para todo..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-medical-input border border-medical-border rounded-xl py-3 pl-12 pr-4 text-sm text-white focus:border-medical-blue/50 transition-all outline-none shadow-inner"
                  />
                  {searchQuery && (
                    <button 
                      onClick={() => setSearchQuery('')}
                      className="absolute right-4 p-1 rounded-full hover:bg-white/10 text-medical-gray transition-colors"
                    >
                      <X size={14} />
                    </button>
                  )}
                </div>
              </div>

              <div className="hidden md:flex items-center gap-4 border-l border-medical-border pl-6">
                <div className="w-8 h-8 rounded-full bg-medical-sidebar border border-medical-border flex items-center justify-center text-medical-gray shadow-sm">
                  <Wifi size={14} className={isOnline ? 'text-medical-green' : 'text-medical-red'} />
                </div>
              </div>
            </div>
          </header>

          <section className="p-4 lg:p-10 transition-all duration-500">
            <AnimatePresence mode="wait">
              {searchQuery ? (
                <motion.div
                  key="search"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <GlobalSearchView query={searchQuery} onSelectItem={handleGlobalSelectItem} />
                </motion.div>
              ) : (
                <motion.div
                  key={activeSection}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {activeSection === 'home' && <Dashboard setActiveSection={setActiveSection} />}
                  {activeSection === 'procedures' && <ProceduresView />}
                  {activeSection === 'pharmacology' && <PharmacologyView />}
                  {activeSection === 'pathologies' && <PathologiesView />}
                  {activeSection === 'scales' && <AssessmentScalesView />}
                  {activeSection === 'labs' && <LabsView />}
                  {activeSection === 'dictionary' && <DictionaryView />}
                  {activeSection === 'cases' && <ClinicalCasesView />}
                  {activeSection === 'settings' && <SettingsView />}
                </motion.div>
              )}
            </AnimatePresence>
          </section>
        </main>
      </ErrorBoundary>
    </div>
  );
}
