import React, { useState } from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBIcon,
    MDBCollapse
} from 'mdb-react-ui-kit';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from './Home'
import About from './About'
import Contact from './Contact'
const Header = () => {
    const [showNav, setShowNav] = useState(false);

    return (
        <Router>
            <MDBNavbar expand='lg' light bgColor='light'>
                <MDBContainer >
                    <MDBNavbarBrand href='#'>Navbar</MDBNavbarBrand>
                    <MDBNavbarToggler
                        type='button'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                        onClick={() => setShowNav(!showNav)}
                    >
                        <MDBIcon icon='bars' fas />
                    </MDBNavbarToggler>
                    <MDBCollapse navbar show={showNav}>
                        <MDBNavbarNav>
                            <MDBNavbarItem>

                                <Link className="nav-link active" to="/">Home</Link>

                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <Link className="nav-link " to="/About">About</Link>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <Link className="nav-link " to="/Contact">Contact</Link>
                            </MDBNavbarItem>

                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
            <Switch>
                <Route path="/About">
                    <About />
                </Route>
                <Route path="/Contact">
                    <Contact />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>

        </Router>

    );

}

export default Header