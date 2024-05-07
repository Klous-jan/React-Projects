
// import componentsImg from './assets/components.png'
import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx'
import CoreConcept from './components/CoreConcepts/CoreConcepts.jsx';
import TabButton from './components/TabButton/TabButton.jsx'


function App() {
function handleSelect(selectedButton) {
	// selectedButton => 'components', 'jsx', 'props', 'state'
        console.log(selectedButton);
    }


	return (
		<div>
			<Header />
			<main>
				<section id="core-concepts">
					<h2>Core Concepts</h2>
					<ul>
						<CoreConcept 
							title={CORE_CONCEPTS[0].title} 
							description={CORE_CONCEPTS[0].description} 
							image={CORE_CONCEPTS[0].image}
						/>
						<CoreConcept {...CORE_CONCEPTS[1]} />
						<CoreConcept {...CORE_CONCEPTS[2]} />
						<CoreConcept {...CORE_CONCEPTS[3]} />
					</ul>
				</section>
				<section id="examples">
					<h2>Examples</h2>
					<menu>
						<TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
						{/* onSelect={() => handleSelect} and onSelect={function() { handleSelect }} do the same thing, just written differently*/}
						{/* <TabButton onSelect={function() { handleSelect }}>JSX</TabButton> */}
						<TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
						<TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
						<TabButton onSelect={() => handleSelect('state')}>State</TabButton>
					</menu>
					Dynamic Content
				</section>
			</main>
		</div>
	);
}

export default App;
