import React from 'react';
import {
	Tabs,
	TabsHeader,
	TabsBody,
	Tab,
	TabPanel,
} from '@material-tailwind/react';
import { Classification, Matches, Results } from './components';

export const TabsDetail = () => {
	const [activeTab, setActiveTab] = React.useState('matches');
	const data = [
		{
			label: 'Partidos',
			value: 'matches',
			desc: <Matches />,
		},
		{
			label: 'Resultados',
			value: 'results',
			desc: <Results />,
		},
		{
			label: 'Clasificación',
			value: 'vue',
			desc: <Classification />,
		},
	];
	return (
		<Tabs value={activeTab}>
			<TabsHeader
				className='rounded-none border-b border-blue-gray-50 bg-transparent p-0'
				indicatorProps={{
					className:
						'bg-transparent border-b-2 border-gray-900 shadow-none rounded-none',
				}}
			>
				{data.map(({ label, value }) => (
					<Tab
						key={value}
						value={value}
						onClick={() => setActiveTab(value)}
						className={activeTab === value ? 'text-gray-900' : ''}
					>
						{label}
					</Tab>
				))}
			</TabsHeader>
			<TabsBody>
				{data.map(({ value, desc }) => (
					<TabPanel className='p-0' key={value} value={value}>
						{desc}
					</TabPanel>
				))}
			</TabsBody>
		</Tabs>
	);
};
