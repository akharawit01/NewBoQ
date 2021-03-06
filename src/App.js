import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { configTheam } from './config';
import { store } from './redux/store';
import AppStyle from './style.css';

import theme from './shared/style/theme';

import PublicRoute from './router';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={configTheam}>
          <Provider store={store}>
            <BrowserRouter>
              <AppStyle className="App">
                <PublicRoute />
              </AppStyle>
            </BrowserRouter>
          </Provider>
        </ThemeProvider>
      </MuiThemeProvider>
    );
  }
}

export default App;
