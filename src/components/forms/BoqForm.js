import React from 'react';
import { Form, Field } from 'react-final-form';
import TextField from '@material-ui/core/TextField';

import AddNewCategory from '../molecules/boq/AddNewCategory';

const BoqForm = props => {
  return (
    <Form
      onSubmit={() => ({})}
      render={() => (
        <form noValidate autoComplete="off">
          <Field
            fullWidth
            required
            name="boqName"
            component={TextField}
            type="text"
            label="Bill of Quantities Name"
          />
          <Field
            fullWidth
            multiline
            name="boqBio"
            component={TextField}
            type="text"
            label="Bio"
          />

          <h3>Category</h3>
          <AddNewCategory />
        </form>
      )}
    />
  );
};

export default BoqForm;
