import { useState } from 'react';
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { 
  QueryClient, 
  QueryClientProvider 
} from "@tanstack/react-query";

import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import PopupLogin from './components/PopupLogin/PopupLogin';
import IntroduceApp from './components/IntroduceApp/IntroduceApp';
import Router from './routes';

const queryClient = new QueryClient()

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      {showLogin ? <PopupLogin setShowLogin={setShowLogin} /> : <></>}

      <IntroduceApp />

      <div className='app'>
        <NavBar setShowLogin={setShowLogin}></NavBar>
        <Router />
      </div>

      <Footer />
      
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  );
};

export default App;