import { type FC } from "react";
import { FollowUs } from "../../components/FollowUs";

const AboutUs: FC = () => {
  return (
    <section className="section-app section-app-custom">
      <div className="content content-3">
        <div className="content-mision">
          <h1>Misión</h1>
          <p>
            La misión define el propósito de la existencia de la empresa y lo{" "}
            <br />
            que la direfencia de las demás. En otras palabras, tiene que ver con{" "}
            <br />
            la <span>propuesta de valor</span> de un negocio.
          </p>
        </div>
        <div className="content-mision">
          <h1>Visión</h1>
          <p>
            La visión es el destino al que una empresa quiere llegar. En este{" "}
            <br />
            sentido, estable los parámetros para la toma de decisiones de una{" "}
            <br />
            empresa, las inversiones necesarías y la forma de definir
            estrategias.
          </p>
        </div>
      </div>
      <FollowUs />
    </section>
  );
};

export default AboutUs;
