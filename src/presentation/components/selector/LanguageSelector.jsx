import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Dropdown } from 'react-bootstrap';
import './LanguageSelector.css';

const LanguageSelector = ({ inNavbar = false }) => {
    const { i18n, t } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

    const languages = [
        { code: 'th', name: t('thai'), flag: '🇹🇭' },
        { code: 'en', name: t('english'), flag: '🇺🇸' },
        { code: 'zh', name: t('chinese'), flag: '🇨🇳' }
    ];

    const handleLanguageChange = (languageCode) => {
        i18n.changeLanguage(languageCode);
        setCurrentLanguage(languageCode);
    };

    const getCurrentLanguage = () => {
        return languages.find(lang => lang.code === currentLanguage) || languages[0];
    };

    useEffect(() => {
        setCurrentLanguage(i18n.language);
    }, [i18n.language]);

    return (
        <div className={`language-selector ${inNavbar ? 'navbar-language-selector' : ''}`}>
            <Dropdown>
                <Dropdown.Toggle
                    variant="outline-dark"
                    id="language-dropdown"
                    className="language-toggle"
                >
                    <span className="flag-emoji">{getCurrentLanguage().flag}</span>
                    <span className="language-divider">/</span>
                    <span className="language-name">{getCurrentLanguage().name}</span>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {languages.map((language) => (
                        <Dropdown.Item
                            key={language.code}
                            onClick={() => handleLanguageChange(language.code)}
                            active={currentLanguage === language.code}
                        >
                            <span className="flag-emoji">{language.flag}</span>
                            <span className="language-divider">/</span>
                            <span className="language-name">{language.name}</span>
                        </Dropdown.Item>
                    ))}
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
};

export default LanguageSelector;