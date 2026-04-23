import { useState } from 'react';
import { Activity, Thermometer, HeartPulse, Hash, Accessibility, User, AlertCircle, Brain, Smile, X, ClipboardList, ArrowLeft, Menu } from 'lucide-react';

export function AssessmentScalesView() {
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
      title: "5. Cognitivas y Estímulos",
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
    if (s >= 13) return { label: 'Trauma Leve', color: 'text-medical-green', bg: 'bg-medical-green/10 shadow-green-500/5' };
    if (s >= 9) return { label: 'Trauma Moderado', color: 'text-amber-500', bg: 'bg-amber-500/10 shadow-amber-500/5' };
    return { label: 'Trauma Grave (Requiere Vía Aérea)', color: 'text-medical-red', bg: 'bg-medical-red/10 shadow-medical-red/5' };
  };

  const interp = getInterpretation(score);

  return (
    <div className="max-w-4xl mx-auto">
      <button 
        onClick={onBack}
        className="text-medical-blue font-medium flex items-center gap-2 mb-6 hover:translate-x-[-4px] transition-transform"
      >
        <ArrowLeft size={18} /> Volver a Escalas
      </button>

      <div className="bg-medical-card rounded-xl p-8 border border-medical-border shadow-sm">
        <div className="flex justify-between items-center mb-10 pb-6 border-b border-medical-border">
          <div>
            <h3 className="text-3xl font-bold text-white">Escala de Glasgow</h3>
            <p className="text-medical-gray mt-1 uppercase text-[10px] font-bold tracking-widest">Valoración neurológica</p>
          </div>
          <div className="text-center">
            <p className="text-[10px] font-bold text-medical-gray uppercase tracking-widest mb-1">PUNTAJE</p>
            <div className="text-5xl font-black text-medical-blue">{score}</div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <ScaleSection title="Ocular (AO)" options={options.ocular} value={ocular} onChange={setOcular} />
          <ScaleSection title="Verbal (RV)" options={options.verbal} value={verbal} onChange={setVerbal} />
          <ScaleSection title="Motor (RM)" options={options.motor} value={motor} onChange={setMotor} />
        </div>

        <div className={`mt-10 p-8 rounded-xl ${interp.bg} border border-white/5 flex flex-col items-center justify-center text-center transition-all duration-500`}>
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
    if (score <= 12) return { label: 'ALTO RIESGO', color: 'text-medical-red', bg: 'bg-medical-red/10 border-medical-red/20' };
    if (score <= 14) return { label: 'RIESGO MODERADO', color: 'text-orange-500', bg: 'bg-orange-500/10 border-orange-500/20' };
    if (score <= 18) return { label: 'RIESGO BAJO', color: 'text-medical-green', bg: 'bg-medical-green/10 border-medical-green/20' };
    return { label: 'SIN RIESGO', color: 'text-medical-blue', bg: 'bg-medical-blue/10 border-medical-blue/20' };
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
          <ScaleSection title="3. Actividad" options={[{ l: 'Cama', v: 1 }, { l: 'Silla', v: 2 }, { l: 'Deambula ocasional', v: 3 }, { l: 'Deambula frecuente', v: 4 }]} value={q3} onChange={setQ3} />
          <ScaleSection title="4. Movilidad" options={[{ l: 'Inmóvil', v: 1 }, { l: 'Muy limitada', v: 2 }, { l: 'Ligeramente limitada', v: 3 }, { l: 'Sin limitaciones', v: 4 }]} value={q4} onChange={setQ4} />
          <ScaleSection title="5. Nutrición" options={[{ l: 'Muy pobre', v: 1 }, { l: 'Prob. inadecuada', v: 2 }, { l: 'Adecuada', v: 3 }, { l: 'Excelente', v: 4 }]} value={q5} onChange={setQ5} />
          <ScaleSection title="6. Fricción y Cizallamiento" options={[{ l: 'Problema', v: 1 }, { l: 'Problema potencial', v: 2 }, { l: 'Sin problema aparente', v: 3 }]} value={q6} onChange={setQ6} />
        </div>

        <div className={`mt-10 p-6 rounded-xl ${interp.bg} border flex flex-col items-center justify-center text-center`}>
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
    if (score === 0) return { label: 'SIN DOLOR', color: 'text-medical-green', bg: 'bg-medical-green/10 border-medical-green/20' };
    if (score <= 3) return { label: 'DOLOR LEVE', color: 'text-medical-blue', bg: 'bg-medical-blue/10 border-medical-blue/20' };
    if (score <= 6) return { label: 'DOLOR MODERADO', color: 'text-yellow-400', bg: 'bg-yellow-400/10 border-yellow-400/20' };
    if (score <= 9) return { label: 'DOLOR SEVERO', color: 'text-orange-500', bg: 'bg-orange-500/10 border-orange-500/20' };
    return { label: 'DOLOR INSOPORTABLE', color: 'text-medical-red', bg: 'bg-medical-red/10 border-medical-red/20' };
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
            <p className="text-medical-gray mt-1 uppercase text-[10px] font-bold tracking-widest">Visual Análoga del Dolor</p>
          </div>
          <div className="text-center">
            <p className="text-[10px] font-bold text-medical-gray uppercase tracking-widest mb-1">PUNTAJE</p>
            <div className="text-5xl font-black text-medical-red">{score}</div>
          </div>
        </div>

        <div className="space-y-12 py-10">
          <div className="px-4">
             <input type="range" min="0" max="10" step="1" value={score} onChange={(e) => setScore(parseInt(e.target.value))} className="w-full h-4 bg-medical-input rounded-full appearance-none cursor-pointer accent-medical-red border border-medical-border" />
             <div className="flex justify-between mt-6">
                {[0,1,2,3,4,5,6,7,8,9,10].map(n => (
                    <button key={n} onClick={() => setScore(n)} className={`text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center transition-all ${score === n ? 'bg-medical-red text-white scale-125' : 'text-medical-gray hover:text-white'}`}>{n}</button>
                ))}
            </div>
            <div className="flex justify-between mt-4 text-[10px] font-bold uppercase tracking-widest text-medical-gray px-1">
              <span>Sin Dolor</span>
              <span>Moderado</span>
              <span>Máximo</span>
            </div>
          </div>

          <div className={`p-6 rounded-xl ${interp.bg} border flex flex-col items-center justify-center text-center`}>
            <p className="text-[10px] font-bold uppercase tracking-widest text-medical-gray mb-1">Intensidad</p>
            <h4 className={`text-2xl font-bold ${interp.color}`}>{interp.label}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

function NumericPainScale({ onBack }: { onBack: () => void }) {
  const [score, setScore] = useState(0);

  const getInterp = () => {
    if (score === 0) return { label: 'SIN DOLOR', color: 'text-medical-green' };
    if (score <= 3) return { label: 'DOLOR LEVE', color: 'text-medical-blue' };
    if (score <= 6) return { label: 'DOLOR MODERADO', color: 'text-yellow-400' };
    if (score <= 9) return { label: 'DOLOR SEVERO', color: 'text-orange-500' };
    return { label: 'DOLOR MÁXIMO', color: 'text-medical-red' };
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
            <p className="text-medical-gray mt-1 uppercase text-[10px] font-bold tracking-widest">Valoración Verbal (1-10)</p>
          </div>
          <div className="text-center font-black text-5xl text-white">{score}</div>
        </div>

        <div className="grid grid-cols-5 sm:grid-cols-11 gap-2 mb-10">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
            <button key={n} onClick={() => setScore(n)} className={`aspect-square rounded-xl border-2 flex items-center justify-center transition-all font-bold ${score === n ? 'bg-medical-blue border-medical-blue text-white shadow-lg' : 'bg-medical-input border-medical-border text-medical-gray'}`}>{n}</button>
          ))}
        </div>

        <div className="p-6 bg-medical-input rounded-xl border border-medical-border text-center">
          <p className="text-[10px] font-bold uppercase tracking-widest text-medical-gray mb-1">Estado</p>
          <h4 className={`text-2xl font-bold ${interp.color}`}>{interp.label}</h4>
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
          <div className="text-5xl font-black text-amber-500">{score}</div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <ScaleSection title="1. Antecedentes de Caídas" options={[{ l: 'No', v: 0 }, { l: 'Sí', v: 25 }]} value={q1} onChange={setQ1} />
          <ScaleSection title="2. Diag. Secundario" options={[{ l: 'No', v: 0 }, { l: 'Sí', v: 15 }]} value={q2} onChange={setQ2} />
          <ScaleSection title="3. Ayuda de Ambulación" options={[{ l: 'Reposo/Ninguna', v: 0 }, { l: 'Bastón/Andador/Muletas', v: 15 }, { l: 'Muebles', v: 30 }]} value={q3} onChange={setQ3} />
          <ScaleSection title="4. Vía Venosa (IV)" options={[{ l: 'No', v: 0 }, { l: 'Sí', v: 20 }]} value={q4} onChange={setQ4} />
          <ScaleSection title="5. Marcha" options={[{ l: 'Normal / Reposo', v: 0 }, { l: 'Debilidad', v: 10 }, { l: 'Alterada', v: 20 }]} value={q5} onChange={setQ5} />
          <ScaleSection title="6. Estado Mental" options={[{ l: 'Orientado', v: 0 }, { l: 'Olvida sus limitaciones', v: 15 }]} value={q6} onChange={setQ6} />
        </div>

        <div className={`mt-10 p-6 rounded-xl ${interp.bg} border text-center`}>
          <p className="text-[10px] font-bold uppercase tracking-widest text-medical-gray mb-1">Interpretación</p>
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
    if (score <= 11) return { label: 'MUY ALTO RIESGO', color: 'text-medical-red' };
    if (score <= 14) return { label: 'RIESGO EVIDENTE', color: 'text-orange-500' };
    return { label: 'BAJO RIESGO', color: 'text-medical-green' };
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
            <p className="text-medical-gray mt-1 uppercase text-[10px] font-bold tracking-widest">UPP / Escara</p>
          </div>
          <div className="text-5xl font-black text-emerald-500">{score}</div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <ScaleSection title="Estado Físico" options={[{ l: 'Bueno', v: 4 }, { l: 'Regular', v: 3 }, { l: 'Pobre', v: 2 }, { l: 'Muy Malo', v: 1 }]} value={q1} onChange={setQ1} />
          <ScaleSection title="Estado Mental" options={[{ l: 'Alerta', v: 4 }, { l: 'Apático', v: 3 }, { l: 'Confuso', v: 2 }, { l: 'Estuporoso', v: 1 }]} value={q2} onChange={setQ2} />
          <ScaleSection title="Actividad" options={[{ l: 'Ambulante', v: 4 }, { l: 'Camina ayuda', v: 3 }, { l: 'Sentado', v: 2 }, { l: 'Encamado', v: 1 }]} value={q3} onChange={setQ3} />
          <ScaleSection title="Movilidad" options={[{ l: 'Total', v: 4 }, { l: 'Disminuida', v: 3 }, { l: 'Muy limitada', v: 2 }, { l: 'Inmóvil', v: 1 }]} value={q4} onChange={setQ4} />
          <ScaleSection title="Incontinencia" options={[{ l: 'Ninguna', v: 4 }, { l: 'Ocasional', v: 3 }, { l: 'Urinaria', v: 2 }, { l: 'Fecal/Doble', v: 1 }]} value={q5} onChange={setQ5} />
        </div>

        <div className="mt-8 p-6 bg-medical-input rounded-xl border border-medical-border text-center">
            <h4 className={`text-2xl font-bold ${interp.color}`}>{interp.label}</h4>
        </div>
      </div>
    </div>
  );
}

