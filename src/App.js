import NavBar from './components/navbar/NavBar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Contact from './components/Contact';

function App() {
	return (
		<div className='app'>
			<NavBar />
			<Home />
			<About />
			<Skills />
			<Projects />
			<Contact />
		</div>
	);
}

export default App;
