import { Button, Drawer, Layout, Menu, Space } from "antd";
import React, { Fragment, useState } from "react";
import "./Header.scss";
import { AlignRightOutlined } from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";
import styled from "@emotion/styled";

const items = [
  { label: "Home", key: "home", path: "/home" }, // remember to pass the key prop
  { label: "About", key: "about", path: "/about" }, // which is required
  {
    label: "Services",
    key: "Services",
    path: "",
    itemsChildren: [
      { label: "Service 1", key: "service_1", path: "/profile" },
      { label: "Service 2", key: "service_2", path: "/profile2" },
    ],
  },
];

const MenuItem = styled(Menu.Item)<{ isActiveMenu: boolean }>`
  background-color: ${(menu) => (menu.isActiveMenu ? "#1890ff" : "initial")};
`;

const Header = () => {
  const location = useLocation();

  const [visible, setVisible] = useState(false);

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
        {items.map((item) => (
          <Fragment>
            {!item.itemsChildren ? (
              <MenuItem
                key={`${item.key}`}
                isActiveMenu={location.pathname === item.path}
                className="header--black"
              >
                <Link to={item.path}>{item.label}</Link>
              </MenuItem>
            ) : (
              <Menu.SubMenu title={item.label}>
                {item.itemsChildren.map((itemChild) => (
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
        <AlignRightOutlined
          className="icon-hamburger"
          style={{ color: "#ffffff" }}
          width={20}
        />
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
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </Layout.Header>
  );
};

export default Header;
