import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './assets/globals.css';
import App from './App.tsx';
import Main from "./pages/AuthScreen/Main.tsx";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/auth" element={<Main />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
