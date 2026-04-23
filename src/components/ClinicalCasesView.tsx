import { useState, useEffect } from 'react';
import { Pill, Activity, AlertCircle, ArrowLeft, ArrowRight, Clock, ClipboardList, Menu } from 'lucide-react';
import { motion } from 'motion/react';
import { CLINICAL_CASES } from '../data';
import { ClinicalCase } from '../types';

export function ClinicalCasesView() {
  const [activeCategory, setActiveCategory] = useState<'pharmacology' | 'pathology' | null>(null);
  const [selectedCaseId, setSelectedCaseId] = useState<string | null>(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [answeredCount, setAnsweredCount] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes total
  const [randomizedCases, setRandomizedCases] = useState<ClinicalCase[]>([]);

  const selectedCase = randomizedCases.find(c => c.id === selectedCaseId);
  const currentIndex = randomizedCases.findIndex(c => c.id === selectedCaseId);

  const startExam = (category: 'pharmacology' | 'pathology') => {
    const allCategoryCases = CLINICAL_CASES.filter(c => c.category === category);
    const shuffled = [...allCategoryCases].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 10);
    setRandomizedCases(selected);
    setActiveCategory(category);
    setSelectedCaseId(selected[0]?.id || null);
    setTimeLeft(600);
    setScore(0);
    setAnsweredCount(0);
    setSelectedOption(null);
    setShowResults(false);
  };

  useEffect(() => {
    if (!activeCategory || !selectedCaseId || showResults) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setShowResults(true);
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
    startExam(activeCategory!);
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
              {score} <span className="text-sm text-medical-gray font-normal">/ {randomizedCases.length * 2}</span>
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
            <span className="text-[10px] font-bold uppercase tracking-widest">Tiempo</span>
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
            </div>
            <p className="text-medical-gray leading-relaxed">{selectedCase.patient}</p>
          </div>

          <div className="bg-medical-input/50 border border-medical-border p-6 rounded-2xl mb-10">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-[10px] font-bold text-medical-gray uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Activity size={14} className="text-medical-blue" />
                  Signos Vitales
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
                  Escenario
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
              Opción Correcta
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
                    if (currentIndex === randomizedCases.length - 1) {
                      setShowResults(true);
                    } else {
                      const nextCase = randomizedCases[currentIndex + 1];
                      setSelectedCaseId(nextCase.id);
                      setSelectedOption(null);
                    }
                  }}
                  className={`flex items-center gap-2 ${currentIndex === randomizedCases.length - 1 ? 'bg-rose-500 hover:bg-rose-600 shadow-rose-500/20' : 'bg-medical-blue hover:bg-medical-blue/80 shadow-medical-blue/20'} text-white px-6 py-2 rounded-lg text-xs font-bold uppercase tracking-widest transition-all shadow-lg`}
                >
                  {currentIndex === randomizedCases.length - 1 ? 'Finalizar Evaluación' : 'Siguiente'} 
                  {currentIndex === randomizedCases.length - 1 ? <ClipboardList size={16} /> : <ArrowRight size={16} />}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <div className="text-center space-y-4">
        <h3 className="text-xs font-bold text-medical-blue uppercase tracking-widest">Centro de Simulación Clínica</h3>
        <p className="text-sm text-medical-gray max-w-md mx-auto leading-relaxed">
          Ponga a prueba sus conocimientos respondiendo casos clínicos aleatorios generados por el sistema.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-8">
        <CategoryCard 
          title="Casos Farmacológicos" 
          desc="Administración, antídotos y dosificación."
          icon={Pill}
          color="bg-indigo-500"
          onClick={() => startExam('pharmacology')}
        />
        <CategoryCard 
          title="Casos de Patología" 
          desc="Diagnóstico, sintomatología y cuidados PAE."
          icon={Activity}
          color="bg-rose-500"
          onClick={() => startExam('pathology')}
        />
      </div>
    </div>
  );
}

function CategoryCard({ title, desc, icon: Icon, color, onClick }: any) {
  return (
    <button 
      onClick={onClick}
      className="group bg-medical-card p-10 rounded-2xl border border-medical-border hover:border-medical-blue transition-all text-left shadow-lg relative overflow-hidden"
    >
      <div className={`absolute top-0 right-0 w-24 h-24 ${color} opacity-5 rounded-bl-full transition-all group-hover:scale-150 group-hover:opacity-10`} />
      <div className={`w-14 h-14 rounded-xl ${color} text-white flex items-center justify-center mb-8 shadow-lg shadow-black/20 group-hover:scale-110 transition-transform`}>
        <Icon size={28} />
      </div>
      <h4 className="text-xl font-black text-white mb-3 uppercase tracking-tight">{title}</h4>
      <p className="text-sm text-medical-gray leading-relaxed mb-8">{desc}</p>
      <div className="flex items-center gap-2 text-[10px] font-bold text-medical-blue uppercase tracking-widest py-3 border-t border-medical-border w-fit group-hover:gap-4 transition-all">
        Comenzar Evaluación <ArrowRight size={14} />
      </div>
    </button>
  );
}
