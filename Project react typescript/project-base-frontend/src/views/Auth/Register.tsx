import { FormRegister } from './components';

export const Register = () => {
	return (
		<>
			<div className='container md:mx-auto px-3 py-10 md:py-16'>
				<div className='flex items-center justify-around flex-col lg:flex-row'>
					<div className='justify-center flex-col'>
						<div className='flex justify-center items-center mb-4 lg:mb-8 gap-x-3'>
							<h1 className='text-2xl md:text-5xl font-medium'>Bienvenido a</h1>
							<h1 className='text-logo text-2xl md:text-5xl font-black py-1.5 px-1.5'>
								HappyCash
							</h1>
						</div>
						<div className='justify-center mb-8 hidden lg:flex'>
							<img
								src='/images/happybig.png'
								alt='happycash'
								className=''
								width='350'
								height='350'
							/>
						</div>
						<div className='flex justify-center mb-10 lg:mb-0'>
							<h1 className='text-2xl md:text-3xl font-normal  md:font-semibold'>
								Feliz Comprando, Feliz Ganando
							</h1>
						</div>
					</div>
					<div className=''>
						<FormRegister />
					</div>
				</div>
			</div>
		</>
	);
};
