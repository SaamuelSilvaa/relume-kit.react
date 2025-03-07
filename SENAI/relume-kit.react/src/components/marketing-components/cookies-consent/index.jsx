
//importei o css
import './styles.css'

//importando uma imagem
import Close from '../../../assets/images/icons/close.svg'



//criei uma function component
export default function CookiesConsent() {

    return (

        <div className="container">
            <p>By clicking “Accept”, you agree to the storing of cookies on your device to <br />
                enhance site navigation, analyze site usage, and assist in our marketing <br />
                efforts. View our Privacy Policy for more information.</p>

            <div className="button-wrapper">
                <button type='button'>Preferences</button>
                <button type='button' className='text-button'>Decline</button>
                <button type='button' className='text-button black'>Accept</button>
            </div>
                <button type='button'>
                    <img src={Close} alt="icone de fechar"/>
                    </button>
        </div>
    )

}