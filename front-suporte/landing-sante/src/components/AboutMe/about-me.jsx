import styles from './styles.css'
import Office from '../../assets/icons/image-office.png'
import OfficeTwo from '../../assets/icons/image-office-two.png'
import ClinicalEntrance from '../../assets/icons/clinical-entrance.png'


export default function AboutMe() {
    return (

        <section class="about-me">
            <div class="about-container">
                <div class="description-about">

                    <div className="titles-about">
                        <div class="title-about">
                            <div class="rectangle-about"></div>
                            <h3>Sobre a Clínica Santé</h3>
                        </div>
                        <div class="sub-title-about">
                            <h5>Serviços odontológicos de qualidade</h5>
                        </div>
                    </div>

                    <div class="text-about">
                        <p>
                            Na Clinica Santé, acreditamos que um sorriso bonito
                            começa com uma boca saudável. Oferecemos tratamentos
                            odontológicos completos, unindo tecnologia, experiência
                            e um atendimento acolhedor para garantir o melhor
                            cuidado para você e sua família. Da prevenção à
                            reabilitação estética, cada procedimento é realizado com
                            precisão e dedicação, sempre priorizando o seu conforto
                            e bem-estar.
                        </p>
                        <br />
                        <p>
                            Nosso time de especialistas está preparado para
                            transformar seu sorriso com soluções modernas e
                            personalizadas. Trabalhamos com materiais de alta
                            qualidade e técnicas avançadas para proporcionar
                            resultados duradouros e naturais. Agende uma consulta e
                            descubra como podemos cuidar da sua saúde bucal com
                            excelência e carinho.
                        </p>
                        <br />
                        <p>
                            Nossa clínica também é totalmente acessível para
                            cadeirantes, com rampas, espaços amplos e atendimento
                            pensado para o seu conforto e segurança.
                        </p>
                    </div>
                </div>

                <div class="layout-images">

                    <img className='office' src={Office} alt="" />
                    <img className='office' src={OfficeTwo} alt="" />
                    <img className='large' src={ClinicalEntrance} alt="" />
                </div>
            </div>
        </section>






    )
}