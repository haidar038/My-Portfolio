import { Heart, Code, Coffee } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useTheme } from "@/contexts/ThemeContext";
import ProfilePic from "@/assets/DarDev.png";

export const AboutWindow = () => {
  const { t } = useTranslation();
  const { isDarkMode } = useTheme();

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-20 h-20 laptop:w-24 laptop:h-24 rounded-full overflow-hidden shadow-lg ring-4 transition-all duration-300" style={{
          ringColor: isDarkMode ? 'rgba(192, 132, 252, 0.4)' : 'rgba(192, 132, 252, 0.3)',
          boxShadow: isDarkMode
            ? '0 0 0 4px rgba(192, 132, 252, 0.4)'
            : '0 0 0 4px rgba(192, 132, 252, 0.3)'
        }}>
          <img
            src={ProfilePic}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold transition-colors duration-300" style={{
            color: isDarkMode ? '#f8fafc' : '#1f2937'
          }}>{t('about.title')}</h2>
          <p className="transition-colors duration-300" style={{
            color: isDarkMode ? '#cbd5e1' : '#4b5563'
          }}>{t('about.subtitle')}</p>
        </div>
      </div>

      <div className="space-y-4">
        <p className="leading-relaxed transition-colors duration-300" style={{
          color: isDarkMode ? '#e2e8f0' : '#374151'
        }}>
          {t('about.paragraph1')}
        </p>

        <p className="leading-relaxed transition-colors duration-300" style={{
          color: isDarkMode ? '#e2e8f0' : '#374151'
        }}>
          {t('about.paragraph2')}
        </p>

        <div className="grid grid-cols-2 gap-3 mt-6">
          <div className="p-4 rounded-lg border transition-all duration-300" style={{
            background: isDarkMode
              ? 'linear-gradient(to bottom right, rgba(59, 130, 246, 0.15), rgba(6, 182, 212, 0.15))'
              : 'linear-gradient(to bottom right, rgb(239, 246, 255), rgb(236, 254, 255))',
            borderColor: isDarkMode ? 'rgba(59, 130, 246, 0.3)' : 'rgba(191, 219, 254, 0.5)'
          }}>
            <Code className="w-5 h-5 mb-2" style={{
              color: isDarkMode ? '#60a5fa' : '#2563eb'
            }} />
            <h3 className="font-semibold text-sm transition-colors duration-300" style={{
              color: isDarkMode ? '#93c5fd' : '#1e3a8a'
            }}>{t('about.techEnthusiast')}</h3>
            <p className="text-xs mt-1 transition-colors duration-300" style={{
              color: isDarkMode ? '#cbd5e1' : '#4b5563'
            }}>{t('about.techEnthusiastDesc')}</p>
          </div>

          <div className="p-4 rounded-lg border transition-all duration-300" style={{
            background: isDarkMode
              ? 'linear-gradient(to bottom right, rgba(236, 72, 153, 0.15), rgba(244, 63, 94, 0.15))'
              : 'linear-gradient(to bottom right, rgb(252, 231, 243), rgb(255, 228, 230))',
            borderColor: isDarkMode ? 'rgba(236, 72, 153, 0.3)' : 'rgba(251, 207, 232, 0.5)'
          }}>
            <Heart className="w-5 h-5 mb-2" style={{
              color: isDarkMode ? '#f472b6' : '#db2777'
            }} />
            <h3 className="font-semibold text-sm transition-colors duration-300" style={{
              color: isDarkMode ? '#f9a8d4' : '#831843'
            }}>{t('about.designLover')}</h3>
            <p className="text-xs mt-1 transition-colors duration-300" style={{
              color: isDarkMode ? '#cbd5e1' : '#4b5563'
            }}>{t('about.designLoverDesc')}</p>
          </div>

          <div className="p-4 rounded-lg border col-span-2 transition-all duration-300" style={{
            background: isDarkMode
              ? 'linear-gradient(to bottom right, rgba(245, 158, 11, 0.15), rgba(249, 115, 22, 0.15))'
              : 'linear-gradient(to bottom right, rgb(254, 243, 199), rgb(254, 237, 227))',
            borderColor: isDarkMode ? 'rgba(245, 158, 11, 0.3)' : 'rgba(252, 211, 77, 0.5)'
          }}>
            <Coffee className="w-5 h-5 mb-2" style={{
              color: isDarkMode ? '#fbbf24' : '#d97706'
            }} />
            <h3 className="font-semibold text-sm transition-colors duration-300" style={{
              color: isDarkMode ? '#fcd34d' : '#78350f'
            }}>{t('about.coffeePowered')}</h3>
            <p className="text-xs mt-1 transition-colors duration-300" style={{
              color: isDarkMode ? '#cbd5e1' : '#4b5563'
            }}>{t('about.coffeePoweredDesc')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
