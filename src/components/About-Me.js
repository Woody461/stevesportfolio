import React from 'react';
import { Container } from 'react-bootstrap';
import yeeImage from './yee.png';


const AboutMe = () => {
	const styles = {
		section: {
			backgroundColor: 'transparent',
			color: '#fff',
			border: '2px solid #e8f2f1',
			padding: '20px',
			marginBottom: '30px',
		},
		heading: {
			fontSize: '3rem',
			marginTop: '20px',
		},
		subHeading: {
			fontSize: '2rem',
		},
        border: {
        color: 'black'
        }
	};

	return (
		<section style={styles.section}>
			<Container>
            <img
          src={yeeImage} // Use the imported variable to reference the image
          alt="Profile"
          style={styles.image}
        />
				<p>Welcome!</p>
				<h2 style={styles.heading} className='fw-bold'>
					Steve Martin
				</h2>
				<h3 style={styles.subHeading} className='fw-bold'>
					Full Stack Web Developer
				</h3>
				<p>
					I am a passionate full stack web developer student, continuously
					exploring and learning new technologies to build exciting web
					applications.
				</p>
			</Container>
		</section>
	);
};

export default AboutMe;
