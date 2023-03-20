import ReactDOM from 'react-dom/client';
import './index.css';
import App from './features/app/App';
import DialogProvider from './contexts/dialog/dialog_provider';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import SocketProvider from './contexts/socket/socket_context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(

  <Provider store={store}>
    <SocketProvider>
      <DialogProvider>
        <App />
      </DialogProvider>
    </SocketProvider>
  </Provider>
);