function BarthelScale({ onBack }: { onBack: () => void }) {
  const [q, setQ] = useState<number[]>(new Array(10).fill(10));
  const updateQ = (idx: number, val: number) => { const newQ = [...q]; newQ[idx] = val; setQ(newQ); };
  const score = q.reduce((a, b) => a + b, 0);

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <button onClick={onBack} className="text-xs font-bold uppercase tracking-widest text-medical-gray flex items-center gap-2 hover:text-white transition-colors">
        <ArrowLeft size={16} /> Volver
      </button>

      <div className="bg-medical-card rounded-xl p-8 border border-medical-border">
          <div className="flex justify-between items-center mb-10">
              <h3 className="text-2xl font-bold text-white">Índice de Barthel</h3>
              <div className="text-4xl font-black text-medical-blue">{score}</div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
              <ScaleSection title="Comer" options={[{ l: 'Incapaz', v: 0 }, { l: 'Ayuda', v: 5 }, { l: 'Independ.', v: 10 }]} value={q[0]} onChange={(v: number) => updateQ(0, v)} />
              <ScaleSection title="Lavarse" options={[{ l: 'Dependiente', v: 0 }, { l: 'Independ.', v: 5 }]} value={q[1]} onChange={(v: number) => updateQ(1, v)} />
              <ScaleSection title="Vestirse" options={[{ l: 'Dependiente', v: 0 }, { l: 'Ayuda', v: 5 }, { l: 'Independ.', v: 10 }]} value={q[2]} onChange={(v: number) => updateQ(2, v)} />
              <ScaleSection title="Traslado" options={[{ l: 'Incapaz', v: 0 }, { l: 'Gran ayuda', v: 5 }, { l: 'Independ.', v: 15 }]} value={q[7]} onChange={(v: number) => updateQ(7, v)} />
              <ScaleSection title="Deambulación" options={[{ l: 'Inmóvil', v: 0 }, { l: 'Independ.', v: 15 }]} value={q[8]} onChange={(v: number) => updateQ(8, v)} />
          </div>
      </div>
    </div>
  );
}

