import React from 'react';
import '../assets/styles/styleheader.css';
const Header = () => {
  return (
    <div id="nav-bar">
      <input id="nav-toggle" type="checkbox" />
      <div id="nav-header">
        <a id="nav-title" href="https://codepen.io" target="_blank">ECONOMIZE JÁ</a>
        <hr/>
      </div>
      <div id="nav-content">
        <div className="nav-button"><i className="bi bi-columns-gap"></i><span>Dashboard</span></div>
        <div className="nav-button"><i className="bi bi-piggy-bank"></i><span>Contas</span></div>
        <div className="nav-button"><i className="bi bi-clipboard-data"></i><span>Relatório</span></div>
        <hr/>
        <div className="nav-button"><i className="bi bi-chat-left-text"></i><span>FeedBack</span></div>
        <div className="nav-button"><i className="bi bi-person"></i><span>Conta</span></div>
        <div id="nav-content-highlight"></div>
      </div>
      <input id="nav-footer-toggle" type="checkbox" />
      <div id="nav-footer">
        <div id="nav-footer-heading">
          <div id="nav-footer-avatar"><img src="https://gravatar.com/avatar/4474ca42d303761c2901fa819c4f2547" alt="avatar" /></div>
          <div id="nav-footer-titlebox"><a id="nav-footer-title" href="#" target="_blank">uahnbu</a><span id="nav-footer-subtitle">Admin</span></div>
          <label htmlFor="nav-footer-toggle"><i className="bi bi-caret-up"></i></label>
        </div>
        <div id="nav-footer-content">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
