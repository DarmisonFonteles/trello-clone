import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import FormProvider from './context/formcontext';

ReactDOM.render(
  <React.StrictMode>
    <FormProvider> {/* Adicione o provedor de contexto aqui */}
      <App/>
    </FormProvider>
  </React.StrictMode>,
  document.getElementById('root')
);