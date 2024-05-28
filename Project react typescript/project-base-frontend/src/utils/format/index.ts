export const formatNumber = (value: string | null): string | null => {
	let price = null;
	if (value?.split('.')) {
		value = value.split('.').join('').replace(/\D/g, '');
	}

	const formatterPeso = new Intl.NumberFormat('es-CO', {
		minimumFractionDigits: 0,
	});

	price = value ? formatterPeso.format(Number(value)) : null;

	return price;
};

export const formatPrice = (value: string) => {
	let price = null;

	if (value.split('.')) {
		value = value.split('.').join('').replace(/\D/g, '');
	}

	const formatterPeso = new Intl.NumberFormat('es-CO', {
		style: 'currency',
		currency: 'COP',
		minimumFractionDigits: 0,
	});

	price = value ? formatterPeso.format(Number(value)) : null;

	return price;
};

export const formatDateTime = (date: string) => {
	const dateTime = new Date(date).toISOString();
	const dateTimeSplit = dateTime.split("T");

	const date2 = dateTimeSplit[0];
	const time = dateTimeSplit[1].split(".")[0];

	return `${date2} ${time}`
}