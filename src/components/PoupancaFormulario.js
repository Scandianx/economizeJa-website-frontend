import React from 'react';
import '../assets/styles/styleformspoupanca.css'; // Importe seu arquivo de estilo aqui

const FormularioPoupanca = () => {
  return (
    <div className="container">
      <div className="card"></div>
      <div className="card">
        <h1 className="title">Criar Poupança</h1>
        <form>
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
  );
};

export default FormularioPoupanca;