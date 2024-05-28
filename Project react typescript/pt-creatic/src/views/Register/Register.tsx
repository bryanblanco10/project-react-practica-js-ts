import { type FC } from "react";
import { FollowUs } from "../../components/FollowUs";
import { popayan2, popayan3 } from "../../utilities/images"
import { FormLogin } from "./components/FormLogin";
const Register: FC = () => {
	return (
		<section className='section-app'>
			<div className="content content-3 content-custom mapa">
				<FormLogin />
			</div>
			<div className='content-2'>
				<div className='content imgs-register'>
					<h1>Contenido multimedia <br /> muy llamativo</h1>
					<div className='img-first'>
						<img src={popayan2} alt="popayan-tierra-bonita" />
					</div>
					<div className='img-first'>
						<img src={popayan3} alt="popayan-tierra-bonita" />
					</div>
				</div>
				<FollowUs />
			</div>
		</section>
	);
};

export default Register;
