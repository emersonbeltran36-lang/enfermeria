import { DICTIONARY } from '../data';

export function DictionaryView() {
  const filteredEntries = DICTIONARY;
  const categories = Array.from(new Set(DICTIONARY.map(e => e.category)));

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h3 className="text-xs font-bold text-medical-gray uppercase tracking-widest">Diccionario Médico</h3>
      </div>
      
      <div className="space-y-12">
        {categories.map(category => {
          const categoryEntries = filteredEntries.filter(e => e.category === category);
          if (categoryEntries.length === 0) return null;

          return (
            <div key={category}>
              <h4 className="text-[10px] font-bold text-medical-blue uppercase tracking-widest mb-6 flex items-center gap-2">
                <span className="w-8 h-px bg-medical-border" />
                {category}
              </h4>
              <div className="grid gap-4">
                {categoryEntries.map((entry, i) => (
                  <div 
                    key={i} 
                    className="bg-medical-card p-6 rounded-xl border border-medical-border shadow-sm hover:border-medical-blue/20 transition-all flex flex-col sm:flex-row gap-6 group"
                  >
                    <div className="flex-grow space-y-2">
                      <div className="flex items-center gap-3">
                        <h5 className="text-xl font-bold text-white group-hover:text-medical-blue transition-colors">{entry.term}</h5>
                        {entry.abbreviation && (
                          <span className="bg-medical-blue/10 text-medical-blue border border-medical-blue/20 text-[10px] font-bold px-2 py-0.5 rounded tracking-widest">
                            {entry.abbreviation}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-medical-text leading-relaxed">
                        {entry.definition}
                      </p>
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
