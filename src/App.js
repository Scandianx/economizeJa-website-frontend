import logo from './logo.svg';
import './App.css';
import Login from './pages/Login';
import CentralPage from './pages/CentralPage';
import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const handleLoginSuccess = () => {
    setAuthenticated(true);
    toast.success("Login efetuado com sucesso", {
      position: "top-right", // Define a posição do toast para o canto superior direito
      autoClose: 3000, // Fecha automaticamente após 3 segundos
      hideProgressBar: false, // Exibe a barra de progresso
      
      
      
    });
  }
  const handleLoginError = () => {
    toast.error("Sua senha ou usuário estão errados", {
      position: "top-right", // Define a posição do toast para o canto superior direito
      autoClose: 3000, // Fecha automaticamente após 3 segundos
      hideProgressBar: false, // Exibe a barra de progresso
      
      
      
    });
  }
  const handleLogout = () => {
    setAuthenticated(false);
  }
  return (
    
    <div className="app"> <ToastContainer />
      {authenticated ? (
        
      <CentralPage/>
    ) : (
      <Login onLoginSuccess={handleLoginSuccess} onLoginError={handleLoginError} />
    )}</div>
  );
}


export default App;
