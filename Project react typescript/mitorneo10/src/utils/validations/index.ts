export const validationPhone = {
	required: { value: true, message: 'Campo requerido' },
	pattern: {
		value: /^[0-9]+$/,
		message: 'No es un número',
	},
	minLength: {
		value: 10,
		message: 'El número debe tener 10 dígitos',
	},
	maxLength: {
		value: 10,
		message: 'El número debe tener 10 dígitos',
	},
};

export const validationText = {
	required: { value: true, message: 'Campo requerido' },
};

export const validationEmail = {
	required: { value: true, message: 'Campo requerido' },
	pattern: {
		value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
		message: 'Correo no valido',
	},
};

export const validationPassword = {
	required: { value: true, message: 'Campo requerido' },
	minLength: {
		value: 8,
		message: 'Mínimo 8 caracteres',
	},
	pattern: {
		value:
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~])[A-Za-z\d!@#$%^&*()_+{}\[\]:;<>,.?~]{8,}$/,
		message:
			'Elige una contraseña más segura. Prueba con una combinación de letras, números y símbolos',
	},
};
