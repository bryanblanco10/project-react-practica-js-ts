import { type FC } from "react";
import { FollowUs } from "../../components/FollowUs";
import {
	mapa,
	popayan1,
	popayan2,
	popayan3
} from "../../utilities/images";
const Home: FC = () => {
	return (
		<section className='section-app'>
			<div className='content mapa'>
				<img src={mapa} alt="mapa-del-departamento-del-cauca" />
			</div>
			<div className='content-2'>
				<div className='content imgs'>
					<div className='img-first'>
						<img src={popayan1} alt="popayan-tierra-bonita" />
					</div>
					<div className='img-second'>
						<img src={popayan2}alt="popayan-tierra-bonita" />
						<img src={popayan3} alt="popayan-tierra-bonita" />
					</div>
				</div>
				<FollowUs />
			</div>
		</section>
	);
};

export default Home;
