import { CardBase } from '@/components';
import { ModalInvoice } from '@/components/ModalInvoice';
import { CreateInvoice } from '@/models';
import { useState } from 'react';
import { FormInvoice } from './components';

export const Home = () => {
	const [openInvoice, setOpenInvoice] = useState<boolean>(false);
	const [sale, setSale] = useState<CreateInvoice>({
		name: '',
		cellphone: '',
		destination: '',
		guide: '',
		payment: '',
		uuid: 0,
		date: '',
		nameInvoice: '',
	});

	const handleOpen = () => {
		setOpenInvoice(!openInvoice);
	};

	const handleChange = (sale: CreateInvoice) => {
		setSale(sale);
		handleOpen();
	};

	const handlePrint = () => {
		const contenido = document.getElementById('container-print')?.innerHTML;
		const ventanaImpresion = window.open('', '_blank');
		ventanaImpresion?.document.write(
			'<!DOCTYPE html><html lang="es"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Contenido Imprimible</title></head><body>' +
				contenido +
				'</body></html>'
		);
		ventanaImpresion?.document.close();
		ventanaImpresion?.print();

		// Verificar el estado de la ventana después de 3 segundos
		// setTimeout(function () {
		// 	if (ventanaImpresion && !ventanaImpresion.closed) {
		// 		ventanaImpresion.close();
		// 	}
		// }, 1000);
	};
	return (
		<>
			<ModalInvoice
				handleOpen={handleOpen}
				openInvoice={openInvoice}
				sale={sale}
			/>
			<div className='py-10 px-4 md:px-10 lg:px-80' id='container-print'>
			<button onClick={handlePrint}>Imprimir</button>
				<CardBase
					title='Crear Factura Martin Tours'
					subtitle='Generar comprobante'
				>
					<FormInvoice handleChange={handleChange} />
				</CardBase>
			</div>
		</>
	);
};
