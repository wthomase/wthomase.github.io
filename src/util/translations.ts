import { SupportedLanguages } from "../hooks/useLanguage";

export type TranslationMap = {
    name: string;
    titles: {
        home: string;
        experience: string;
        notFound: string;
    };
    nav: {
        home: string;
        experience: string;
        contact: string;
        swap: string;
    };
};

const translations: Record<SupportedLanguages, TranslationMap> = {
    en: {
        name: "Thomas Woodward",
        titles: {
            home: "Hello!",
            experience: "Experience",
            notFound: "Not Found!",
        },
        nav: {
            home: "Home",
            experience: "Experience",
            contact: "Contact",
            swap: "日本語",
        },
    },
    ja: {
        name: "トマス　ウッドワード",
        titles: {
            home: "こんにちは！",
            experience: "職歴",
            notFound: "ページが見つかりませんでした！",
        },
        nav: {
            home: "ホーム",
            experience: "職歴",
            contact: "連絡",
            swap: "English",
        },
    },
};

export default translations;
