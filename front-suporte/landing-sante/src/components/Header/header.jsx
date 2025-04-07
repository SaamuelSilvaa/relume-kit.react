import styles from './styles.css'
import IconLocation from '../../assets/icons/icon-location.svg'
import IconClock from '../../assets/icons/icon-clock.svg'
import LogoClinic from '../../assets/icons/logo-sante.svg'
import NameClinic from '../../assets/icons/name-sante.svg'
import IconWpp from '../../assets/icons/icon-wpp.svg'
import MenuHamburger from '../../assets/icons/menu-hamburguer.svg'
import Close from '../../assets/icons/close.svg'
import { useState } from 'react'

export default function Header() {

  const [active, setActive] = useState(false);

  function isMenuOpen () {
    return setActive(!active)

  }

  return (

    <header id='home'>
      <div className="header-content">
        <div className="info-clinic">
          <div className="address">
            <img src={IconLocation} alt="icone de localização" />
            <p>
              Estr. de Itapecerica da Serra, 1770 - Vila Prel | CEP 05835-004 -
              São Paulo / SP
            </p>
          </div>
          <div className="opening-hours">
            <img src={IconClock} alt="ícone de horário" />
            <p>Segunda à Sexta | das 09h às 18h</p>
          </div>
        </div>

        <div className="nav-clinic">

          <div className="logo-name">
            <img src={LogoClinic} alt="logo da clinica" />
            <img src={NameClinic} alt="nome da clinica" />
          </div>

          <div className="nav-contact">

            <nav className={`navigation ${isMenuOpen ? 'open' : ''}`}>
              <a href="#home">Início</a>
              <a href="#main">Procedimentos</a>
              <a href="#about-me">Sobre Nós</a>
              <a href="">Nosso Espaço</a>
              <a href="#location">Localização</a>
            </nav>

            <button className="button-contact">
              <a href="https://wa.me/551155113579">
                <img src={IconWpp} alt="ícone do whatsapp" />
                <p>Agendar pelo Whatsapp</p>
              </a>
            </button>
          </div>


          <div className="menu-hamburger">
            <button onClick={isMenuOpen} className="">
              <img src={active ? Close : MenuHamburger} alt="menu" />
            </button>
          </div>
          {
            active &&


            <div className={`overlay ${isMenuOpen ? 'show' : ''}`}>

              <nav className="overlay-nav">
                <ul>
                  <li><a href="#home" onClick={isMenuOpen}>Início</a></li>
                  <li><a href="#about" onClick={isMenuOpen}>Serviços</a></li>
                  <li><a href="#main" onClick={isMenuOpen}>Procedimentos</a></li>
                  <li><a href="#" onClick={isMenuOpen}>Sobre nós</a></li>
                  <li><a href="#" onClick={isMenuOpen}>Localização</a></li>
                </ul>
              </nav>


              <div className="mobile-bottom">

                <div className="contact-mobile">
                  <h2>ENTRE EM CONTATO</h2>
                  <h1>email.clinicasante@email.com</h1>
                  <button className="button-contact" id='button-mobile'>
                    <a href="https://wa.me/551155113579">
                      <img src={IconWpp} alt="ícone do whatsapp" />
                      <p>Agendar pelo Whatsapp</p>
                    </a>
                  </button>
                </div>


                <p>© 2024. All Rights Reserved. </p>
              </div>



            </div>
          }

        </div>
      </div>
    </header>
  )
}
