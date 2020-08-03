import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './style.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://i.pinimg.com/564x/76/ba/a5/76baa516aacffac4c56e5cead2e18d78.jpg" alt="Foto perfil mario" />
        <div>
          <strong>Mario</strong>
          <span>Nintendo</span>
        </div>
      </header>
      <p>
        Encanador e nas horas vagas salvador de princesas e mundo, este sou eu super Mario <br /> Que te comeu atras do
        super armário
      </p>
      <footer>
        <p>
          Preço/hora
          <strong>R$ 30,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Icone whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
