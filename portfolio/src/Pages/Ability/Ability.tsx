import { useEffect, useState } from "react";
import Avatar from "../../Components/Avatar/Avatar";
import ButtonAbility from "../../Components/Button/ButtonAbility";
import Icons from "../../Components/Icons/Icons";
import { FaGithub } from "react-icons/fa6";
import { BiWorld } from "react-icons/bi";
import Mii from "../../assets/Image/Mii-transparente.webp";
import GitHubFinder from "../../assets/Image/GitHub-Finder.webp";
import ConsultaQuadrinhosV2 from "../../assets/Image/Consulta-Quadrinhos-v2-0.webp";

const Ability = () => {
  const [theme] = useState(localStorage.getItem("theme") || "wiiu-theme");

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className={`mx-auto p-4 w-full h-screen background-home ${theme}`}>
      <div className='w-full flex flex-col sm:justify-center items-center gap-10 sm:gap-12'>
        <Avatar
          src={Mii}
          alt='Mii avatar'
          name='Edivaldo Reis Moura Junior'
          description='Desenvolvedor Front-End + React + TypeScript'
        />

        <ButtonAbility
          image={GitHubFinder}
          text={
            "Um projeto que utiliza a API do GitHub para buscar um usuário e mostrar os 5 melhores repositórios com mais estrelas"
          }>
          <div className='flex flex-row justify-center gap-14'>
            <Icons
              title='Repositório'
              link='https://github.com/EdiJunior88/GitHub_Finder'>
              <FaGithub size={40} />
            </Icons>
            <Icons
              title='Site'
              link='https://githubfinder-edijunior88.netlify.app/'>
              <BiWorld size={40} />
            </Icons>
          </div>
        </ButtonAbility>

        <ButtonAbility
          image={ConsultaQuadrinhosV2}
          text={
            "Projeto Front-End (HTML, CSS, JavaScript, React, TypeScript e Material UI) com o objetivo de listar com detalhes todos as comics lançadas pela Editora Marvel até o ano atual, incluindo os nomes, ano de lançamento e autores de cada Comics, também tem uma página dedicada à todos os heróis, listadas em ordem alfabética."
          }>
          <div className='flex flex-row justify-center gap-14'>
            <Icons
              title='Repositório'
              link='https://github.com/EdiJunior88/GitHub_Finder'>
              <FaGithub size={40} />
            </Icons>
            <Icons
              title='Site'
              link='https://githubfinder-edijunior88.netlify.app/'>
              <BiWorld size={40} />
            </Icons>
          </div>
        </ButtonAbility>
      </div>
    </div>
  );
};

export default Ability;
