
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { useState, useEffect } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface Props {
	handleRecords: (date: Date | string) => void;
}
export const DatePickerComponent  = ({ handleRecords }: Props) => {
	const [startDate, setStartDate] = useState<Date | null>(new Date());
  
  const onChange = (date: Date | null) => {
		if (date) {
			setStartDate(date);
			handleRecords(formatDate(date))
		}
	};

	const formatDate = (date: Date) => {
		return format(date, 'yyyy-MM-dd');
	};

	useEffect(() => {
		registerLocale('es-CO', es);
	}, []);

	return (
		<DatePicker
			selected={startDate}
			dateFormat='dd-MM-yyyy'
			onChange={date => onChange(date)}
			locale={'es-CO'}
			showIcon
			toggleCalendarOnIconClick
		/>
	);
};
