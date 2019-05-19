import React, { useRef } from 'react';

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { withStyles } from '@material-ui/core/styles';

import BoqStyle from './Boq.style';
import MainHead from '../../components/molecules/MainHead';
import BoqListTable from '../../components/tables/BoqListTable';
import DrawerCreateBoq from '../../components/drawers/DrawerCreateBoq';

const BoqListing = props => {
  const { classes } = props;
  const refDrawer = useRef();

  const handleOpenDrawer = () => {
    const params = refDrawer.current;
    params.showDrawer();
  };

  return (
    <BoqStyle>
      <MainHead title="BOQ Listing" />
      <Fab
        color="primary"
        aria-label="Add"
        className={classes.fab}
        onClick={handleOpenDrawer}
      >
        <AddIcon />
      </Fab>
      <DrawerCreateBoq ref={refDrawer} />
      <BoqListTable />
    </BoqStyle>
  );
};

const styles = theme => ({
  fab: {
    position: 'fixed',
    bottom: '15px',
    right: '15px',
    zIndex: '1'
  }
});

export default withStyles(styles)(BoqListing);