function KatzScale({ onBack }: { onBack: () => void }) {
  const [q, setQ] = useState<number[]>(new Array(6).fill(1));
  const updateQ = (idx: number, val: number) => { const newQ = [...q]; newQ[idx] = val; setQ(newQ); };
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <button onClick={onBack} className="text-xs font-bold uppercase tracking-widest text-medical-gray flex items-center gap-2 hover:text-white transition-colors"> <ArrowLeft size={16} /> Volver </button>
      <div className="bg-medical-card rounded-xl p-8 border border-medical-border">
          <h3 className="text-2xl font-bold text-white mb-8">Índice de Katz</h3>
          <div className="grid md:grid-cols-2 gap-8">
              {['Baño', 'Vestirse', 'Uso del Retrete', 'Movilidad', 'Continencia', 'Alimentación'].map((title, i) => (
                  <ScaleSection key={i} title={title} options={[{ l: 'Independiente', v: 1 }, { l: 'Dependiente', v: 0 }]} value={q[i]} onChange={(v: number) => updateQ(i, v)} />
              ))}
          </div>
      </div>
    </div>
  );
}

function MMSEScale({ onBack }: { onBack: () => void }) {
  const [q, setQ] = useState<number[]>(new Array(5).fill(10));
  const updateQ = (idx: number, val: number) => { const newQ = [...q]; newQ[idx] = val; setQ(newQ); };
  const score = q.reduce((a, b) => a + b, 0);

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <button onClick={onBack} className="text-xs font-bold uppercase tracking-widest text-medical-gray flex items-center gap-2 hover:text-white transition-colors"> <ArrowLeft size={16} /> Volver </button>
      <div className="bg-medical-card rounded-xl p-8 border border-medical-border">
          <div className="flex justify-between items-center mb-10">
              <h3 className="text-2xl font-bold text-white">MMSE (Mini-Mental)</h3>
              <div className="text-4xl font-black text-medical-blue">{score}</div>
          </div>
          <div className="grid gap-6">
              <ScaleSection title="Orientación" options={[{ l: 'Grave', v: 2 }, { l: 'Errores', v: 7 }, { l: 'Completo', v: 10 }]} value={q[0]} onChange={(v: number) => updateQ(0, v)} />
              <ScaleSection title="Registro" options={[{ l: 'Ninguna', v: 0 }, { l: '1 palabra', v: 1 }, { l: '2 palabras', v: 2 }, { l: '3 palabras', v: 3 }]} value={q[1]} onChange={(v: number) => updateQ(1, v)} />
          </div>
      </div>
    </div>
  );
}

