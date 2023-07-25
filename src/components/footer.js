import { Navbar, Container, Nav } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Footer = () => {
	const styles = {
		background: {
			background: 'black',
		},
		color: {
			color: '#fff',
		},
		iconStyle: {
			fontSize: '1.5rem',
		},
	};

	return (
		<Navbar sticky='bottom' variant='light' style={styles.background}>
			<Container>
				<Nav className='m-auto'>
					<Nav.Link href='https://github.com/Woody461' target='_blank'>
						<i
							className='bi-github'
							style={{ ...styles.iconStyle, ...styles.color }}
						></i>
					</Nav.Link>
					<Nav.Link
						href='https://www.linkedin.com/in/steve-martin-67830b285/'
						target='_blank'
					>
						<i
							className='bi bi-linkedin'
							style={{ ...styles.iconStyle, ...styles.color }}
						></i>
					</Nav.Link>
				</Nav>
			</Container>
		</Navbar>
	);
};

export default Footer;