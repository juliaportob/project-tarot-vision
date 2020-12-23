import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import tarotContext from '../context/tarotContext';
import LogoTarotVision from '../images/logo2.png';
import Footer from '../components/Footer';
import '../style/login.css';

function Login() {
  const [nameLogin, setNameLogin] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const { setNameUser } = useContext(tarotContext);

  useEffect(() => {
    const two = 2;
    const minName = nameLogin.length >= two;
    if (minName) {
      setIsDisabled(false);
    }
  }, [nameLogin]);

  const handleRedirect = () => {
    setNameUser(nameLogin);
  };

  return (
    <main className="bodyLogin">
      <div className="logoLogin">
      <img className="logo" src={ LogoTarotVision } alt="Logo Tarot Vision" />
      </div>
      <h1> What's your name, querent? </h1>
      <form>
        <input
          type="text"
          required="required"
          placeholder="Name"
          onChange={({ target }) => setNameLogin(target.value)}
        />
        <div>
          <Link to="/main-page">
            <button
              type="button"
              disabled={isDisabled}
              onClick={handleRedirect}
            >
              Start
          </button>
          </Link>
        </div>
      </form>
      <div className="div-footer">
        <Footer />
      </div>
    </main>
  );
}

export default Login;
