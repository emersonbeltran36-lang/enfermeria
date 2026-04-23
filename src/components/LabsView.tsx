import { Search } from 'lucide-react';
import { LAB_VALUES } from '../data';
import { useState } from 'react';

export function LabsView() {
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
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-medical-gray group-focus-within:text-medical-blue transition-colors" size={14} />
          <input 
            type="text" 
            placeholder="Filtrar exámenes..."
            className="w-full bg-medical-input border border-medical-border rounded-lg py-1.5 pl-9 pr-4 text-xs text-gray-300 focus:border-medical-blue/50 transition-all outline-none"
            value={localSearch}
            onChange={(e) => setLocalSearch(e.target.value)}
          />
        </div>
      </div>
      <div className="bg-medical-card rounded-xl border border-medical-border shadow-sm overflow-hidden overflow-x-auto">
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
                  <span className="text-sm font-mono text-medical-blue bg-medical-blue/10 px-3 py-1 rounded-full border border-medical-blue/10">
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
