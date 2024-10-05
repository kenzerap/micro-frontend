import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PageNotFound from './pages/PageNotFound/PageNotFound.tsx';
import axios, { AxiosError } from 'axios';
import { Provider } from 'react-redux';
import { store } from './store/reducers/index.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
