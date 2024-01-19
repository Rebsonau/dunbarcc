import logo from './images/logo.svg';
import facebook from './images/facebook.svg';
import instagram from './images/instagram.svg';
import twitter from './images/twitter.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          COMING SOON...
        </p>
        <div className='Links'>
          <a href="https://www.facebook.com/p/Dunbar-Cricket-Club-100077822088091/" target="_blank" rel="noopener noreferrer">
            <img src={facebook} alt="facebook" />
          </a>
          <a href="https://www.instagram.com/p/CsEtx1_oJWr/?utm_source=ig_web_copy_link" target='_blank' rel='noopener noreferrer'>
            <img src={instagram} alt="instagram" />
          </a>
          <a href="https://x.com/DunbarCricket?s=20" target='_blank' rel='noopener noreferrer'>
            <img src={twitter} alt="twitter" />
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
