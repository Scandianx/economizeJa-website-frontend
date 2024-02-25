import React, { useState } from 'react';
import '../assets/styles/login.css'; // Importe seu arquivo CSS aqui

const Login = ({onLoginSuccess, onLoginError}) => {
  const [activeTab, setActiveTab] = useState('login');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };
  const toggleTab = () => {
    setActiveTab(activeTab === 'login' ? 'register' : 'login');
  };
  const handleLogin = () => {
    // Substitua a URL da API pelo seu endpoint real
    const apiUrl = "http://localhost:8083/auth/login";
    
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          onLoginError();
          throw new Error(`Erro HTTP! Status: ${response.status}`);
          
        }
        return response.json();
      })
      .then((data) => {
        if (data.token) {
            
          localStorage.setItem('token', data.token);
          onLoginSuccess();
          
        } else {
            onLoginError();
        }
      })
      .catch((error) => {
        console.error('Erro:', error);
        onLoginError();
      });
  };
  const handleRegister = () => {
    // Substitua a URL da API pelo seu endpoint real
    const apiUrl = "http://localhost:8083/auth/register";
    
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password,
        fullName: fullName,
      }),
    })
      .then((response) => {
        if (!response.ok) {
            onLoginError();
        }
        return response.json();
      })
      .then((data) => {
        if (data.token) {
            
          localStorage.setItem('token', data.token);
          onLoginSuccess();
          
        } else {
            onLoginError();
          
        }
      })
      .catch((error) => {
        console.error('Erro:', error);
      });
  };

  return (
    <div className="corpo">
    <div className={`container ${activeTab === 'register' ? 'active' : ''}`}>
      <div className="form-container sign-up">
        <form onSubmit={handleFormSubmit}>
          <h1>Criar Conta</h1>
          <span>Ou use seu e-mail para se registrar</span>
          <input type="text" placeholder="Nome" value={fullName} onChange={handleFullNameChange} required />
          <input type="email" placeholder="Email" value={username} onChange={handleUsernameChange} required />
          <input type="password" placeholder="Senha" value={password} onChange={handlePasswordChange} required/>
          <button onClick={handleRegister}>Cadastrar-se</button>
        </form>
      </div>
      <div className="form-container sign-in">
        <form onSubmit={handleFormSubmit}>
          <h1>Login</h1>
          <span>ou use sua senha de e-mail</span>
          <input type="email" placeholder="Email" value={username} onChange={handleUsernameChange} required />
          <input type="password" placeholder="Senha" value={password} onChange={handlePasswordChange} required/>
          <a href="#">Esqueceu sua senha?</a>
          <button onClick={handleLogin}>Login</button>
        </form>
      </div>
      <div className="toggle-container">
        <div className="toggle">
          <div className={`toggle-panel toggle-left ${activeTab === 'login' ? 'active' : ''}`}>
            <h1>Bem vindo de volta!</h1>
            <button className="hidden" onClick={toggleTab}>Login</button>
          </div>
          <div className={`toggle-panel toggle-right ${activeTab === 'register' ? 'active' : ''}`}>
            <h1>Olá,</h1>
            <p>Entre com seus dados pessoais para ter acesso total</p>
            <button className="hidden" onClick={toggleTab}>Cadastrar-se</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Login;
