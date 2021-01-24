import React from "react";

import { ReactComponent as Logo } from "./logo.svg";

function StepsHeader() {
  return (
    <header className="orders-steps-container">
      <div className="orders-steps-content">
        <h1 className="steps-title">
          SIGA AS <br />
          ETAPAS
        </h1>
        <ul className="steps-items">
          <li>
            <span className="steps-number">1</span>
            Selecione os produtos e Localização
          </li>
          <li>
            <span className="steps-number">2</span>
            Depois clique em <strong> Enviar Pedido</strong>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default StepsHeader;
