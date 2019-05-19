import React, { useState } from 'react';
import { Form, Field } from 'react-final-form';
import { Row, Col } from 'antd';

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import ReactSelect from 'react-select';

import GroupBox from '../organisms/GroupBox';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  controllW100: {
    width: '100%'
  },
  input: {
    display: 'flex',
    padding: 0
  }
});

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];

const BoqForm = ({ classes }) => {
  const [unit, setUnit] = useState('');
  const handleChange = event => {
    setUnit(event.target.value);
  };
  return (
    <Form
      onSubmit={() => ({})}
      render={() => (
        <form noValidate autoComplete="off">
          <Field
            fullWidth
            required
            name="description"
            component={TextField}
            type="text"
            label="Description"
          />

          <Row gutter={16}>
            <Col className="gutter-row" span={18}>
              <Field
                fullWidth
                required
                name="quantity"
                component={TextField}
                type="number"
                label="Quantity"
              />
            </Col>
            <Col className="gutter-row" span={6}>
              <FormControl className={classes.controllW100}>
                <InputLabel htmlFor="sltb-unit">Unit</InputLabel>
                <Select
                  value={unit}
                  onChange={handleChange}
                  inputProps={{
                    name: 'unit',
                    id: 'sltb-unit'
                  }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Col>
          </Row>

          <GroupBox title="Cost">
            <Row gutter={16}>
              <Col className="gutter-row" span={18}>
                <Field
                  fullWidth
                  required
                  name="materialCost"
                  component={TextField}
                  type="number"
                  label="Material cost"
                />
              </Col>
              <Col className="gutter-row" span={6}>
                <Field
                  fullWidth
                  required
                  name="sumMaterial"
                  component={TextField}
                  type="number"
                  label="Sub Material"
                />
              </Col>
              <Col className="gutter-row" span={18}>
                <Field
                  fullWidth
                  required
                  name="labourCost"
                  component={TextField}
                  type="number"
                  label="Labour cost"
                />
              </Col>
              <Col className="gutter-row" span={6}>
                <Field
                  fullWidth
                  required
                  name="sumLabour"
                  component={TextField}
                  type="number"
                  label="Sub Labour"
                />
              </Col>
            </Row>
          </GroupBox>
          <GroupBox title="Group">
            <ReactSelect classes={classes} options={options} isClearable />
            <p className="help" />
          </GroupBox>
        </form>
      )}
    />
  );
};

export default withStyles(styles)(BoqForm);
