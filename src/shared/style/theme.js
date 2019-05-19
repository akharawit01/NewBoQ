import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  overrides: {
    MuiFormControl: {
      root: {
        margin: '5px 0 15px 0'
      }
    }
  }
});

export default theme;
