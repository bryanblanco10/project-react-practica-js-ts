export const ItemMatch = () => {
	return (
		<div className='mt-2 flex items-center gap-x-3 w-full bg-gray-200 p-2 rounded-lg'>
			<div className='text-sm font-medium text-gray-700 flex flex-col'>
				<span>5/09/23</span>
				<span>9:30pm</span>
			</div>
			<div className='flex justify-between w-full'>
				<div className='flex flex-col gap-y-1'>
					<div className='flex w-full gap-x-1'>
						<div>
							<img width='25' height='25' src='/images/team1.png' alt='' />
						</div>
						<h6 className='font-medium text-base text-gray-700'>Osasuna</h6>
					</div>
					<div className='flex w-full gap-x-1'>
						<div>
							<img width='25' height='25' src='/images/team2.png' alt='' />
						</div>
						<h6 className='font-medium text-base text-gray-700'>Barcelona</h6>
					</div>
				</div>
				<div className=''>
					<div className='flex mb-1 gap-x-1 font-semibold text-base text-gray-700'>
						<span>1</span>
						<span>(0)</span>
					</div>
					<div className='flex gap-x-1 font-semibold text-base text-gray-700'>
						<span>2</span>
						<span>(1)</span>
					</div>
				</div>
			</div>
		</div>
	);
};
