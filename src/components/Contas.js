import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../assets/styles/styleconta.css'; // Importe seu arquivo de estilo aqui
import '../assets/styles/styleformspoupanca.css';

const Contas = () => {
  const [activePoupForm, setActivePoupForm] = useState(false);
  const [loading, setLoading] = useState(true);
  const [poupancas, setPoupancas] = useState([]);
  const [poupancaClickedId , setPoupancaClickedId] = useState('');

  const handleFormToggle = () => {
    setActivePoupForm(!activePoupForm);
  };
  const handlePoupancaClick = (index) => {
    setPoupancaClickedId(index);
  }

  const handleFormSubmit = (event) => {
    event.preventDefault(); // Evita que o formulário recarregue a página
    handleFormToggle();
    const nome = event.target.nome.value;
    const saldo = parseFloat(event.target.saldoInicial.value);
    let token = localStorage.getItem('token');
    // Aqui você faria a requisição HTTP para criar a conta
    // Exemplo usando fetch:
    
    fetch('http://localhost:8083/api/poupanca', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ saldo, nome }),
    })
      .then(response => {
        if (response.ok) {
          console.log('Conta criada com sucesso!');
          // Lógica adicional após criar a conta, se necessário
        } else {
          console.error('Erro ao criar conta:', response.statusText);
        }
      })
      .catch(error => {
        console.error('Erro ao criar conta:', error);
      });
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        
        let token = localStorage.getItem('token');
        const response = await fetch(
          'http://localhost:8083/usuario',
          {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
           
          }
        );

        if (response.ok) {
          const data = await response.json();
      setPoupancas(data);
        } else {
          console.error('Erro ao obter os horários disponíveis.');
        }
      } catch (error) {
        console.error('Erro ao realizar a requisição:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [poupancas]);
  return (
    <div className="all">
      {activePoupForm && (
        <div className="container">
          <div className="card"></div>
          <div className="card">
            <h1 className="title">Criar Poupança</h1>
            <form onSubmit={handleFormSubmit}>
              <div className="input-container">
                <input type="text" id="nome" required="required" />
                <label htmlFor="nome">Nome</label>
                <div className="bar"></div>
              </div>
              <div className="input-container">
                <input type="number" id="saldoInicial" required="required" />
                <label htmlFor="saldoInicial">Saldo Inicial</label>
                <div className="bar"></div>
              </div>
              <div className="button-container">
                <button type="submit">
                  <span>Criar Conta</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <div className="containerZ">
        <div className="title">
          <h1>Contas</h1>
          <hr />
          <p>
            Nesta seção, você pode criar sua conta e começar a registrar suas
            transações. Gerencie suas finanças de forma simples e eficiente.
          </p>
        </div>
        <div className="section">
          <div className="column">
            <ul className="card">
              <li className="card-title poupanca">Poupança</li>
              {loading ? (
              <li>Carregando poupancas...</li>
            ) : (
              poupancas.map((poupanca, index) => (
  <li
    key={index}
    className={"schedule-item"}
    onClick={() => handlePoupancaClick(poupanca.id)}
  >
    <p>{poupanca.saldo} - {poupanca.nome}</p>
  </li>
))
              
            )}
              <li className="card-content"></li>
              <li className="card-content">
                <button className="button" onClick={handleFormToggle}>Criar Conta</button>
              </li>
            </ul>
          </div>
          <div className="column">
            <ul className="card">
              <li className="card-title green transacoes">Transações</li>
              <li className="card-content">Transação 1</li>
              <li className="card-content">
                <button className="button">Adicionar Transações</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contas;
