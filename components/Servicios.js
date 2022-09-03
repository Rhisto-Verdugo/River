import servStyles from "../styles/Servicios.module.css"
import Image from "next/image"
import audio from "../public/img/audio.jpg"
import wedding from "../public/img/wedding.jpg"
import music from "../public/img/musicc.jpg"
import arq from "../public/img/arq.jpg"
import { BsWhatsapp } from "react-icons/bs"

const Servicios = () => {
  const url =
    "https://api.whatsapp.com/send?phone=6241915600&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n"
  return (
    <div className={servStyles.servWrapper}>
      <h1>Sobre Nosotros</h1>
      <p className={servStyles.sobreNosotros}>
        Somos un grupo de expertos en el ámbito audiovisual, comprometidos a
        proveer servicios de excelencia a todo tipo de eventos en el área de Los
        Cabos, Baja California Sur.
      </p>
      <span>
        <a href={url} target='blank' className={servStyles.whats}>
          <BsWhatsapp />
        </a>
        <a href={url} target='blank' className={servStyles.whatsText}>
          Enviar Mensaje
        </a>
      </span>
      <h1>Nuestros servicios</h1>
      <div className={servStyles.servicios}>
        <div>
          <h2>Audio e Iluminación (DJ)</h2>
          <Image src={audio}></Image>
          <p>
            Eleva tu evento a otro nivel con nuestro servicio de luz y sonido,
            para todo tipo de eventos
          </p>
        </div>
        <div>
          <h2>Fotografía y video</h2>
          <Image src={wedding}></Image>
          <p>Capturamos momentos inolvidables que te acompañarán siempre</p>
        </div>
        <div>
          <h2>Música en vivo</h2>
          <Image src={music}></Image>
          <p>
            Da un toque especial a tu evento con música en vivo. Instrumentos:
            Violín, piano, guitarra, violonchelo
          </p>
        </div>
        <div>
          <h2>Iluminación arquitectónica</h2>
          <Image src={arq}></Image>
          <p>
            Ilumina el espacio de tu evento, destaca zonas u objetos específicos
            con los colores de tu elección
          </p>
        </div>
      </div>
    </div>
  )
}
export default Servicios
