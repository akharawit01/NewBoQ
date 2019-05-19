import React from 'react';
import { Form, Field } from 'react-final-form';
import TextField from '@material-ui/core/TextField';

const AddSubCategoryBoqForm = () => {
  return (
    <Form
      onSubmit={() => ({})}
      render={() => (
        <form noValidate autoComplete="off">
          <Field
            fullWidth
            required
            name="Sub Category Name"
            component={TextField}
            type="text"
            label="Sub Category Name"
            margin="normal"
            variant="outlined"
          />
        </form>
      )}
    />
  );
};

export default AddSubCategoryBoqForm;
