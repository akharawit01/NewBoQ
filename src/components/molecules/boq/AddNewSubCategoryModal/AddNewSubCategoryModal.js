import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Modal } from 'antd';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import AddSubCategoryBoqForm from '../../../forms/AddSubCategoryBoqForm';

const AddNewSubCategoryModal = ({ classes }) => {
  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);

  const handleOk = e => {
    setVisible(false);
  };

  const handleCancel = e => {
    setVisible(false);
  };

  return (
    <>
      <Fab
        color="primary"
        aria-label="Add"
        className={classes.fab}
        onClick={showModal}
      >
        <AddIcon />
      </Fab>
      <Modal
        title="New Sub Category"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <AddSubCategoryBoqForm />
      </Modal>
    </>
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
export default withStyles(styles)(AddNewSubCategoryModal);
