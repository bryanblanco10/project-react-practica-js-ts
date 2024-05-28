export interface Columns {
	name: string;
	selector: (row: any) => any;
	sortable?: boolean;
}

export interface Table {
	title?: string;
	rows: any[];
}
