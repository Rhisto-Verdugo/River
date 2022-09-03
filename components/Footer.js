import footerStyles from "../styles/Footer.module.css"
import { FaFacebookSquare } from "react-icons/fa"
import { BsWhatsapp } from "react-icons/bs"

const Footer = () => {
  const url =
    "https://api.whatsapp.com/send?phone=526241915600&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n"
  return (
    <div className={footerStyles.footer}>
      <h1>Contacto</h1>
      <h2>
        Teléfono: <span className={footerStyles.white}> 624 191 56 00</span>
      </h2>
      <h2>
        Correo:{" "}
        <span className={footerStyles.white}> riverloscabos@gmail.com</span>
      </h2>
      <h2>
        Facebook:{" "}
        <span className={footerStyles.blue}>
          <a href='https://www.facebook.com/riveraudiocabo'>
            {" "}
            River Audio Los Cabos
          </a>
        </span>
      </h2>
      <span className={footerStyles.icon}>
        <a href='https://www.facebook.com/riveraudiocabo'>
          <FaFacebookSquare className={footerStyles.face} />
        </a>
        <a href={url} target='blank'>
          <BsWhatsapp className={footerStyles.whats} />
        </a>
      </span>

      <p>Todos los derechos reservados © River Audio Los Cabos 2022 </p>
    </div>
  )
}
export default Footer
