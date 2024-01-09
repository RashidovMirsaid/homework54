import React from 'react';

interface SquareProps {
	item: { hasItem: boolean; clicked: boolean };
	onClick: () => void;
}

const Square: React.FC<SquareProps> = ({ item, onClick }) => {
	return (
		<div
			style={{
				backgroundColor: item.clicked
					? item.hasItem
						? 'green'
						: 'white'
					: 'gray',
				width: '50px',
				height: '50px',
				border: '1px solid black',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				cursor: 'pointer',
			}}
			onClick={onClick}
		>
			{item.clicked && item.hasItem && '😀'}
		</div>
	);
};

export default Square;