function YesavageScale({ onBack }: { onBack: () => void }) {
  const [items, setItems] = useState<number[]>([]);
  const toggleItem = (idx: number) => { if (items.includes(idx)) setItems(items.filter(i => i !== idx)); else setItems([...items, idx]); };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <button onClick={onBack} className="text-xs font-bold uppercase tracking-widest text-medical-gray flex items-center gap-2 hover:text-white transition-colors"> <ArrowLeft size={16} /> Volver </button>
      <div className="bg-medical-card rounded-xl p-8 border border-medical-border">
          <div className="flex justify-between items-center mb-10">
              <h3 className="text-2xl font-bold text-white">Escala Yesavage</h3>
              <div className="text-4xl font-black text-rose-500">{items.length}</div>
          </div>
          <div className="grid gap-3 max-h-[60vh] overflow-y-auto pr-2">
              {["¿Vida satisfecha?", "¿Abandono intereses?", "¿Vida vacía?", "¿Se aburre?", "¿Buen ánimo?", "¿Teme algo malo?", "¿Se siente feliz?", "¿Se siente desvalido?"].map((qText, i) => (
                  <button key={i} onClick={() => toggleItem(i)} className={`p-4 rounded-xl border text-left text-xs transition-all ${items.includes(i) ? 'bg-rose-500/10 border-rose-500 text-rose-500' : 'bg-medical-input border-medical-border text-medical-text'}`}>{qText}</button>
              ))}
          </div>
      </div>
    </div>
  );
}

