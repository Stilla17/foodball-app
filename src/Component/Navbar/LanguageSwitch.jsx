import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Select } from 'antd';

function LanguageSwitch() {
    const { i18n } = useTranslation();

    const handleChange = (selected) => {
        const { value, label } = selected
        i18n.changeLanguage(value)
        localStorage.setItem('value', value)
        localStorage.setItem('label', label)
    }

    useEffect(() => {
        const savedLang = localStorage.getItem('value') || 'en';
        i18n.changeLanguage(savedLang)
    }, [i18n])

    return (
        <div>
            <Select
                size="large"
                labelInValue
                defaultValue={{
                    value: localStorage.getItem("value") || 'en',
                    label: localStorage.getItem("label") || 'English',
                }}
                style={{ width: 150 }}
                onChange={handleChange}
                options={[
                    { value: 'ru', label: 'Russian' },
                    { value: 'en', label: 'English' },
                ]}
            />
        </div>
    );
}

export default LanguageSwitch;