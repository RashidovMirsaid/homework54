import { useState } from 'react';
import GameBlock from '../../components/GameBlock/GameBlock';
import './App.css';

function App() {
	const [resetKey, setResetKey] = useState<number>(0);

	const handleReset = () => {
		setResetKey((prevKey) => prevKey + 1);
	};
	return (
		<div className='App'>
			<GameBlock key={resetKey} onReset={handleReset} />
			<button onClick={handleReset}>Reset</button>
		</div>
	);
}

export default App;