function ScaleSection({ title, options, value, onChange }: any) {
  return (
    <div className="space-y-4">
      <h5 className="text-[10px] font-bold text-medical-gray uppercase tracking-widest flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-medical-blue shrink-0" /> {title}
      </h5>
      <div className="space-y-2">
        {options.map((opt: any) => (
          <button key={opt.v} onClick={() => onChange(opt.v)} className={`w-full text-left px-4 py-3 rounded-lg border text-xs transition-all duration-200 ${value === opt.v ? 'bg-medical-blue/10 border-medical-blue text-medical-blue font-bold' : 'bg-medical-input border-medical-border text-medical-gray hover:border-medical-gray'}`}>
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
    <div onClick={onClick} className="p-6 rounded-xl border border-medical-border hover:border-medical-blue transition-all group cursor-pointer h-full flex flex-col bg-medical-card shadow-sm">
      <div className={`w-12 h-12 rounded-lg ${color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}> <Icon size={24} /> </div>
      <h4 className="text-sm font-bold text-white uppercase tracking-widest">{name}</h4>
      <p className="text-xs text-medical-gray mt-2 leading-relaxed flex-grow">{desc}</p>
      <div className="mt-6 text-[10px] font-bold text-medical-blue flex items-center gap-1 group-hover:gap-2 transition-all uppercase tracking-widest"> Valorar paciente <Menu size={14} /> </div>
    </div>
  );
}
