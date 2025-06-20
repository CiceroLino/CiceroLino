import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { useTranslation } from "react-i18next";

type Language = "pt" | "en";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  const { i18n } = useTranslation();
  const [language, setLanguageState] = useState<Language>(() => {
    const savedLang = localStorage.getItem("language") as Language;
    return savedLang || "pt";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
    i18n.changeLanguage(language);
  }, [language, i18n]);

  const toggleLanguage = () => {
    setLanguageState((prev) => (prev === "pt" ? "en" : "pt"));
  };

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
