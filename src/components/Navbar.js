import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { Navlink, Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div>
    <Menu inverted>
    <Menu.Item header>In The Kitchen</Menu.Item>
    <Menu.Item as={Link} to='/'>
      <Icon name="home"/>
    </Menu.Item>
    <Menu.Item as={Link} to='/recipes' name="Recipes"/>
        <Menu.Item as={Link} to='/recipes/new' name="Create New Recipe"/>
        <Menu.Item as={Link} to='/about' name="About"/>
        <Menu.Item position="right">
        </Menu.Item>
      </Menu>
      <br/>
    </div>
  );
}

export default Navbar;
