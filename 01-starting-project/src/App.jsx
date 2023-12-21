import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import Examples from "./components/Examples.jsx";

// import { useState } from "react";
// import CoreConcept from "./components/CoreConcept.jsx";
// import { CORE_CONCEPTS } from "./data.js";
// import TabButton from "./components/TabButton.jsx";
// import { EXAMPLES } from "./data.js";

function App() {
	return (
		<>
			<Header />
			<main>
				<CoreConcepts />
				<Examples />
			</main>
		</>
	);
}

export default App;
