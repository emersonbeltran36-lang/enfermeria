import { AlertCircle, HeartPulse } from 'lucide-react';
import { PATHOLOGIES } from '../data';

export function PathologiesView() {
  const systems = Array.from(new Set(PATHOLOGIES.map(p => p.system)));

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h3 className="text-xs font-bold text-medical-gray uppercase tracking-widest">Guía de Patologías</h3>
      </div>
      <div className="space-y-12">
        {systems.map((system) => {
          const systemPathologies = PATHOLOGIES.filter(p => p.system === system);
          if (systemPathologies.length === 0) return null;

          return (
            <div key={system}>
              <h4 className="text-[10px] font-bold text-medical-blue uppercase tracking-widest mb-6 flex items-center gap-2">
                <span className="w-8 h-px bg-medical-border" />
                SISTEMA {system}
              </h4>
              <div className="grid gap-6">
                {systemPathologies.map(p => (
                  <div key={p.id} className="bg-medical-card rounded-xl p-8 border border-medical-border shadow-sm space-y-6 hover:border-medical-blue/20 transition-all">
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
