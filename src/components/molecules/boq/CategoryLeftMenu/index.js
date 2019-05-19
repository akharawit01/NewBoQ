import React from 'react';
import { List } from 'antd';

import CategoryLeftMenuStyle from './CategoryLeftMenu.style';

import BoqCategoryForm from '../../../forms/BoqCategoryForm';

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.'
];

const CategoryLeftMenu = () => {
  return (
    <CategoryLeftMenuStyle>
      <div className="category-top">
        <span>Category</span>
      </div>
      <BoqCategoryForm />
      <List
        size="small"
        bordered
        className="category-list"
        dataSource={data}
        renderItem={(item, i) => (
          <List.Item className={`ellipsis ${i === 0 ? 'active' : ''}`}>
            {i + 1}. {item}
          </List.Item>
        )}
      />
    </CategoryLeftMenuStyle>
  );
};
export default CategoryLeftMenu;
