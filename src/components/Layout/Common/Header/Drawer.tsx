import React from 'react';
import { Drawer as AntdDrawer } from 'antd';
import SelectLanguage from './SelectLanguage';

interface Props {
  visible: boolean;
  handleClose?: (visible?: boolean) => void;
}

const Drawer = ({ visible, handleClose }: Props) => {
  return (
    <div>
      <AntdDrawer
        placement="right"
        width={320}
        onClose={() => handleClose?.(false)}
        visible={visible}
      >
        <SelectLanguage />
      </AntdDrawer>
    </div>
  );
};

export default Drawer;
