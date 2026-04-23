import { useState, useEffect } from 'react';
import { Settings, User, AlertCircle, Sun, Moon, Globe, Ruler, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { auth, updateUserProfile } from '../lib/firebase';

interface SettingsViewProps {
  userProfile: any;
  setUserProfile: (profile: any) => void;
}

export function SettingsView({ userProfile, setUserProfile }: SettingsViewProps) {
  const { t, language, setLanguage } = useLanguage();
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');
  const [userInfo, setUserInfo] = useState({
    name: userProfile?.displayName || '',
    specialty: userProfile?.specialty || '',
    hospital: userProfile?.hospital || ''
  });

  const [notifs, setNotifs] = useState({
    vitalsAlert: true,
    drugUpdates: false,
    clinicalCases: false
  });

  const [isSaving, setIsSaving] = useState(false);

  const handleSaveProfile = async () => {
    if (!auth.currentUser) return;
    setIsSaving(true);
    try {
      const updatedData = {
        displayName: userInfo.name,
        specialty: userInfo.specialty,
        hospital: userInfo.hospital
      };
      await updateUserProfile(auth.currentUser.uid, updatedData);
      setUserProfile({ ...userProfile, ...updatedData });
    } catch (error) {
      console.error('Error saving profile:', error);
    } finally {
      setIsSaving(false);
    }
  };

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'light') {
      root.classList.add('light');
    } else {
      root.classList.remove('light');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const languages = [
    { code: 'es', name: 'Español (Latam)' },
    { code: 'en', name: 'English (US)' }
  ] as const;

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <div className="flex items-center gap-4 mb-10 pb-6 border-b border-medical-border">
        <div className="w-16 h-16 rounded-2xl bg-medical-blue/20 flex items-center justify-center text-medical-blue border border-medical-blue/30 shadow-lg shadow-medical-blue/5">
          <Settings size={32} />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-medical-text tracking-tight">{t('settings')}</h2>
          <p className="text-medical-gray text-sm font-medium">{t('accessCenter')}</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Profile Settings */}
        <div className="bg-medical-card p-6 rounded-[24px] border border-medical-border space-y-6 shadow-sm">
          <h3 className="text-sm font-black text-medical-blue uppercase tracking-[0.2em] flex items-center gap-2">
            <User size={16} /> {t('profile')}
          </h3>
          <div className="space-y-4">
            <div>
              <label className="text-[10px] font-black text-medical-gray uppercase mb-1.5 block tracking-widest">{t('fullName')}</label>
              <input 
                type="text" 
                value={userInfo.name}
                onChange={(e) => setUserInfo({...userInfo, name: e.target.value})}
                className="w-full bg-medical-input border border-medical-border rounded-xl p-3.5 text-sm text-medical-text focus:border-medical-blue focus:ring-1 focus:ring-medical-blue/20 outline-none transition-all font-semibold"
              />
            </div>
            <div>
              <label className="text-[10px] font-black text-medical-gray uppercase mb-1.5 block tracking-widest">{t('specialty')}</label>
              <input 
                type="text" 
                value={userInfo.specialty}
                onChange={(e) => setUserInfo({...userInfo, specialty: e.target.value})}
                className="w-full bg-medical-input border border-medical-border rounded-xl p-3.5 text-sm text-medical-text focus:border-medical-blue focus:ring-1 focus:ring-medical-blue/20 outline-none transition-all font-semibold"
              />
            </div>
            <div>
              <label className="text-[10px] font-black text-medical-gray uppercase mb-1.5 block tracking-widest">{t('center')}</label>
              <input 
                type="text" 
                value={userInfo.hospital}
                onChange={(e) => setUserInfo({...userInfo, hospital: e.target.value})}
                className="w-full bg-medical-input border border-medical-border rounded-xl p-3.5 text-sm text-medical-text focus:border-medical-blue focus:ring-1 focus:ring-medical-blue/20 outline-none transition-all font-semibold"
              />
            </div>
          </div>
          <button 
            onClick={handleSaveProfile}
            disabled={isSaving}
            className="w-full bg-medical-blue text-white font-black uppercase tracking-widest text-xs py-4 rounded-xl hover:bg-medical-blue/90 transition-all shadow-lg shadow-medical-blue/20 active:scale-[0.98] disabled:opacity-50"
          >
            {isSaving ? '...' : t('saveChanges')}
          </button>
        </div>

        {/* Preferences */}
        <div className="space-y-8">
          {/* Theme Selection */}
          <div className="bg-medical-card p-6 rounded-[24px] border border-medical-border space-y-6 shadow-sm">
            <h3 className="text-sm font-black text-medical-blue uppercase tracking-[0.2em] flex items-center gap-2">
              <Sun size={16} /> {t('appearance')}
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <button 
                onClick={() => setTheme('light')}
                className={`flex flex-col items-center gap-3 p-5 rounded-2xl border-2 transition-all active:scale-[0.98] ${theme === 'light' ? 'bg-medical-blue/10 border-medical-blue text-medical-blue shadow-lg shadow-medical-blue/10' : 'bg-medical-input border-medical-border text-medical-gray hover:border-medical-blue/30'}`}
              >
                <Sun size={28} strokeWidth={2.5} />
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">{t('lightMode')}</span>
              </button>
              <button 
                onClick={() => setTheme('dark')}
                className={`flex flex-col items-center gap-3 p-5 rounded-2xl border-2 transition-all active:scale-[0.98] ${theme === 'dark' ? 'bg-medical-blue/10 border-medical-blue text-medical-blue shadow-lg shadow-medical-blue/10' : 'bg-medical-input border-medical-border text-medical-gray hover:border-medical-blue/30'}`}
              >
                <Moon size={28} strokeWidth={2.5} />
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">{t('darkMode')}</span>
              </button>
            </div>
          </div>

          <div className="bg-medical-card p-6 rounded-[24px] border border-medical-border space-y-6 shadow-sm">
            <h3 className="text-sm font-black text-medical-blue uppercase tracking-[0.2em] flex items-center gap-2">
              <AlertCircle size={16} /> {t('notificationsCount')}
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-4 bg-medical-input/50 rounded-2xl border border-medical-border group hover:border-medical-blue/30 transition-all">
                <div className="pr-4">
                  <p className="text-sm font-bold text-medical-text group-hover:text-medical-blue transition-colors">{t('vitalsAlert')}</p>
                  <p className="text-[10px] text-medical-gray font-medium">{t('notifyCritical')}</p>
                </div>
                <button 
                  onClick={() => setNotifs({...notifs, vitalsAlert: !notifs.vitalsAlert})}
                  className={`min-w-12 h-6.5 rounded-full transition-all relative ${notifs.vitalsAlert ? 'bg-medical-blue shadow-lg shadow-medical-blue/30' : 'bg-medical-border'}`}
                >
                  <div className={`absolute top-1 w-4.5 h-4.5 rounded-full bg-white transition-all shadow-sm ${notifs.vitalsAlert ? 'right-1' : 'left-1'}`} />
                </button>
              </div>
            </div>
          </div>

          <div className="bg-medical-card p-6 rounded-[24px] border border-medical-border space-y-6 shadow-sm">
            <h3 className="text-sm font-black text-medical-blue uppercase tracking-[0.2em] flex items-center gap-2">
              <Globe size={16} /> {t('regional')}
            </h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="relative group">
                <div className="bg-medical-input p-4 rounded-2xl border border-medical-border group-hover:border-medical-blue/30 transition-all">
                  <div className="flex items-center gap-2 mb-1.5">
                    <Globe size={12} className="text-medical-gray" />
                    <p className="text-[10px] font-black text-medical-gray uppercase tracking-widest">{t('language')}</p>
                  </div>
                  <select 
                    value={language}
                    onChange={(e) => setLanguage(e.target.value as any)}
                    className="w-full bg-transparent text-medical-text text-xs font-black uppercase italic tracking-tighter outline-none cursor-pointer appearance-none"
                  >
                    {languages.map(lang => (
                      <option key={lang.code} value={lang.code} className="bg-medical-sidebar">{lang.name}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <button className="bg-medical-input p-4 rounded-xl border border-medical-border text-left hover:border-medical-blue/30 transition-all group active:scale-[0.98]">
                <div className="flex items-center gap-2 mb-1.5">
                  <Ruler size={12} className="text-medical-gray" />
                  <p className="text-[10px] font-black text-medical-gray uppercase tracking-widest">{t('units')}</p>
                </div>
                <p className="text-medical-text text-xs font-black group-hover:text-medical-blue transition-colors uppercase italic tracking-tighter">SI (Métrico)</p>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center text-medical-gray space-y-3 pb-10">
        <div className="flex items-center justify-center gap-3">
          <div className="h-px w-8 bg-medical-border" />
          <p className="text-[10px] font-black uppercase tracking-[0.3em] italic">{t('secureVigilance')} Pro 2.4.0</p>
          <div className="h-px w-8 bg-medical-border" />
        </div>
        <p className="text-[9px] font-medium opacity-60">© 2026 CLINIXCARE MEDICAL TECHNOLOGIES. TODOS LOS DERECHOS RESERVADOS.</p>
      </div>
    </div>
  );
}
