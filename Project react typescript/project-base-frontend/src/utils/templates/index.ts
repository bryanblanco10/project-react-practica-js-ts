import { SaleDetail } from '@/models';
import { formatPrice } from '../format';

export const templateTicket = (sale: SaleDetail | undefined) => {
	return `
  <!DOCTYPE html>
    <html lang="es">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Print Ticket</title>
        <style>
          body, html {
            width: 200px;
            height: 210px;
            padding: 0;
            margin: 0;
            font-family: Geneva, sans-serif !important;
          }
          .container {
            width: 200px;
            height: 210px;
            padding: 5px;
            padding-bottom: 0;
            text-align: center;
          }
          .container h1 {
            font-size: 11px;
            margin-bottom: 2px;
            margin-top: 0;
          }
          .container hr {
            border: 0;
            border-bottom: 1px solid gray;
            padding-top: 0px;
            padding-bottom: 0px;
            border-style: dotted;
          }
          .container .content {
            display: flex;
            align-items: center;
          }
          .container .content h1 {
            font-weight: 400 !important;
            margin-bottom: 0;
          }
          .container .content h2 {
            font-size: 11px;
            margin-bottom: 0;
            margin-top: 0;
            margin-left: 3px;
          }
          .margin-right {
            margin-right: 8px;
          }
          .margin-bottom {
            margin-bottom: 3px;
          }
        </style>
      </head>
      <body>
          <div class="container">
            <h1>${sale?.enterprise?.name}</h1>
            <h1>Nit. ${sale?.enterprise?.nit}</h1>
            <h1>${sale?.enterprise?.neighborhood}, ${sale?.enterprise?.municipality?.name}, ${sale?.enterprise?.municipality?.department?.name}</h1>
            <h1>${sale?.enterprise?.address}</h1>
            <h1>Cel: ${sale?.enterprise?.address}</h1>
            <h1>Fecha: ${sale?.currentDate}</h1>
            <hr></hr>
            <div class="content margin-bottom">
              <h1>Placa:</h1>
              <h2>${sale?.placa}</h2>
            </div>
            <div class="content margin-bottom">
              <h1>Vehículo:</h1>
              <h2>${sale?.typeVehicle}</h2>
            </div>
            <div class="content margin-bottom">
              <h1>Marca:</h1>
              <h2>${sale?.brand}</h2>
            </div>
            <div class="content margin-bottom">
              <h1>Modelo:</h1>
              <h2>${sale?.model}</h2>
            </div>
            <div class="content margin-bottom">
              <h1>Tarifa:</h1>
              <h2>${sale?.typeRate} ${sale?.ratePrice ? formatPrice(sale?.ratePrice) : ''}</h2>
            </div>
            <div class="content margin-bottom">
              <h1>Fracción:</h1>
              <h2>${
								sale?.isFraction
									? `${formatPrice(sale?.priceFraction)}`
									: 'No aplica'
							}</h2>
            </div>
            <div class="content margin-bottom">
              <h1>Ingreso:</h1>
              <h2>${sale?.dateTimeEntry}</h2>
            </div>
            <div class="content">
              <h1>Empleado:</h1>
              <h2>${sale?.userCheckIn?.substring(0, 20)}...</h2>
            </div>
          </div>
      </body>
    </html>
		`;
};

export const templateTicketCheckOut = (sale: SaleDetail | undefined) => {
	return `
  <!DOCTYPE html>
    <html lang="es">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Print Ticket</title>
        <style>
          body, html {
            width: 200px;
            height: 210px;
            padding: 0;
            margin: 0;
            font-family: Geneva, sans-serif !important;
          }
          .container {
            width: 200px;
            height: 210px;
            padding: 5px;
            padding-bottom: 0;
            text-align: center;
          }
          .container h1 {
            font-size: 11px;
            margin-bottom: 2px;
            margin-top: 0;
          }
          .container hr {
            border: 0;
            border-bottom: 1px solid gray;
            padding-top: 0px;
            padding-bottom: 0px;
            border-style: dotted;
          }
          .container .content {
            display: flex;
            align-items: center;
          }
          .container .content h1 {
            font-weight: 400 !important;
            margin-bottom: 0;
          }
          .container .content h2 {
            font-size: 11px;
            margin-bottom: 0;
            margin-top: 0;
            margin-left: 3px;
          }
          .margin-right {
            margin-right: 8px;
          }
          .margin-bottom {
            margin-bottom: 3px;
          }
        </style>
      </head>
      <body>
          <div class="container">
            <h1>${sale?.enterprise?.name}</h1>
            <h1>Nit. ${sale?.enterprise?.nit}</h1>
            <h1>${sale?.enterprise?.neighborhood}, ${sale?.enterprise?.municipality?.name}, ${sale?.enterprise?.municipality?.department?.name}</h1>
            <h1>${sale?.enterprise?.address}</h1>
            <h1>Cel: ${sale?.enterprise?.address}</h1>
            <h1>Fecha: ${sale?.currentDate}</h1>
            <hr></hr>
            <div class="content margin-bottom">
              <h1>Placa:</h1>
              <h2>${sale?.placa}</h2>
            </div>
            <div class="content margin-bottom">
              <h1>Vehículo:</h1>
              <h2>${sale?.typeVehicle}</h2>
            </div>
            <div class="content margin-bottom">
              <h1>Tarifa:</h1>
              <h2>${sale?.typeRate} ${sale?.ratePrice ? formatPrice(sale?.ratePrice) : ''}</h2>
            </div>
            <div class="content margin-bottom">
              <h1>Fracción:</h1>
              <h2>${
								sale?.isFraction
									? `${formatPrice(sale?.priceFraction)}`
									: 'No aplica'
							}</h2>
            </div>
            <div class="content margin-bottom">
              <h1>Ingreso:</h1>
              <h2>${sale?.dateTimeEntry}</h2>
            </div>
            <div class="content margin-bottom">
              <h1>Salida:</h1>
              <h2>${sale?.dateTimeDeparture}</h2>
            </div>
            <div class="content margin-bottom">
              <h1>Tiempo:</h1>
              <h2>${sale?.time}</h2>
            </div>
            <hr></hr>
            <div class="content margin-bottom">
              <h1>N° Fracciones:</h1>
              <h2>${sale?.isFraction
                ? `${sale?.fraction}`
                : 'No aplica'}</h2>
            </div>
            <div class="content margin-bottom">
              <h1>Método de Pago:</h1>
              <h2>${sale?.payment_method?.substring(0, 15)}...</h2>
            </div>
            <div class="content margin-bottom">
              <h1>Total Pagado:</h1>
              <h2>${sale?.total ? formatPrice(sale?.total) : ''}</h2>
            </div>
            <div class="content">
              <h1>Empleado:</h1>
              <h2>${sale?.userCheckOut?.substring(0, 20)}...</h2>
            </div>
          </div>
      </body>
    </html>
		`;
};

export const handlePrint = (sale: SaleDetail | undefined, type: number) => {
	const content = type === 1 ? templateTicket(sale) : templateTicketCheckOut(sale);
	const windowPrint = window.open('', '_blank');
	windowPrint?.document.write(content);
	windowPrint?.document.close();
	windowPrint?.print();

  if (windowPrint && !windowPrint.closed) {
    windowPrint.close();
  }
};
