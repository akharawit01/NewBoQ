import React, { forwardRef, useState, useImperativeHandle } from 'react';

import { Button, Drawer } from 'antd';

import AddNewCategory from '../molecules/boq/AddNewCategory';

const DrawerAddCategoryName = forwardRef((props, ref) => {
  const [visible, setVisible] = useState(false);
  const onClose = () => setVisible(false);
  useImperativeHandle(ref, () => ({
    showDrawer() {
      setVisible(true);
    }
  }));

  return (
    <Drawer
      title="Add another category name"
      width={720}
      onClose={onClose}
      visible={visible}
    >
      <AddNewCategory />
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          borderTop: '1px solid #e8e8e8',
          padding: '10px 16px',
          textAlign: 'right',
          left: 0,
          background: '#fff',
          borderRadius: '0 0 4px 4px'
        }}
      >
        <Button
          style={{
            marginRight: 8
          }}
          onClick={onClose}
        >
          Cancel
        </Button>
        <Button onClick={onClose} type="primary">
          Submit
        </Button>
      </div>
    </Drawer>
  );
});

export default DrawerAddCategoryName;
