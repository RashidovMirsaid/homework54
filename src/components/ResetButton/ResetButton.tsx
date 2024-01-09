import React from 'react';

interface ResetButtonProps {
	onReset: () => void;
}

const ResetButton: React.FC<ResetButtonProps> = ({ onReset }) => {
	return (
		<button className='ResetButton' onClick={onReset}>
			Reset
		</button>
	);
};

export default ResetButton;
