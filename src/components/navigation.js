import AboutMe from './About-Me';
import Project from './Project'; // Adjust the path to match the actual location of the Project file.



const navigation = ({ section }) => {
	return (
		<>
			{section.includes('About Me') && <AboutMe />}
			{section.includes('Project') && <Project />}
		</>
	);
};

export default navigation;