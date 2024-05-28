const key = 'indicators';

export interface Payment {
	payment_method: string;
	total: string | number;
}

export interface SaleByUser {
	uuid: string;
	name: string;
	total: string | number;
}

export interface Indicator {
	name: string;
	value: number | string | Payment[] | SaleByUser[] | null;
	icon?: string | null;
	text?: string;
  isTable?: boolean;
	isAdmin?: boolean;
	date?: string | null;
}

const texts: {
  [key: string]: {
    name: string;
  };
} = {
	totalSales: {
		name: 'Dinero recibido',
	},
	totalsVehiclesExit: {
		name: 'Total salidas',
	},
	totalVehicles: {
		name: 'Total vehículos',
	},
	totalMotorcycles: {
		name: 'Total motos',
	},
	totalCarts: {
		name: 'Total carros',
	},
	totalPayments: {
		name: 'Listado de pagos',
	},
	totalSalesByUser: {
		name: 'Dinero recibido por empleado',
	},
	totalSalesMonth: {
		name: 'Total',
	}
};

const icons: {
  [key: string]: {
    icon: string | null;
  };
} = {
	totalSales: {
		icon: '/images/dollar.png',
	},
	totalSalesMonth: {
		icon: '/images/moneytotal.png',
	},
	totalsVehiclesExit: {
		icon: '/images/exit.png',
	},
	totalPayments: {
		icon: null,
	},
	totalVehicles: {
		icon: '/images/vehicles.png',
	},
	totalMotorcycles: {
		icon: '/images/motorbike.png',
	},
	totalCarts: {
		icon: '/images/car.png',
	},
	totalSalesByUser: {
		icon: null,
	}
};

// export const useIndicators = () => {
// 	const indicators1: Indicator[] = [];
// 	const indicators2: Indicator[] = [];
// 	const [date, setDate] = useState<string | Date>(format(new Date(), 'yyyy-MM-dd'));
// 	const { validationStatusError } = useValidationStatusError();

// 	const { data, refetch, isLoading, isError, error } = useQuery(
// 		[key, date],
// 		() => getIndicators(date),
// 		{
// 			retry: 2,
// 		}
// 	);


// 	const handleRecords  = (date: string | Date) => {
// 		setDate(date);
// 	}
// 	useEffect(() => {
// 		if (date !== '' && date !== undefined) {
// 			refetch();
// 		}
// 	}, [date]);

// 	useEffect(() => {
// 		if (isError && error) {
// 			const { data } = error as Error
// 			validationStatusError(data.status)
// 		}
// 	}, [error]);

// 	if (data) {
// 		data.indicators1.forEach((indicator: Indicator) => {
// 			indicators1.push({
// 				...indicator,
//         value: indicator.name === 'totalSales' || indicator.name === 'totalSalesMonth' ? formatPrice(indicator.value + '') : indicator.value,
// 				icon: icons[indicator.name]?.icon,
// 				text: texts[indicator.name]?.name,
// 				isTable: indicator.name === 'totalPayments' || indicator.name === 'totalSalesByUser' ? true : false,
// 				isAdmin: data?.isAdmin,
// 				date: indicator?.date ? indicator?.date : null
// 			});
// 		});
//     data.indicators2.forEach((indicator: Indicator) => {
// 			indicators2.push({
// 				...indicator,
// 				icon: icons[indicator.name]?.icon,
// 				text: texts[indicator.name]?.name,
//         isTable: false,
// 				isAdmin: data?.isAdmin
// 			});
// 		});
// 	}

// 	return {
// 		indicators1,
//     indicators2,
// 		loadIndicator: handleRecords,
// 		isLoadingIndicator: isLoading,
// 		isError,
// 	};
// };
