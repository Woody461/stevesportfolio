import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NavBar from './components/Navbar';
import Navigation from './components/navigation';
import Footer from './components/footer';
import './App.css'; // Import the CSS file

const App = () => {
  const [activeSection, setActiveSection] = useState('About Me'); // Rename renderSection to activeSection

  return (
    <div className='app-container'>
      <NavBar selectSection={setActiveSection} />
      <Container fluid className='app-content'>
        <Row className='my-auto'>
          <Col>
            <Navigation section={activeSection} />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default App;
