import { useState } from 'react';

import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import PopupLogin from './components/PopupLogin/PopupLogin';
import IntroduceApp from './components/IntroduceApp/IntroduceApp';
import Routes from './routes';

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div>
      {showLogin ? <PopupLogin setShowLogin={setShowLogin} /> : <></>}

      <IntroduceApp />

      <div className='app'>
        <NavBar setShowLogin={setShowLogin}></NavBar>
        <Routes />
      </div>
      
      <Footer />
    </div>
  );
};

export default App;