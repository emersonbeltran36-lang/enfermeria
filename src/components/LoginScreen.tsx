import { motion } from 'motion/react';
import { HeartPulse, LogIn } from 'lucide-react';
import { signInWithGoogle } from '../lib/firebase';
import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface LoginScreenProps {
  onLoginSuccess: () => void;
}

export function LoginScreen({ onLoginSuccess }: LoginScreenProps) {
  const { t } = useLanguage();
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async () => {
    setIsLoggingIn(true);
    setError(null);
    try {
      await signInWithGoogle();
      onLoginSuccess();
    } catch (err) {
      console.error(err);
      setError(t('loginError'));
    } finally {
      setIsLoggingIn(false);
    }
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
            {t('welcome')}
          </h2>
          <p className="text-medical-gray text-sm font-medium leading-relaxed">
            {t('accessCenter')}
          </p>
        </div>

        <div className="space-y-6">
          <button
            onClick={handleLogin}
            disabled={isLoggingIn}
            className="w-full flex items-center justify-center gap-3 bg-white text-black font-black uppercase tracking-widest text-xs py-4 px-6 rounded-2xl hover:bg-white/90 active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
          >
            {isLoggingIn ? (
              <div className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin" />
            ) : (
              <>
                <LogIn size={18} />
                {t('continueWithGoogle')}
              </>
            )}
          </button>

          {error && (
            <motion.p 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-medical-red text-[10px] font-bold text-center uppercase tracking-wider"
            >
              {error}
            </motion.p>
          )}
        </div>

        <div className="mt-12 pt-8 border-t border-medical-border text-center">
          <p className="text-[10px] text-medical-gray uppercase tracking-[0.2em] font-bold">
            {t('secureVigilance')}
          </p>
          <div className="flex justify-center gap-2 mt-4">
             <div className="w-1 h-1 rounded-full bg-medical-blue/30" />
             <div className="w-1 h-1 rounded-full bg-medical-blue/30" />
             <div className="w-1 h-1 rounded-full bg-medical-blue/30" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
