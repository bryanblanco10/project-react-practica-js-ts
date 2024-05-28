import { moduleActions } from '@/utils';

interface Props {
	module: string;
}
export const useModuleActions = ({ module }: Props) => {
	const { actions, headers } = moduleActions[module];

	return {
		actions,
		headers,
	};
};
