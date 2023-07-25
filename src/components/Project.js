import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import ProjectCard from './ProjectCard';

const projects = [
	{
		title: 'Movie Quest',
		img: 'https://plotandtheme.files.wordpress.com/2015/04/istockphoto-1179771730-612x612-1.jpg',
		description: 'A website to show you movie trailers and reviews of the movie searched.',
		url: 'https://gabinoe.github.io/plotness/',
	},
	{
		title: 'PrayerPal',
		img: 'https://prayer-pal.herokuapp.com/images/PrayerPal.png',
		description: 'An application to bring you closer to God.',
		url: 'https://prayer-pal.herokuapp.com/login',
	},
];

const Header = () => {
	const styles = {
		heading: {
			fontSize: '4rem',
			textAlign: 'center',
		},
	};

	return <h2 style={styles.heading}>Projects</h2>;
};

const ProjectContainer = () => {
	return (
		<Container>
			<Row>
				{projects.map((item, index) => (
					<Col lg={4} key={index} className='d-flex mx-auto'>
						<ProjectCard
							title={item.title}
							img={item.img}
							description={item.description}
							url={item.url}
						/>
					</Col>
				))}
			</Row>
		</Container>
	);
};

const Project = () => {
	return (
		<>
			<Header />
			<ProjectContainer />
		</>
	);
};

export default Project;