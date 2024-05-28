import { type FC } from "react";
import { useAuth } from "../../../../hooks";

const FormLogin: FC = () => {
	const {
		user,
    setUser,
    handleSubmit,
		isBusy,
	} = useAuth()

	const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target;
		setUser(prevState => (
			{
				...prevState,
				email: value
			}
		))
	}

	const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target;
		setUser(prevState => (
			{
				...prevState,
				password: value
			}
		))
	}
  return (
    <div className="content-fom">
			<form onSubmit={handleSubmit} className="form">
				<input type="email" name="email" value={user.email} onChange={handleChangeEmail} placeholder="Correo" />
				<input type="password" name="password" value={user.password} onChange={handleChangePassword} placeholder="" />
				<button type="submit">
					{isBusy && <span>....</span>}
					<div className="loader"></div>
					{!isBusy && <span>Iniciar sesión</span>}
				</button>
			</form>
			<a>¿Olvido la contraseña?</a>
			<button className="register">
				Registrarse
			</button>
		</div>
  );
};

export default FormLogin;
