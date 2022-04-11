import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Modal, Tab, NavDropdown, } from 'react-bootstrap';
import Login from '../components/LoginForm';
import Signup from '../components/SignupForm';
// import Reviews from '../components/Reviews';
// import Trainers from '../components/Trainers';

import Auth from '../utils/auth';

const AppNavbar = () => {
  // set modal display state
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Navbar bg="primary" variant="dark" class="text-white">
        <Container fluid>
          <Navbar.Brand as={Link} to='/homepage'>
            MGC Fitness
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='navbar' />
          <Navbar.Collapse id='navbar'>
            <Nav className='ml-auto' >
              <NavDropdown title="Trainers">
                <NavDropdown.Item as={Link} to="/trainer1">Weight Training</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/runner1">Cardio</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/nutrition1">Nutrition/Weight Control</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/manager1">Gym Management</NavDropdown.Item>
                
              </NavDropdown>
              {/* <Nav.Link as={Link} to="/trainers">
                Trainers
                </Nav.Link> */}
              <Nav.Link as={Link} to="/reviews">
                Reviews
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contact Us
              </Nav.Link>
              {/* if user is logged in show saved books and logout */}
              {Auth.loggedIn() ? (
                <>
                  <Nav.Link as={Link} to='/saved'>
                    Contact Us
                  </Nav.Link>
                  <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
                </>
              ) : (
                <Nav.Link onClick={() => setShowModal(true)}>Login/Sign Up</Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* set modal data up */}
      <Modal
        size='lg'
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby='signup-modal'>
        {/* tab container to do either signup or login component */}
        <Tab.Container defaultActiveKey='login'>
          <Modal.Header closeButton>
            <Modal.Title id='signup-modal'>
              <Nav variant='pills'>
                <Nav.Item>
                  <Nav.Link eventKey='login'>Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='signup'>Sign Up</Nav.Link>
                </Nav.Item>
              </Nav>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tab.Content>
              <Tab.Pane eventKey='login'>
                <Login handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
              <Tab.Pane eventKey='signup'>
                <Signup handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>
    </>
  );
};





export default AppNavbar;
