import { motion } from 'motion/react';
import { HeartPulse } from 'lucide-react';

export function SplashScreen() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[999] bg-medical-bg flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Pulse Effect */}
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ 
          scale: [0.8, 1.2, 0.8],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute w-64 h-64 bg-medical-blue/10 rounded-full blur-3xl"
      />

      <div className="relative flex flex-col items-center">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-20 h-20 bg-medical-blue rounded-3xl flex items-center justify-center text-white shadow-2xl shadow-medical-blue/40 mb-6"
        >
          <HeartPulse size={44} />
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-4xl font-black text-white tracking-tighter uppercase italic"
        >
          Cuidar<span className="text-medical-blue">+</span>
        </motion.h1>

        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ delay: 0.8, duration: 1.2, ease: "easeInOut" }}
          className="h-0.5 bg-medical-blue/30 mt-4 max-w-[120px] mx-auto"
        />
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="text-[10px] text-medical-gray uppercase tracking-[0.2em] mt-3 font-bold"
        >
          Clinical Vigilance V2.4
        </motion.p>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-12 flex items-center gap-3"
      >
        <div className="w-1.5 h-1.5 rounded-full bg-medical-blue animate-bounce" style={{ animationDelay: '0s' }} />
        <div className="w-1.5 h-1.5 rounded-full bg-medical-blue animate-bounce" style={{ animationDelay: '0.2s' }} />
        <div className="w-1.5 h-1.5 rounded-full bg-medical-blue animate-bounce" style={{ animationDelay: '0.4s' }} />
      </motion.div>
    </motion.div>
  );
}
