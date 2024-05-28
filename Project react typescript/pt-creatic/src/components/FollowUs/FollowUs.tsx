import { type FC } from "react";
import { facebook, instagram, ticktock } from "../../utilities/images";

const FollowUs: FC = () => {
  return (
    <div className="content follow-us">
      <p>Síguenos en: </p>
      <div className="content-iconos">
        <img src={facebook} alt="facebook-creatic" />
        <img src={instagram} alt="instagram-creatic" />
        <img src={ticktock} alt="ticktock-creatic" />
      </div>
    </div>
  );
};

export default FollowUs;
