import { Heart, Code, Coffee } from "lucide-react";
import { useTranslation } from "react-i18next";
import ProfilePic from "@/assets/DarDev.png";

export const AboutWindow = () => {
  const { t } = useTranslation();
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-20 h-20 laptop:w-24 laptop:h-24 rounded-full overflow-hidden shadow-lg ring-4 ring-purple-400/30">
          <img
            src={ProfilePic}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{t('about.title')}</h2>
          <p className="text-gray-600">{t('about.subtitle')}</p>
        </div>
      </div>

      <div className="space-y-4 text-gray-700">
        <p className="leading-relaxed">
          {t('about.paragraph1')}
        </p>

        <p className="leading-relaxed">
          {t('about.paragraph2')}
        </p>

        <div className="grid grid-cols-2 gap-3 mt-6">
          <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg border border-blue-200/50">
            <Code className="w-5 h-5 text-blue-600 mb-2" />
            <h3 className="font-semibold text-sm text-blue-900">{t('about.techEnthusiast')}</h3>
            <p className="text-xs text-gray-600 mt-1">{t('about.techEnthusiastDesc')}</p>
          </div>

          <div className="p-4 bg-gradient-to-br from-pink-50 to-rose-50 rounded-lg border border-pink-200/50">
            <Heart className="w-5 h-5 text-pink-600 mb-2" />
            <h3 className="font-semibold text-sm text-pink-900">{t('about.designLover')}</h3>
            <p className="text-xs text-gray-600 mt-1">{t('about.designLoverDesc')}</p>
          </div>

          <div className="p-4 bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg border border-amber-200/50 col-span-2">
            <Coffee className="w-5 h-5 text-amber-600 mb-2" />
            <h3 className="font-semibold text-sm text-amber-900">{t('about.coffeePowered')}</h3>
            <p className="text-xs text-gray-600 mt-1">{t('about.coffeePoweredDesc')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
