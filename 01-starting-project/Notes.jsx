import { useState } from "react";
// ALL functions that start with 'use' in react projects are react hooks
// Hooks are technically regular functions but they must ONLY be called
// 		inside react components or inside other react hooks.
// 		EXAMPLE: custom react hooks.

import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";

function App() {
	// ✔️ useState();
	// NOTE: App() is a react component function, the App component function so you
	// 		can call hooks (| like the hook: useState() |)
	// NOTE: you can only call hooks on the top level**
	// ✔️ EXAMPLE:
	// function App() {
	// 		const [val, setVal] = useState(0);
	// }
	// ❌ EXAMPLE:
	// function App() {
	// 		if (someCondition)
	// 			const [val, setVal] = useState(0);
	// }
	const [selectedTopic, setSelectedTopic] = useState("Please click a button");
	// const [ selectedTopic, setSelectedTopic ] = useState(0);
	// 		|		⬆		 |		   ⬆		 |		    ⬆  |
	// 		| Current State  |State Updating Func| Initial state value
	//
	// Current State Value: provided by React, May change if the component
	// 		function is executed again.
	// State Updating Function: Updates the stroed values & "tells" React
	// 		to re-execute the component function in which useState() was called.
	// Initial state value: Stored by React.

	// [] is array deconstructing
	function handleSelect(selectButton) {
		// ❌ useState();
		// NOTE: You CANNOT call hooks inside this function, even though this
		// 		function is nested inside the App() component function, you
		// 		must call it on the top level.

		// selectButton => 'components', 'jsx', 'props', 'state'
		console.log(selectButton);
	}

    // #1 way to impliment {tabContent}
	let tabContent = <p>Please select a topic</p>;
	if (selectedTopic) {
		tabContent = (
			<div id="tab-content">
				<h3>{EXAMPLES[selectedTopic].title}</h3>
				<p>{EXAMPLES[selectedTopic].description}</p>
				<pre>
					<code>{EXAMPLES[selectedTopic].code}</code>
				</pre>
			</div>
		);
	}

	// #2 way to impliment {tabContent}
	// 	{!selectedTopic ? (
	// 		<p>Please select a topic</p>
	// 	) : (
	// 		<div id="tab-content">
	// 			<h3>{EXAMPLES[selectedTopic].title}</h3>
	// 			<p>{EXAMPLES[selectedTopic].description}</p>
	// 			<pre>
	// 				<code>{EXAMPLES[selectedTopic].code}</code>
	// 			</pre>
	// 		</div>
	// 	)}

	// #3 way to impliment {tabContent}
	// 	{!selectedTopic && <p>Please select a topic</p>}
	// 	{selectedTopic && (
	// 		<div id="tab-content">
	// 			<h3>{EXAMPLES[selectedTopic].title}</h3>
	// 			<p>{EXAMPLES[selectedTopic].description}</p>
	// 			<pre>
	// 				<code>{EXAMPLES[selectedTopic].code}</code>
	// 			</pre>
	// 		</div>
	// 	)}

	return (
		<div>
			<Header />
			<main>
				<section id="core-concepts">
					<h2>Core Concepts</h2>
					<ul>
						{CORE_CONCEPTS.map((conceptItem) => (
							<CoreConcept key={conceptItem.title} {...conceptItem} />
						))}
						{/* <CoreConcept {...CORE_CONCEPTS[0]} />
						<CoreConcept {...CORE_CONCEPTS[1]} />
						<CoreConcept title={CORE_CONCEPTS[2].title} description={CORE_CONCEPTS[2].description} image={CORE_CONCEPTS[2].image} />
						<CoreConcept title={CORE_CONCEPTS[3].title} description={CORE_CONCEPTS[3].description} image={CORE_CONCEPTS[3].image} /> */}
					</ul>
				</section>
				<section id="examples">
					<h2>Examples</h2>
					<menu>
						<TabButton onSelect={() => handleSelect("components")}>Components</TabButton>
						<TabButton onSelect={() => handleSelect("jsx")}>JSX</TabButton>
						<TabButton onSelect={() => handleSelect("props")}>Props</TabButton>
						<TabButton onSelect={() => handleSelect("state")}>State</TabButton>
					</menu>
				</section>
			</main>
		</div>
	);
}

export default App;

export default function App() {
    const [ price, setPrice] = React.useState(100);
    // 	|	  ⬆	  |	   ⬆	 |		           ⬆  |
    //  | current | updated  |             default|
    //  if the listed default price of an item is 100, then its current price is 100
    //  updated is what it would get changed to. "75"


import useState from 'react';
export default function App() {
    const [ price, setPrice] = React.useState(100);
    // #4: update(setPrice) is called to update and refresh
    // #5: price has now been updated from 100 to 75
    function priceHandle() {
        // #2: priceHandle functions runs
        setPrice(75);
        // #3: setPrice(update) is called
    }
    return (
        <div>
            <p data-testid="price">${price}</p>
            {/* #6: {price} is now displaying the updated price of $75 */}
            <button onClick={priceHandle}>Apply Discount</button>
            {/* #1: onClick calls {priceHandle} */}
        </div>
    );
}