import ReactDOM from 'react-dom/client';
import './index.css';
import App from './features/app/App';
import reportWebVitals from './reportWebVitals';
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
