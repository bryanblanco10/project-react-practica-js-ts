import { TableComponent } from '@/components';

export const TabAssistants = () => {
	const columns = [
		{
			name: 'Jugador',
			selector: (row: { player: any }) => row.player,
			minWidth: '200px',
		},
		{
			name: 'Equipo',
			selector: (row: { team: any }) => row.team,
			minWidth: '200px',
		},
		{
			name: 'A',
			selector: (row: { G: any }) => row.G,
			width: '40px',
		},
	];

	const rows = [
		{
			player: 'Lionel Messi',
			team: 'Barcelona',
			G: '91',
		},
		{
			player: 'Bryan Blanco',
			team: 'Barcelona',
			G: '60',
		},
	];
	return (
		<div>
			<TableComponent columns={columns} rows={rows} />
		</div>
	);
};
