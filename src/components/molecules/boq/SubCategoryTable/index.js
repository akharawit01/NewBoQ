import React, { useRef } from 'react';
import { Table, Icon } from 'antd';

import SubCategoryTableStyle from './SubCategoryTable.style';
import DrawerAddItemBoq from '../../../drawers/DrawerAddItemBoq';

const columns = [
  {
    title: 'Item',
    dataIndex: 'id'
  },
  {
    title: 'Discription',
    dataIndex: 'name'
  },
  {
    title: 'Quantity',
    dataIndex: 'quantity'
  },
  {
    title: 'Unit',
    dataIndex: 'unit'
  },
  {
    title: 'Material',
    children: [
      {
        title: 'Prict/Unit',
        dataIndex: 'material.price'
      },
      {
        title: 'Amount',
        dataIndex: 'material.amount'
      }
    ]
  },
  {
    title: 'Labour',
    children: [
      {
        title: 'Prict/Unit',
        dataIndex: 'labour.price'
      },
      {
        title: 'Amount',
        dataIndex: 'labour.amount'
      }
    ]
  },
  {
    title: 'Total',
    dataIndex: 'total'
  },
  {
    title: '#',
    render: (text, record) => (
      <span className="icon-group">
        <Icon type="edit" />
        <Icon type="delete" />
      </span>
    )
  }
];

const data = [
  {
    key: 1,
    id: 1,
    name: 'test',
    quantity: 100,
    unit: 'Box',
    material: {
      price: 1,
      amount: 100
    },
    labour: {
      price: 1,
      amount: 100
    },
    total: 200,
    group: 'Ob1'
  }
];

const SubCategoryTable = () => {
  const refDrawer = useRef();
  const handleOpenDrawer = () => {
    const params = refDrawer.current;
    params.showDrawer();
  };
  for (let i = 1; i < 99; i++) {
    data.push({
      key: i + 1,
      id: i + 1,
      name: 'test',
      quantity: 100,
      unit: 'Box',
      material: {
        price: 1,
        amount: 100
      },
      labour: {
        price: 1,
        amount: 100
      },
      total: 200,
      group: 'Ob1'
    });
  }
  return (
    <SubCategoryTableStyle>
      <div className="sub_category-table">
        <div className="boq_detail-body-top">
          <span>Racing car sprays burning fuel into</span>
          <div className="icon-group">
            <Icon type="delete" />
            <span onClick={handleOpenDrawer}>
              <Icon type="plus-circle" />
            </span>
          </div>
        </div>
        <DrawerAddItemBoq ref={refDrawer} />
        <Table columns={columns} dataSource={data} size="middle" bordered />
      </div>
    </SubCategoryTableStyle>
  );
};

export default SubCategoryTable;
