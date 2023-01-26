import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import MenuApp from './components/MenuApp.jsx';
import { Outlet } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <Grid padded>
        <Grid.Row>
          <Grid.Column width={ 3 }>
            <MenuApp/>
          </Grid.Column>
          <Grid.Column width={ 12 }>
            <Outlet />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}