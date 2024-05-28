import {
	Tabs,
	TabsHeader,
	TabsBody,
	Tab,
	TabPanel,
} from '@material-tailwind/react';
import {
	TabAssistants,
	TabClassification,
	TabGroupPhase,
	TabScorers,
} from './components';

export const TabsClassification = () => {
	const data = [
		{
			label: 'Clasificación',
			value: 'classification',
			desc: <TabClassification />,
		},
		{
			label: 'Grupos',
			value: 'groupPhase ',
			desc: <TabGroupPhase />,
		},
		{
			label: 'Goleadores',
			value: 'scorers',
			desc: <TabScorers />,
		},
		{
			label: 'Asistidores',
			value: 'assistants',
			desc: <TabAssistants />,
		},
	];

	return (
		<Tabs id='custom-animation' value='classification'>
			<TabsHeader
				className='overflow-x-auto'
				indicatorProps={{
					className: 'bg-indigo-100',
				}}
			>
				{data.map(({ label, value }) => (
					<Tab key={value} value={value}>
						{label}
					</Tab>
				))}
			</TabsHeader>
			<TabsBody
				animate={{
					initial: { y: 250 },
					mount: { y: 0 },
					unmount: { y: 250 },
				}}
			>
				{data.map(({ value, desc }) => (
					<TabPanel className='p-0' key={value} value={value}>
						{desc}
					</TabPanel>
				))}
			</TabsBody>
		</Tabs>
	);
};
