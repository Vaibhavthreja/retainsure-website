import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { DemoAccessProvider } from './contexts/DemoAccessContext';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <DemoAccessProvider>
          <App />
        </DemoAccessProvider>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);
