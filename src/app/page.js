"use client";

import { useTranslation } from 'react-i18next';
import Road from "./components/Road";
import InfoPanel from "./components/InfoPanel";
import useAlvinProgress from "./hooks/useAlvinProgress";

export default function Page() {
  const { t } = useTranslation('common');
  const { currentProgress, remainingHours, totalHours } = useAlvinProgress();

  return (
    <section className="flex flex-col items-center justify-center py-20 gap-6">
      <h1 className="text-4xl font-bold">{t("home_message")}</h1>

      <Road currentProgress={currentProgress} />

      <InfoPanel
        currentProgress={currentProgress}
        remainingHours={remainingHours}
        totalHours={totalHours}
      />
    </section>
  );
}
