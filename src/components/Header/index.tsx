import logo from '../../assets/img/logo.svg';

import './styles.css'
function Header() {
 

    return (
        <header>
        <div className="dsmeta-logo-container">
            <img src={logo} alt="DSMeta" />
            <h1>Gesão de processos</h1>
            <p>
              Desenvolvido por
              <a href="https://www.instagram.com/tf.rabaoioli">@tfrabaioli</a>
            </p>
        </div>
    </header>
    )
  }
  
  export default Header
  