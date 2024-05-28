export const useDataGlobal = () => {
	const typeStatus = [
		{
			value: '1',
			label: 'Si',
		},
		{
			value: '2',
			label: 'No',
		},
	];

	const typeGenders = [
		{
			value: 'Femenino',
			label: 'Femenino',
		},
		{
			value: 'Masculino',
			label: 'Masculino',
		},
		{
			value: 'Otro',
			label: 'Otro',
		},
	];

	const typeIdentifications = [
		{
			value: 'Cédula de Ciudadanía',
			label: 'Cédula de Ciudadanía',
		},
		{
			value: 'Cédula de Extranjería',
			label: 'Cédula de Extranjería',
		},
		{
			value: 'Pasaporte',
			label: 'Pasaporte',
		},
	];

	const paymentMethods = [
		{
			value: 'Efectivo',
			label: 'Efectivo',
		},
		{
			value: 'Bancolombia',
			label: 'Bancolombia',
		},
		{
			value: 'Bancolombia ahorro a la mano',
			label: 'Bancolombia ahorro a la mano',
		},
		{
			value: 'Daviplata',
			label: 'Daviplata',
		},
		{
			value: 'Nequi',
			label: 'Nequi',
		},
		{
			value: 'Banco Davivienda',
			label: 'Banco Davivienda',
		},
		{
			value: 'Banco Agrario',
			label: 'Banco Agrario',
		},
		{
			value: 'Banco AV Villas',
			label: 'Banco AV Villas',
		},
		{
			value: 'Banco BBVA Colombia S.A',
			label: 'Banco BBVA C olombia S.A',
		},
		{
			value: 'Banco de Bogota',
			label: 'Banco de Bogota',
		},
		{
			value: 'Banco de Occidente',
			label: 'Banco de Occidente',
		},
		{
			value: 'Banco Popular',
			label: 'Banco Popular',
		},
		{
			value: 'Sin método de pago',
			label: 'Sin método de pago',
		},
		{
			value: 'Mes Gratis',
			label: 'Mes Gratis',
		}
	];

	return {
		typeStatus,
		typeIdentifications,
		typeGenders,
		paymentMethods,
	};
};
