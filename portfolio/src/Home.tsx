import React, { FC, useEffect, useState } from "react";
import BotaoClaroEscuro from "./Componentes/Botao/BotaoClaroEscuro";

const Home: FC = () => {
  const [temaEscuro, setTemaEscuro] = useState(false);

  const mudarTema = (ligado: boolean) => {
    setTemaEscuro(ligado);
  };

  // Adiciona classe dark no body
  // caso o tema escuro seja ligado
  useEffect(() => {
    const root = document.documentElement;

    if (temaEscuro) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [temaEscuro]);

  return (
    <div
      className={`h-screen ${
        temaEscuro ? "bg-gray-950 text-white" : "bg-gray-100"
      }`}>
      <BotaoClaroEscuro tema={mudarTema} />
    </div>
  );
};

export default Home;
