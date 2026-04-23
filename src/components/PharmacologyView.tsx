// @ts-nocheck
import { useState } from 'react';
import { Pill, Activity, AlertCircle, X, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { DRUGS } from '../data';
import { Drug } from '../types';
import { DripCalculator } from './Calculators';

export function PharmacologyView() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [showCalculator, setShowCalculator] = useState(false);

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <h3 className="text-xs font-bold text-medical-gray uppercase tracking-widest">Diccionario de Fármacos</h3>
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <button 
              onClick={() => setShowCalculator(!showCalculator)}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-lg font-bold text-xs transition-all whitespace-nowrap ${
                showCalculator ? 'bg-medical-red/80 hover:bg-medical-red text-white' : 'bg-medical-blue/10 text-medical-blue border border-medical-blue/30'
              }`}
            >
              {showCalculator ? <X size={14} /> : <Activity size={14} />}
              {showCalculator ? 'Cerrar' : 'Calculadora de Goteo'}
            </button>
          </div>
        </div>

        {showCalculator && <DripCalculator />}

        <div className="space-y-3 mt-6">
          {DRUGS.map((d) => (
            <DrugCard 
              key={d.id} 
              drug={d} 
              isExpanded={selectedId === d.id} 
              onToggle={() => setSelectedId(selectedId === d.id ? null : d.id)} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}

interface DrugCardProps {
  drug: Drug;
  isExpanded: boolean;
  onToggle: () => void;
}

function DrugCard(props: DrugCardProps) {
  const { drug, isExpanded, onToggle } = props;
  return (
    <div className="bg-medical-card rounded-xl border border-medical-border shadow-sm overflow-hidden transition-all duration-300">
      <button 
        onClick={onToggle}
        className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
      >
        <div className="flex items-center gap-4">
          <div className={`p-2 rounded-lg bg-medical-blue/10 text-medical-blue transition-colors ${isExpanded ? 'bg-medical-blue text-white' : ''}`}>
               <Pill size={20} />
          </div>
          <div>
            <h4 className="text-xl font-bold text-white">{drug.name}</h4>
            <p className="text-[10px] font-bold text-medical-blue uppercase tracking-widest">{drug.group}</p>
          </div>
        </div>
        {isExpanded ? <ChevronUp size={20} className="text-medical-gray" /> : <ChevronDown size={20} className="text-medical-gray" />}
      </button>
      
      <AnimatePresence>
        {isExpanded && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 pb-6 pt-2 space-y-6 border-t border-medical-border/50">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <h5 className="text-[10px] font-bold text-medical-gray uppercase mb-2">Mecanismo de Acción</h5>
                  <p className="text-sm text-medical-text leading-relaxed">{drug.mechanism}</p>
                </div>
                <div>
                  <h5 className="text-[10px] font-bold text-medical-gray uppercase mb-2">Vía de Administración</h5>
                  <p className="text-sm text-medical-text font-semibold">{drug.route}</p>
                </div>
              </div>

              <div className="bg-medical-input rounded-xl p-5 border border-medical-border">
                <h5 className="text-[10px] font-bold text-medical-blue uppercase mb-3 flex items-center gap-2">
                  <Activity size={14} /> Dosificación Estándar
                </h5>
                <p className="text-sm font-bold text-white">{drug.dosage}</p>
              </div>

              <div>
                <h5 className="text-[10px] font-bold text-medical-red uppercase mb-3 flex items-center gap-2">
                   <AlertCircle size={14} /> Contraindicaciones
                </h5>
                <div className="flex flex-wrap gap-2">
                  {drug.contraindications.map((c, idx) => (
                    <span key={idx} className="bg-medical-red/10 text-medical-red border border-medical-red/20 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-tight">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
