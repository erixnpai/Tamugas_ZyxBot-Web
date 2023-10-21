import img from "../Components/img";
import { ConsultasHome } from "../Components/ConsultasHome";
import { RegistroHome } from "../Components/RegistroHome";
import { Navbar } from "../Components/Navbar";

export const Home = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>

      {/* Primer sección Bienvenida*/}
      <section
        id="Bienvenida"
        className="bg-gradient-to-r from-rose-100 via-white to-white py-16"
      >
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
          <div className="w-full md:w-1/2 md:mr-8 ml-12">
            <h1 className="text-6xl sm:text-9xl font-raj bg-gradient-to-r from-blue-950 via-blue-900 to-purple-600 text-transparent bg-clip-text mb-8">
              ZyxBot
            </h1>
            <h2 className="text-2xl md:text-5xl font-bold font-mont mb-4">
              ¡Bienvenidos a ZyxBot!
            </h2>
            <p className="text-[13px] font-popp mb-8">
              ¿Buscas respuestas a tus preguntas sobre universidades y programas
              académicos en Nicaragua? ZyxBot está aquí para ayudarte. Nuestra
              inteligencia artificial potenciada te proporcionará información
              precisa y relevante de manera eficiente. Ya sea que estés buscando
              tu primera experiencia universitaria o explorando opciones para
              continuar tu educación, ZyxBot es tu compañero en este viaje
              educativo.
            </p>
            <a
              href="/chat"
              className="bg-gradient-to-r from-[#0C0076] via-blue-900 to-[#0061BF] text-white text-sm sm:text-xl px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out"
            >
              IR AL CHAT
            </a>
          </div>
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <img
              src={img.img_1}
              alt="Imagen de ejemplo"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Segunda sección Chat En Vivo*/}
      <section className="bg-gradient-to-r from-rose-100 via-white to-white py-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
          <div className="w-full md:w-1/2 md:ml-12 text-center md:text-right">
            <h2 className="text-2xl md:text-5xl font-bold font-mont mb-4">
              Chat en vivo: la forma más rápida y eficiente de ayudarte
            </h2>
            <p className="font-popp mb-8">
              ¿Qué mejor manera de ofrecerles ayuda que a través de un breve
              chat en nuestro sitio web? Es mucho más rápido que el correo
              electrónico y mucho más eficiente que el teléfono. No hagamos que
              nuestros usuarios esperen. Con ZyxBot, obtendrás respuestas
              instantáneas y asistencia oportuna en tu búsqueda educativa.
              ¡Conversa con nosotros ahora y descubre lo fácil que puede ser tu
              viaje educativo!
            </p>
          </div>

          <div className="w-full md:w-9/12 md:order-last">
            <div className="relative">
              <img
                src={img.img_2}
                alt="ZyxBot en movil y ordenador"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-rose-100 via-white to-white">
        <div className="container mx-auto ml-6 md:ml-20">
          <h2 className="text-5xl font-mont mb-4">ZyxBot Evoluciona Contigo</h2>
          <p className="font-popp mb-4 py-2 lg:mr-12">
            En ZyxBot, estamos comprometidos a simplificar tu búsqueda educativa
            y a ser tu compañero confiable en cada paso de tu viaje académico.
            Descubre cómo nuestra plataforma integral puede marcar la diferencia
            en tu proceso de toma de decisiones y ayudarte a alcanzar tus metas
            educativas.
          </p>
        </div>
        <div className="container mx-auto ml-6 md:ml-20">
          <div className="lg:flex">
            <div className="lg:w-1/2 lg:mb-4 lg:mr-20">
              <p className="font-popp">
                Estamos trabajando arduamente en el desarrollo de nuestra
                aplicación móvil para que puedas acceder a la asistencia
                educativa de ZyxBot desde cualquier lugar y en cualquier
                momento. Mantente al tanto, ¡pronto podrás llevar ZyxBot en tu
                bolsillo!
              </p>
              <p className="font-popp">
                Estamos agregando funciones emocionantes para hacer que tu
                experiencia sea aún más enriquecedora. Pronto podrás disfrutar
                de características como búsquedas avanzadas, recomendaciones
                personalizadas y más.
              </p>
            </div>
            <div className="w-full lg:w-[350px] lg:order-last">
              <img
                src={img.img_3}
                alt="zyxboy en dispositivos móviles"
                className="w-full h-auto lg:w-auto lg:h-auto sm:w-2/3 sm:h-auto sm:float-left"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Ventajas */}
      <section
        id="ventajas"
        className="bg-gradient-to-r from-rose-100 via-white to-white py-16 hidden lg:block"
      >
        <div className="container mx-auto justify-center ml-20 ">
          <h2 className="text-5xl font-mont mb-4 ">Ventajas de ZyxBot</h2>
          <p className="font-popp mb-6 py-2 mr-12">
            En ZyxBot, estamos comprometidos a simplificar tu búsqueda educativa
            y ser tu compañero confiable en cada paso de tu viaje académico.
            Descubre cómo nuestra plataforma integral puede marcar la diferencia
            en tu proceso de toma de decisiones y ayudarte a alcanzar tus metas
            educativas.
          </p>
        </div>
        <div className="container mx-auto">
          {/* Card debajo del párrafo */}
          <div className="container mx-auto">
            <div className="flex justify-center space-x-10">
              <div className="bg-gradient-to-r from-[#333333] to-[#4D4D4D] rounded-s-3xl rounded-e-3xl py-16 flex flex-col items-center">
                <svg
                  width="180"
                  height="200"
                  viewBox="0 0 178 207"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mb-10"
                >
                  <g clip-path="url(#clip0_6_64)">
                    <path
                      d="M75 153.87L45.64 124.51L61.73 108.42L72.79 119.47L114.37 65.5601L132.39 79.4701L75 153.87Z"
                      fill="#2F80ED"
                    />
                    <path
                      d="M88.54 206L87.21 205.76C86.29 205.6 64.66 201.58 43.09 182.86C23.43 165.84 0 132.8 0 72.26V34.43H7.59C55.08 34.43 82.75 5.92 83 5.64L88.38 0L93.9 5.48C94.18 5.76 123.65 34.48 169.49 34.48H177.07V72.26C177.07 98.8 172.6 122.31 163.77 142.15C156.971 157.761 146.805 171.677 134 182.9C112.43 201.62 90.8 205.64 89.89 205.8L88.54 206ZM15.17 49.39V72.26C15.17 115.9 27.71 149.09 52.44 170.92C62.7915 180.172 75.149 186.895 88.54 190.56C101.927 186.892 114.281 180.17 124.63 170.92C149.36 149.09 161.9 115.92 161.9 72.26V49.38C135.153 47.6468 109.583 37.7401 88.65 21C67.824 38.0795 42.0695 48.0301 15.17 49.39Z"
                      fill="#2F80ED"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_6_64">
                      <rect width="177.07" height="206.04" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <h2 className="text-white text-4xl text-center font-semibold mb-10">
                  Información Confiable
                </h2>
                <p className="text-white text-justify mb-4 ml-10 mr-14">
                  <div className="flex items-start mb-4">
                    <svg
                      width="80"
                      height="25"
                      viewBox="0 0 37 35"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-2"
                    >
                      <path
                        d="M1 0H36V35H1V0Z"
                        fill="white"
                        fill-opacity="0.01"
                      />
                      <path
                        d="M32.3541 8.02075L13.3046 26.9791L4.64575 18.3616"
                        stroke="#2F80ED"
                        stroke-width="7.98"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    Acceder a información precisa y actualizada es esencial al
                    explorar opciones educativas. ZyxBot te brinda la ventaja de
                    obtener datos confiables sobre una amplia gama de
                    universidades en Nicaragua.
                  </div>
                </p>
                <p className="text-white text-justify mb-4 ml-10 mr-14">
                  <div className="flex items-start mb-4">
                    <svg
                      width="80"
                      height="25"
                      viewBox="0 0 37 35"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-2"
                    >
                      <path
                        d="M1 0H36V35H1V0Z"
                        fill="white"
                        fill-opacity="0.01"
                      />
                      <path
                        d="M32.3541 8.02075L13.3046 26.9791L4.64575 18.3616"
                        stroke="#2F80ED"
                        stroke-width="7.98"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    Nuestra plataforma te proporciona detalles exhaustivos sobre
                    programas académicos, requisitos de admisión, becas y más,
                    para que puedas tomar decisiones informadas.
                  </div>
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#333333] to-[#4D4D4D] rounded-s-3xl  rounded-e-3xl py-16 flex flex-col items-center">
                <svg
                  width="180"
                  height="200"
                  viewBox="0 0 196 180"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mb-10"
                >
                  <g clip-path="url(#clip0_6_119)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M163 0H32.76C16.25 0 0 16.25 0 32.49V97.74C0 114 16.25 130.23 32.76 130.23V179.23L81.5 130.23H163C179.5 130.23 195.49 113.99 195.49 97.74V32.49C195.49 16.25 179.5 0 163 0ZM183.49 96.75C183.49 111 169.49 125.25 154.99 125.25H73.49L38.73 164.25L40.73 125.25C26.26 125.25 12 111 12 96.75V39.5C12 25.26 26.26 11 40.73 11H155C169.48 11 183.5 25.26 183.5 39.5L183.49 96.75Z"
                      fill="#2F80ED"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_6_119">
                      <rect width="195.49" height="179.24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <h2 className="text-white text-4xl text-center font-semibold mb-10">
                  Asistencia Virtual
                </h2>
                <p className="text-white text-justify mb-4 ml-10 mr-14">
                  <div className="flex items-start mb-4">
                    <svg
                      width="80"
                      height="25"
                      viewBox="0 0 37 35"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-2"
                    >
                      <path
                        d="M1 0H36V35H1V0Z"
                        fill="white"
                        fill-opacity="0.01"
                      />
                      <path
                        d="M32.3541 8.02075L13.3046 26.9791L4.64575 18.3616"
                        stroke="#2F80ED"
                        stroke-width="7.98"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    Imagina tener un experto en la información a tu disposición
                    las 24 horas del día. ZyxBot es tu asistente virtual listo
                    para responder a tus preguntas y brindarte orientación en
                    tiempo real.
                  </div>
                </p>

                <p className="text-white text-justify mb-2 ml-10 mr-14">
                  <div className="flex items-start mb-4">
                    <svg
                      width="80"
                      height="25"
                      viewBox="0 0 37 35"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-2"
                    >
                      <path
                        d="M1 0H36V35H1V0Z"
                        fill="white"
                        fill-opacity="0.01"
                      />
                      <path
                        d="M32.3541 8.02075L13.3046 26.9791L4.64575 18.3616"
                        stroke="#2F80ED"
                        stroke-width="7.98"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    Nuestra inteligencia artificial está diseñada para
                    comprender tus necesidades únicas y proporcionarte
                    respuestas precisas y personalizadas.
                  </div>
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#333333] to-[#4D4D4D] rounded-s-3xl rounded-e-3xl py-16 flex flex-col items-center">
                <svg
                  width="185"
                  height="200"
                  viewBox="0 0 195 195"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mb-10"
                >
                  <g clip-path="url(#clip0_6_128)">
                    <path
                      d="M97.08 5.15193e-07C77.8794 5.15193e-07 59.11 5.69364 43.1453 16.3609C27.1806 27.0282 14.7376 42.19 7.38982 59.9291C0.0420632 77.6681 -1.88044 97.1877 1.86541 116.019C5.61126 134.851 14.8572 152.149 28.4341 165.726C42.011 179.303 59.309 188.549 78.1407 192.295C96.9724 196.04 116.492 194.118 134.231 186.77C151.97 179.422 167.132 166.979 177.799 151.015C188.466 135.05 194.16 116.281 194.16 97.08C194.161 84.3309 191.651 71.7064 186.773 59.9275C181.895 48.1487 174.744 37.4461 165.729 28.4311C156.714 19.4162 146.011 12.2654 134.233 7.3871C122.454 2.50884 109.829 -0.00131294 97.08 5.15193e-07ZM97.08 181C80.4879 180.996 64.2694 176.073 50.4752 166.852C36.681 157.631 25.9304 144.528 19.5827 129.198C13.235 113.868 11.5752 97.0002 14.8131 80.727C18.0511 64.4539 26.0414 49.5062 37.7738 37.7737C49.5062 26.0413 64.4539 18.051 80.7271 14.8131C97.0002 11.5752 113.868 13.235 129.198 19.5827C144.528 25.9304 157.631 36.681 166.852 50.4752C176.073 64.2694 180.996 80.4879 181 97.08C181.003 108.101 178.834 119.015 174.617 129.198C170.401 139.381 164.22 148.633 156.426 156.426C148.633 164.219 139.381 170.401 129.198 174.617C119.015 178.834 108.101 181.003 97.08 181Z"
                      fill="#2F80ED"
                    />
                    <path
                      d="M104.77 97.08C104.77 98.0907 104.571 99.0915 104.184 100.025C103.797 100.959 103.229 101.807 102.514 102.521C101.799 103.235 100.95 103.802 100.016 104.188C99.0818 104.573 98.0807 104.771 97.07 104.77C95.0274 104.739 93.0786 103.907 91.6425 102.454C90.2064 101.001 89.3976 99.0429 89.39 97C89.39 80.34 93.64 47.2 95.82 36.54C95.8831 36.2528 96.0424 35.9957 96.2715 35.8114C96.5007 35.6271 96.7859 35.5266 97.08 35.5266C97.3741 35.5266 97.6593 35.6271 97.8885 35.8114C98.1177 35.9957 98.277 36.2528 98.34 36.54C100.52 47.23 104.77 80.58 104.77 97.08Z"
                      fill="#2F80ED"
                    />
                    <path
                      d="M88.52 103.2C76.1 102.45 62.66 99.76 55.33 98.27C55.0648 98.27 54.8104 98.1646 54.6229 97.9771C54.4354 97.7895 54.33 97.5352 54.33 97.27C54.33 97.0047 54.4354 96.7504 54.6229 96.5629C54.8104 96.3753 55.0648 96.27 55.33 96.27C65.6482 94.0657 76.0858 92.463 86.59 91.47C86.5 93.36 86.45 95.21 86.45 96.98C86.3121 99.2427 87.0538 101.471 88.52 103.2Z"
                      fill="#2F80ED"
                    />
                    <path
                      d="M97.08 24.6101C99.024 24.6101 100.6 23.0341 100.6 21.0901C100.6 19.146 99.024 17.5701 97.08 17.5701C95.136 17.5701 93.56 19.146 93.56 21.0901C93.56 23.0341 95.136 24.6101 97.08 24.6101Z"
                      fill="#2F80ED"
                    />
                    <path
                      d="M21.09 100.6C23.034 100.6 24.61 99.0241 24.61 97.0801C24.61 95.136 23.034 93.5601 21.09 93.5601C19.146 93.5601 17.57 95.136 17.57 97.0801C17.57 99.0241 19.146 100.6 21.09 100.6Z"
                      fill="#2F80ED"
                    />
                    <path
                      d="M97.08 176.6C99.024 176.6 100.6 175.024 100.6 173.08C100.6 171.136 99.024 169.56 97.08 169.56C95.136 169.56 93.56 171.136 93.56 173.08C93.56 175.024 95.136 176.6 97.08 176.6Z"
                      fill="#2F80ED"
                    />
                    <path
                      d="M173.08 100.6C175.024 100.6 176.6 99.0241 176.6 97.0801C176.6 95.136 175.024 93.5601 173.08 93.5601C171.136 93.5601 169.56 95.136 169.56 97.0801C169.56 99.0241 171.136 100.6 173.08 100.6Z"
                      fill="#2F80ED"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_6_128">
                      <rect width="194.16" height="194.16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <h2 className="text-white text-4xl text-center font-semibold mb-10">
                  Facilidad de Uso
                </h2>
                <p className="text-white text-justify mb-2 ml-10 mr-14">
                  <div className="flex items-start mb-4">
                    <svg
                      width="80"
                      height="25"
                      viewBox="0 0 37 35"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-2"
                    >
                      <path
                        d="M1 0H36V35H1V0Z"
                        fill="white"
                        fill-opacity="0.01"
                      />
                      <path
                        d="M32.3541 8.02075L13.3046 26.9791L4.64575 18.3616"
                        stroke="#2F80ED"
                        stroke-width="7.98"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    La búsqueda educativa puede ser abrumadora, pero ZyxBot la
                    hace fácil. Navegar por nuestra plataforma es intuitivo y
                    sin complicaciones.
                  </div>
                </p>
                <p className="text-white text-justify mb-2 ml-10 mr-14">
                  <div className="flex items-start mb-4">
                    <svg
                      width="80"
                      height="25"
                      viewBox="0 0 37 35"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-2"
                    >
                      <path
                        d="M1 0H36V35H1V0Z"
                        fill="white"
                        fill-opacity="0.01"
                      />
                      <path
                        d="M32.3541 8.02075L13.3046 26.9791L4.64575 18.3616"
                        stroke="#2F80ED"
                        stroke-width="7.98"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    Hemos diseñado ZyxBot pensando en ti. Te ofrecemos una
                    experiencia amigable y accesible para que encuentres la
                    información que necesitas de manera rápida y sencilla.
                  </div>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*Registro home */}
      <section>
        <RegistroHome />
      </section>

      {/*Seccion de testimonio*/}
      <section id="opiniones" className="bg-rose-100 py-16 ">
        <div className="text-center">
          <h2 className="text-5xl font-mont mb-4">
            ¿Qué dicen nuestros usuarios?
          </h2>
          <p className="text-gray-700 mb-8">
            ¡Bienvenido a ZyxBot! Regístrate ahora para comenzar a explorar un
            mundo de posibilidades educativas.
          </p>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-20 justify-center">
            <div className="bg-white rounded-s-3xl rounded-e-3xl px-4 p-3 border border-black w-full sm:w-1/3 md:w-1/4 lg:w-1/3">
              <div className="flex items-center">
                <img
                  src={img.Ana_ft}
                  alt="Imagen de perfil de Ana"
                  className="rounded-full w-20 h-20"
                />
                <div className="ml-4">
                  <h2 className="text-2xl font-semibold">Ana Gómez</h2>
                  <h3 className="text-xl font-semibold mb-2">
                    anagómez@gmail.com
                  </h3>
                </div>
              </div>
              <div className="mt-4 px-4">
                <p>
                  ZyxBot ha hecho que mi búsqueda universitaria sea mucho más
                  fácil. Pude obtener información sobre diferentes programas de
                  estudio y requisitos de admisión de manera rápida.
                  ¡Definitivamente recomiendo esta plataforma!
                </p>
              </div>
            </div>

            <div className="bg-white rounded-s-3xl rounded-e-3xl px-4 p-3 border border-black w-full sm:w-1/3 md:w-1/4 lg:w-1/3">
              <div className="flex items-center">
                <img
                  src={img.Carlos_ft}
                  alt="Imagen de perfil de Carlos"
                  className="rounded-full w-20 h-20"
                />
                <div className="ml-4">
                  <h2 className="text-2xl font-semibold">Carlos Rodríguez</h2>
                  <h3 className="text-xl font-semibold mb-2">
                    Carlos@gmail.com
                  </h3>
                </div>
              </div>
              <div className="mt-4 px-4">
                <p>
                  Como padre, estaba preocupado por ayudar a mi hijo a encontrar
                  la universidad adecuada. ZyxBot nos brindó orientación y
                  respuestas a todas nuestras preguntas. Estoy agradecido por
                  esta valiosa herramienta.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8"></div>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-20 justify-center">
            <div className="bg-white rounded-s-3xl rounded-e-3xl px-4 p-3 border border-black w-full sm:w-1/3 md:w-1/4 lg:w-1/3">
              <div className="flex items-center">
                <img
                  src={img.Luis_ft}
                  alt="Imagen de perfil de Luis"
                  className="rounded-full w-20 h-20"
                />
                <div className="ml-4">
                  <h2 className="text-2xl font-semibold">Luis González</h2>
                  <h3 className="text-xl font-semibold mb-2">
                    gonzález@gmail.com
                  </h3>
                </div>
              </div>
              <div className="mt-4 px-4">
                <p>
                  Utilizo ZyxBot como recurso adicional en mis clases para
                  orientar a mis estudiantes sobre sus opciones educativas. La
                  plataforma es intuitiva y proporciona información precisa
                  sobre las universidades.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-s-3xl rounded-e-3xl px-4 p-3 border border-black w-full sm:w-1/3">
              <div className="flex items-center">
                <img
                  src={img.Juan_ft}
                  alt="Imagen de perfil de Ana"
                  className="rounded-full w-20 h-20"
                />
                <div className="ml-4">
                  <h2 className="text-2xl font-semibold">Juan Pérez</h2>
                  <h3 className="text-xl font-semibold mb-2">
                    juanPérez@gmail.com
                  </h3>
                </div>
              </div>
              <div className="mt-4 px-4">
                <p>
                  ZyxBot fue mi compañero durante mi búsqueda de universidad. Me
                  ayudó a encontrar programas de estudio que se adaptaran a mis
                  intereses y me proporcionó datos esenciales. ¡Gracias ZyxBot!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONSULTAS Y COMENTARIOS */}
      <section>
        <ConsultasHome />
      </section>
      {/*NUESTRO EQUIPO DE DESARROLLO*/}
      <section className="bg-gradient-to-b from-slate-400 via-white to-white">
        <div className="container mx-auto flex flex-col md:flex-row md:items-center ml-12">
          <div className="w-full md:w-1/2 md:pr-4">
            <h2 className="text-5xl font-mont mb-4 mt-10">
              Nuestro Equipo de Desarrollo
            </h2>
            <p className="text-gray-700 mb-8 font-popp">
              Detrás de ZyxBot se encuentra un equipo apasionado y altamente
              capacitado de profesionales de la tecnología y la educación.
              Nuestra dedicación es impulsar tu éxito académico al brindarte una
              plataforma confiable y eficiente para tu búsqueda educativa.
              Conoce al equipo que hace posible ZyxBot y su compromiso con tu
              viaje educativo.
            </p>

            <div className="mb-8">
              <div className="flex flex-col md:flex-row space-x-4 md:space-x-0 md:space-y-0 md:mb-8">
                <div className="rounded-full bg-black w-16 h-16 flex-shrink-0">
                  <img
                    src={img.User_ft}
                    alt=""
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="md:mt-2">
                  <h2 className="text-2xl font-semibold">
                    Angel Erian Hernandez Aleman
                  </h2>
                  <h3 className="text-xl font-semibold mb-2">
                    erianhernandez97@gmail.com
                  </h3>
                </div>
              </div>

              <div className="flex flex-col md:flex-row space-x-4 md:space-x-0 md:space-y-0 md:mb-8">
                <div className="rounded-full bg-black w-16 h-16 flex-shrink-0">
                  <img
                    src={img.User_ft}
                    alt=""
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="md:mt-2">
                  <h2 className="text-2xl font-semibold">
                    Helen Sofia Vargas Lopez
                  </h2>
                  <h3 className="text-xl font-semibold mb-2">
                    helensofiavargaslopez@gmail.com
                  </h3>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex flex-col md:flex-row space-x-4 md:space-x-0 md:space-y-0 md:mb-8">
                <div className="rounded-full bg-black w-16 h-16 flex-shrink-0">
                  <img
                    src={img.User_ft}
                    alt=""
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="md:mt-2">
                  <h2 className="text-2xl font-semibold">
                    Kevin Andres Garcia Moncada
                  </h2>
                  <h3 className="text-xl font-semibold mb-2">
                    kevingarcia231@gmail.com
                  </h3>
                </div>
              </div>

              <div className="flex flex-col md:flex-row space-x-4 md:space-x-0 md:space-y-0">
                <div className="rounded-full bg-black w-16 h-16 flex-shrink-0">
                  <img
                    src={img.User_ft}
                    alt=""
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="md:mt-2">
                  <h2 className="text-2xl font-semibold">
                    Keneth Ernest Macis Flores
                  </h2>
                  <h3 className="text-xl font-semibold mb-2">
                    kenny48810354@gmail.com
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 hidden md:block">
            <img
              src={img.img_4}
              alt="Imagen de ejemplo"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#333333] text-white">
        <hr className="bg-[#040C1C] w-full h-8 mb-4" />
        <div className="container mx-auto text-center flex justify-center items-center flex-col">
          <h2 className="text-3xl text-[#040C1C] font-mont mb-4">
            SÍGANOS EN LAS REDES SOCIALES
          </h2>
          <div className="flex space-x-4 mb-4">
            <img
              src={img.twitter}
              alt="Icono de Twitter"
              className="w-10 h-10"
            />
            <img
              src={img.instagram}
              alt="Icono de instagram"
              className="w-10 h-10"
            />
            <img
              src={img.facebook}
              alt="Icono de facebook"
              className="w-10 h-10"
            />
            <img src={img.tiktok} alt="Icono de tiktok" className="w-10 h-10" />
            <img
              src={img.whatsapp}
              alt="Icono de whatsapp"
              className="w-10 h-10"
            />
            <img src={img.yotube} alt="Icono de yotube" className="w-10 h-10" />
          </div>
          <h2 className="text-3xl text-[#040C1C] font-mont mb-4">
            REGÍSTRESE EN ZYXBOT AHORA
          </h2>
          <a href="/registro">
            <button className="w-30 h-10 font-bold bg-gradient-to-r from-blue-950 via-blue-900 to-blue-700 text-white px-8 py-2 rounded-lg mb-4">
              REGÍSTRARSE
            </button>
          </a>
          <p className="text-[12px] sm:text-xs text-center text-gray-400 mb-3 ">
            ¡Hola! Nos encanta verte por nuestro sitio web. Antes de que
            empieces a utilizar nuestro sitio web, queremos informarte de que
            nos servimos de cookies y tecnologías similares para mejorar tu
            experiencia en el sitio, analizar el tráfico y el uso, personalizar
            el contenido de acuerdo con tus preferencias y mejorar nuestro
            marketing. Si utilizas nuestro sitio web, nos das tu consentimiento
            para que nuestros socios y nosotros recopilemos, utilicemos,
            recuperemos y almacenemos cookies y tecnologías similares en tu
            ordenador o en otros dispositivos. Puedes retirar este
            consentimiento en cualquier momento en la configuración del
            navegador de tu ordenador o tus dispositivos. Haz clic en la
            Política de cookies para consultar cómo puedes controlar el uso de
            cookies mediante tu dispositivo. Tus datos se tratarán de acuerdo
            con nuestra Política de privacidad.
          </p>
        </div>
        <div className="bg-[#040C1C] h-8">
          <p className="text-center text-xs text-gray-400 py-2">
            Copyright &copy; {new Date().getFullYear()} ZixBot, Inc. Todos los
            derechos reservados.
          </p>
        </div>
      </footer>
    </>
  );
};
