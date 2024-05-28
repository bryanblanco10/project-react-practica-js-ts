import { FormLogin } from './components';

export const Login = () => {
	return (
		<>
			<div className='container md:mx-auto px-3 py-10 md:py-16'>
				<div className='flex items-center justify-around flex-col lg:flex-row'>
					<div className=''>
						<FormLogin />
					</div>
				</div>
			</div>
		</>
	);
};
