 import styles from './styles.css'
import IconLocation from '../../assets/icons/icon-location.svg'
import IconClock from '../../assets/icons/icon-clock.svg'
import LogoClinic from '../../assets/icons/logo-sante.svg'
import NameClinic from '../../assets/icons/name-sante.svg'
import IconWpp from '../../assets/icons/icon-wpp.svg'




 export default function Header() {
    return (

<header>
  <div className="header-content">
  <div class="info-clinic">
        <div class="address">
          <img src={IconLocation} alt="icone de localização" />
          <p>
            Estr. de Itapecerica da Serra, 1770 - Vila Prel | CEP 05835-004 -
            São Paulo / SP
          </p>
        </div>
        <div class="opening-hours">
        <img src={IconClock} alt="ícone de horário" />
          <p>Segunda à Sexta | das 09h às 18h</p>
        </div>
      </div>

      <div class="nav-clinic">
        <div class="logo-name">
        <img src={LogoClinic} alt="logo da clinica" />
          <img src={NameClinic} alt="nome da clinica" />
        </div>

        <div class="nav-contact">
          <nav class="navigation">
            <a href="">Início</a>
            <a href="">Procedimentos</a>
            <a href="">Sobre Nós</a>
            <a href="">Nosso Espaço</a>
            <a href="">Localização</a>
          </nav>


          <button class="button-contact">
            <a href="https://wa.me/551155113579">
            <img src={IconWpp} alt="ícone do whatsapp" />
              <p>Agendar pelo Whatsapp</p>
            </a>
          </button>
          
        </div>
      </div>
  </div>
      
    </header>








    )
 }