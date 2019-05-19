import React from 'react';
import { Button } from 'antd';
import { Form, Field } from 'react-final-form';
import TextField from '@material-ui/core/TextField';

const BoqCategoryForm = props => {
  return (
    <Form
      onSubmit={() => ({})}
      render={() => (
        <form noValidate autoComplete="off">
          <Field
            fullWidth
            required
            name="categoryName"
            component={TextField}
            type="text"
            label="Category Name"
            margin="normal"
            variant="outlined"
          />
          <div className="fm-item-btn">
            <Button type="primary">Add Category</Button>
            <Button>Cancle</Button>
          </div>
        </form>
      )}
    />
  );
};

export default BoqCategoryForm;
