import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function MenuApp() {
  return (
    <Menu vertical fluid>
      <Menu.Item link>
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item link>
        <Link to="/providers">Providers</Link>
      </Menu.Item>
      <Menu.Item link>
        <Link to="/clients" >Clients</Link>
      </Menu.Item>
      <Menu.Item link>
        <Link to="/purchases" >Purchases</Link>
      </Menu.Item>
      <Menu.Item link>
        <Link to="/sales" >Sales</Link>
      </Menu.Item>
    </Menu>
  );
}