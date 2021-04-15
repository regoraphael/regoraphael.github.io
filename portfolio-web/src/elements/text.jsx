import React from 'react';

const Text = () => (
  <div className="text">
    <div className="text-about">
      <p>
        Formado em Administração de Empresas e apaixonado por tecnologia com foco no
        Desenvolvimento de soluções Web.
      </p>

      <p>
        Minha trajetória profissional se iniciou pela minha paixão em empreender, administrei
        uma loja on-line de perfumes, loja de artigo de celulares e por fim uma espetaria.
      </p>
      <p>
        Sempre tive habilidade e um forte interesse com tecnologia e decidi focar na área.
      </p>
      <p>
        Atualmente sou estudante de
        <em> Desenvolvimento de Software </em>
        da
        <strong> Trybe </strong>
        e todos os meus interesses estão voltados para esse ramo.
      </p>
    </div>
    <div className="text-tips">
      <p className="titles">Pontos Fortes:</p>
      <ul className="lista" id="ptforte">
        <li>Facilidade de aprendizado</li>
        <li>Disposto à novos desafios</li>
        <li>Visão Positiva</li>
        <li>Inglês Intermediário</li>
        <li>Proatividade</li>
        <li>Facilidade em solucionar problemas</li>
      </ul>
    </div>
  </div>
);

export default Text;
