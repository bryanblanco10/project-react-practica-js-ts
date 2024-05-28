import { CreateInvoice } from '@/models';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { Invoice } from '..';

interface Props {
	sale: CreateInvoice;
}

export const DowlandInvoice = ({ sale }: Props) => {
	return (
		<PDFDownloadLink
			document={<Invoice sale={sale} />}
			fileName={`${sale?.nameInvoice}.pdf`}
		>
			Descargar
		</PDFDownloadLink>
	);
};
