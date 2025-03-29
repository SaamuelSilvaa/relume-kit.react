import styles from './styles.css'
import GoldDivider from '../../assets/icons/gold-divider.svg'
import IconWpp from '../../assets/icons/icon-wpp.svg'
import IconMaps from '../../assets/icons/icon-google-maps.svg'


export default function Location() {
    return (

        <section>
            <div className="divider">
                <img src={GoldDivider} alt="Divisória de ouro" />
            </div>
            <div className="location">
                <div class="location-container">


                    <div class="location-top">
                        <div class="description-location">

                            <div className="titles-location">
                                <div class="title-location">
                                    <div class="rectangle"></div>
                                    <h3>Localização</h3>
                                </div>
                                <div class="sub-title-location">
                                    <p>
                                        Nossa clínica está localizada em um ponto
                                        estratégico, de fácil acesso para toda a região.
                                        Situada na Vila Prel-São Paulo, garantindo
                                        comodidade para nossos pacientes.
                                    </p>
                                </div>
                            </div>


                            <div class="button-location">
                                <button class="button-contact-location">
                                    <a href="https://wa.me/551155113579">
                                        <img
                                            src={IconWpp}
                                            alt="ícone do whatsapp"
                                            id="icon-wpp-location"
                                        />
                                        <p>Agendar pelo Whatsapp</p>
                                    </a>
                                </button>
                                <button class="button-contact-location" id="button-map">
                                    <a href="https://maps.app.goo.gl/arU22FJJwwZfC77q6">
                                        <img
                                            src={IconMaps}
                                            alt="ícone do whatsapp"
                                        />
                                        <p>Clínica Santé</p>
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="map-location">
                        <iframe
                            title="Google Maps"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.756220236429!2d-46.753092324667165!3d-23.648899878739808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce535b90791bff%3A0x73c76ae6fffbbcd5!2sClinica%20Sant%C3%A9%20-%20Est%C3%A9tica%2C%20Sa%C3%BAde%20e%20Odontologia!5e0!3m2!1spt-BR!2sbr!4v1742684836505!5m2!1spt-BR!2sbr"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>

        </section>
    )
}

