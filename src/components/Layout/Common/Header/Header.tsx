import { Layout, Menu, Popover } from 'antd';
import React, { Fragment, useState } from 'react';
import './Header.scss';
import { AlignRightOutlined } from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';
import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { authActions, selectIsLoggedIn, selectUserProfile } from '@store/slices/auth';
import { upFromBreakpoint } from '@utils/mixins';
import { Svg } from '@components/Common/Svg';
import Drawer from './Drawer';
import { history } from '@utils/history';

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

const Avatar = styled.img`
  display: none;

  ${upFromBreakpoint('medium')} {
    &:hover {
      cursor: pointer;
    }
    display: flex;
    max-width: 40px !important;
    align-items: center;
    align-self: center;
    height: 40px;
    width: 100%;
    border-radius: 50%;
  }
`;

const MenuItem = styled(Menu.Item)<{ isActiveMenu: boolean }>`
  background-color: ${menu => (menu.isActiveMenu ? '#1890ff' : 'initial')};
`;

const ItemPopover = styled.div`
  padding: 8px 4px;

  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: 1rem;

  &:hover {
    cursor: pointer;
    background-color: #f2f3f5;
  }
`;

const TextItem = styled(Link)`
  font-weight: bold;
`;

const Header = () => {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);
  const dispatch = useAppDispatch();

  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const user = useAppSelector(selectUserProfile);

  const location = useLocation();

  const handleLogout = () => {
    dispatch(authActions.logout());
  };

  const content = (
    <Fragment>
      <ItemPopover>
        <Svg name="my-account" width={20} height={20} />
        <TextItem to="/profile">{t('profile')}</TextItem>
      </ItemPopover>
      <ItemPopover>
        <Svg name="log-out" width={20} height={20} fill="white" />
        <TextItem to="/login" state={{ from: location }} replace onClick={handleLogout}>
          {t('logout')}
        </TextItem>
      </ItemPopover>
    </Fragment>
  );

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

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

      {user && (
        <Popover
          content={content}
          trigger="click"
          placement="bottomRight"
          overlayInnerStyle={{
            width: '200px',
            borderRadius: '4px',
          }}
        >
          <Avatar src={user.AvatarImage} />
        </Popover>
      )}

      {/* Button Hamburger */}
      <div className="hamburger" onClick={showDrawer}>
        <AlignRightOutlined className="icon-hamburger" style={{ color: '#ffffff' }} width={20} />
      </div>
      {/* Reponsive Mobile */}
      <Drawer handleClose={onClose} visible={visible} />
    </Layout.Header>
  );
};

export default Header;
