import { LANGUAGES } from '@constants';
import { Select } from 'antd';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const { Option } = Select;

const SelectLanguage = () => {
  const { i18n } = useTranslation();

  const languages = LANGUAGES;

  const [language, setLanguage] = useState<string>(localStorage.getItem('i18nextLng') || 'en');

  const changeLanguage = (language: string) => {
    setLanguage(language);
    i18n.changeLanguage(language);
  };

  return (
    <Select
      defaultValue={language}
      style={{ width: 120, borderRadius: '4px' }}
      onChange={changeLanguage}
    >
      {languages.map(option => (
        <Option key={option.code} value={option.code}>
          {option.name}
        </Option>
      ))}
    </Select>
  );
};

export default SelectLanguage;
