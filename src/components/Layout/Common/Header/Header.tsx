import { Button, Drawer, Layout, Menu, Space } from 'antd';
import React, { Fragment, useState } from 'react';
import './Header.scss';
import { AlignRightOutlined } from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';
import styled from '@emotion/styled';
import Select, { SingleValue } from 'react-select';
import { LANGUAGES } from '@constants';
import { useTranslation } from 'react-i18next';
import { LanguageOption } from '@interfaces/index';

const items = [
  { label: 'home', key: 'home', path: '/home' }, // remember to pass the key prop
  { label: 'about', key: 'about', path: '/about' }, // which is required
  {
    label: 'Services',
    key: 'Services',
    path: '',
    itemsChildren: [
      { label: 'Service 1', key: 'service_1', path: '/profile' },
      { label: 'Service 2', key: 'service_2', path: '/profile2' },
    ],
  },
];

const MenuItem = styled(Menu.Item)<{ isActiveMenu: boolean }>`
  background-color: ${menu => (menu.isActiveMenu ? '#1890ff' : 'initial')};
`;

const Header = () => {
  const location = useLocation();

  const [visible, setVisible] = useState(false);

  const { t, i18n } = useTranslation();
  const languages = LANGUAGES;

  const currentLanguageCode = localStorage.getItem('i18nextLng') || 'en';

  const currentLanguage = languages.find(
    (language: LanguageOption) => language.code === currentLanguageCode,
  );

  const changeLanguage = (option: SingleValue<LanguageOption> | null) => {
    if (option) {
      i18n.changeLanguage(option.code);
    }
  };

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const formatOptionLabel = ({ code, name, countryCode }: LanguageOption) => (
    <div style={{ display: 'flex' }}>
      <div>{name}</div>
      <div style={{ marginLeft: '10px', color: '#ccc' }}>{countryCode}</div>
    </div>
  );

  return (
    <Layout.Header className="header" color="yellow">
      <div className="logo" />
      {/* <Menu theme="dark" mode="horizontal"  defaultSelectedKeys={["2"]} items={items}> */}
      <Menu theme="dark" mode="horizontal" className="header__nav">
        {items.map(item => (
          <Fragment>
            {!item.itemsChildren ? (
              <MenuItem
                key={`${item.key}`}
                isActiveMenu={location.pathname === item.path}
                className="header--black"
              >
                <Link to={item.path}>{t(`navbar.${item.label}`)}</Link>
              </MenuItem>
            ) : (
              <Menu.SubMenu title={item.label}>
                {item.itemsChildren.map(itemChild => (
                  <MenuItem
                    isActiveMenu={location.pathname === itemChild.path}
                    key={`children-${itemChild.key}`}
                  >
                    <Link to={itemChild.path}>{itemChild.label}</Link>
                  </MenuItem>
                ))}
              </Menu.SubMenu>
            )}
          </Fragment>
        ))}
      </Menu>

      {/* Button Hamburger */}
      <div className="hamburger" onClick={showDrawer}>
        <AlignRightOutlined className="icon-hamburger" style={{ color: '#ffffff' }} width={20} />
      </div>

      {/* Reponsive Mobile */}
      <Drawer
        title="Drawer with extra actions"
        placement="right"
        width={320}
        onClose={onClose}
        visible={visible}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button type="primary" onClick={onClose}>
              OK
            </Button>
          </Space>
        }
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
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </Layout.Header>
  );
};

export default Header;
