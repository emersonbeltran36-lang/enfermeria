import { motion } from 'motion/react';
import { HeartPulse, ArrowRight } from 'lucide-react';
import { signInMockUser } from '../lib/firebase';
import { useState } from 'react';

interface LoginScreenProps {
  onLoginSuccess: (mockUser?: any) => void;
}

export function LoginScreen({ onLoginSuccess }: LoginScreenProps) {
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const handleDemoMode = async () => {
    setIsLoggingIn(true);
    const mockUser = await signInMockUser();
    // Tiny delay for visual feedback
    await new Promise(resolve => setTimeout(resolve, 600));
    onLoginSuccess(mockUser);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[998] bg-medical-bg flex flex-col items-center justify-center p-6"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-medical-blue/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-medical-blue/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative w-full max-w-md bg-medical-sidebar border border-medical-border rounded-[32px] p-8 lg:p-12 shadow-2xl backdrop-blur-xl">
        <div className="flex flex-col items-center text-center mb-10">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "backOut" }}
            className="w-16 h-16 bg-medical-blue rounded-2xl flex items-center justify-center text-white shadow-xl shadow-medical-blue/30 mb-6"
          >
            <HeartPulse size={36} />
          </motion.div>
          
          <h2 className="text-3xl font-black text-medical-text tracking-tighter uppercase italic mb-2">
            Cuidar<span className="text-medical-blue">+</span>
          </h2>
          <p className="text-medical-gray text-sm font-medium leading-relaxed">
            ASISTENTE CLÍNICO ESPECIALIZADO
          </p>
        </div>

        <div className="space-y-6">
          <button
            onClick={handleDemoMode}
            disabled={isLoggingIn}
            className="w-full flex items-center justify-between gap-3 bg-medical-blue text-white font-black uppercase tracking-widest text-xs py-5 px-8 rounded-2xl hover:bg-medical-blue/90 active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-xl shadow-medical-blue/20"
          >
            {isLoggingIn ? (
              <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin mx-auto" />
            ) : (
              <>
                <span>Acceder Modo de Prueba</span>
                <ArrowRight size={18} />
              </>
            )}
          </button>

          <p className="text-[10px] text-medical-gray font-bold text-center uppercase tracking-wider opacity-60">
            Los datos se guardarán localmente
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-medical-border text-center">
          <p className="text-[10px] text-medical-gray uppercase tracking-[0.2em] font-bold">
            Uso exclusivo para profesionales
          </p>
        </div>
      </div>
    </motion.div>
  );
}
