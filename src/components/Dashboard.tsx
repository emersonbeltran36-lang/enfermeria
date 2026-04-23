import { Stethoscope, Pill, ClipboardList, Thermometer, BookOpen } from 'lucide-react';

type Section = 'home' | 'procedures' | 'pharmacology' | 'pathologies' | 'scales' | 'labs' | 'dictionary' | 'cases' | 'settings';

interface DashboardProps {
  setActiveSection: (s: Section) => void;
}

export function Dashboard({ setActiveSection }: DashboardProps) {
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
      
      <div className="bg-medical-sidebar border border-medical-border p-6 rounded-xl shadow-sm transition-all hover:shadow-medical-blue/5">
        <p className="text-xs font-bold text-medical-blue uppercase tracking-widest mb-2 flex items-center gap-2">
          <span className="w-2 h-2 bg-medical-blue rounded-full animate-pulse" />
          Nota del Servicio
        </p>
        <p className="text-sm text-medical-text leading-relaxed">
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
      className={`relative overflow-hidden p-6 rounded-xl text-left transition-all duration-300 hover:translate-y-[-4px] shadow-lg shadow-black/20 group h-full`}
    >
      <div className={`absolute inset-0 bg-medical-card border border-medical-border group-hover:border-medical-blue/50 transition-colors`} />
      <div className="relative z-10 flex flex-col h-full gap-8">
        <div className={`w-fit p-3 rounded-lg text-white ${bgColor} transition-transform duration-300 group-hover:scale-110`}>
          <Icon size={20} />
        </div>
        <div>
          <p className="text-[10px] font-bold text-medical-gray uppercase tracking-widest bg-transparent">{title}</p>
          <p className="text-sm font-bold text-white mt-1 leading-tight">{desc}</p>
        </div>
      </div>
    </button>
  );
}
