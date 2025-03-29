import styles from './styles.css'
import LogoSanteFooter from '../../assets/icons/logo-sante-footer.svg'
import NameSanteFooter from '../../assets/icons/name-sante-footer.svg'
import IconTelephone from '../../assets/icons/icon-telephone.svg'
import IconWppLight from '../../assets/icons/icon-wpp-light.svg'
import IconEmail from '../../assets/icons/icon-email.svg'



export default function Footer() {
    return (

        <footer>
            <div className="footer-container">
            <div className="footer-top">
                <div className="footer-top-logo">
                    <img src={LogoSanteFooter} alt="logo da clinica" id="logo-sante-footer" />
                    <img src={NameSanteFooter} alt="nome da clinica" id="name-sante-footer" />
                </div>
                <div className="info-footer">
                    <div className="address-footer">
                        <p id="address-road">
                            Estr. de Itapecerica da Serra, 1770
                            Vila Prel, São Paulo / SP
                        </p>
                      <br />
                        <p>CEP 05835-004</p>
                    </div>
                    <div className="line"></div>
                    <div className="contact-footer">

                        <div className="telephone">
                            <img src={IconTelephone} alt="Telefone" />
                            <p>5510 - 0335</p>
                        </div>
                        <div className="whatsapp">
                            <img src={IconWppLight} alt="WhatsApp" />
                            <p>5511 - 3579</p>
                        </div>
                        <div className="email">
                            <img src={IconEmail} alt="Email" />
                            <p>email.clinicasante@email.com</p>
                        </div>

                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; Copyright 2024 | Todos os direitos reservados</p>
                <p>Desenvolvido por Suporte de Domingo</p>
            </div>
            </div>
           
        </footer>

    )
}
