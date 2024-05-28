export interface Columns {
	name: string;
	selector?: (row: any) => any;
	sortable?: boolean;
	width?: string;
	button?: boolean;
	cell?: (row: any) => JSX.Element;
}

export interface Table {
	title?: string;
	rows: any[];
}
