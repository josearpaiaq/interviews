import { Accordion } from "../../components/accordion/Accordion";

export default function App() {
  return (
    <div>
      <h2>FAQs</h2>
      <Accordion multiple>
        <Accordion.Item value="item-1">
          <Accordion.Trigger>¿Quienes somos?</Accordion.Trigger>
          <Accordion.Content>
            Somos un grupo de personas que se especializan en el desarrollo de
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item value="item-2">
          <Accordion.Trigger>
            ¿Que ventajas tiene comprar con nosotros?
          </Accordion.Trigger>
          <Accordion.Content>
            Tenemos los mejores precios del mercado, además de una atención al
            cliente de primera.
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item value="item-3">
          <Accordion.Trigger>¿Donde se encuentran?</Accordion.Trigger>
          <Accordion.Content>
            {/* Description of a fictional company on a fictional planet on a fictional moon with fictional employees */}
            Estamos en la Tierra 999, en un planeta muy lejano al sistema solar
            y en una luna de la planeta. Somos una compañía de tecnología que se
            especializa en el desarrollo de software interplanetario que se
            especializa en el desarrollo de software para naves espaciales con
            el fin de facilitar la vida humana en el espacio y en otros
            planetas. Nuestra princial objetivo es ayudar a los humanos a
            alcanzar sus metas espaciales.
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
