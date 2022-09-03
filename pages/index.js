import Image from "next/image"
import Head from "next/head"
import Nav from "../components/Nav"
import Hero from "../components/Hero"
import Servicios from "../components/Servicios"
// import Video from "../components/Video"
import ReactPlayer from "react-player"
// import video from "../public/video/rivervid.mp4"

import {
  river1,
  river2,
  river3,
  river4,
  river5,
  river6,
} from "../public/gallery-images"

// import styles from "../styles/Home.module.css"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import { Navigation, EffectFade, Autoplay, Pagination } from "swiper"
import "swiper/css/navigation"
import "swiper/css/effect-fade"
import "swiper/css/pagination"

import swiperStyles from "../styles/Swiper.module.css"
import Footer from "../components/Footer"

const photos = [river2, river1, river5]

export default function Home() {
  return (
    <div className={swiperStyles.swiperContainer}>
      <Head>
        <title>River Audio</title>
        <meta
          name='description'
          content='Página de inicio de la empresa de DJ luz y sonido música en vivo live music cabo Cabo River Audio Los Cabos'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {/* <Nav /> */}
      <Hero />
      <Servicios />
      <div>
        <h1>Galería</h1>
        <Swiper
          navigation
          pagination={{
            clickable: true,
          }}
          effect={"fade"}
          speed={800}
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          slidesPerView={1}
          loop
          className={swiperStyles.swiper}
        >
          {photos.map((photo) => {
            const { i } = photo
            return (
              <SwiperSlide className={swiperStyles.swiperSlide}>
                <Image src={photo} layout='fill' objectFit='cover'></Image>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
      <div className={swiperStyles.videoWrapper}>
        <iframe
          src='https://www.youtube.com/embed/EuRyK_Mpc1s'
          title='YouTube video player'
          frameborder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowfullscreen
          className={swiperStyles.frame}
        ></iframe>
      </div>
      <Footer />
    </div>
  )
}
