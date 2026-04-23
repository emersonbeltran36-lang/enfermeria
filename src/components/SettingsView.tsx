import { useState } from 'react';
import { Settings, User, AlertCircle, Book } from 'lucide-react';

export function SettingsView() {
  const [userInfo, setUserInfo] = useState({
    name: 'Andrea Morales',
    specialty: 'Lic. en Enfermería',
    hospital: 'Hospital Central - UCI'
  });

  const [notifs, setNotifs] = useState({
    vitalsAlert: true,
    drugUpdates: true,
    clinicalCases: false
  });

  return (
    <div className="max-w-4xl mx-auto py-8">
      <div className="flex items-center gap-4 mb-10 pb-6 border-b border-medical-border">
        <div className="w-16 h-16 rounded-2xl bg-medical-blue/20 flex items-center justify-center text-medical-blue border border-medical-blue/30 shadow-lg shadow-medical-blue/5">
          <Settings size={32} />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-white tracking-tight">Configuración</h2>
          <p className="text-medical-gray text-sm">Gestiona tu perfil y preferencias de la aplicación</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Profile Settings */}
        <div className="bg-medical-card p-6 rounded-2xl border border-medical-border space-y-6">
          <h3 className="text-sm font-bold text-medical-blue uppercase tracking-widest flex items-center gap-2">
            <User size={16} /> Perfil del Profesional
          </h3>
          <div className="space-y-4">
            <div>
              <label className="text-[10px] font-bold text-medical-gray uppercase mb-1 block">Nombre Completo</label>
              <input 
                type="text" 
                value={userInfo.name}
                onChange={(e) => setUserInfo({...userInfo, name: e.target.value})}
                className="w-full bg-medical-input border border-medical-border rounded-lg p-3 text-sm text-white focus:border-medical-blue/50 outline-none transition-all"
              />
            </div>
            <div>
              <label className="text-[10px] font-bold text-medical-gray uppercase mb-1 block">Especialidad / Cargo</label>
              <input 
                type="text" 
                value={userInfo.specialty}
                onChange={(e) => setUserInfo({...userInfo, specialty: e.target.value})}
                className="w-full bg-medical-input border border-medical-border rounded-lg p-3 text-sm text-white focus:border-medical-blue/50 outline-none transition-all"
              />
            </div>
            <div>
              <label className="text-[10px] font-bold text-medical-gray uppercase mb-1 block">Centro de Trabajo</label>
              <input 
                type="text" 
                value={userInfo.hospital}
                onChange={(e) => setUserInfo({...userInfo, hospital: e.target.value})}
                className="w-full bg-medical-input border border-medical-border rounded-lg p-3 text-sm text-white focus:border-medical-blue/50 outline-none transition-all"
              />
            </div>
          </div>
          <button className="w-full bg-medical-blue text-white font-bold py-3 rounded-xl hover:bg-medical-blue/80 transition-all shadow-lg shadow-medical-blue/20">
            Guardar Cambios
          </button>
        </div>

        {/* Preferences */}
        <div className="space-y-8">
          <div className="bg-medical-card p-6 rounded-2xl border border-medical-border space-y-6">
            <h3 className="text-sm font-bold text-medical-blue uppercase tracking-widest flex items-center gap-2">
              <AlertCircle size={16} /> Notificaciones y Alertas
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-medical-input/50 rounded-xl border border-medical-border">
                <div>
                  <p className="text-sm font-semibold text-white">Alertas de Signos Vitales</p>
                  <p className="text-[10px] text-medical-gray">Notificar cuando un valor esté fuera de rango.</p>
                </div>
                <button 
                  onClick={() => setNotifs({...notifs, vitalsAlert: !notifs.vitalsAlert})}
                  className={`w-12 h-6 rounded-full transition-all relative ${notifs.vitalsAlert ? 'bg-medical-blue' : 'bg-medical-border'}`}
                >
                  <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all ${notifs.vitalsAlert ? 'right-1' : 'left-1'}`} />
                </button>
              </div>
              <div className="flex items-center justify-between p-3 bg-medical-input/50 rounded-xl border border-medical-border">
                <div>
                  <p className="text-sm font-semibold text-white">Actualizaciones de Fármacos</p>
                  <p className="text-[10px] text-medical-gray">Avisar si hay cambios en dosis o protocolos.</p>
                </div>
                <button 
                  onClick={() => setNotifs({...notifs, drugUpdates: !notifs.drugUpdates})}
                  className={`w-12 h-6 rounded-full transition-all relative ${notifs.drugUpdates ? 'bg-medical-blue' : 'bg-medical-border'}`}
                >
                  <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all ${notifs.drugUpdates ? 'right-1' : 'left-1'}`} />
                </button>
              </div>
            </div>
          </div>

          <div className="bg-medical-card p-6 rounded-2xl border border-medical-border space-y-6">
            <h3 className="text-sm font-bold text-medical-blue uppercase tracking-widest flex items-center gap-2">
              <Book size={16} /> Sistema
            </h3>
            <div className="grid grid-cols-2 gap-3">
              <button className="bg-medical-input p-4 rounded-xl border border-medical-border text-left hover:border-medical-blue/30 transition-all group">
                <p className="text-[10px] font-bold text-medical-gray uppercase mb-1">Idioma</p>
                <p className="text-white font-bold group-hover:text-medical-blue transition-colors">Español (Latam)</p>
              </button>
              <button className="bg-medical-input p-4 rounded-xl border border-medical-border text-left hover:border-medical-blue/30 transition-all group">
                <p className="text-[10px] font-bold text-medical-gray uppercase mb-1">Unidades</p>
                <p className="text-white font-bold group-hover:text-medical-blue transition-colors">SI (Métrico)</p>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center text-medical-gray space-y-2 pb-10">
        <p className="text-xs font-bold uppercase tracking-widest">Versión Pro 2.4.0</p>
        <p className="text-[10px]">© 2026 ClinixCare Medical Technologies</p>
      </div>
    </div>
  );
}
