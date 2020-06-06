import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';


class AppNavbar extends Component {
    state = { 
        isOpen: false
     }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    render() { 
        return (
        <div>
            <Navbar color="dark" dark expand="md" className="mb-5">
                <Container>
                    <NavbarBrand href="/">Exercises</NavbarBrand>
                    <NavbarToggler onClick={this.toggle}></NavbarToggler>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="https://github.com/samrathacharya">GitHub</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </div> 
        );
    }
}
 
export default AppNavbar;