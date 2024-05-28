import React from 'react';

interface Props {
	children: string;
}

export const MessageError: React.FC<Props> = ({ children }) => {
	return (
		<p className='text-[#c94343] text-sm pl-2 text-message-error'>{children}</p>
	);
};
