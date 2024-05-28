export const formatNumber = (value: string) => {
	let price = null;
	if (value.split('.')) {
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
