import React, { useMemo } from 'react';
import { LANGUAGES } from '@constants';
import { LanguageOption } from '@interfaces';
import { useTranslation } from 'react-i18next';
import { Drawer as AntdDrawer } from 'antd';
import styled from '@emotion/styled';
import Select, { SingleValue } from 'react-select';

const WrapperOption = styled.div`
  display: flex;
`;

const LabelText = styled.div``;

const LabelCountryCode = styled.div`
  margin-left: 10px;
  color: #ccc;
`;

interface Props {
  visible: boolean;
  handleClose?: (visible?: boolean) => void;
}

const Drawer = ({ visible, handleClose, ...props }: Props) => {
  const { t, i18n } = useTranslation();

  const languages = LANGUAGES;

  const currentLanguageCode = useMemo(() => {
    return localStorage.getItem('i18nextLng') || 'en';
  }, []);

  const currentLanguage = languages.find(
    (language: LanguageOption) => language.code === currentLanguageCode,
  );

  const changeLanguage = (option: SingleValue<LanguageOption> | null) => {
    if (option) {
      i18n.changeLanguage(option.code);
    }
  };

  const formatOptionLabel = ({ code, name, countryCode }: LanguageOption) => (
    <WrapperOption>
      <LabelText>{name}</LabelText>
      <LabelCountryCode>{countryCode}</LabelCountryCode>
    </WrapperOption>
  );

  return (
    <div>
      <AntdDrawer
        placement="right"
        width={320}
        onClose={() => handleClose?.(false)}
        visible={visible}
      >
        <Select
          options={languages}
          defaultValue={currentLanguage}
          name="language"
          getOptionLabel={({ name }) => name}
          getOptionValue={({ code }) => code}
          formatOptionLabel={formatOptionLabel}
          onChange={option => changeLanguage(option)}
        />
      </AntdDrawer>
    </div>
  );
};

export default Drawer;
