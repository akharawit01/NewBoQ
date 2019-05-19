import React from 'react';
import PropTypes from 'prop-types';
import { confirmable } from 'react-confirm';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const YourDialog = ({
  show,
  proceed,
  dismiss,
  cancel,
  confirmation,
  options
}) => (
  <Dialog
    open={show}
    onClose={dismiss}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <DialogTitle id="alert-dialog-title">
      {"Use Google's location service?"}
    </DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">
        {confirmation}
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button
        onClick={() => cancel('arguments will be passed to the callback')}
        color="primary"
      >
        Disagree
      </Button>
      <Button
        onClick={() => proceed('same as cancel')}
        color="primary"
        autoFocus
      >
        Agree
      </Button>
    </DialogActions>
  </Dialog>
);

YourDialog.propTypes = {
  show: PropTypes.bool,
  proceed: PropTypes.func,
  cancel: PropTypes.func,
  dismiss: PropTypes.func,
  confirmation: PropTypes.string,
  options: PropTypes.object
};
export default confirmable(YourDialog);
