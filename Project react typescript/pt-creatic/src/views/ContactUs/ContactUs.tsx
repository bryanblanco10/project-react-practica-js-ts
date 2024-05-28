import { type FC } from "react";
import { FollowUs } from "../../components/FollowUs";
import { logo } from "../../utilities/images"
const ContactUs: FC = () => {
	return (
		<section className='section-app section-app-custom'>
			<div className="content content-3 content-custom">
				<div className="content-mision">
					<p>
						Vereda el Cofre, Parcelación la <br />
						Margarita, Finca Santa Maria, <br />
						Casa 1, Popayán, Cauca 190002, <br />
						CO
					</p>
					<p>
						<span>comunicaciones@cdtcreatic.com</span>
					</p>
				</div>
				<div className="content-logo">
					<img src={logo} alt="creatic" />
				</div>
			</div>
			<FollowUs />
		</section>
	);
};

export default ContactUs;
