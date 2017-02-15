import React from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';

import injectTapEventPlugin from 'react-tap-event-plugin'; 

injectTapEventPlugin();

const muiTheme = getMuiTheme({
  palette: {
    textColor: '#45058e',
  },
  appBar: {
    height: 50,
  },
});

const MaterialUi = () => (
  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
    <AppBar title="My AppBar" />
  </MuiThemeProvider>
);

export default MaterialUi;

/*ReactDOM.render(
  <MaterialUi />,
  document.getElementById('app')
);*/