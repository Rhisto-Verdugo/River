import heroImg from "../public/img/heroC.jpg"
import Image from "next/image"
import heroStyles from "../styles/Hero.module.css"

const Hero = () => {
  return (
    <div className={heroStyles.hero}>
      <div>
        <div className={heroStyles.heroImgWrapper}>
          <Image src={heroImg} layout='fill' objectFit='cover'></Image>
        </div>
      </div>
    </div>
  )
}
export default Hero
