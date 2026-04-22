/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

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
  AlertCircle,
  Book,
  ArrowLeft,
  ArrowRight,
  Clock,
  Accessibility,
  User,
  Hash,
  Brain,
  Smile
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PROCEDURES, DRUGS, PATHOLOGIES, LAB_VALUES, DICTIONARY, CLINICAL_CASES } from './data';
import { Procedure, Drug, Pathology, LabValue, DictionaryEntry, ClinicalCase } from './types';

// Types for navigation
type Section = 'home' | 'procedures' | 'pharmacology' | 'pathologies' | 'scales' | 'labs' | 'dictionary' | 'cases';

function GlobalSearchView({ query, onSelectItem }: { query: string, onSelectItem: (section: Section, id: string) => void }) {
  const q = query.toLowerCase();

  const results = {
    procedures: PROCEDURES.filter(p => p.name.toLowerCase().includes(q) || p.type.toLowerCase().includes(q)),
    drugs: DRUGS.filter(d => d.name.toLowerCase().includes(q) || d.group.toLowerCase().includes(q)),
    pathologies: PATHOLOGIES.filter(p => p.name.toLowerCase().includes(q) || p.definition.toLowerCase().includes(q)),
    dictionary: DICTIONARY.filter(d => d.term.toLowerCase().includes(q) || d.definition.toLowerCase().includes(q))
  };

  const totalResults = results.procedures.length + results.drugs.length + results.pathologies.length + results.dictionary.length;

  if (totalResults === 0) {
    return (
      <div className="text-center py-20">
        <Search size={48} className="mx-auto text-medical-gray mb-4 opacity-20" />
        <h4 className="text-xl font-bold text-white">No se encontraron resultados</h4>
        <p className="text-medical-gray mt-2">Prueba con términos como "RCP", "Adrenalina" o "Glasgow"</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto space-y-12 pb-20">
      <div className="flex items-center justify-between border-b border-medical-border pb-4">
        <div>
          <h3 className="text-2xl font-bold text-white leading-none">Resultados de Búsqueda</h3>
          <p className="text-medical-gray text-xs mt-2 uppercase tracking-widest font-bold">Enciclopédia Médica Global</p>
        </div>
        <div className="bg-medical-blue/10 text-medical-blue px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border border-medical-blue/20">
          {totalResults} coincidencias
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {results.procedures.length > 0 && (
          <div className="space-y-4">
            <h4 className="text-[10px] font-bold text-sky-400 uppercase tracking-widest flex items-center gap-2">
              <Stethoscope size={14} /> Procedimientos ({results.procedures.length})
            </h4>
            <div className="space-y-2">
              {results.procedures.slice(0, 5).map(p => (
                <button 
                  key={p.id}
                  onClick={() => onSelectItem('procedures', p.id)}
                  className="w-full bg-medical-card p-4 rounded-xl border border-medical-border hover:border-sky-500/50 transition-all text-left flex justify-between items-center group"
                >
                  <div>
                    <p className="text-white font-bold">{p.name}</p>
                    <p className="text-[10px] text-medical-gray uppercase font-bold tracking-tighter mt-0.5">{p.type}</p>
                  </div>
                  <ArrowRight size={16} className="text-medical-gray group-hover:text-sky-400 transition-colors" />
                </button>
              ))}
            </div>
          </div>
        )}

        {results.drugs.length > 0 && (
          <div className="space-y-4">
            <h4 className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest flex items-center gap-2">
              <Pill size={14} /> Farmacología ({results.drugs.length})
            </h4>
            <div className="space-y-2">
              {results.drugs.slice(0, 5).map(d => (
                <button 
                  key={d.id}
                  onClick={() => onSelectItem('pharmacology', d.id)}
                  className="w-full bg-medical-card p-4 rounded-xl border border-medical-border hover:border-indigo-500/50 transition-all text-left flex justify-between items-center group"
                >
                  <div>
                    <p className="text-white font-bold">{d.name}</p>
                    <p className="text-[10px] text-medical-gray uppercase font-bold tracking-tighter mt-0.5">{d.group}</p>
                  </div>
                  <ArrowRight size={16} className="text-medical-gray group-hover:text-indigo-400 transition-colors" />
                </button>
              ))}
            </div>
          </div>
        )}

        {results.pathologies.length > 0 && (
          <div className="space-y-4">
            <h4 className="text-[10px] font-bold text-rose-400 uppercase tracking-widest flex items-center gap-2">
              <Activity size={14} /> Patologías ({results.pathologies.length})
            </h4>
            <div className="space-y-2">
              {results.pathologies.slice(0, 5).map(p => (
                <button 
                  key={p.id}
                  onClick={() => onSelectItem('pathologies', p.id)}
                  className="w-full bg-medical-card p-4 rounded-xl border border-medical-border hover:border-rose-500/50 transition-all text-left flex justify-between items-center group"
                >
                  <div>
                    <p className="text-white font-bold">{p.name}</p>
                    <p className="text-[10px] text-medical-gray uppercase font-bold tracking-tighter mt-0.5">{p.system}</p>
                  </div>
                  <ArrowRight size={16} className="text-medical-gray group-hover:text-rose-400 transition-colors" />
                </button>
              ))}
            </div>
          </div>
        )}

        {results.dictionary.length > 0 && (
          <div className="space-y-4">
            <h4 className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest flex items-center gap-2">
              <Book size={14} /> Diccionario ({results.dictionary.length})
            </h4>
            <div className="space-y-2">
              {results.dictionary.slice(0, 5).map(d => (
                <button 
                  key={d.term}
                  onClick={() => onSelectItem('dictionary', d.term)}
                  className="w-full bg-medical-card p-4 rounded-xl border border-medical-border hover:border-emerald-500/50 transition-all text-left flex justify-between items-center group"
                >
                  <p className="text-white font-bold">{d.term}</p>
                  <ArrowRight size={16} className="text-medical-gray group-hover:text-emerald-400 transition-colors" />
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function App() {
  const [activeSection, setActiveSection] = useState<Section>('home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [globalQuery, setGlobalQuery] = useState('');

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const handleGlobalSelectItem = (section: Section, id: string) => {
    setActiveSection(section);
    setGlobalQuery('');
    // Each view should handle the selected item if passed, but for now we navigate
    // To make it better, we could pass a 'initialSelectedId' prop to views
    // but the sections already have internal state for selection usually.
  };

  const NavItem = ({ section, icon: Icon, label }: { section: Section, icon: any, label: string }) => (
    <button
      onClick={() => {
        setActiveSection(section);
        setIsSidebarOpen(false);
      }}
      className={`w-full flex items-center gap-3 px-4 py-3 transition-all duration-200 ${
        activeSection === section 
          ? 'bg-medical-blue/10 text-medical-blue border-l-4 border-medical-blue' 
          : 'text-medical-gray hover:text-medical-text hover:bg-white/5'
      }`}
    >
      <Icon size={20} />
      <span className="font-medium text-sm">{label}</span>
    </button>
  );

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar for Desktop / Overlay for Mobile */}
      <AnimatePresence>
        {(isSidebarOpen || window.innerWidth > 1024) && (
          <>
            {/* Backdrop for mobile */}
            {isSidebarOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={toggleSidebar}
                className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 lg:hidden"
              />
            )}
            
            <motion.aside
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              className="fixed lg:static inset-y-0 left-0 w-72 bg-medical-sidebar border-r border-medical-border p-6 z-50 flex flex-col shadow-xl lg:shadow-none"
            >
              <div className="flex items-center gap-3 mb-10 px-2 text-medical-blue">
                <div className="w-3 h-3 bg-medical-blue rounded-full"></div>
                <h1 className="text-xl font-bold tracking-tight text-white leading-none">
                  ClinixCare
                </h1>
              </div>

              <div className="space-y-1 -mx-6 flex-grow">
                <p className="px-10 text-[10px] font-bold text-medical-gray uppercase tracking-widest mb-4">Menú Principal</p>
                <NavItem section="home" icon={Home} label="Panel Principal" />
                <NavItem section="procedures" icon={Stethoscope} label="Procedimientos" />
                <NavItem section="pharmacology" icon={Pill} label="Farmacología" />
                <NavItem section="pathologies" icon={Activity} label="Patologías" />
                <NavItem section="scales" icon={ClipboardList} label="Escalas de Valoración" />
                <NavItem section="labs" icon={Thermometer} label="Valores de Laboratorio" />
                <NavItem section="dictionary" icon={Book} label="Diccionario Médico" />
                <NavItem section="cases" icon={BookOpen} label="Casos Clínicos" />
              </div>

              <div className="mt-auto pt-6 border-t border-medical-border flex items-center gap-3 px-2">
                <div className="w-10 h-10 rounded-full bg-medical-input flex items-center justify-center text-medical-blue font-bold border border-medical-border">
                  AM
                </div>
                <div className="flex-grow overflow-hidden">
                  <p className="text-sm font-semibold text-white truncate">Andrea Morales</p>
                  <p className="text-xs text-medical-gray truncate">Lic. en Enfermería</p>
                </div>
                <Settings size={18} className="text-medical-gray cursor-pointer hover:text-medical-blue" />
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-grow flex flex-col max-h-screen overflow-hidden">
        {/* Header */}
        <header className="h-16 bg-medical-sidebar border-b border-medical-border flex items-center justify-between px-6 sticky top-0 z-30">
          <div className="flex items-center gap-4">
            <button 
              onClick={toggleSidebar}
              className="lg:hidden p-2 hover:bg-medical-input rounded-lg text-medical-text transition-colors"
            >
              <Menu size={24} />
            </button>
            <h2 className="text-lg font-semibold text-white capitalize hidden md:block">
              {globalQuery ? 'Búsqueda Global' : activeSection === 'home' ? 'Protocolos de Enfermería' : activeSection}
            </h2>
          </div>
          
          <div className="relative group max-w-sm w-full mx-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-medical-gray group-focus-within:text-medical-blue transition-colors" size={18} />
            <input 
              type="text" 
              placeholder="Buscar en toda la biblioteca..."
              className="w-full bg-medical-input border border-medical-border rounded-lg py-2 pl-10 pr-4 text-sm text-gray-300 focus:border-medical-blue/50 transition-all outline-none placeholder:text-medical-gray/50"
              value={globalQuery}
              onChange={(e) => setGlobalQuery(e.target.value)}
            />
          </div>

          <div className="flex gap-4 items-center shrink-0">
            <div className="text-right hidden sm:block">
              <div className="text-[10px] text-medical-gray font-bold uppercase tracking-widest leading-none mb-1">Tiempo Turno</div>
              <div className="text-sm font-mono font-bold text-medical-green">05:42:12</div>
            </div>
            <div className="w-12 h-12 bg-medical-red/10 border border-medical-red/30 rounded-full flex items-center justify-center cursor-pointer hover:bg-medical-red/20 transition-colors shadow-lg shadow-medical-red/5 overflow-hidden">
              <img 
                src="/sos_logo.png" 
                alt="SOS Logo" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </header>

        {/* Dynamic Content */}
        <div className="flex-grow overflow-y-auto p-4 sm:p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={globalQuery ? 'global-search' : activeSection}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {globalQuery ? (
                <GlobalSearchView query={globalQuery} onSelectItem={handleGlobalSelectItem} />
              ) : (
                <>
                  {activeSection === 'home' && <Dashboard setActiveSection={setActiveSection} />}
                  {activeSection === 'procedures' && <ProceduresView />}
                  {activeSection === 'pharmacology' && <PharmacologyView />}
                  {activeSection === 'pathologies' && <PathologiesView />}
                  {activeSection === 'scales' && <AssessmentScalesView />}
                  {activeSection === 'labs' && <LabsView />}
                  {activeSection === 'dictionary' && <DictionaryView />}
                  {activeSection === 'cases' && <ClinicalCasesView />}
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}

// --- Sub-components for Views ---

function Dashboard({ setActiveSection }: { setActiveSection: (s: Section) => void }) {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div>
        <h3 className="text-xs font-bold text-medical-gray uppercase tracking-widest mb-6 flex items-center gap-2">
          <BookOpen className="text-medical-blue" size={16} />
          Acceso Rápido al Protocolo
        </h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <QuickCard 
            title="Procedimientos" 
            desc="Guías paso a paso" 
            bgColor="bg-sky-500" 
            icon={Stethoscope}
            onClick={() => setActiveSection('procedures')} 
          />
          <QuickCard 
            title="Farmacología" 
            desc="Dosis y calculadoras" 
            bgColor="bg-indigo-500" 
            icon={Pill}
            onClick={() => setActiveSection('pharmacology')} 
          />
          <QuickCard 
            title="Escalas" 
            desc="Glasgow, Braden, Norton" 
            bgColor="bg-violet-500" 
            icon={ClipboardList}
            onClick={() => setActiveSection('scales')} 
          />
          <QuickCard 
            title="Laboratorio" 
            desc="Valores normales" 
            bgColor="bg-emerald-500" 
            icon={Thermometer}
            onClick={() => setActiveSection('labs')} 
          />
          <QuickCard 
            title="Casos Clínicos" 
            desc="Sección didáctica" 
            bgColor="bg-rose-500" 
            icon={BookOpen}
            onClick={() => setActiveSection('cases')} 
          />
        </div>
      </div>
      
      <div className="bg-medical-sidebar border border-medical-border p-6 rounded-xl">
        <p className="text-xs font-bold text-medical-blue uppercase tracking-widest mb-2 flex items-center gap-2">
          <span className="w-2 h-2 bg-medical-blue rounded-full animate-pulse" />
          Nota del Servicio
        </p>
        <p className="text-sm text-medical-text">
          Esta aplicación es una herramienta de apoyo clínico. Siga siempre los protocolos institucionales de su centro hospitalario y consulte con el personal médico responsable antes de cualquier intervención crítica.
        </p>
      </div>
    </div>
  );
}

function QuickCard({ title, desc, bgColor, icon: Icon, onClick }: any) {
  return (
    <button 
      onClick={onClick}
      className={`relative overflow-hidden p-6 rounded-xl text-left transition-all duration-300 hover:translate-y-[-4px] shadow-lg shadow-black/20 group`}
    >
      <div className={`absolute inset-0 bg-medical-card border border-medical-border group-hover:border-medical-blue/50 transition-colors`} />
      <div className="relative z-10 flex flex-col h-full gap-8">
        <div className={`w-fit p-3 rounded-lg text-white ${bgColor}`}>
          <Icon size={20} />
        </div>
        <div>
          <p className="text-[10px] font-bold text-medical-gray uppercase tracking-widest bg-transparent">{title}</p>
          <p className="text-sm font-bold text-white mt-1">{desc}</p>
        </div>
      </div>
    </button>
  );
}

function ProceduresView() {
  const [selected, setSelected] = useState<Procedure | null>(null);
  const [localSearch, setLocalSearch] = useState('');

  const filteredProcedures = PROCEDURES.filter(p => 
    p.name.toLowerCase().includes(localSearch.toLowerCase()) ||
    p.type.toLowerCase().includes(localSearch.toLowerCase())
  );

  if (selected) {
    return (
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={() => setSelected(null)}
          className="text-medical-blue font-medium flex items-center gap-2 mb-6 hover:translate-x-[-4px] transition-transform"
        >
          <X size={18} /> Volver a la lista
        </button>
        <div className="bg-medical-card rounded-xl p-8 border border-medical-border shadow-sm space-y-8">
          <div className="flex flex-col sm:flex-row gap-6 justify-between items-start">
            <div>
              <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${selected.type === 'invasive' ? 'bg-medical-red/10 text-medical-red border border-medical-red/20' : 'bg-medical-green/10 text-medical-green border border-medical-green/20'}`}>
                {selected.type === 'invasive' ? 'Invasivo' : 'No Invasivo'}
              </span>
              <h3 className="text-3xl font-bold mt-2 text-white">{selected.name}</h3>
            </div>
          </div>

          {selected.image && (
            <div className="w-full h-64 rounded-2xl overflow-hidden border border-medical-border relative group">
              <img 
                src={selected.image} 
                alt={selected.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-medical-card/80 to-transparent flex items-end p-6">
                <span className="text-white font-bold text-xs uppercase tracking-widest bg-medical-blue/80 px-3 py-1 rounded">Guía Visual de Referencia</span>
              </div>
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-8">
            <SectionBlock title="Material Necesario" icon={ClipboardList}>
              <ul className="space-y-2">
                {selected.materials.map((m, i) => (
                  <li key={i} className="text-medical-text text-sm flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-medical-blue rounded-full mt-1.5 shrink-0" />
                    {m}
                  </li>
                ))}
              </ul>
            </SectionBlock>

            <SectionBlock title="Bioseguridad y EPP" icon={HeartPulse} color="text-medical-red">
              <ul className="space-y-2">
                {selected.biosecurity.map((b, i) => (
                  <li key={i} className="text-medical-gray text-sm flex items-start gap-2 italic">
                    <span className="w-1.5 h-1.5 bg-medical-red rounded-full mt-1.5 shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </SectionBlock>
          </div>

          <SectionBlock title="Paso a Paso" icon={Activity}>
            <div className="space-y-4">
              {selected.steps.map((s, i) => (
                <div key={i} className="flex gap-4">
                  <span className="w-8 h-8 rounded-lg bg-medical-input border border-medical-border text-medical-blue flex items-center justify-center font-bold text-sm shrink-0">
                    {i + 1}
                  </span>
                  <p className="text-medical-text text-sm py-1.5">{s}</p>
                </div>
              ))}
            </div>
          </SectionBlock>
          <button className="w-full mt-4 bg-medical-green/80 hover:bg-medical-green text-white font-bold py-3 rounded-lg transition-colors text-sm uppercase tracking-widest">
            Ver Paso a Paso (GIF)
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h3 className="text-xs font-bold text-medical-gray uppercase tracking-widest">Guías de Procedimientos</h3>
        <div className="relative group max-w-xs w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-medical-gray group-focus-within:text-sky-400 transition-colors" size={14} />
          <input 
            type="text" 
            placeholder="Filtrar procedimientos..."
            className="w-full bg-medical-input border border-medical-border rounded-lg py-1.5 pl-9 pr-4 text-xs text-gray-300 focus:border-sky-400/50 transition-all outline-none"
            value={localSearch}
            onChange={(e) => setLocalSearch(e.target.value)}
          />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        {filteredProcedures.map((p) => (
          <div 
            key={p.id} 
            onClick={() => setSelected(p)}
            className="bg-medical-card p-6 rounded-xl border border-medical-border shadow-sm hover:border-medical-blue/30 cursor-pointer transition-all flex justify-between items-center group relative overflow-hidden"
          >
            <div className="z-10 bg-inherit/90">
              <p className="text-[10px] font-bold text-medical-gray uppercase tracking-widest leading-none mb-2">{p.type === 'invasive' ? 'Invasivo' : 'No Invasivo'}</p>
              <h4 className="text-lg font-bold text-white mt-1 group-hover:text-medical-blue transition-colors">{p.name}</h4>
              <p className="text-xs text-medical-gray mt-1">{p.steps.length} pasos detallados</p>
            </div>
            {p.image && (
              <div className="absolute right-0 top-0 w-24 h-full opacity-10 group-hover:opacity-30 transition-opacity">
                <img src={p.image} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            )}
            <div className="z-10 w-10 h-10 rounded-lg bg-medical-input flex items-center justify-center text-medical-gray group-hover:text-medical-blue transition-colors border border-medical-border">
              <BookOpen size={20} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SectionBlock({ title, icon: Icon, children, color = 'text-medical-blue' }: any) {
  return (
    <div className="space-y-4">
      <h4 className={`flex items-center gap-2 font-bold ${color}`}>
        <Icon size={18} />
        {title}
      </h4>
      {children}
    </div>
  );
}

function PharmacologyView() {
  const [selected, setSelected] = useState<Drug | null>(null);
  const [showCalculator, setShowCalculator] = useState(false);
  const [localSearch, setLocalSearch] = useState('');

  const filteredDrugs = DRUGS.filter(d => 
    d.name.toLowerCase().includes(localSearch.toLowerCase()) ||
    d.mechanism.toLowerCase().includes(localSearch.toLowerCase()) ||
    d.group.toLowerCase().includes(localSearch.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <h3 className="text-xs font-bold text-medical-gray uppercase tracking-widest">Diccionario de Fármacos</h3>
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <div className="relative group max-w-xs w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-medical-gray group-focus-within:text-indigo-400 transition-colors" size={14} />
              <input 
                type="text" 
                placeholder="Filtrar fármacos..."
                className="w-full bg-medical-input border border-medical-border rounded-lg py-1.5 pl-9 pr-4 text-xs text-gray-300 focus:border-indigo-400/50 transition-all outline-none"
                value={localSearch}
                onChange={(e) => setLocalSearch(e.target.value)}
              />
            </div>
            <button 
              onClick={() => setShowCalculator(!showCalculator)}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-lg font-bold text-xs transition-all whitespace-nowrap ${
                showCalculator ? 'bg-medical-red/80 hover:bg-medical-red text-white' : 'bg-medical-blue/10 text-medical-blue border border-medical-blue/30'
              }`}
            >
              {showCalculator ? <X size={14} /> : <Activity size={14} />}
              {showCalculator ? 'Cerrar' : 'Calculadora'}
            </button>
          </div>
        </div>

        {showCalculator && <DripCalculator />}

        <div className="space-y-3 mt-6">
          {filteredDrugs.map((d) => (
            <div 
              key={d.id}
              className="bg-medical-card rounded-xl border border-medical-border shadow-sm overflow-hidden"
            >
              <button 
                onClick={() => setSelected(selected?.id === d.id ? null : d)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
              >
                <div>
                  <h4 className="text-xl font-bold text-white">{d.name}</h4>
                  <p className="text-[10px] font-bold text-medical-blue uppercase tracking-widest">{d.group}</p>
                </div>
                <Pill className={selected?.id === d.id ? 'text-medical-blue' : 'text-medical-border'} size={24} />
              </button>
              <AnimatePresence>
                {selected?.id === d.id && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 pb-6 border-t border-medical-border bg-medical-input/30"
                  >
                    <div className="grid sm:grid-cols-2 gap-6 pt-6">
                      <div className="space-y-4">
                        <div>
                          <h5 className="text-[10px] font-bold text-medical-gray uppercase tracking-widest mb-2">Mecanismo de Acción</h5>
                          <p className="text-sm text-medical-text leading-relaxed bg-medical-card/50 p-3 rounded-lg border border-medical-border">
                            {d.mechanism}
                          </p>
                        </div>
                        <div>
                          <h5 className="text-[10px] font-bold text-medical-gray uppercase tracking-widest mb-2">Vía de Administración</h5>
                          <div className="flex items-center gap-2 text-medical-blue bg-medical-blue/10 p-2 rounded-lg border border-medical-blue/20">
                            <span className="text-sm font-bold">{d.route}</span>
                          </div>
                        </div>
                        <div>
                          <h5 className="text-[10px] font-bold text-medical-gray uppercase tracking-widest mb-2">Dosificación</h5>
                          <div className="bg-medical-card p-3 rounded-lg border border-medical-border">
                            <p className="text-sm font-medium text-white">{d.dosage}</p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h5 className="text-[10px] font-bold text-medical-gray uppercase tracking-widest mb-3">Precauciones (No tomar)</h5>
                        <ul className="space-y-2">
                          {d.contraindications.map((c, i) => (
                            <li key={i} className="text-xs text-medical-text flex items-start gap-2 bg-medical-red/5 p-2 rounded border border-medical-red/10">
                              <X size={12} className="text-medical-red mt-0.5 shrink-0" />
                              {c}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function DripCalculator() {
  const [vol, setVol] = useState<number>(500);
  const [time, setTime] = useState<number>(8);
  const [factor, setFactor] = useState<number>(20); // got/ml

  const dropsPerMin = Math.round((vol * factor) / (time * 60));
  const mlPerHour = Math.round(vol / time);

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-medical-card text-white p-8 rounded-xl border border-medical-border shadow-xl"
    >
      <h4 className="text-[10px] font-bold text-medical-gray uppercase tracking-widest mb-6">Calculadora de Goteo</h4>
      <div className="grid sm:grid-cols-3 gap-6">
        <div>
          <label className="text-[10px] font-bold text-medical-gray uppercase tracking-widest block mb-2">Volumen (ml)</label>
          <input 
            type="number" 
            value={vol} 
            onChange={(e) => setVol(Number(e.target.value))}
            className="w-full bg-medical-input border border-medical-border rounded-lg p-3 outline-none focus:border-medical-blue transition-all text-xl font-bold"
          />
        </div>
        <div>
          <label className="text-[10px] font-bold text-medical-gray uppercase tracking-widest block mb-2">Tiempo (horas)</label>
          <input 
            type="number" 
            value={time} 
            onChange={(e) => setTime(Number(e.target.value))}
            className="w-full bg-medical-input border border-medical-border rounded-lg p-3 outline-none focus:border-medical-blue transition-all text-xl font-bold"
          />
        </div>
        <div>
          <label className="text-[10px] font-bold text-medical-gray uppercase tracking-widest block mb-2">Factor</label>
          <select 
            value={factor} 
            onChange={(e) => setFactor(Number(e.target.value))}
            className="w-full bg-medical-input border border-medical-border rounded-lg p-3 outline-none focus:border-medical-blue transition-all text-sm font-bold appearance-none"
          >
            <option value={10}>10 got/ml (Macro)</option>
            <option value={15}>15 got/ml (Macro)</option>
            <option value={20}>20 got/ml (Normo)</option>
            <option value={60}>60 got/ml (Micro)</option>
          </select>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4">
        <div className="bg-medical-blue/10 p-6 rounded-xl border border-medical-blue/20 text-center">
          <p className="text-[10px] font-bold text-medical-blue uppercase tracking-widest mb-1">Resultado (gotas/min)</p>
          <p className="text-3xl font-black text-white">{dropsPerMin}</p>
        </div>
        <div className="bg-medical-blue/10 p-6 rounded-xl border border-medical-blue/20 text-center">
          <p className="text-[10px] font-bold text-medical-blue uppercase tracking-widest mb-1">Resultado (ml/hora)</p>
          <p className="text-3xl font-black text-white">{mlPerHour}</p>
        </div>
      </div>
    </motion.div>
  );
}

function PathologiesView() {
  const [localSearch, setLocalSearch] = useState('');
  const filteredPathologies = PATHOLOGIES.filter(p => 
    p.name.toLowerCase().includes(localSearch.toLowerCase()) ||
    p.system.toLowerCase().includes(localSearch.toLowerCase()) ||
    p.definition.toLowerCase().includes(localSearch.toLowerCase())
  );

  const systems = Array.from(new Set(PATHOLOGIES.map(p => p.system)));

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h3 className="text-xs font-bold text-medical-gray uppercase tracking-widest">Guía de Patologías</h3>
        <div className="relative group max-w-xs w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-medical-gray group-focus-within:text-medical-blue transition-colors" size={14} />
          <input 
            type="text" 
            placeholder="Filtrar patologías..."
            className="w-full bg-medical-input border border-medical-border rounded-lg py-1.5 pl-9 pr-4 text-xs text-gray-300 focus:border-medical-blue/50 transition-all outline-none"
            value={localSearch}
            onChange={(e) => setLocalSearch(e.target.value)}
          />
        </div>
      </div>
      <div className="space-y-12">
        {systems.map((system) => {
          const systemPathologies = filteredPathologies.filter(p => p.system === system);
          if (systemPathologies.length === 0) return null;

          return (
            <div key={system}>
              <h4 className="text-[10px] font-bold text-medical-blue uppercase tracking-widest mb-6 flex items-center gap-2">
                <span className="w-8 h-px bg-medical-border" />
                SISTEMA {system}
              </h4>
              <div className="grid gap-6">
                {systemPathologies.map(p => (
                  <div key={p.id} className="bg-medical-card rounded-xl p-8 border border-medical-border shadow-sm space-y-6">
                    <div className="space-y-4">
                      <div>
                        <h5 className="text-2xl font-bold text-white">{p.name}</h5>
                        <p className="text-medical-text mt-2 italic leading-relaxed">{p.definition}</p>
                      </div>
                      
                      <div className="bg-medical-input/50 p-3 rounded-lg border border-medical-border/50">
                        <p className="text-[10px] font-bold text-medical-blue uppercase tracking-widest leading-none mb-2">Célula u Órgano Afectado</p>
                        <p className="text-sm text-white font-medium">{p.affectedTarget}</p>
                      </div>
                    </div>
                    
                    <div className="grid sm:grid-cols-2 gap-8">
                      <div>
                        <h6 className="text-[10px] font-bold text-medical-gray uppercase tracking-widest mb-3 flex items-center gap-2">
                          <AlertCircle size={14} className="text-medical-red" />
                          SIGNOS DE ALARMA
                        </h6>
                        <ul className="space-y-2">
                          {p.symptoms.map((s, i) => (
                            <li key={i} className="text-sm text-medical-text flex items-center gap-2">
                              <span className="w-1.5 h-1.5 bg-medical-red rounded-full shrink-0" />
                              {s}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h6 className="text-[10px] font-bold text-medical-gray uppercase tracking-widest mb-3 flex items-center gap-2">
                          <HeartPulse size={14} className="text-medical-blue" />
                          CUIDADOS (PAE)
                        </h6>
                        <ul className="space-y-2">
                          {p.nursingCare.map((c, i) => (
                            <li key={i} className="text-sm text-medical-text flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-medical-blue rounded-full mt-1.5 shrink-0" />
                              {c}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function AssessmentScalesView() {
  const [activeScale, setActiveScale] = useState<string | null>(null);

  if (activeScale === 'Glasgow') return <GlasgowScale onBack={() => setActiveScale(null)} />;
  if (activeScale === 'Braden') return <BradenScale onBack={() => setActiveScale(null)} />;
  if (activeScale === 'EVA') return <EVAScale onBack={() => setActiveScale(null)} />;
  if (activeScale === 'Numérica') return <NumericPainScale onBack={() => setActiveScale(null)} />;
  if (activeScale === 'Fall Morse') return <MorseScale onBack={() => setActiveScale(null)} />;
  if (activeScale === 'Norton') return <NortonScale onBack={() => setActiveScale(null)} />;
  if (activeScale === 'Barthel') return <BarthelScale onBack={() => setActiveScale(null)} />;
  if (activeScale === 'Katz') return <KatzScale onBack={() => setActiveScale(null)} />;
  if (activeScale === 'MMSE') return <MMSEScale onBack={() => setActiveScale(null)} />;
  if (activeScale === 'Yesavage') return <YesavageScale onBack={() => setActiveScale(null)} />;

  const categories = [
    {
      title: "1. Escalas de Valoración",
      scales: [
        { name: "Glasgow", desc: "Nivel de conciencia y respuesta cerebral.", icon: Activity, color: "bg-medical-blue/20 text-medical-blue border-medical-blue/30" },
        { name: "Norton", desc: "Riesgo de UPP (Esencial geriátrico).", icon: Thermometer, color: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30" },
        { name: "Braden", desc: "Riesgo de úlceras por presión.", icon: Thermometer, color: "bg-orange-500/20 text-orange-400 border-orange-500/30" },
      ]
    },
    {
      title: "2. Escalas de Dolor",
      scales: [
        { name: "EVA", desc: "Escala Visual Analógica.", icon: HeartPulse, color: "bg-medical-red/20 text-medical-red border-medical-red/30" },
        { name: "Numérica", desc: "Valoración verbal numérica (1-10).", icon: Hash, color: "bg-medical-blue/20 text-medical-blue border-medical-blue/30" },
      ]
    },
    {
      title: "3. Escalas Funcionales",
      scales: [
        { name: "Barthel", desc: "Actividades de la vida diaria (AVD).", icon: Accessibility, color: "bg-indigo-500/20 text-indigo-400 border-indigo-500/30" },
        { name: "Katz", desc: "Índice de independencia en AVD.", icon: User, color: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30" },
      ]
    },
    {
      title: "4. Riesgo y Seguridad",
      scales: [
        { name: "Fall Morse", desc: "Riesgo de caídas hospitalarias.", icon: AlertCircle, color: "bg-amber-500/20 text-amber-400 border-amber-500/30" },
      ]
    },
    {
      title: "5. Cognitivas y Emocionales",
      scales: [
        { name: "MMSE", desc: "Mini-Examen de Estado Mental.", icon: Brain, color: "bg-purple-500/20 text-purple-400 border-purple-500/30" },
        { name: "Yesavage", desc: "Depresión geriátrica (Abreviada).", icon: Smile, color: "bg-rose-500/20 text-rose-400 border-rose-500/30" },
      ]
    }
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-12">
      {categories.map((cat, idx) => (
        <div key={idx} className="space-y-6">
          <h3 className="text-sm font-bold text-medical-blue uppercase tracking-widest flex items-center gap-2">
            <span className="w-8 h-px bg-medical-border" />
            {cat.title}
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cat.scales.map((scale, sIdx) => (
              <ScaleCard 
                key={sIdx}
                name={scale.name} 
                desc={scale.desc} 
                icon={scale.icon} 
                color={scale.color}
                onClick={() => setActiveScale(scale.name)}
              />
            ))}
          </div>
        </div>
      ))}
      
      <div className="mt-12 p-8 bg-medical-input border border-medical-border rounded-xl text-center">
        <ClipboardList size={40} className="text-medical-gray mx-auto mb-4 opacity-30" />
        <h4 className="text-lg font-bold text-white">Próximamente</h4>
        <p className="text-xs text-medical-gray mt-2 max-w-xs mx-auto">
          Cálculo automático de balances hídricos y gases arteriales.
        </p>
      </div>
    </div>
  );
}

function GlasgowScale({ onBack }: { onBack: () => void }) {
  const [ocular, setOcular] = useState(4);
  const [verbal, setVerbal] = useState(5);
  const [motor, setMotor] = useState(6);

  const options = {
    ocular: [
      { v: 4, l: 'Espontánea' },
      { v: 3, l: 'Al estímulo verbal' },
      { v: 2, l: 'Al dolor' },
      { v: 1, l: 'Sin respuesta' },
    ],
    verbal: [
      { v: 5, l: 'Orientado y conversando' },
      { v: 4, l: 'Desorientado y conversando' },
      { v: 3, l: 'Palabras inapropiadas' },
      { v: 2, l: 'Sonidos incomprensibles' },
      { v: 1, l: 'Sin respuesta' },
    ],
    motor: [
      { v: 6, l: 'Obedece órdenes' },
      { v: 5, l: 'Localiza el dolor' },
      { v: 4, l: 'Retirada al dolor' },
      { v: 3, l: 'Flexión anormal (Decorticación)' },
      { v: 2, l: 'Extensión anormal (Descerebración)' },
      { v: 1, l: 'Sin respuesta' },
    ],
  };

  const score = ocular + verbal + motor;

  const getInterpretation = (s: number) => {
    if (s >= 13) return { label: 'Trauma Leve', color: 'text-green-600', bg: 'bg-green-50' };
    if (s >= 9) return { label: 'Trauma Moderado', color: 'text-orange-600', bg: 'bg-orange-50' };
    return { label: 'Trauma Grave (Requiere Vía Aérea)', color: 'text-red-600', bg: 'bg-red-50' };
  };

  const interp = getInterpretation(score);

  return (
    <div className="max-w-4xl mx-auto">
      <button 
        onClick={onBack}
        className="text-medical-blue font-medium flex items-center gap-2 mb-6 hover:translate-x-[-4px] transition-transform"
      >
        <X size={18} /> Volver a Escalas
      </button>

      <div className="bg-medical-card rounded-xl p-8 border border-medical-border shadow-sm">
        <div className="flex justify-between items-center mb-10 pb-6 border-b border-medical-border">
          <div>
            <h3 className="text-3xl font-bold text-white">Escala de Glasgow</h3>
            <p className="text-medical-gray mt-1 uppercase text-[10px] font-bold tracking-widest tracking-widest">Valoración neurológica</p>
          </div>
          <div className="text-center">
            <p className="text-[10px] font-bold text-medical-gray uppercase tracking-widest mb-1">PUNTAJE</p>
            <div className="text-5xl font-black text-medical-blue">{score}</div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <ScaleSection 
            title="Ocular (AO)" 
            options={options.ocular} 
            value={ocular} 
            onChange={setOcular} 
          />
          <ScaleSection 
            title="Verbal (RV)" 
            options={options.verbal} 
            value={verbal} 
            onChange={setVerbal} 
          />
          <ScaleSection 
            title="Motor (RM)" 
            options={options.motor} 
            value={motor} 
            onChange={setMotor} 
          />
        </div>

        <div className={`mt-10 p-6 rounded-xl ${interp.bg} border border-medical-blue/20 flex flex-col items-center justify-center text-center`}>
          <p className="text-[10px] font-bold uppercase tracking-widest text-medical-gray mb-1">Interpretación Clínica</p>
          <h4 className={`text-2xl font-bold ${interp.color}`}>{interp.label}</h4>
        </div>
      </div>
    </div>
  );
}

function BradenScale({ onBack }: { onBack: () => void }) {
  const [q1, setQ1] = useState(4);
  const [q2, setQ2] = useState(4);
  const [q3, setQ3] = useState(4);
  const [q4, setQ4] = useState(4);
  const [q5, setQ5] = useState(4);
  const [q6, setQ6] = useState(3);

  const score = q1 + q2 + q3 + q4 + q5 + q6;

  const getInterp = () => {
    if (score <= 12) return { label: 'ALTO RIESGO', color: 'text-medical-red', bg: 'bg-medical-red/10' };
    if (score <= 14) return { label: 'RIESGO MODERADO', color: 'text-orange-500', bg: 'bg-orange-500/10' };
    if (score <= 18) return { label: 'RIESGO BAJO', color: 'text-medical-green', bg: 'bg-medical-green/10' };
    return { label: 'SIN RIESGO', color: 'text-medical-blue', bg: 'bg-medical-blue/10' };
  };

  const interp = getInterp();

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <button onClick={onBack} className="flex items-center gap-2 text-medical-gray hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">
        <ArrowLeft size={16} /> Volver a Escalas
      </button>

      <div className="bg-medical-card rounded-xl p-8 border border-medical-border shadow-sm">
        <div className="flex justify-between items-center mb-10 pb-6 border-b border-medical-border">
          <div>
            <h3 className="text-3xl font-bold text-white">Escala de Braden</h3>
            <p className="text-medical-gray mt-1 uppercase text-[10px] font-bold tracking-widest">Riesgo de Úlceras por Presión</p>
          </div>
          <div className="text-center">
            <p className="text-[10px] font-bold text-medical-gray uppercase tracking-widest mb-1">PUNTAJE</p>
            <div className="text-5xl font-black text-orange-500">{score}</div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <ScaleSection 
            title="1. Percepción Sensorial" 
            options={[
              { l: 'Completamente limitada', v: 1 },
              { l: 'Muy limitada', v: 2 },
              { l: 'Ligeramente limitada', v: 3 },
              { l: 'Sin limitaciones', v: 4 },
            ]} 
            value={q1} 
            onChange={setQ1}
          />
          <ScaleSection 
            title="2. Humedad" 
            options={[
              { l: 'Constante', v: 1 },
              { l: 'Frecuente', v: 2 },
              { l: 'Ocasional', v: 3 },
              { l: 'Raramente', v: 4 },
            ]} 
            value={q2} 
            onChange={setQ2}
          />
          <ScaleSection 
            title="3. Actividad" 
            options={[
              { l: 'Cama', v: 1 },
              { l: 'Silla', v: 2 },
              { l: 'Deambula ocasional', v: 3 },
              { l: 'Deambula frecuente', v: 4 },
            ]} 
            value={q3} 
            onChange={setQ3}
          />
          <ScaleSection 
            title="4. Movilidad" 
            options={[
              { l: 'Inmóvil', v: 1 },
              { l: 'Muy limitada', v: 2 },
              { l: 'Ligeramente limitada', v: 3 },
              { l: 'Sin limitaciones', v: 4 },
            ]} 
            value={q4} 
            onChange={setQ4}
          />
          <ScaleSection 
            title="5. Nutrición" 
            options={[
              { l: 'Muy pobre', v: 1 },
              { l: 'Prob. inadecuada', v: 2 },
              { l: 'Adecuada', v: 3 },
              { l: 'Excelente', v: 4 },
            ]} 
            value={q5} 
            onChange={setQ5}
          />
          <ScaleSection 
            title="6. Fricción y Cizallamiento" 
            options={[
              { l: 'Problema', v: 1 },
              { l: 'Problema potencial', v: 2 },
              { l: 'Sin problema aparente', v: 3 },
            ]} 
            value={q6} 
            onChange={setQ6}
          />
        </div>

        <div className={`mt-10 p-6 rounded-xl ${interp.bg} border border-orange-500/20 flex flex-col items-center justify-center text-center`}>
          <p className="text-[10px] font-bold uppercase tracking-widest text-medical-gray mb-1">Interpretación Clínica</p>
          <h4 className={`text-2xl font-bold ${interp.color}`}>{interp.label}</h4>
        </div>
      </div>
    </div>
  );
}

function EVAScale({ onBack }: { onBack: () => void }) {
  const [score, setScore] = useState(0);

  const getInterp = () => {
    if (score === 0) return { label: 'SIN DOLOR', color: 'text-medical-green', bg: 'bg-medical-green/10' };
    if (score <= 3) return { label: 'DOLOR LEVE', color: 'text-medical-blue', bg: 'bg-medical-blue/10' };
    if (score <= 6) return { label: 'DOLOR MODERADO', color: 'text-yellow-500', bg: 'bg-yellow-500/10' };
    if (score <= 9) return { label: 'DOLOR SEVERO', color: 'text-orange-500', bg: 'bg-orange-500/10' };
    return { label: 'DOLOR INSOPORTABLE', color: 'text-medical-red', bg: 'bg-medical-red/10' };
  };

  const interp = getInterp();

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <button onClick={onBack} className="flex items-center gap-2 text-medical-gray hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">
        <ArrowLeft size={16} /> Volver a Escalas
      </button>

      <div className="bg-medical-card rounded-xl p-8 border border-medical-border shadow-sm">
        <div className="flex justify-between items-center mb-10 pb-6 border-b border-medical-border">
          <div>
            <h3 className="text-3xl font-bold text-white">Escala EVA</h3>
            <p className="text-medical-gray mt-1 uppercase text-[10px] font-bold tracking-widest">Escala Visual Análoga del Dolor</p>
          </div>
          <div className="text-center">
            <p className="text-[10px] font-bold text-medical-gray uppercase tracking-widest mb-1">PUNTAJE</p>
            <div className="text-5xl font-black text-medical-red">{score}</div>
          </div>
        </div>

        <div className="space-y-12 py-10">
          <div className="relative pt-10 px-4">
            <div className="flex justify-between mb-4">
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                <button 
                  key={n}
                  onClick={() => setScore(n)}
                  className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-bold transition-all ${
                    score === n 
                      ? 'bg-medical-red border-medical-red text-white scale-125' 
                      : 'border-medical-border text-medical-gray hover:border-medical-red hover:text-medical-red'
                  }`}
                >
                  {n}
                </button>
              ))}
            </div>
            <div className="h-4 bg-gradient-to-r from-medical-green via-yellow-400 to-medical-red rounded-full overflow-hidden relative border border-medical-border shadow-inner">
               <div 
                 className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_10px_rgba(255,255,255,1)] pointer-events-none transition-all duration-300"
                 style={{ left: `${score * 10}%` }}
               />
            </div>
            <div className="flex justify-between mt-4 text-[10px] font-bold uppercase tracking-widest text-medical-gray">
              <span>Sin Dolor</span>
              <span>Moderado</span>
              <span>Insoportable</span>
            </div>
          </div>

          <div className={`p-6 rounded-xl ${interp.bg} border border-medical-red/20 flex flex-col items-center justify-center text-center`}>
            <p className="text-[10px] font-bold uppercase tracking-widest text-medical-gray mb-1">Intensidad del Dolor</p>
            <h4 className={`text-2xl font-bold ${interp.color}`}>{interp.label}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

function MorseScale({ onBack }: { onBack: () => void }) {
  const [q1, setQ1] = useState(0);
  const [q2, setQ2] = useState(0);
  const [q3, setQ3] = useState(0);
  const [q4, setQ4] = useState(0);
  const [q5, setQ5] = useState(0);
  const [q6, setQ6] = useState(0);

  const score = q1 + q2 + q3 + q4 + q5 + q6;

  const getInterp = () => {
    if (score < 25) return { label: 'RIESGO BAJO', color: 'text-medical-green', bg: 'bg-medical-green/10' };
    if (score < 45) return { label: 'RIESGO MODERADO', color: 'text-amber-500', bg: 'bg-amber-500/10' };
    return { label: 'RIESGO ALTO', color: 'text-medical-red', bg: 'bg-medical-red/10' };
  };

  const interp = getInterp();

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <button onClick={onBack} className="flex items-center gap-2 text-medical-gray hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">
        <ArrowLeft size={16} /> Volver a Escalas
      </button>

      <div className="bg-medical-card rounded-xl p-8 border border-medical-border shadow-sm">
        <div className="flex justify-between items-center mb-10 pb-6 border-b border-medical-border">
          <div>
            <h3 className="text-3xl font-bold text-white">Escala Morse</h3>
            <p className="text-medical-gray mt-1 uppercase text-[10px] font-bold tracking-widest">Riesgo de Caídas</p>
          </div>
          <div className="text-center">
            <p className="text-[10px] font-bold text-medical-gray uppercase tracking-widest mb-1">PUNTAJE</p>
            <div className="text-5xl font-black text-amber-500">{score}</div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <ScaleSection 
            title="1. Antecedentes de Caídas" 
            options={[
               { l: 'No', v: 0 },
               { l: 'Sí', v: 25 },
            ]} 
            value={q1} 
            onChange={setQ1}
          />
          <ScaleSection 
            title="2. Diagnóstico Secundario" 
            options={[
               { l: 'No', v: 0 },
               { l: 'Sí', v: 15 },
            ]} 
            value={q2} 
            onChange={setQ2}
          />
          <ScaleSection 
            title="3. Ayuda de Ambulación" 
            options={[
               { l: 'Ninguna / Reposo', v: 0 },
               { l: 'Muletas, bastón, andador', v: 15 },
               { l: 'Muebles', v: 30 },
            ]} 
            value={q3} 
            onChange={setQ3}
          />
          <ScaleSection 
            title="4. Vía Venosa (IV)" 
            options={[
               { l: 'No', v: 0 },
               { l: 'Sí', v: 20 },
            ]} 
            value={q4} 
            onChange={setQ4}
          />
          <ScaleSection 
            title="5. Marcha / Transferencia" 
            options={[
               { l: 'Normal / Reposo', v: 0 },
               { l: 'Debilidad', v: 10 },
               { l: 'Alterada', v: 20 },
            ]} 
            value={q5} 
            onChange={setQ5}
          />
          <ScaleSection 
            title="6. Estado Mental" 
            options={[
               { l: 'Orientado', v: 0 },
               { l: 'Olvida sus limitaciones', v: 15 },
            ]} 
            value={q6} 
            onChange={setQ6}
          />
        </div>

        <div className={`mt-10 p-6 rounded-xl ${interp.bg} border border-amber-500/20 flex flex-col items-center justify-center text-center`}>
          <p className="text-[10px] font-bold uppercase tracking-widest text-medical-gray mb-1">Interpretación Clínica</p>
          <h4 className={`text-2xl font-bold ${interp.color}`}>{interp.label}</h4>
        </div>
      </div>
    </div>
  );
}

function NortonScale({ onBack }: { onBack: () => void }) {
  const [q1, setQ1] = useState(4);
  const [q2, setQ2] = useState(4);
  const [q3, setQ3] = useState(4);
  const [q4, setQ4] = useState(4);
  const [q5, setQ5] = useState(4);

  const score = q1 + q2 + q3 + q4 + q5;

  const getInterp = () => {
    if (score <= 11) return { label: 'MUY ALTO RIESGO', color: 'text-medical-red', bg: 'bg-medical-red/10' };
    if (score <= 14) return { label: 'RIESGO EVIDENTE', color: 'text-orange-500', bg: 'bg-orange-500/10' };
    return { label: 'BAJO RIESGO', color: 'text-medical-green', bg: 'bg-medical-green/10' };
  };

  const interp = getInterp();

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <button onClick={onBack} className="flex items-center gap-2 text-medical-gray hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">
        <ArrowLeft size={16} /> Volver a Escalas
      </button>

      <div className="bg-medical-card rounded-xl p-8 border border-medical-border shadow-sm">
        <div className="flex justify-between items-center mb-10 pb-6 border-b border-medical-border">
          <div>
            <h3 className="text-3xl font-bold text-white">Escala Norton</h3>
            <p className="text-medical-gray mt-1 uppercase text-[10px] font-bold tracking-widest">Valoración del Riesgo de UPP</p>
          </div>
          <div className="text-center">
            <p className="text-[10px] font-bold text-medical-gray uppercase tracking-widest mb-1">PUNTAJE</p>
            <div className="text-5xl font-black text-emerald-500">{score}</div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <ScaleSection 
            title="1. Estado Físico General" 
            options={[
               { l: 'Muy malo', v: 1 },
               { l: 'Pobre', v: 2 },
               { l: 'Regular', v: 3 },
               { l: 'Bueno', v: 4 },
            ]} 
            value={q1} 
            onChange={setQ1}
          />
          <ScaleSection 
            title="2. Estado Mental" 
            options={[
               { l: 'Estuporoso', v: 1 },
               { l: 'Confuso', v: 2 },
               { l: 'Apático', v: 3 },
               { l: 'Alerta', v: 4 },
            ]} 
            value={q2} 
            onChange={setQ2}
          />
          <ScaleSection 
            title="3. Actividad" 
            options={[
               { l: 'Encamado', v: 1 },
               { l: 'Sentado (Silla)', v: 2 },
               { l: 'Camina con ayuda', v: 3 },
               { l: 'Ambulante', v: 4 },
            ]} 
            value={q3} 
            onChange={setQ3}
          />
          <ScaleSection 
            title="4. Movilidad" 
            options={[
               { l: 'Inmóvil', v: 1 },
               { l: 'Muy limitada', v: 2 },
               { l: 'Disminuida', v: 3 },
               { l: 'Completa', v: 4 },
            ]} 
            value={q4} 
            onChange={setQ4}
          />
          <ScaleSection 
            title="5. Incontinencia" 
            options={[
               { l: 'Urinaria y fecal', v: 1 },
               { l: 'Frecuente', v: 2 },
               { l: 'Ocasional', v: 3 },
               { l: 'Ninguna', v: 4 },
            ]} 
            value={q5} 
            onChange={setQ5}
          />
        </div>

        <div className={`mt-10 p-6 rounded-xl ${interp.bg} border border-emerald-500/20 flex flex-col items-center justify-center text-center`}>
          <p className="text-[10px] font-bold uppercase tracking-widest text-medical-gray mb-1">Interpretación Clínica</p>
          <h4 className={`text-2xl font-bold ${interp.color}`}>{interp.label}</h4>
        </div>
      </div>
    </div>
  );
}

function NumericPainScale({ onBack }: { onBack: () => void }) {
  const [score, setScore] = useState(0);

  const getInterp = () => {
    if (score === 0) return { label: 'SIN DOLOR', color: 'text-medical-green', bg: 'bg-medical-green/10' };
    if (score <= 3) return { label: 'DOLOR LEVE', color: 'text-medical-blue', bg: 'bg-medical-blue/10' };
    if (score <= 6) return { label: 'DOLOR MODERADO', color: 'text-yellow-500', bg: 'bg-yellow-500/10' };
    if (score <= 9) return { label: 'DOLOR SEVERO', color: 'text-orange-500', bg: 'bg-orange-500/10' };
    return { label: 'DOLOR MÁXIMO', color: 'text-medical-red', bg: 'bg-medical-red/10' };
  };

  const interp = getInterp();

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <button onClick={onBack} className="flex items-center gap-2 text-medical-gray hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">
        <ArrowLeft size={16} /> Volver a Escalas
      </button>

      <div className="bg-medical-card rounded-xl p-8 border border-medical-border shadow-sm">
        <div className="flex justify-between items-center mb-10 pb-6 border-b border-medical-border">
          <div>
            <h3 className="text-3xl font-bold text-white">Escala Numérica</h3>
            <p className="text-medical-gray mt-1 uppercase text-[10px] font-bold tracking-widest">Valoración Verbal del Dolor (1-10)</p>
          </div>
          <div className="text-center">
            <p className="text-[10px] font-bold text-medical-gray uppercase tracking-widest mb-1">PUNTAJE</p>
            <div className="text-5xl font-black text-white">{score}</div>
          </div>
        </div>

        <div className="grid grid-cols-5 sm:grid-cols-11 gap-2 mb-10">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
            <button
              key={n}
              onClick={() => setScore(n)}
              className={`aspect-square rounded-xl border-2 flex flex-col items-center justify-center transition-all ${
                score === n
                  ? 'bg-medical-blue border-medical-blue text-white shadow-lg shadow-medical-blue/20 scale-105'
                  : 'bg-medical-input border-medical-border text-medical-gray hover:border-medical-blue/30'
              }`}
            >
              <span className="text-xl font-bold">{n}</span>
            </button>
          ))}
        </div>

        <div className={`p-6 rounded-xl ${interp.bg} border border-white/5 flex flex-col items-center justify-center text-center`}>
          <p className="text-[10px] font-bold uppercase tracking-widest text-medical-gray mb-1">Estado del Paciente</p>
          <h4 className={`text-2xl font-bold ${interp.color}`}>{interp.label}</h4>
        </div>
      </div>
    </div>
  );
}

function BarthelScale({ onBack }: { onBack: () => void }) {
  const [q, setQ] = useState<number[]>(new Array(10).fill(10));
  
  const updateQ = (idx: number, val: number) => {
    const newQ = [...q];
    newQ[idx] = val;
    setQ(newQ);
  };

  const score = q.reduce((a, b) => a + b, 0);

  const getInterp = () => {
    if (score < 20) return { label: 'DEPENDENCIA TOTAL', color: 'text-medical-red', bg: 'bg-medical-red/10' };
    if (score < 60) return { label: 'DEPENDENCIA SEVERA', color: 'text-orange-500', bg: 'bg-orange-500/10' };
    if (score < 90) return { label: 'DEPENDENCIA MODERADA', color: 'text-yellow-500', bg: 'bg-yellow-500/10' };
    if (score < 100) return { label: 'DEPENDENCIA LEVE', color: 'text-medical-blue', bg: 'bg-medical-blue/10' };
    return { label: 'INDEPENDIENTE', color: 'text-medical-green', bg: 'bg-medical-green/10' };
  };

  const interp = getInterp();

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <button onClick={onBack} className="flex items-center gap-2 text-medical-gray hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">
        <ArrowLeft size={16} /> Volver a Escalas
      </button>

      <div className="bg-medical-card rounded-xl p-8 border border-medical-border shadow-sm">
        <div className="flex justify-between items-center mb-10 pb-6 border-b border-medical-border">
          <div>
            <h3 className="text-3xl font-bold text-white">Índice de Barthel</h3>
            <p className="text-medical-gray mt-1 uppercase text-[10px] font-bold tracking-widest">Actividades de la vida diaria</p>
          </div>
          <div className="text-center">
            <p className="text-[10px] font-bold text-medical-gray uppercase tracking-widest mb-1">PUNTAJE</p>
            <div className="text-5xl font-black text-medical-blue">{score}</div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <ScaleSection 
            title="1. Comer" 
            options={[
              { l: 'Incapaz', v: 0 },
              { l: 'Necesita ayuda', v: 5 },
              { l: 'Independiente', v: 10 },
            ]} 
            value={q[0]} 
            onChange={(v: number) => updateQ(0, v)} 
          />
          <ScaleSection 
            title="2. Lavarse (Baño)" 
            options={[
              { l: 'Dependiente', v: 0 },
              { l: 'Independiente', v: 5 },
            ]} 
            value={q[1]} 
            onChange={(v: number) => updateQ(1, v)} 
          />
          <ScaleSection 
            title="3. Vestirse" 
            options={[
              { l: 'Dependiente', v: 0 },
              { l: 'Necesita ayuda', v: 5 },
              { l: 'Independiente', v: 10 },
            ]} 
            value={q[2]} 
            onChange={(v: number) => updateQ(2, v)} 
          />
          <ScaleSection 
            title="4. Aseo Personal" 
            options={[
              { l: 'Dependiente', v: 0 },
              { l: 'Independiente', v: 5 },
            ]} 
            value={q[3]} 
            onChange={(v: number) => updateQ(3, v)} 
          />
          <ScaleSection 
            title="5. Deposición (Anal)" 
            options={[
              { l: 'Incontinente', v: 0 },
              { l: 'Accidente ocasional', v: 5 },
              { l: 'Continente', v: 10 },
            ]} 
            value={q[4]} 
            onChange={(v: number) => updateQ(4, v)} 
          />
          <ScaleSection 
            title="6. Micción (Urinaria)" 
            options={[
              { l: 'Incontinente', v: 0 },
              { l: 'Accidente ocasional', v: 5 },
              { l: 'Continente', v: 10 },
            ]} 
            value={q[5]} 
            onChange={(v: number) => updateQ(5, v)} 
          />
          <ScaleSection 
            title="7. Usar el Retrete" 
            options={[
              { l: 'Dependiente', v: 0 },
              { l: 'Necesita ayuda', v: 5 },
              { l: 'Independiente', v: 10 },
            ]} 
            value={q[6]} 
            onChange={(v: number) => updateQ(6, v)} 
          />
          <ScaleSection 
            title="8. Traslado (Silla/Cama)" 
            options={[
              { l: 'Incapaz', v: 0 },
              { l: 'Gran ayuda', v: 5 },
              { l: 'Pequeña ayuda', v: 10 },
              { l: 'Independiente', v: 15 },
            ]} 
            value={q[7]} 
            onChange={(v: number) => updateQ(7, v)} 
          />
          <ScaleSection 
            title="9. Deambulación" 
            options={[
              { l: 'Inmóvil', v: 0 },
              { l: 'Independiente en silla', v: 5 },
              { l: 'Ayuda de una persona', v: 10 },
              { l: 'Independiente', v: 15 },
            ]} 
            value={q[8]} 
            onChange={(v: number) => updateQ(8, v)} 
          />
          <ScaleSection 
            title="10. Escalones" 
            options={[
              { l: 'Incapaz', v: 0 },
              { l: 'Necesita ayuda', v: 5 },
              { l: 'Independiente', v: 10 },
            ]} 
            value={q[9]} 
            onChange={(v: number) => updateQ(9, v)} 
          />
        </div>

        <div className={`mt-10 p-6 rounded-xl ${interp.bg} border border-medical-border flex flex-col items-center justify-center text-center`}>
          <p className="text-[10px] font-bold uppercase tracking-widest text-medical-gray mb-1">Capacidad Funcional</p>
          <h4 className={`text-2xl font-bold ${interp.color}`}>{interp.label}</h4>
        </div>
      </div>
    </div>
  );
}

function KatzScale({ onBack }: { onBack: () => void }) {
  const [q, setQ] = useState<number[]>(new Array(6).fill(1));
  
  const updateQ = (idx: number, val: number) => {
    const newQ = [...q];
    newQ[idx] = val;
    setQ(newQ);
  };

  const score = q.reduce((a, b) => a + b, 0);

  const getInterp = () => {
    if (score === 6) return { label: 'A: INDEPENDENCIA TOTAL', color: 'text-medical-green' };
    if (score === 5) return { label: 'B: INDEPENDENCIA (excepto 1 func.)', color: 'text-medical-blue' };
    if (score <= 2) return { label: 'G: DEPENDENCIA TOTAL', color: 'text-medical-red' };
    return { label: 'DEPENDENCIA MODERADA', color: 'text-orange-500' };
  };

  const interp = getInterp();

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <button onClick={onBack} className="flex items-center gap-2 text-medical-gray hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">
        <ArrowLeft size={16} /> Volver a Escalas
      </button>

      <div className="bg-medical-card rounded-xl p-8 border border-medical-border shadow-sm">
        <h3 className="text-3xl font-bold text-white mb-2">Índice de Katz</h3>
        <p className="text-medical-gray uppercase text-[10px] font-bold tracking-widest border-b border-medical-border pb-6 mb-10">Independencia en AVD</p>

        <div className="grid md:grid-cols-2 gap-8">
          <ScaleSection 
            title="1. Baño" 
            options={[
              { l: 'Independiente', v: 1 },
              { l: 'Dependiente', v: 0 },
            ]} 
            value={q[0]} 
            onChange={(v: number) => updateQ(0, v)} 
          />
          <ScaleSection 
            title="2. Vestido" 
            options={[
              { l: 'Independiente', v: 1 },
              { l: 'Dependiente', v: 0 },
            ]} 
            value={q[1]} 
            onChange={(v: number) => updateQ(1, v)} 
          />
          <ScaleSection 
            title="3. Uso del Retrete" 
            options={[
              { l: 'Independiente', v: 1 },
              { l: 'Dependiente', v: 0 },
            ]} 
            value={q[2]} 
            onChange={(v: number) => updateQ(2, v)} 
          />
          <ScaleSection 
            title="4. Movilidad" 
            options={[
              { l: 'Independiente', v: 1 },
              { l: 'Dependiente', v: 0 },
            ]} 
            value={q[3]} 
            onChange={(v: number) => updateQ(3, v)} 
          />
          <ScaleSection 
            title="5. Continencia" 
            options={[
              { l: 'Independiente', v: 1 },
              { l: 'Dependiente', v: 0 },
            ]} 
            value={q[4]} 
            onChange={(v: number) => updateQ(4, v)} 
          />
          <ScaleSection 
            title="6. Alimentación" 
            options={[
              { l: 'Independiente', v: 1 },
              { l: 'Dependiente', v: 0 },
            ]} 
            value={q[5]} 
            onChange={(v: number) => updateQ(5, v)} 
          />
        </div>

        <div className="mt-10 p-6 bg-medical-input rounded-xl border border-medical-border text-center">
          <p className="text-[10px] font-bold uppercase tracking-widest text-medical-gray mb-1">Clasificación</p>
          <h4 className={`text-2xl font-bold ${interp.color}`}>{interp.label}</h4>
        </div>
      </div>
    </div>
  );
}

function MMSEScale({ onBack }: { onBack: () => void }) {
  const [q, setQ] = useState<number[]>(new Array(5).fill(10));
  
  const updateQ = (idx: number, val: number) => {
    const newQ = [...q];
    newQ[idx] = val;
    setQ(newQ);
  };

  const score = q.reduce((a, b) => a + b, 0);

  const getInterp = () => {
    if (score <= 9) return { label: 'DETERIORO GRAVE', color: 'text-medical-red' };
    if (score <= 18) return { label: 'DETERIORO MODERADO', color: 'text-orange-500' };
    if (score <= 26) return { label: 'DETERIORO LEVE', color: 'text-medical-blue' };
    return { label: 'NORMAL', color: 'text-medical-green' };
  };

  const interp = getInterp();

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <button onClick={onBack} className="flex items-center gap-2 text-medical-gray hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">
        <ArrowLeft size={16} /> Volver a Escalas
      </button>

      <div className="bg-medical-card rounded-xl p-8 border border-medical-border shadow-sm">
        <div className="flex justify-between items-center mb-10 pb-6 border-b border-medical-border">
          <div>
            <h3 className="text-3xl font-bold text-white">MMSE (Folstein)</h3>
            <p className="text-medical-gray mt-1 uppercase text-[10px] font-bold tracking-widest">Mini-Examen del Estado Mental</p>
          </div>
          <div className="text-center">
            <p className="text-[10px] font-bold text-medical-gray uppercase tracking-widest mb-1">PUNTAJE</p>
            <div className="text-5xl font-black text-medical-blue">{score}</div>
          </div>
        </div>

        <div className="grid gap-6">
           <ScaleSection 
            title="1. Orientación (Tiempo y Espacio)" 
            options={[
              { l: 'Deterioro grave', v: 2 },
              { l: 'Algún error', v: 7 },
              { l: 'Orientación completa', v: 10 },
            ]} 
            value={q[0]} 
            onChange={(v: number) => updateQ(0, v)} 
          />
          <ScaleSection 
            title="2. Memoria de Fijación" 
            options={[
              { l: 'Ninguna palabra', v: 0 },
              { l: '1 palabra', v: 1 },
              { l: '2 palabras', v: 2 },
              { l: '3 palabras', v: 3 },
            ]} 
            value={q[1]} 
            onChange={(v: number) => updateQ(1, v)} 
          />
          <ScaleSection 
            title="3. Atención y Cálculo" 
            options={[
              { l: 'Incapaz', v: 0 },
              { l: 'Errores frecuentes', v: 2 },
              { l: 'Errores mínimos', v: 4 },
              { l: 'Sin errores', v: 5 },
            ]} 
            value={q[2]} 
            onChange={(v: number) => updateQ(2, v)} 
          />
          <ScaleSection 
            title="4. Memoria de Recuerdo" 
            options={[
              { l: 'Incapaz', v: 0 },
              { l: '1 palabra', v: 1 },
              { l: '2 palabras', v: 2 },
              { l: '3 palabras', v: 3 },
            ]} 
            value={q[3]} 
            onChange={(v: number) => updateQ(3, v)} 
          />
          <ScaleSection 
            title="5. Lenguaje y Praxis" 
            options={[
              { l: 'Deterioro marcado', v: 2 },
              { l: 'Deterioro leve', v: 6 },
              { l: 'Capacidad normal', v: 9 },
            ]} 
            onChange={(v: number) => updateQ(4, v)} 
            value={q[4]}
          />
        </div>

        <div className="mt-10 p-6 bg-medical-input rounded-xl border border-medical-border text-center">
          <p className="text-[10px] font-bold uppercase tracking-widest text-medical-gray mb-1">Estado Cognitivo</p>
          <h4 className={`text-2xl font-bold ${interp.color}`}>{interp.label}</h4>
        </div>
      </div>
    </div>
  );
}

function YesavageScale({ onBack }: { onBack: () => void }) {
  const [items, setItems] = useState<number[]>([]);

  const toggleItem = (idx: number) => {
    if (items.includes(idx)) {
      setItems(items.filter(i => i !== idx));
    } else {
      setItems([...items, idx]);
    }
  };

  const score = items.length;

  const getInterp = () => {
    if (score <= 5) return { label: 'NORMAL', color: 'text-medical-green' };
    if (score <= 9) return { label: 'DEPRESIÓN LEVE', color: 'text-orange-500' };
    return { label: 'DEPRESIÓN ESTABLECIDA', color: 'text-medical-red' };
  };

  const interp = getInterp();

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <button onClick={onBack} className="flex items-center gap-2 text-medical-gray hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">
        <ArrowLeft size={16} /> Volver a Escalas
      </button>

      <div className="bg-medical-card rounded-xl p-8 border border-medical-border shadow-sm">
        <div className="flex justify-between items-center mb-8 pb-6 border-b border-medical-border">
          <div>
            <h3 className="text-3xl font-bold text-white">Escala Yesavage</h3>
            <p className="text-medical-gray mt-1 uppercase text-[10px] font-bold tracking-widest">Depresión Geriátrica (Abreviada)</p>
          </div>
          <div className="text-center">
            <p className="text-[10px] font-bold text-medical-gray uppercase tracking-widest mb-1">SÍNTOMAS</p>
            <div className="text-5xl font-black text-rose-500">{score}</div>
          </div>
        </div>

        <p className="text-xs text-medical-gray mb-8 italic">Seleccione los ítems que el paciente responde afirmativamente (indicadores de depresión en escala abreviada de 15 ítems).</p>

        <div className="grid gap-3">
          {[
            "¿Se siente básicamente satisfecho con su vida? (No)",
            "¿Ha abandonado muchos de sus intereses y actividades?",
            "¿Siente que su vida está vacía?",
            "¿Se aburre a menudo?",
            "¿Se siente con buen ánimo la mayor parte del tiempo? (No)",
            "¿Teme que algo malo le pase?",
            "¿Se siente feliz la mayor parte del tiempo? (No)",
            "¿Se siente a menudo desvalido?",
            "¿Prefiere quedarse en casa?",
            "¿Siente que tiene más problemas de memoria?",
            "¿Piensa que es maravilloso estar vivo? (No)",
            "¿Se siente inútil?",
            "¿Se siente lleno de energía? (No)",
            "¿Siente que su situación es desesperada?",
            "¿Cree que la mayoría de la gente está mejor que usted?"
          ].map((q, i) => (
            <button
              key={i}
              onClick={() => toggleItem(i)}
              className={`p-4 rounded-xl border text-left text-sm transition-all flex items-center gap-4 ${
                items.includes(i)
                  ? 'bg-rose-500/10 border-rose-500 text-rose-500'
                  : 'bg-medical-input border-medical-border text-medical-text hover:border-medical-gray'
              }`}
            >
              <div className={`w-5 h-5 rounded border flex items-center justify-center ${items.includes(i) ? 'bg-rose-500 border-rose-500' : 'border-medical-border'}`}>
                {items.includes(i) && <X size={12} className="text-white" />}
              </div>
              {q}
            </button>
          ))}
        </div>

        <div className="mt-10 p-6 bg-medical-input rounded-xl border border-medical-border text-center">
          <p className="text-[10px] font-bold uppercase tracking-widest text-medical-gray mb-1">Resultado de Valoración</p>
          <h4 className={`text-2xl font-bold ${interp.color}`}>{interp.label}</h4>
        </div>
      </div>
    </div>
  );
}

function ScaleSection({ title, options, value, onChange }: any) {
  return (
    <div className="space-y-4">
      <h5 className="text-[10px] font-bold text-medical-gray uppercase tracking-widest flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-medical-blue shrink-0" />
        {title}
      </h5>
      <div className="space-y-2">
        {options.map((opt: any) => (
          <button
            key={opt.v}
            onClick={() => onChange(opt.v)}
            className={`w-full text-left px-4 py-3 rounded-lg border text-xs transition-all duration-200 ${
              value === opt.v
                ? 'bg-medical-blue/10 border-medical-blue text-medical-blue font-bold'
                : 'bg-medical-input border-medical-border text-medical-text hover:border-medical-gray'
            }`}
          >
            <div className="flex justify-between items-center">
              <span>{opt.l}</span>
              <span className={`text-[10px] ${value === opt.v ? 'text-medical-blue opacity-50' : 'text-medical-gray'}`}>+{opt.v}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

function ScaleCard({ name, desc, icon: Icon, color, onClick }: any) {
  return (
    <div 
      onClick={onClick}
      className={`p-6 rounded-xl border border-medical-border hover:border-medical-blue transition-all group cursor-pointer h-full flex flex-col bg-medical-card shadow-sm`}
    >
      <div className={`w-12 h-12 rounded-lg ${color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
        <Icon size={24} />
      </div>
      <h4 className="text-sm font-bold text-white uppercase tracking-widest">{name}</h4>
      <p className="text-xs text-medical-gray mt-2 leading-relaxed flex-grow">{desc}</p>
      <div className="mt-6 text-[10px] font-bold text-medical-blue flex items-center gap-1 group-hover:gap-2 transition-all uppercase tracking-widest">
        Valorar paciente <Menu size={14} />
      </div>
    </div>
  );
}

function ClinicalCasesView() {
  const [activeCategory, setActiveCategory] = useState<'pharmacology' | 'pathology' | null>(null);
  const [selectedCaseId, setSelectedCaseId] = useState<string | null>(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [answeredCount, setAnsweredCount] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes total

  const selectedCase = CLINICAL_CASES.find(c => c.id === selectedCaseId);
  const currentCategoryCases = CLINICAL_CASES.filter(c => c.category === activeCategory);
  const currentIndex = currentCategoryCases.findIndex(c => c.id === selectedCaseId);

  // Global Timer Logic
  useEffect(() => {
    if (!activeCategory || !selectedCaseId || showResults) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setShowResults(true);
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [activeCategory, selectedCaseId, showResults]);

  const handleBackToList = () => {
    setActiveCategory(null);
    setSelectedCaseId(null);
    setSelectedOption(null);
    setShowResults(false);
    setTimeLeft(600);
  };

  const handleOptionSelect = (option: string) => {
    if (selectedOption !== null) return;
    setSelectedOption(option);
    setAnsweredCount(prev => prev + 1);
    if (option === selectedCase?.correctAnswer) {
      setScore(prev => prev + 2);
    }
  };

  const resetExam = () => {
    setScore(0);
    setAnsweredCount(0);
    setShowResults(false);
    setTimeLeft(600);
    const firstCase = currentCategoryCases[0];
    if (firstCase) setSelectedCaseId(firstCase.id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (showResults) {
    const timeSpent = 600 - timeLeft;
    const minutesSpent = Math.floor(timeSpent / 60);
    const secondsSpent = timeSpent % 60;

    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-xl mx-auto bg-medical-card p-12 rounded-3xl border border-medical-border text-center shadow-2xl relative overflow-hidden"
      >
        <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${activeCategory === 'pharmacology' ? 'from-indigo-500 via-medical-blue to-cyan-500' : 'from-medical-blue via-indigo-500 to-rose-500'}`}></div>
        
        <div className={`w-24 h-24 rounded-full ${activeCategory === 'pharmacology' ? 'bg-indigo-500/20 text-indigo-400' : 'bg-rose-500/20 text-rose-400'} flex items-center justify-center mx-auto mb-8`}>
          {activeCategory === 'pharmacology' ? <Pill size={48} /> : <ClipboardList size={48} />}
        </div>

        <h3 className="text-3xl font-bold text-white mb-2">¡Evaluación Finalizada!</h3>
        <p className="text-medical-gray mb-10">Has completado los escenarios de {activeCategory === 'pharmacology' ? 'farmacología' : 'patología'}.</p>

        <div className="grid grid-cols-2 gap-4 mb-10">
          <div className="bg-medical-input p-6 rounded-2xl border border-medical-border">
            <p className="text-[10px] font-bold text-medical-blue uppercase tracking-widest mb-1">Puntaje</p>
            <div className="text-4xl font-black text-white">
              {score} <span className="text-sm text-medical-gray font-normal">/ {currentCategoryCases.length * 2}</span>
            </div>
          </div>
          <div className="bg-medical-input p-6 rounded-2xl border border-medical-border">
            <p className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest mb-1">Tiempo Usado</p>
            <div className="text-4xl font-black text-white">
              {minutesSpent}:<span className="text-2xl font-bold text-medical-gray">{secondsSpent.toString().padStart(2, '0')}</span>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <button 
            onClick={resetExam}
            className={`w-full ${activeCategory === 'pharmacology' ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-medical-blue hover:bg-medical-blue/80'} text-white py-4 rounded-xl font-bold uppercase tracking-widest text-xs transition-all flex items-center justify-center gap-2`}
          >
            Reiniciar Evaluación
          </button>
          <button 
            onClick={handleBackToList}
            className="w-full bg-medical-input text-white py-4 rounded-xl border border-medical-border font-bold uppercase tracking-widest text-xs hover:bg-white/5 transition-all"
          >
            Salir al Menú
          </button>
        </div>
      </motion.div>
    );
  }

  if (selectedCase) {
    return (
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex justify-between items-center">
          <button 
            onClick={handleBackToList} 
            className="flex items-center gap-2 text-medical-gray hover:text-white transition-colors text-xs font-bold uppercase tracking-widest"
          >
            <ArrowLeft size={16} /> Volver a Categorías
          </button>
          
          <div className={`px-4 py-2 rounded-lg flex items-center gap-3 border transition-colors ${timeLeft <= 60 ? 'bg-medical-red/10 border-medical-red/30 text-medical-red animate-pulse' : 'bg-medical-blue/10 border-medical-blue/30 text-medical-blue'}`}>
            <Clock size={16} />
            <span className="text-[10px] font-bold uppercase tracking-widest">Tiempo de Examen</span>
            <span className="text-xl font-mono font-bold w-16 text-center">
              {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
            </span>
          </div>
        </div>

        <div className="bg-medical-card rounded-xl border border-medical-border p-8 shadow-sm">
          <div className="border-b border-medical-border pb-6 mb-8">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-3xl font-bold text-white">
                {activeCategory === 'pharmacology' ? `Desafío Farmacológico #${currentIndex + 1}` : `Desafío Clínico #${currentIndex + 1}`}
              </h3>
              <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border ${
                selectedCase.category === 'pharmacology' 
                  ? 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30' 
                  : 'bg-rose-500/10 text-rose-400 border-rose-500/30'
              }`}>
                {selectedCase.category === 'pharmacology' ? 'Farmacología' : 'Patología'}
              </span>
            </div>
            <p className="text-medical-gray leading-relaxed">{selectedCase.patient}</p>
          </div>

          <div className="bg-medical-input/50 border border-medical-border p-6 rounded-2xl mb-10">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-[10px] font-bold text-medical-gray uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Activity size={14} className="text-medical-blue" />
                  Signos Vitales de Ingreso
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {Object.entries(selectedCase.vitals).map(([key, val]) => (
                    <div key={key} className="bg-medical-sidebar p-3 rounded-lg border border-medical-border">
                      <p className="text-[10px] font-bold text-medical-blue uppercase mb-1">{key}</p>
                      <p className="text-sm font-bold text-white uppercase">{val}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-[10px] font-bold text-medical-gray uppercase tracking-widest mb-4 flex items-center gap-2">
                  <AlertCircle size={14} className="text-medical-red" />
                  {activeCategory === 'pharmacology' ? 'Contexto de Administración' : 'Hallazgos Clínicos'}
                </h4>
                <div className="text-medical-text text-sm italic leading-relaxed bg-medical-sidebar p-4 rounded-xl border border-medical-border">
                  "{selectedCase.scenario}"
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-medical-border">
            <h4 className="text-[10px] font-bold text-medical-gray uppercase tracking-widest mb-6 flex items-center gap-2">
              <ClipboardList size={14} className="text-medical-blue" />
              {activeCategory === 'pharmacology' ? 'Indique el Tratamiento / Antídoto Correcto' : 'Seleccione el Diagnóstico Probable'}
            </h4>
            <div className="grid sm:grid-cols-2 gap-4">
              {selectedCase.options?.map((option, i) => (
                <button
                  key={i}
                  onClick={() => handleOptionSelect(option)}
                  disabled={selectedOption !== null}
                  className={`p-4 rounded-xl border text-left text-sm transition-all duration-300 flex items-center gap-4 ${
                    selectedOption === option
                      ? 'bg-medical-blue/10 border-medical-blue text-medical-blue'
                      : 'bg-medical-input border-medical-border text-medical-text hover:border-medical-blue/50'
                  }`}
                >
                  <span className={`w-6 h-6 rounded-full border flex items-center justify-center text-[10px] font-bold shrink-0 ${
                    selectedOption === option
                      ? 'border-current'
                      : 'border-medical-border'
                  }`}>
                    {String.fromCharCode(65 + i)}
                  </span>
                  {option}
                </button>
              ))}
            </div>

            {selectedOption && (
              <div className="mt-8 flex justify-end">
                <button
                  onClick={() => {
                    if (currentIndex === currentCategoryCases.length - 1) {
                      setShowResults(true);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    } else {
                      const nextCase = currentCategoryCases[currentIndex + 1];
                      setSelectedCaseId(nextCase.id);
                      setSelectedOption(null);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                  className={`flex items-center gap-2 ${currentIndex === currentCategoryCases.length - 1 ? 'bg-rose-500 hover:bg-rose-600 shadow-rose-500/20' : 'bg-medical-blue hover:bg-medical-blue/80 shadow-medical-blue/20'} text-white px-6 py-2 rounded-lg text-xs font-bold uppercase tracking-widest transition-all shadow-lg`}
                >
                  {currentIndex === currentCategoryCases.length - 1 ? 'Finalizar Evaluación' : 'Siguiente'} 
                  {currentIndex === currentCategoryCases.length - 1 ? <ClipboardList size={16} /> : <ArrowRight size={16} />}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (activeCategory) {
    const filteredCases = CLINICAL_CASES.filter(c => c.category === activeCategory);
    return (
      <div className="max-w-4xl mx-auto space-y-6">
        <button 
          onClick={() => setActiveCategory(null)} 
          className="flex items-center gap-2 text-medical-gray hover:text-white transition-colors text-xs font-bold uppercase tracking-widest"
        >
          <ArrowLeft size={16} /> Volver a Categorías
        </button>

        <div className="grid sm:grid-cols-2 gap-6">
          {filteredCases.map((c, index) => (
            <button 
              key={c.id}
              onClick={() => setSelectedCaseId(c.id)}
              className="group bg-medical-card p-6 rounded-xl border border-medical-border hover:border-medical-blue transition-all text-left flex flex-col h-full shadow-sm"
            >
              <div className={`w-12 h-12 rounded-lg ${activeCategory === 'pharmacology' ? 'bg-indigo-500/20 text-indigo-400' : 'bg-rose-500/20 text-rose-400'} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {activeCategory === 'pharmacology' ? <Pill size={24} /> : <Activity size={24} />}
              </div>
              <h4 className="text-lg font-bold text-white mb-2 group-hover:text-medical-blue transition-colors">
                {activeCategory === 'pathology' ? `Escenario Clínico #${index + 1}` : c.title}
              </h4>
              <p className="text-xs text-medical-gray mb-6 line-clamp-2">{c.patient}</p>
              <div className="mt-auto pt-4 border-t border-medical-border flex items-center justify-between text-[10px] font-bold text-medical-gray uppercase tracking-widest">
                Analizar Caso <Menu size={14} className="text-medical-blue" />
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h3 className="text-xs font-bold text-medical-gray uppercase tracking-widest mb-6">Módulo de Casiones Clínicos</h3>
      <div className="grid sm:grid-cols-2 gap-8">
        <button 
          onClick={() => {
            const firstPharmCase = CLINICAL_CASES.find(c => c.category === 'pharmacology');
            setActiveCategory('pharmacology');
            setTimeLeft(600); // 10 minutes
            if (firstPharmCase) setSelectedCaseId(firstPharmCase.id);
          }}
          className="group relative overflow-hidden bg-medical-card p-10 rounded-2xl border border-medical-border hover:border-indigo-500/50 transition-all text-center shadow-xl"
        >
          <div className="absolute top-0 right-0 p-4 opacity-5">
            <Pill size={120} className="rotate-12" />
          </div>
          <div className="relative z-10">
            <div className="w-20 h-20 rounded-2xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform shadow-lg shadow-indigo-500/20">
              <Pill size={40} />
            </div>
            <h4 className="text-2xl font-bold text-white mb-3">Casos de Farmacología</h4>
            <p className="text-sm text-medical-gray max-w-[200px] mx-auto">Análisis de dosificación, efectos y reacciones adversas.</p>
          </div>
        </button>

        <button 
          onClick={() => {
            const firstPathCase = CLINICAL_CASES.find(c => c.category === 'pathology');
            setActiveCategory('pathology');
            setTimeLeft(600); // 10 minutes
            if (firstPathCase) setSelectedCaseId(firstPathCase.id);
          }}
          className="group relative overflow-hidden bg-medical-card p-10 rounded-2xl border border-medical-border hover:border-rose-500/50 transition-all text-center shadow-xl"
        >
          <div className="absolute top-0 right-0 p-4 opacity-5">
            <Activity size={120} className="-rotate-12" />
          </div>
          <div className="relative z-10">
            <div className="w-20 h-20 rounded-2xl bg-rose-500/20 text-rose-400 flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform shadow-lg shadow-rose-500/20">
              <Activity size={40} />
            </div>
            <h4 className="text-2xl font-bold text-white mb-3">Casos de Patología</h4>
            <p className="text-sm text-medical-gray max-w-[200px] mx-auto">Fisiopatología, signos clave y diagnósticos diferenciales.</p>
          </div>
        </button>
      </div>
    </div>
  );
}

function LabsView() {
  const [localSearch, setLocalSearch] = useState('');

  const filteredLabs = LAB_VALUES.filter(lab => 
    lab.name.toLowerCase().includes(localSearch.toLowerCase()) ||
    lab.normalRange.toLowerCase().includes(localSearch.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h3 className="text-xs font-bold text-medical-gray uppercase tracking-widest">Valores de Laboratorio</h3>
        <div className="relative group max-w-xs w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-medical-gray group-focus-within:text-emerald-400 transition-colors" size={14} />
          <input 
            type="text" 
            placeholder="Filtrar exámenes..."
            className="w-full bg-medical-input border border-medical-border rounded-lg py-1.5 pl-9 pr-4 text-xs text-gray-300 focus:border-emerald-400/50 transition-all outline-none"
            value={localSearch}
            onChange={(e) => setLocalSearch(e.target.value)}
          />
        </div>
      </div>
      <div className="bg-medical-card rounded-xl border border-medical-border shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-medical-input">
              <th className="px-6 py-4 text-[10px] font-bold text-medical-gray uppercase tracking-widest">Examen</th>
              <th className="px-6 py-4 text-[10px] font-bold text-medical-gray uppercase tracking-widest text-center">Rango Normal</th>
              <th className="px-6 py-4 text-[10px] font-bold text-medical-gray uppercase tracking-widest text-right">Unidad</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-medical-border">
            {filteredLabs.map((lab, i) => (
              <tr key={i} className="hover:bg-white/5 transition-colors group">
                <td className="px-6 py-4">
                  <p className="text-sm font-bold text-white">{lab.name}</p>
                </td>
                <td className="px-6 py-4 text-center">
                  <span className="text-sm font-mono text-medical-blue bg-medical-blue/10 px-3 py-1 rounded-full">
                    {lab.normalRange}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <p className="text-xs font-medium text-medical-gray">{lab.unit}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filteredLabs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-sm text-medical-gray">No se encontraron resultados para "{localSearch}"</p>
          </div>
        )}
      </div>
    </div>
  );
}

function DictionaryView() {
  const [localSearch, setLocalSearch] = useState('');
  const [activeLetter, setActiveLetter] = useState<string | null>(null);

  const filteredEntries = DICTIONARY.filter(e => 
    e.term.toLowerCase().includes(localSearch.toLowerCase()) ||
    e.abbreviation?.toLowerCase().includes(localSearch.toLowerCase()) ||
    e.definition.toLowerCase().includes(localSearch.toLowerCase())
  );

  const categories = Array.from(new Set(DICTIONARY.map(e => e.category)));

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h3 className="text-xs font-bold text-medical-gray uppercase tracking-widest">Diccionario de Términos y Abreviaturas</h3>
        <div className="relative group max-w-xs w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-medical-gray group-focus-within:text-medical-blue transition-colors" size={14} />
          <input 
            type="text" 
            placeholder="Buscar término o sigla..."
            className="w-full bg-medical-input border border-medical-border rounded-lg py-1.5 pl-9 pr-4 text-xs text-gray-300 focus:border-medical-blue/50 transition-all outline-none"
            value={localSearch}
            onChange={(e) => setLocalSearch(e.target.value)}
          />
        </div>
      </div>
      
      <div className="space-y-8">
        {categories.map(category => {
          const categoryEntries = filteredEntries.filter(e => e.category === category);
          if (categoryEntries.length === 0) return null;

          return (
            <div key={category}>
              <h4 className="text-[10px] font-bold text-medical-blue uppercase tracking-widest mb-4 flex items-center gap-2">
                <span className="w-8 h-px bg-medical-border" />
                {category}
              </h4>
              <div className="grid gap-3">
                {categoryEntries.map((entry, i) => (
                  <div 
                    key={i} 
                    className="bg-medical-card p-5 rounded-xl border border-medical-border shadow-sm flex flex-col sm:flex-row sm:items-start gap-4 transition-all hover:border-medical-blue/30"
                  >
                    <div className="sm:w-32 shrink-0">
                      {entry.abbreviation && (
                        <span className="inline-block px-2 py-0.5 rounded bg-medical-blue/10 text-medical-blue text-[10px] font-bold uppercase mb-1">
                          {entry.abbreviation}
                        </span>
                      )}
                      <h5 className="text-sm font-bold text-white leading-tight">{entry.term}</h5>
                    </div>
                    <div className="flex-grow flex flex-col md:flex-row gap-4">
                      <p className="text-sm text-medical-text leading-relaxed flex-grow">{entry.definition}</p>
                      {entry.image && (
                        <div className="md:w-48 shrink-0 rounded-lg overflow-hidden border border-medical-border h-32">
                          <img 
                            src={entry.image} 
                            alt={entry.term} 
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {filteredEntries.length === 0 && (
        <div className="text-center py-20">
          <Book className="text-medical-gray mx-auto mb-4 opacity-20" size={48} />
          <p className="text-medical-gray font-medium">No se encontraron términos para "{localSearch}"</p>
        </div>
      )}
    </div>
  );
}




