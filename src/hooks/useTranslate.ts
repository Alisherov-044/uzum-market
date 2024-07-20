import { useEffect } from "react";
import { useSelector } from "@/hooks/useSelector";
import { useTranslation } from "react-i18next";
import { resources } from "@/i18n";
import type { TTtranslation } from "@/types/i18n";

export function useTranslate(defaultLng?: string) {
  const { t: translate, i18n } = useTranslation();
  const { lang: selectedLang } = useSelector((state) => state.lang);
  const currentLng = defaultLng ?? selectedLang;

  useEffect(() => {
    i18n.changeLanguage(currentLng);
  }, [selectedLang]);

  const t = (key: TTtranslation, option?: string | number): string => {
    if (typeof option !== "undefined") {
      try {
        // @ts-ignore
        return resources[currentLng].translation[key](option);
      } catch (error) {
        return translate(key);
      }
    }

    return translate(key);
  };

  return { t, i18n, currentLng };
}
