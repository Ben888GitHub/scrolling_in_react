import { useState } from 'react';

function App() {
	const [scrollTop, setScrollTop] = useState(0);

	const handleScroll = (event) => {
		console.log(event.currentTarget.scrollTop);
		setScrollTop(event.currentTarget.scrollTop);

		event.currentTarget.scrollTop === 50 &&
			console.log("Let's do some animation in section 50");
	};

	return (
		<div>
			Scroll top: <b>{scrollTop}</b>
			<br />
			<br />
			<div
				style={{
					border: '1px solid black',
					width: '400px',
					height: '200px',
					overflow: 'auto'
				}}
				onScroll={handleScroll}
			>
				{[...Array(10)].map((_, i) => (
					<p key={i}>Content</p>
				))}
			</div>
		</div>
	);
}

export default App;
