import React, { useState, useRef } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import AddNewCategoryStyle from './AddNewCategory.style';
import DragSortingCategoryTable from '../../DragSortingCategoryTable';

const AddNewCategory = () => {
  const inputCategoryName = useRef(null);
  const [categories, setCategories] = useState([]);
  const [categoryNameField, setCategoryNameField] = useState([]);
  const handleAddCategoryName = event => {
    event.preventDefault();
    setCategories([
      ...categories,
      {
        content: categoryNameField
      }
    ]);
    inputCategoryName.current.value = '';
  };
  return (
    <AddNewCategoryStyle>
      <div className="addNewCategory-top">
        <TextField
          inputRef={inputCategoryName}
          className="field-category_name"
          label="Name"
          variant="outlined"
          margin="none"
          onChange={event => setCategoryNameField(event.target.value)}
        />
        <Button
          variant="outlined"
          color="primary"
          onClick={event => handleAddCategoryName(event)}
        >
          Add to Table
        </Button>
      </div>
      <DragSortingCategoryTable items={categories} />
    </AddNewCategoryStyle>
  );
};
export default AddNewCategory;
