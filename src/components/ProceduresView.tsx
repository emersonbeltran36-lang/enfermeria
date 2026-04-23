import { useState } from 'react';
import { Stethoscope, ClipboardList, BookOpen, X } from 'lucide-react';
import { PROCEDURES } from '../data';
import { Procedure } from '../types';

export function ProceduresView() {
  const [selected, setSelected] = useState<Procedure | null>(null);

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

            <SectionBlock title="Pasos del Procedimiento" icon={BookOpen}>
              <div className="space-y-4">
                {selected.steps.map((step, i) => (
                  <div key={i} className="flex gap-4">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-medical-blue/20 text-medical-blue flex items-center justify-center text-xs font-bold border border-medical-blue/30">
                      {i + 1}
                    </span>
                    <p className="text-sm text-medical-text leading-relaxed pt-0.5">{step}</p>
                  </div>
                ))}
              </div>
            </SectionBlock>
          </div>

          <div className="pt-8 border-t border-medical-border">
            <h4 className="text-[10px] font-bold text-medical-gray uppercase tracking-widest mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-amber-500 rounded-full" /> Bioseguridad y Recomendaciones
            </h4>
            <div className="bg-medical-input rounded-xl p-6 border border-medical-border">
              <ul className="grid sm:grid-cols-2 gap-3">
                {selected.biosecurity.map((b, i) => (
                  <li key={i} className="text-xs text-medical-text flex items-center gap-2">
                    <span className="w-1 h-1 bg-medical-gray rounded-full" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h3 className="text-xs font-bold text-medical-gray uppercase tracking-widest">Guías de Procedimientos</h3>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        {PROCEDURES.map((p) => (
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
        <Icon size={18} /> {title}
      </h4>
      <div className="bg-medical-input/30 rounded-xl p-6 border border-medical-border h-full">
        {children}
      </div>
    </div>
  );
}
