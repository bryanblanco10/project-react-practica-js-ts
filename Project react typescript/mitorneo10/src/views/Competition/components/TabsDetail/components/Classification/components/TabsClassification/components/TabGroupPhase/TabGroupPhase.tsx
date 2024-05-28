import { TableComponent } from '@/components';

export const TabGroupPhase = () => {
	const columns = [
		{
			name: '#',
			selector: (row: { position: any }) => row.position,
			width: '30px',
		},
		{
			name: 'Grupo A',
			selector: (row: { team: any }) => row.team,
			minWidth: '200px',
			cell: (row: any) => (
				<div className='flex items-center gap-x-1'>
					<div>
						<img width='20' height='20' src={row?.image} alt='' />
					</div>
					<h6 className='font-medium text-base text-gray-700'>{row?.team}</h6>
				</div>
			),
		},
		{
			name: 'PJ',
			selector: (row: { pj: any }) => row.pj,
			width: '40px',
		},
		{
			name: 'G',
			selector: (row: { G: any }) => row.G,
			width: '40px',
		},
		{
			name: 'E',
			selector: (row: { E: any }) => row.E,
			width: '40px',
		},
		{
			name: 'P',
			selector: (row: { P: any }) => row.P,
			width: '40px',
		},
		{
			name: 'GF',
			selector: (row: { GF: any }) => row.GF,
			width: '40px',
		},
		{
			name: 'GC',
			selector: (row: { GC: any }) => row.GC,
			width: '40px',
		},
		{
			name: 'DG',
			selector: (row: { DG: any }) => row.DG,
			width: '40px',
		},
		{
			name: 'Pts',
			selector: (row: { Pts: any }) => row.Pts,
			width: '40px',
		},
	];

	const rows = [
		{
			position: '1',
			team: 'Barcelona',
			image: '/images/team2.png',
			pj: '10',
			G: '8',
			E: '1',
			P: '1',
			GF: '27',
			GC: '5',
			DG: '22',
			Pts: '25',
		},
		{
			position: '2',
			team: 'Osasuna',
			image: '/images/team1.png',
			pj: '10',
			G: '8',
			E: '1',
			P: '1',
			GF: '27',
			GC: '5',
			DG: '22',
			Pts: '25',
		},
	];
	return (
		<div>
			<TableComponent columns={columns} rows={rows} />
		</div>
	);
};
