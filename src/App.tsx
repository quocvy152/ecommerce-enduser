import { useState } from 'react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { 
  QueryClient, 
  QueryClientProvider 
} from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import PopupLogin from './components/PopupLogin/PopupLogin';
import IntroduceApp from './components/IntroduceApp/IntroduceApp';
import Router from './routes';

const queryClient = new QueryClient();

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <ToastContainer
        position='top-right'
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />

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