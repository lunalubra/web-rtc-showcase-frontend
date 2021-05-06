import { Provider as ReduxProvider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react';
import { useEffect } from 'react';

import { connectWithSocket } from '../utils/wssConnection/wssConnection';
import store from '../redux/store';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    connectWithSocket();
  }, []);
  return (
    <ChakraProvider>
      <ReduxProvider store={store}>
        <Component {...pageProps} />
      </ReduxProvider>
    </ChakraProvider>
  );
}
export default MyApp;
