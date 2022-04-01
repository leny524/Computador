import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
const NavBar2 = () => {
  return (
    <div>
      {/*<div className="navbar">
        <div className="logo">
          <a href="">Froppy Style</a>
        </div>
        <div className="enlaces">
          <ul class="link">
            <li className="link-nav-item"></li>
            <li className="link-nav-item"></li>
          </ul>
        </div>
  </div>*/}
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Froppy Style</NavbarBrand>
        <NavbarToggler />
        <Collapse navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Categorias</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                Subcategorias
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                Productos
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};
export default NavBar2;
