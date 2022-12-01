import NavBar from './components/navbar/NavBar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Contact from './components/Contact';
import Footer from './components/footer/Footer';
import pdf from './assets/resume.pdf';

function App() {
	const socialRedirect = (socialMediaName) => {
		console.log(socialMediaName);
		switch (socialMediaName) {
			case 'Linkedin':
				window.open('https://www.linkedin.com/in/edward-blanciak/', '_blank');
				break;
			case 'Github':
				window.open('https://github.com/eddieb2', '_blank');
				break;
			case 'Instagram':
				window.open('https://www.instagram.com/blanciakllc/', '_blank');
				break;
			case 'Resume':
				window.open(pdf, 'fullscreen=yes');
				break;
		}
	};

	return (
		<div className='app'>
			<NavBar socialRedirect={socialRedirect} />
			<Home />
			<About />
			<Skills />
			<Projects />
			<Contact />
			<Footer socialRedirect={socialRedirect} />
		</div>
	);
}

export default App;
