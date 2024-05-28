import { Invoice } from '@/components/Invoice';
import { CreateInvoice } from '@/models';
import { XMarkIcon } from '@heroicons/react/24/solid';
import {
	Button,
	Dialog,
	DialogBody,
	DialogHeader,
	IconButton,
} from '@material-tailwind/react';
import { PDFViewer } from '@react-pdf/renderer';
import { DowlandInvoice } from '..';

interface Props {
	handleOpen: () => void;
	openInvoice: boolean;
	sale: CreateInvoice;
}
export const ModalInvoice = ({ handleOpen, openInvoice, sale }: Props) => {
	return (
		<Dialog
			open={openInvoice}
			handler={() => {}}
			animate={{
				mount: { scale: 1, y: 0 },
				unmount: { scale: 0.9, y: -100 },
			}}
		>
			<DialogHeader className='flex justify-end p-2'>
				<div>
					<IconButton
						className='rounded-full w-7 h-7 outline-none'
						onClick={handleOpen}
					>
						<XMarkIcon className='h-5 w-5' />
					</IconButton>
				</div>
			</DialogHeader>
			<DialogBody className='p-0'>
				<div className='hidden lg:flex'>
					<PDFViewer style={{ width: '100%', height: '500px' }}>
						<Invoice sale={sale} />
					</PDFViewer>
				</div>
				<div className='flex justify-center mb-10'>
					<Button className='block lg:hidden' color='blue' onClick={handleOpen}>
						<DowlandInvoice sale={sale} />
					</Button>
				</div>
			</DialogBody>
		</Dialog>
	);
};
