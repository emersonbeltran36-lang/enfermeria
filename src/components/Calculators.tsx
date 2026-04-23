import { useState } from 'react';
import { motion } from 'motion/react';

export function DripCalculator() {
  const [vol, setVol] = useState<string>('500');
  const [time, setTime] = useState<string>('8');
  const [factor, setFactor] = useState<number>(20); // got/ml

  const volNum = parseFloat(vol) || 0;
  const timeNum = parseFloat(time) || 0;

  // Validation: Prevent division by zero and negative numbers
  const dropsPerMin = timeNum > 0 ? Math.round((volNum * factor) / (timeNum * 60)) : 0;
  const mlPerHour = timeNum > 0 ? Math.round(volNum / timeNum) : 0;

  const handleVolChange = (v: string) => {
    if (v === '' || /^\d*\.?\d*$/.test(v)) {
      setVol(v);
    }
  };

  const handleTimeChange = (t: string) => {
    if (t === '' || /^\d*\.?\d*$/.test(t)) {
      setTime(t);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-medical-card text-white p-8 rounded-xl border border-medical-border shadow-xl hover:border-medical-blue/30 transition-colors"
    >
      <h4 className="text-[10px] font-bold text-medical-gray uppercase tracking-widest mb-6">Calculadora de Goteo</h4>
      <div className="grid sm:grid-cols-3 gap-6">
        <div>
          <label className="text-[10px] font-bold text-medical-gray uppercase tracking-widest block mb-2">Volumen (ml)</label>
          <input 
            type="text" 
            inputMode="decimal"
            value={vol} 
            onChange={(e) => handleVolChange(e.target.value)}
            placeholder="Ej: 500"
            className="w-full bg-medical-input border border-medical-border rounded-lg p-3 outline-none focus:border-medical-blue transition-all text-xl font-bold"
          />
        </div>
        <div>
          <label className="text-[10px] font-bold text-medical-gray uppercase tracking-widest block mb-2">Tiempo (horas)</label>
          <input 
            type="text" 
            inputMode="decimal"
            value={time} 
            onChange={(e) => handleTimeChange(e.target.value)}
            placeholder="Ej: 8"
            className="w-full bg-medical-input border border-medical-border rounded-lg p-3 outline-none focus:border-medical-blue transition-all text-xl font-bold"
          />
        </div>
        <div>
          <label className="text-[10px] font-bold text-medical-gray uppercase tracking-widest block mb-2">Factor</label>
          <select 
            value={factor} 
            onChange={(e) => setFactor(Number(e.target.value))}
            className="w-full bg-medical-input border border-medical-border rounded-lg p-3 outline-none focus:border-medical-blue transition-all text-sm font-bold appearance-none cursor-pointer"
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
      
      {timeNum === 0 && volNum > 0 && (
        <p className="mt-4 text-[10px] text-medical-red font-bold uppercase text-center animate-pulse">
          El tiempo debe ser mayor a 0
        </p>
      )}
    </motion.div>
  );
}

export function BMICalculator() {
  const [weight, setWeight] = useState<string>('');
  const [height, setHeight] = useState<string>('');

  const w = parseFloat(weight) || 0;
  const h = parseFloat(height) / 100 || 0; // cm to m

  const bmi = h > 0 ? (w / (h * h)).toFixed(1) : '0';
  const bmiNum = parseFloat(bmi);

  const getStatus = (val: number) => {
    if (val < 18.5) return { label: 'Bajo Peso', color: 'text-amber-400' };
    if (val < 25) return { label: 'Normal', color: 'text-medical-green' };
    if (val < 30) return { label: 'Sobrepeso', color: 'text-amber-500' };
    return { label: 'Obesidad', color: 'text-medical-red' };
  };

  const status = getStatus(bmiNum);

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-medical-card text-white p-8 rounded-xl border border-medical-border shadow-xl mt-6"
    >
      <h4 className="text-[10px] font-bold text-medical-gray uppercase tracking-widest mb-6">Calculadora de IMC</h4>
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label className="text-[10px] font-bold text-medical-gray uppercase tracking-widest block mb-2">Peso (kg)</label>
          <input 
            type="text" 
            inputMode="decimal"
            value={weight} 
            onChange={(e) => setWeight(e.target.value)}
            className="w-full bg-medical-input border border-medical-border rounded-lg p-3 outline-none focus:border-medical-blue transition-all text-xl font-bold"
          />
        </div>
        <div>
          <label className="text-[10px] font-bold text-medical-gray uppercase tracking-widest block mb-2">Talla (cm)</label>
          <input 
            type="text" 
            inputMode="decimal"
            value={height} 
            onChange={(e) => setHeight(e.target.value)}
            className="w-full bg-medical-input border border-medical-border rounded-lg p-3 outline-none focus:border-medical-blue transition-all text-xl font-bold"
          />
        </div>
      </div>

      <div className="mt-8 flex items-center justify-center gap-8 bg-medical-blue/5 p-6 rounded-xl border border-medical-border">
        <div className="text-center">
          <p className="text-[10px] font-bold text-medical-blue uppercase tracking-widest mb-1">IMC</p>
          <p className="text-4xl font-black text-white">{bmi}</p>
        </div>
        <div className="w-px h-12 bg-medical-border" />
        <div className="text-center">
          <p className="text-[10px] font-bold text-medical-gray uppercase tracking-widest mb-1">Estado</p>
          <p className={`text-xl font-bold ${status.color}`}>{status.label}</p>
        </div>
      </div>
    </motion.div>
  );
}
