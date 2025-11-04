import { Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";

export const HomeWindow = () => {
  const { t } = useTranslation();
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shadow-lg">
          <Sparkles className="w-6 h-6 text-white" />
        </div>
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
            {t('home.title')}
          </h1>
          <p className="text-gray-600">{t('home.subtitle')}</p>
        </div>
      </div>

      <div className="prose prose-sm max-w-none">
        <p className="text-gray-700 leading-relaxed">
          {t('home.intro')}
        </p>

        <div className="mt-6 p-4 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg border border-cyan-200/50">
          <h3 className="text-sm font-semibold text-cyan-900 mb-2">{t('home.gettingStartedTitle')}</h3>
          <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
            <li>{t('home.tip1')}</li>
            <li>{t('home.tip2')}</li>
            <li>{t('home.tip3')}</li>
            <li>{t('home.tip4')}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
