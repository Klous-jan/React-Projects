
// import componentsImg from './assets/components.png'
import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx'
import CoreConcept from './components/CoreConcepts/CoreConcepts.jsx';
import TabButton from './components/TabButton/TabButton.jsx'
import { useState } from 'react';
import { EXAMPLES } from './data.js'


function App() {
	// =======================================================================================================
	// react hook function rules:                          |                                                 |
	// #1: Only call hooks inside of Component Functions:  | #2: Only call hooks on the top level            |
	// **React Hooks must not be called outside of React   | **React Hooks must not be called in nested      |
	// **component functions.                              | **code statements (eg, inside of if-statements) |
	// 		✔️✔️EXAMPLE:                                  |       ✔️✔️EXAMPLE:                             |
	// 		functions App() {                              |       functions App() {                         |
	// 			const [val, setVal] = useState(0);         |           const [val, setVal] = useState(0);    |
	// 		}                                              |       }                                         |
	//                                                     |                                                 |
	// 		❌❌EXAMPLE:                                  |       ❌❌EXAMPLE:                             |
	// 		const [val, setVal] = useState(0);             |       if (someCondition)                        |
	// 		functions App() {                              |           const [val, setVal] = useState(0);    |
	// 			...                                        |       }                                         |
	// 		}                                              |                                                 |
	// =======================================================================================================

	const [ selectedTopic, setSelectedTopic ] = useState();

	// =======================================================================================================
	// const [ selectedTopic, setSelectedTopic ] = useState('Please click a button');                        |
	// =======================================================================================================
	// selectedTopic                                       | setSelectedTopic                                |
	// selectedTopic is a the first element in this array  | selectedTopic is a the Second element in this   |
	// 	 and will be the current data snapshot for this    |   array, and if it's executed again thereafter  |
	// 	 component execution cycle. 	                   |   it will be the updated value                  |
	// So when this component function is executed first   |                                                 |
	// 	 it will be the initial value:                     |                                                 |
	// 	 'Please click a button'                           |                                                 |
	// 		                                               |                                                 |
	// =======================================================================================================
	// 	              v-<--<--<--<--<--<   ["State updates lead to new state values"]                	     |
	// 	              |                |   [as the component function executes again]                	     |
	// 	const [ selectedTopic, setSelectedTopic ] = useState(0)		                                         |
	// 		    ------^                ^----------           ^------------------------                       |
	// 		    |                                |                                   |                       |
	//*	Current state value	           State updating function              Initial state value              |
	//*	 provided by react        Updates the stored value & 'tells'         stored by react                 |
	//*		                      react to re-execute the component                                          |
	//*		                   function in which useState() was called                                       |
	// =======================================================================================================
	
function handleSelect(selectedButton) {
	// selectedButton => 'components', 'jsx', 'props', 'state'
        // tabContent = selectedButton;
		setSelectedTopic(selectedButton)
		console.log(selectedTopic);
    }

	let tabContent = <p>Please select a topic.</p>;
	if (selectedTopic) {
		tabContent = (
			<div id="tab-content">
				<h3>{EXAMPLES[selectedTopic].title}</h3>
				<p>{EXAMPLES[selectedTopic].description}</p>
				<pre>
					<code>
					{EXAMPLES[selectedTopic].code}
					</code>
				</pre>
			</div>
		);
	}

	return (
		<div>
			<Header />
			<main>
				<section id="core-concepts">
					<h2>Core Concepts</h2>
					<ul>
						{CORE_CONCEPTS.map((conceptItem) => <CoreConcept {...conceptItem} />)}
						{/* <CoreConcept 
							title={CORE_CONCEPTS[0].title} 
							description={CORE_CONCEPTS[0].description} 
							image={CORE_CONCEPTS[0].image}
						/>
						<CoreConcept {...CORE_CONCEPTS[1]} />
						<CoreConcept {...CORE_CONCEPTS[2]} />
						<CoreConcept {...CORE_CONCEPTS[3]} /> */}
					</ul>
				</section>
				<section id="examples">
					<h2>Examples</h2>
					<menu>
						<TabButton 
							isSelected={selectedTopic === 'components'} 
							onSelect={() => handleSelect('components')}
						>
							Components
						</TabButton>
						<TabButton 
							isSelected={selectedTopic === 'jsx'} 
							onSelect={() => handleSelect('jsx')}
						>
							JSX
						</TabButton>
						<TabButton 
							isSelected={selectedTopic === 'props'} 
							onSelect={() => handleSelect('props')}
						>
							Props
						</TabButton>
						<TabButton 
							isSelected={selectedTopic === 'state'} 
							onSelect={() => handleSelect('state')}
						>
							State
						</TabButton>
					</menu>
					{tabContent}
				</section>
			</main>
		</div>
	);
}

export default App;
