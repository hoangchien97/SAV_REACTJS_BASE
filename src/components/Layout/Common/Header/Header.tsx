import { Button, Drawer, Layout, Menu, Space } from "antd";
import React, { Fragment, useState } from "react";
import "./Header.scss";
import { AlignRightOutlined } from "@ant-design/icons";

const items = [
  { label: "item 1", key: "item-1" }, // remember to pass the key prop
  { label: "item 2", key: "item-2" }, // which is required
  {
    label: "sub menu",
    key: "submenu",
    children: [{ label: "item 3", key: "submenu-item-1" }],
  },
];

const Header = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    debugger;
    setVisible(false);
  };

  return (
    <Layout.Header className="header" color="yellow">
      <div className="logo" />
      {/* <Menu theme="dark" mode="horizontal"  defaultSelectedKeys={["2"]} items={items}> */}
      <Menu theme="dark" mode="horizontal" className="header__nav">
        {items.map((item, index) => (
          <Fragment key={index}>
            {!item.children ? (
              <Menu.Item className="header--black">{item.label}</Menu.Item>
            ) : (
              <Menu.SubMenu title={item.label} key={item.label}>
                <Menu.Item>{item.label}</Menu.Item>
              </Menu.SubMenu>
            )}
          </Fragment>
        ))}
      </Menu>

      <div className="hamburger" onClick={showDrawer}>
        <AlignRightOutlined
          className="icon-hamburger"
          style={{ color: "#ffffff" }}
          width={20}
        />
      </div>

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
