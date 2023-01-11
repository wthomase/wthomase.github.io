import { createContext, useContext } from 'react';
import translations from '../util/translations';

export enum SupportedLanguages {
    Japanese = "ja",
    English = "en"
}

export type Language = {
    lang: SupportedLanguages,
    setLang: (newLang: SupportedLanguages) => any
}

export const LanguageContext = createContext<Language>({
    lang: SupportedLanguages.English,
    setLang: () => {}
});

export default function useLanguage() {
    const { lang, setLang }  = useContext(LanguageContext);

    return { 
        translations: translations[lang],
        lang,
        setLang
    }
}