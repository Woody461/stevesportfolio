import { Navbar, Container, Nav } from 'react-bootstrap';

const NavBar = ({ selectSection }) => {
	const styles = {
		background: {
			background: 'black',
		},
		color: {
			color: '#fff',
		},
	};

	return (
		<Navbar variant='light' expand='lg' style={styles.background}>
			<Container>
				<Navbar.Brand
					onClick={() => {
						selectSection('About Me');
					}}
					href='#top'
					style={styles.color}
				>
					Steve Martin
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav' className='flex-grow-0'>
					<Nav className='me-auto'>
						<Nav.Link
							onClick={() => {
								selectSection('About Me');
							}}
							style={styles.color}
						>
							About Me
						</Nav.Link>
						<Nav.Link
							onClick={() => {
								selectSection('Project');
							}}
							style={styles.color}
						>
							Project
					
						</Nav.Link>
                        <Nav.Link
							onClick={() => {
								selectSection('Contact');
							}}
							style={styles.color}
						>
							Contact
					
						</Nav.Link>
		
						
						<Nav.Link
							onClick={() => {
								selectSection('Resume');
							}}
							style={styles.color}
							href='https://profile.indeed.com/p/stevem-fes275c'
							target='_blank'
						>
							Resume
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavBar;
