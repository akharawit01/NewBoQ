import React from 'react';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import confirm from '../../utils/confirmDialog';

const styles = theme => ({
  root: {},
  table: {},
  row: {
    cursor: 'pointer',
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default
    },
    '&:hover': {
      backgroundColor: theme.palette.grey[300]
    },
    '&>th, &>td': {
      padding: '5px 40px 5px 16px'
    }
  }
});

const BoqListTable = props => {
  const { classes } = props;
  let id = 0;
  function createData(name, calories, fat, carbs, protein) {
    id += 1;
    return { id, name, calories, fat, carbs, protein };
  }

  const rows = [
    createData('Frozen yoghurt', 'AkharawitNt', '11-11-2019', '11-11-2019'),
    createData('Frozen yoghurt', 'AkharawitNt', '11-11-2019', '11-11-2019'),
    createData('Frozen yoghurt', 'AkharawitNt', '11-11-2019', '11-11-2019'),
    createData('Frozen yoghurt', 'AkharawitNt', '11-11-2019', '11-11-2019'),
    createData('Frozen yoghurt', 'AkharawitNt', '11-11-2019', '11-11-2019'),
    createData('Frozen yoghurt', 'AkharawitNt', '11-11-2019', '11-11-2019')
  ];

  const handleClickRow = rowId => {
    const {
      history: { push }
    } = props;
    push(`/boq/${rowId}`);
  };

  const handleDeleteRow = () => {
    confirm('Are you sure').then(
      result => {
        // `proceed` callback
        console.log('proceed called');
        console.log(result);
      },
      result => {
        // `cancel` callback
        console.log('cancel called');
        console.log(result);
      }
    );
  };

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Bill of Quantities Name</TableCell>
          <TableCell align="right">Creator</TableCell>
          <TableCell align="right">Creation Date</TableCell>
          <TableCell align="right">Modified date</TableCell>
          <TableCell align="right">Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map(row => (
          <TableRow key={row.id} className={classes.row}>
            <TableCell
              component="th"
              scope="row"
              onClick={() => handleClickRow(row.id)}
            >
              {row.name}
            </TableCell>
            <TableCell align="right" onClick={() => handleClickRow(row.id)}>
              {row.calories}
            </TableCell>
            <TableCell align="right" onClick={() => handleClickRow(row.id)}>
              {row.fat}
            </TableCell>
            <TableCell align="right" onClick={() => handleClickRow(row.id)}>
              {row.carbs}
            </TableCell>
            <TableCell align="right">
              <IconButton aria-label="Delete" onClick={() => handleDeleteRow()}>
                <DeleteIcon fontSize="small" />
              </IconButton>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default compose(
  withRouter,
  withStyles(styles)
)(BoqListTable);
