import styles from './styles.css'
import GoldDivider from '../../assets/icons/gold-divider.svg'
import HOF from '../../assets/icons/hof.svg'
import Implant from '../../assets/icons/implant.svg'
import DentalProsthesis from '../../assets/icons/dental-prosthesis.svg'
import Lenses from '../../assets/icons/lenses.svg'
import Scanner from '../../assets/icons/scanner.svg'
import OrthodonticAppliance from '../../assets/icons/orthodontic-appliance.svg'
import ToothCanal from '../../assets/icons/tooth-canal.svg'
import Whitening from '../../assets/icons/whitening.svg'
import GeneralClinic from '../../assets/icons/general-clinic.svg'
import Surgery from '../../assets/icons/surgery.svg'
import PersonPain from '../../assets/icons/icon-person-pain.svg'
import Person from '../../assets/icons//icon-person-scanner.svg'
import Smile from '../../assets/icons/smile.png'
import AlignerTwo from '../../assets/icons/aligner-invisalign.png'
import AlignerOne from '../../assets/icons/aligner-wearing.png'
import NitrousOxide from '../../assets/icons/nitrous-oxide.png'
import Anesthesia from '../../assets/icons/anesthesia.png'



export default function Main() {

    return (


        <main>

            <div className="main-content">
                <div className="divider-services">
                    <img className='divider-services' src={GoldDivider} alt="Divisoria de ouro" />

                </div>
                <div class="services-clinic">

                    <div class="services">
                        <div class="description-services">
                            <div class="title-services">
                                <div class="rectangle-services"></div>
                                <h3>Nossos serviços</h3>
                            </div>

                            <p>
                                Na Clínica Santé oferecemos soluções modernas para transformar seu sorriso. Dos implantes dentários para reposição definitiva de dentes às próteses <br className='line-break-services' />personalizadas que garantem conforto e estética, cuidamos de cada detalhe.
                            </p>

                        </div>

                        <div class="cards-services">
                            <div class="cards-one">
                                <div class="card-br">
                                    <p>
                                        Harmonização Orofacial
                                        <br />(HOF)
                                    </p>
                                    <img
                                        src={HOF}
                                        alt="Harmonização Orofacial"
                                    />
                                </div>
                                <div class="card">
                                    <p>Implantes</p>
                                    <img src={Implant} alt="Implantes" />
                                </div>
                                <div class="card">
                                    <p>
                                        Próteses Dentárias <br />
                                    </p>
                                    <img
                                        src={DentalProsthesis}
                                        alt="Próteses Dentárias"
                                    />
                                </div>
                                <div class="card-br">
                                    <p>
                                        Lentes e Facetas <br />
                                        (Resina e Cerâmica)
                                    </p>
                                    <img src={Lenses} alt="Lentes e Facetas" />
                                </div>
                                <div class="card-br">
                                    <p>
                                        Molde Digital <br />
                                        (Scanner intra-oral)
                                    </p>
                                    <img src={Scanner} alt="Molde Digital" />
                                </div>
                            </div>
                            <div class="cards-two">
                                <div class="card-br">
                                    <p>
                                        Aparelhos <br /> Ortodônticos
                                    </p>
                                    <img
                                        src={OrthodonticAppliance}
                                        alt="Aparelhos Ortodônticos"
                                    />
                                </div>
                                <div class="card">
                                    <p>Tratamento de Canal</p>
                                    <img
                                        src={ToothCanal}
                                        alt="Tratamento de Canal"
                                    />
                                </div>
                                <div class="card">
                                    <p>Clareamento e Limpezas</p>
                                    <img
                                        src={Whitening}
                                        alt="Clareamento e Limpezas"
                                    />
                                </div>
                                <div class="card">
                                    <p>Clínica Geral</p>
                                    <img
                                        src={GeneralClinic}
                                        alt="Clínica Geral"
                                    />
                                </div>
                                <div class="card">
                                    <p>Cirurgias</p>
                                    <img src={Surgery} alt="Cirurgia" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>




                <div className="inovation-content">
                    <div className="description-inovation">
                        <div className="title-inovation">
                            <div className="rectangle-inovation"></div>
                            <h3>Inovação: Scanner Digital</h3>
                        </div>
                        <div className="sub-title-inovation">
                            <h6>Um novo padrão em conforto e precisão</h6>
                        </div>

                        <p>
                            Revolucionamos o processo ao adotar o scanner digital, tornando
                            os tratamentos mais precisos e confortáveis. Com essa
                            tecnologia, eliminamos os <br className='line-break-inovation' /> desconfortos dos moldes tradicionais
                            e aceleramos o fluxo de trabalho, garantindo resultados mais exatos
                            e eficientes.
                        </p>
                    </div>

                    <div className="cards-inovation">
                        <div className="card-main-inovation">
                            <div className="text-card-inovation">
                                <h5>Método Tradicional</h5>
                                <ul>
                                    <li>
                                        Materiais desconfortáveis que podem causar náusea e <br className='line-break-inovation-card' />
                                        incômodo.
                                    </li>
                                    <li>
                                        Processo mais lento devido ao tempo de endurecimento
                                        da moldagem.
                                    </li>
                                    <li>
                                        Risco de distorção por pequenos movimentos durante o
                                        processo.
                                    </li>
                                </ul>
                            </div>

                            <img
                                className="image-inovation"
                                src={PersonPain}
                                alt=""
                            />
                        </div>

                        <div className="card-main-inovation-two" id="card-two">
                            <div className="text-card-inovation">
                                <h5>Scanner Digital</h5>
                                <ul>
                                    <li>
                                        Imagem precisa e instantânea, capturando detalhes da
                                        arcada dentária.
                                    </li>
                                    <li>
                                        Confortável para o paciente, sem materiais
                                        intrusivos.
                                    </li>
                                    <li>
                                        Processo ágil e preciso, reduzindo falhas humanas.
                                    </li>
                                </ul>
                            </div>

                            <img src={Person} alt="" />
                        </div>
                    </div>
                </div>






                <div className="orthodontic-container">
                    <div className="description-orthodontic">
                        <div className="title-orthodontic">
                            <div className="rectangle-orthodontic"></div>
                            <h3>Aparelhos Ortodônticos</h3>
                        </div>
                        <div className="sub-title-orthodontic">
                            <h6>Soluções para melhorar seu Sorriso</h6>
                        </div>

                        <p>
                            Revolucionamos o processo ao adotar o scanner digital, tornando
                            os tratamentos mais precisos e confortáveis. Com essa
                            tecnologia, eliminamos os desconfortos dos moldes tradicionais
                            e aceleramos o fluxo de trabalho, garantindo resultados mais exatos
                            e eficientes.
                        </p>
                    </div>

                    <div className="cards-orthodontic">
                        <div className="card-main" id="card-orthodontic">
                            <div className="text-card-orthodontic">
                                <h5>Aparelho Fixo</h5>
                                <ul>
                                    <li>
                                        Correção eficiente – Ideal para alinhamento de dentes desalinhados e correção de mordidas complexas.
                                    </li>
                                    <li>
                                        Manutenção periódica – Requer visitas regulares ao ortodontista para ajustes e acompanhamento.
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        Componentes metálicos – Utiliza braquetes e fios estéticos que exercem força controlada nos dentes
                                    </li>
                                    <li>
                                        Resultados precisos – Oferece grande controle sobre o movimento dentário ao longo do tempo
                                    </li>
                                </ul>
                            </div>

                            <img src={Smile} alt="" />
                        </div>

                        <div className="card-main" id="card-orthodontic-two">
                            <div className="text-card-orthodontic-two">
                                <h5>Alinhadores Invisíveis</h5>

                                <div className="ul-left">
                                    <ul>
                                        <li>
                                            Discreto e confortável –  Feito de material transparente, quase imperceptível durante o uso
                                        </li>
                                        <li>
                                            Menos consultas – O planejamento digital permite um acompanhamento mais espaçado e confortá
                                        </li>
                                    </ul>
                                </div>


                                <div className="ul-right">

                                    <ul>
                                        <li>
                                            Removível – Pode ser retirado para alimentação e higiene bucal.
                                        </li>
                                        <li>
                                            Correção gradual – Movimenta <br className='line-break-' /> os dentes de forma progressiva sem necessidade de fios ou braquetes.
                                        </li>
                                    </ul>
                                </div>

                            </div>
                            <div className="images-aligner">
                                <img className='aligner-one'
                                    src={AlignerOne}

                                    alt=""
                                />
                                <img className='aligner-two'
                                    src={AlignerTwo}

                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="anesthesia-container">
                    <div className="description-anesthesia">
                        
                        <div className="title-anesthesia">
                            <div className="rectangle-anesthesia"></div>
                            <h3>Óxido Nitroso vs Anestesia Convencional</h3>
                        </div>
                        <div className="sub-title-anesthesia">
                            <h6>Soluções para melhorar seu Sorriso</h6>

                        <p>
                            O óxido nitroso é uma solução moderna para tornar os procedimentos odontológicos mais confortáveis. Comparado às anestesias tradicionais, ele reduz a ansiedade e proporciona uma recuperação imediata.
                        </p>
                        </div>
                    </div>

                    <div className="cards-anesthesia">
                        <div className="card-main" id="card-anesthesia">
                            <div className="text-card-anesthesia">
                                <h5>Óxido Nitroso</h5>
                                <ul>
                                    <li>
                                        Reduz a ansiedade e promoverelaxamento imediato, proporcionando uma experiência mais tranquila.
                                    </li>
                                    <li>
                                        O efeito desaparece em poucos minutos, portanto a pessoa pode retomar suas atividades normais sem restrições.
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        Não causa sonolência prolongada. O paciente permanece acordado e  alerta durante todo o procedimento.
                                    </li>
                                    <li className="li-right">
                                        Seguro para crianças e adultos, pois é um Método  amplamente utilizado e recomendado por  especialistas em odontologia.
                                    </li>
                                </ul>
                            </div>

                            <img src={NitrousOxide} alt="" />
                        </div>

                        <div className="card-main" id="card-anesthesia-two">
                            <div className="text-card-anesthesia-two">
                                <h5>Anestesia Convencional</h5>

                                <div className="lists-anesthesia">
                                    <ul className="ul-left">
                                        <li className="li-left-two">
                                            Pode causar dormência e  desconforto por horas, dificultando a alimentação e a fala.
                                            </li>
                                            <li className="li-left">
                                                Recuperação mais lenta em comparação ao óxido nitroso. O paciente pode levar horas até sentir-se totalmente normal novamente.
                                            </li>
                                    </ul>
                                    <ul className="ul-right">
                                        <li className='li-right'>
                                            Risco de reações adversas e efeitos colaterais. Algumas pessoas podem apresentar tontura, náusea ou até reações alérgicas.
                                        </li>
                                        <li className='li-right-two'>
                                            Nem sempre é ideal para pacientes ansiosos. O medo da agulha e do procedimento pode causar estresse adicional em algumas pessoas.
                                        </li>
                                    </ul>
                                </div>

                            </div>
                            <img src={Anesthesia} alt="" />


                        </div>






                    </div>
                </div>

            </div>




        </main>













    )

}