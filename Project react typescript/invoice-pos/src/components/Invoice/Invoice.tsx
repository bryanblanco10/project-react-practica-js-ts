import { CreateInvoice } from '@/models';
import { Document, Page, StyleSheet, Text, View } from '@react-pdf/renderer';
import './invoice.css';
import { formatPrice } from '@/utils';
const styles = StyleSheet.create({
	section: { paddingTop: '5px', textAlign: 'center', marginBottom: 10 },
	section2: { paddingLeft: '5px', textAlign: 'left' },
	section3: { paddingRight: '5px', textAlign: 'left', marginTop: 10 },
	section4: {
		textAlign: 'left',
		marginTop: 20,
		marginBottom: 5,
		marginLeft: 5,
		marginRight: 5,
	},
	h1: {
		fontSize: '12px',
		lineHeight: '1.2px',
		fontFamily: 'Courier',
	},
	h2: {
		fontSize: '12px',
		lineHeight: '1.2px',
		fontFamily: 'Courier',
		textTransform: 'uppercase',
		marginBottom: 5,
		marginTop: 5,
	},
	container: {
		flexDirection: 'row',
		borderBottomWidth: 0.5,
		height: 15,
		textAlign: 'center',
		flexGrow: 1,
		fontSize: '12px',
		fontFamily: 'Courier',
		marginTop: 5,
	},
	row: {
		flexDirection: 'row',
		height: 30,
		textAlign: 'center',
		flexGrow: 1,
		fontSize: '12px',
		fontFamily: 'Courier',
		paddingLeft: 1,
	},
});

interface Props {
	sale: CreateInvoice;
}
export const Invoice = ({ sale }: Props) => {
	return (
		<Document title={sale?.nameInvoice}>
			<Page size={[302]}>
				<View style={styles?.section}>
					<Text style={styles?.h1}>Martin Tours</Text>
					<Text style={styles?.h1}>Nit. 1104873571-8</Text>
					<Text style={styles?.h1}>Tolú, Sucre</Text>
					<Text style={styles?.h1}>Cel. 304 572 4398 - 321 361 5398</Text>
				</View>
				<View style={styles.section2}>
					<Text style={styles?.h1}>Factura de venta: {sale?.uuid}</Text>
					<Text style={styles?.h1}>Fecha: {sale?.date}</Text>
				</View>
				<View style={styles.section2}>
					<Text style={styles?.h1}>Nombre: {sale?.name}</Text>
					<Text style={styles?.h1}>Celular: {sale?.cellphone}</Text>
					<Text style={styles?.h1}>
						Abono: {formatPrice(sale?.payment + '')}
					</Text>
					<Text style={styles?.h1}>Destino: {sale?.destination}</Text>
					<Text style={styles?.h1}>Guía: {sale?.guide}</Text>
				</View>

				<View style={styles?.section4}>
					<Text style={styles?.h1}>Notas</Text>
					<Text style={styles?.h1}>
						1. Para separar su tiquete debe cancelar el 50% del valor y el otro
						50% antes de zarpar.
					</Text>
					<Text style={styles?.h1}>
						2. Debe presentarse el día y hora especificados, porque la reserva
						se hace por cupos y es importante que entienda que no hacemos
						devolución de dinero.
					</Text>
					<Text style={styles?.h1}>
						3. Durante el viaje debe acatar las sugerencias del guía.
					</Text>
					<Text style={styles?.h1}>
						4. Debe utilizar los equipos de seguridad, que serán entregados por
						el personal al momento de abordar.
					</Text>
					<Text style={styles?.h1}>
						5. Durante la travesía, presentese en los sitios y a la hora
						convenidos.
					</Text>
					<Text style={styles?.h2}>
						Asegurar todos los equipos electronicos como celulares, camaras
						digitales, filmadoras, etc. Durante la travesía.
					</Text>
				</View>
			</Page>
		</Document>
	);
};
