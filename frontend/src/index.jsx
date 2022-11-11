import React, { StrictMode, Suspense } from 'react';
import ReactDOM from "react-dom/client";
import './styles.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <Suspense fallback={null}>
      <App />
    </Suspense>
  </StrictMode>
);
