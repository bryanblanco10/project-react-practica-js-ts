import { Card, CardBody, Typography } from '@material-tailwind/react';
import { Indicator, Payment, SaleByUser } from '../../hooks';
import { formatPrice } from '@/utils';
interface Props {
	indicator: Indicator;
}
export const CardList = (indicator: Props) => {
	return (
		<Card className='mt-6 w-[350px] md:w-auto text-center p-0 min-h-[143px]'>
			<CardBody className='p-2'>
				<Typography>{indicator.indicator.text}</Typography>
				{indicator?.indicator?.name === 'totalPayments' && (
					<table className='w-full min-w-max table-auto text-left mt-1'>
						<thead>
							<tr>
								<th className='border-b border-blue-gray-100 bg-blue-gray-50 p-2'>
									<Typography
										variant='small'
										color='blue-gray'
										className='font-normal leading-none opacity-70'
									>
										Método de pago
									</Typography>
								</th>
								<th className='border-b border-blue-gray-100 bg-blue-gray-50 p-2'>
									<Typography
										variant='small'
										color='blue-gray'
										className='font-normal leading-none opacity-70'
									>
										Total
									</Typography>
								</th>
							</tr>
						</thead>
						<tbody>
							{Array.isArray(indicator.indicator.value) && (
								<>
									{indicator.indicator.value.length === 0 && (
										<tr>
											<td>Sin registros</td>
										</tr>
									)}
									{indicator.indicator.value?.map(
										(value: Payment | SaleByUser, index: number) => {
											const payment = value as Payment;
											return (
												<tr className='even:bg-blue-gray-50/50' key={index}>
													<td className='p-2'>
														<Typography
															variant='small'
															color='blue-gray'
															className='font-normal'
														>
															{payment.payment_method}
														</Typography>
													</td>
													<td className='p-2'>
														<Typography
															variant='small'
															color='blue-gray'
															className='font-normal'
														>
															{formatPrice(payment.total + '')}
														</Typography>
													</td>
												</tr>
											);
										}
									)}
								</>
							)}
						</tbody>
					</table>
				)}
				
				{indicator?.indicator?.name === 'totalSalesByUser' && (
					<table className='w-full min-w-max table-auto text-left mt-1'>
						<thead>
							<tr>
								<th className='border-b border-blue-gray-100 bg-blue-gray-50 p-2'>
									<Typography
										variant='small'
										color='blue-gray'
										className='font-normal leading-none opacity-70'
									>
										Usuario
									</Typography>
								</th>
								<th className='border-b border-blue-gray-100 bg-blue-gray-50 p-2'>
									<Typography
										variant='small'
										color='blue-gray'
										className='font-normal leading-none opacity-70'
									>
										Total
									</Typography>
								</th>
							</tr>
						</thead>
						<tbody>
							{Array.isArray(indicator.indicator.value) && (
								<>
									{indicator.indicator.value.length === 0 && (
										<tr>
											<td>Sin registros</td>
										</tr>
									)}
									{indicator.indicator.value?.map(
										(value: SaleByUser | Payment, index: number) => {
											const item = value as SaleByUser;
											return (
												<tr className='even:bg-blue-gray-50/50' key={index}>
													<td className='p-2'>
														<Typography
															variant='small'
															color='blue-gray'
															className='font-normal'
														>
															{item.name}
														</Typography>
													</td>
													<td className='p-2'>
														<Typography
															variant='small'
															color='blue-gray'
															className='font-normal'
														>
															{formatPrice(item.total + '')}
														</Typography>
													</td>
												</tr>
											);
										}
									)}
								</>
							)}
						</tbody>
					</table>
				)}
			</CardBody>
		</Card>
	);
};
