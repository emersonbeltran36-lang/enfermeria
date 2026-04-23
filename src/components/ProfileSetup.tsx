import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { User, Briefcase, Building, ShieldCheck, AlertTriangle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { updateUserProfile } from '../lib/firebase';

interface ProfileSetupProps {
  uid: string;
  onComplete: () => void;
}

export function ProfileSetup({ uid, onComplete }: ProfileSetupProps) {
  const { t } = useLanguage();
  const [step, setStep] = useState(1); // 1: Info, 2: Disclaimer
  const [name, setName] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [hospital, setHospital] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleInfoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && specialty) {
      setStep(2);
    }
  };

  const handleComplete = async () => {
    setIsLoading(true);
    try {
      await updateUserProfile(uid, {
        displayName: name,
        specialty,
        hospital,
        isProfileComplete: true
      });
      onComplete();
    } catch (error) {
      console.error('Error updating profile:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-medical-sidebar/95 backdrop-blur-xl">
      <div className="max-w-md w-full">
        <AnimatePresence mode="wait">
          {step === 1 ? (
            <motion.div
              key="step1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-medical-card border border-medical-border p-8 rounded-[32px] shadow-2xl space-y-8"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-medical-blue/10 rounded-2xl flex items-center justify-center text-medical-blue mx-auto mb-6">
                  <User size={32} />
                </div>
                <h2 className="text-2xl font-black text-medical-text tracking-tighter uppercase italic">{t('onboardingTitle')}</h2>
                <p className="text-medical-gray text-xs mt-2">{t('onboardingSubtitle')}</p>
              </div>

              <form onSubmit={handleInfoSubmit} className="space-y-4">
                <div>
                  <label className="text-[10px] font-black text-medical-gray uppercase mb-1.5 block tracking-widest">{t('fullName')}</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-medical-gray" size={16} />
                    <input
                      required
                      type="text"
                      className="w-full bg-medical-input border border-medical-border rounded-xl py-3 pl-12 pr-4 text-sm text-medical-text focus:border-medical-blue/50 transition-all outline-none"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-black text-medical-gray uppercase mb-1.5 block tracking-widest">{t('specialty')}</label>
                  <div className="relative">
                    <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-medical-gray" size={16} />
                    <input
                      required
                      type="text"
                      className="w-full bg-medical-input border border-medical-border rounded-xl py-3 pl-12 pr-4 text-sm text-medical-text focus:border-medical-blue/50 transition-all outline-none"
                      value={specialty}
                      onChange={(e) => setSpecialty(e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-black text-medical-gray uppercase mb-1.5 block tracking-widest">{t('center')}</label>
                  <div className="relative">
                    <Building className="absolute left-4 top-1/2 -translate-y-1/2 text-medical-gray" size={16} />
                    <input
                      type="text"
                      className="w-full bg-medical-input border border-medical-border rounded-xl py-3 pl-12 pr-4 text-sm text-medical-text focus:border-medical-blue/50 transition-all outline-none"
                      value={hospital}
                      onChange={(e) => setHospital(e.target.value)}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-medical-blue text-white font-black uppercase tracking-widest text-xs py-4 rounded-xl hover:bg-medical-blue/90 transition-all shadow-lg shadow-medical-blue/20 mt-4 active:scale-[0.98]"
                >
                  {t('completeProfile')}
                </button>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="step2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-medical-card border border-medical-border p-8 rounded-[32px] shadow-2xl space-y-8"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-medical-red/10 rounded-2xl flex items-center justify-center text-medical-red mx-auto mb-6">
                  <AlertTriangle size={32} />
                </div>
                <h2 className="text-2xl font-black text-medical-text tracking-tighter uppercase italic">{t('disclaimerTitle')}</h2>
              </div>

              <div className="bg-medical-input/50 p-6 rounded-2xl border border-medical-border/50">
                <p className="text-sm text-medical-text leading-relaxed font-medium">
                  {t('disclaimerText')}
                </p>
              </div>

              <div className="space-y-3">
                <button
                  onClick={handleComplete}
                  disabled={isLoading}
                  className="w-full bg-medical-blue text-white font-black uppercase tracking-widest text-xs py-4 rounded-xl hover:bg-medical-blue/90 transition-all shadow-lg shadow-medical-blue/20 flex items-center justify-center gap-2 group active:scale-[0.98]"
                >
                  <ShieldCheck size={18} className="group-hover:scale-110 transition-transform" />
                  {t('iUnderstand')}
                </button>
                <button
                  onClick={() => setStep(1)}
                  className="w-full text-medical-gray text-[10px] font-black uppercase tracking-widest hover:text-medical-text transition-colors"
                >
                  Volver a editar perfil
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
