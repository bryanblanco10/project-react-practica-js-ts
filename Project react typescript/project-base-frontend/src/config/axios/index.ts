import axios from 'axios';

axios.defaults.headers.common['Content-Type'] = 'application/json';
const API_KEY = import.meta.env.VITE_API_KEY;

axios.interceptors.request.use(config => {
	let access_token = null;
	if (localStorage?.getItem('stateAuth')) {
		const stateAuth = JSON.parse(localStorage.getItem('stateAuth') || '')
			?.state;
		access_token = stateAuth?.accessToken;
	}

	if (access_token) {
		config.headers.Authorization = `Bearer ${access_token}`;
	} else {
		config.headers.appPublicKey = API_KEY;
	}

	return config;
});

axios.interceptors.response.use(
	res => res,
	err => {
		switch (err?.response?.status) {
			case 419:
				// localStorage.clear();
				// window.location.reload();
				break;

			//Server errors
			case 500:
			case 501:
			case 502:
			case 503:
			case 504:
			case 505:
			case 506:
			case 507:
			case 508:
			case 509:
			case 510:
			case 511:
				// console.log("Ocurrió un error, por favor comuníquese con su proveedor");
				break;
		}

		return Promise.reject(err.response);
	},
);

export default axios;
