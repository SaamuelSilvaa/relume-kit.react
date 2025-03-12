
import relumeLogo from './assets/images/icons/relume-logo.svg'
import webflowLogo from './assets/images/icons/webflow-logo.svg'
import './App.css'



function App() {
    return (
        <div className="container">
            <p>
               Used by the world's leading companies
            </p>

            <div className="logo-companies">
                <img src={webflowLogo} alt="web flow logo" />
                <img src={relumeLogo} alt="relume logo" />
                <img src={webflowLogo} alt="web flow logo" />
                <img src={relumeLogo} alt="relume logo" />
                <img src={webflowLogo} alt="web flow logo" />

            </div>



        </div>

    )
}

export default App;