import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

const ProjectCard = ({ img, title, description, url }) => {
	const styles = {
		background: {
			background: 'black',
			transition: 'background-color 0.2s',
		},
		width: {
			width: '18rem',
		},
		border: {
			borderColor: '#e8f2f1',
		},
		text: {
			textDecoration: 'none',
			color: '#e8f2f1',
		},
		image: {
			width: '100%',
			height: '18rem',
			objectFit: 'cover',
		},
	};

	return (
		<a href={url} target='_blank' rel='noopener noreferrer' className='text-decoration-none'>
			<Card
				className='mx-auto my-4 d-flex'
				style={{ ...styles.background, ...styles.width, ...styles.border }}
			>
				<Card.Body>
					<Card.Title className='fw-bold'>{title}</Card.Title>
					<Card.Text>{description}</Card.Text>
				</Card.Body>
				<Card.Img src={img} alt={`title image of ${description}`} style={styles.image} />
			</Card>
		</a>
	);
};

// PropTypes
ProjectCard.propTypes = {
	img: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
};

// Default props
ProjectCard.defaultProps = {
	img: 'default_image_url', // Provide a default image URL if needed
};

export default ProjectCard;
