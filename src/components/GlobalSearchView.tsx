import { Search, Stethoscope, Pill, Activity, BookOpen, ArrowRight } from 'lucide-react';
import { PROCEDURES, DRUGS, PATHOLOGIES, DICTIONARY } from '../data';

type Section = 'home' | 'procedures' | 'pharmacology' | 'pathologies' | 'scales' | 'labs' | 'dictionary' | 'cases' | 'settings';

interface GlobalSearchViewProps {
  query: string;
  onSelectItem: (section: Section, id: string) => void;
}

export function GlobalSearchView({ query, onSelectItem }: GlobalSearchViewProps) {
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
    <div className="max-w-6xl mx-auto space-y-12 pb-20 px-4 sm:px-0">
      <div className="flex items-center justify-between border-b border-medical-border pb-4">
        <div>
          <h3 className="text-2xl font-bold text-white leading-none">Resultados de Búsqueda</h3>
          <p className="text-medical-gray text-xs mt-2 uppercase tracking-widest font-bold">Búsqueda Global en {totalResults} entradas</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {results.procedures.length > 0 && (
          <div className="space-y-4">
            <h4 className="text-[10px] font-bold text-sky-400 uppercase tracking-widest flex items-center gap-2">
              <Stethoscope size={14} /> Procedimientos ({results.procedures.length})
            </h4>
            <div className="space-y-2">
              {results.procedures.map(p => (
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
              {results.drugs.map(d => (
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
              {results.pathologies.map(p => (
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
              <BookOpen size={14} /> Diccionario ({results.dictionary.length})
            </h4>
            <div className="space-y-2">
              {results.dictionary.map((d, i) => (
                <button 
                  key={i}
                  onClick={() => onSelectItem('dictionary', d.term)}
                  className="w-full bg-medical-card p-4 rounded-xl border border-medical-border hover:border-emerald-500/50 transition-all text-left flex justify-between items-center group"
                >
                  <div>
                    <p className="text-white font-bold">{d.term}</p>
                    <p className="text-[10px] text-medical-gray uppercase font-bold tracking-tighter mt-0.5">{d.category}</p>
                  </div>
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
