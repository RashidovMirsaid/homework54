import React, { useState } from 'react';
import Square from '../Square/Square';

interface GameBlockProps {
	onReset: () => void;
}

const createItems = () => {
	const items = Array.from({ length: 36 }, () => ({
		hasItem: false,
		clicked: false,
	}));

	const randomSquare = Math.floor(Math.random() * 36);
	items[randomSquare].hasItem = true;
	return items;
};

const GameBlock: React.FC<GameBlockProps> = () => {
	const [items, setItems] = useState(createItems());
	const [attempts, setAttempts] = useState<number>(0);

	const handleSquareClick = (index: number) => {
		const clickedItem = items[index];

		if (!clickedItem.clicked) {
			setAttempts((prevAttempts) => prevAttempts + 1);
			const newItems = [...items];
			newItems[index].clicked = true;
			setItems(newItems);
		}
	};
	return (
		<div className='GameBlock'>
			<div>Попытки{attempts}</div>
			<div
				style={{
					display: 'grid',
					gridTemplateColumns: 'repeat(6, 50px)',
					gap: '5px',
				}}
			>
				{items.map((item, index) => (
					<Square
						key={index}
						item={item}
						onClick={() => handleSquareClick(index)}
					/>
				))}
			</div>
		</div>
	);
};

export default GameBlock;
