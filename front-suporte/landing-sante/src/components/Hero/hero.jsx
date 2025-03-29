import styles from './styles.css'
import IconAccessibility from '../../assets/icons/icon-accessibility.png'
import PhotoClinic from '../../assets/icons/photo-clinic.jpg'




export default function Hero() {
    return (


<section class="banner">
    <div class="content">
        <h1>Clínica Odontológica Santé</h1>
        <p>Seu sorriso em boas mãos!</p>
    </div>

    <div class="acessibilidade">
        <img src={IconAccessibility} alt="Ícone de acessibilidade" />
        <p>
            Nossa clínica é totalmente acessível para cadeirantes, com rampas, espaços
            amplos e atendimento pensado para o seu conforto e segurança.
        </p>
    </div>
</section>
    )
}