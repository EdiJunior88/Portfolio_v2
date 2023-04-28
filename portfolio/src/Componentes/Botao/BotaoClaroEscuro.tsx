import React, { FC, useState } from "react";
import { InterfaceBotaoClaroEscuro } from "../../Interfaces/Interface";

const BotaoClaroEscuro: FC<InterfaceBotaoClaroEscuro> = ({ tema }) => {
  const [ligado, setLigado] = useState(false);

  const statusBotao = () => {
    setLigado(!ligado);
    tema(!ligado);
  };

  return (
    <div className='relative inline-block w-12 align-middle select-none'>
      <input
        type='checkbox'
        className='botao-checkbox hidden'
        id='botao'
        name='botao'
        checked={ligado}
        onChange={statusBotao}
      />

      <label
        htmlFor='botao'
        className={`${
          ligado ? "" : "bg-gray-400"
        } block overflow-hidden h-6 rounded-full bg-gray-400 cursor-pointer`}>
        <span
          className={`${
            ligado ? "translate-x-6 bg-red-800" : "translate-x-0"
          } inline-block w-6 h-6 transform bg-white rounded-full transition-transform duration-200 ease-in`}>
          {!ligado ? "☀️" : "🌙"}
        </span>
      </label>
    </div>
  );
};

export default BotaoClaroEscuro;
