import { useEffect, useState } from "react";
import Avatar from "../../Components/Avatar/Avatar";
import ButtonProjects from "../../Components/Button/ButtonProjects";
import Icons from "../../Components/Icons/Icons";
import { FaGithub } from "react-icons/fa6";
import { BiWorld } from "react-icons/bi";
import Mii from "../../assets/Image/Mii-transparente.webp";
import GitHubFinder from "../../assets/Image/GitHub-Finder.webp";
import ConsultaQuadrinhosV2 from "../../assets/Image/Consulta-Quadrinhos-v2-0.webp";
import NinjaList from "../../assets/Image/ninja-list.webp";
import AluraTubeV2 from "../../assets/Image/aluratube-v2.webp";

const Projects = () => {
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

        <ButtonProjects
          image={GitHubFinder}
          text={
            "O GitHub Finder é um aplicativo desenvolvido para facilitar a busca e o acesso a informações de repositórios e usuários do GitHub. Ele permite que os usuários localizem perfis de desenvolvedores, mostrando os 5 melhores repositórios com mais estrelas"
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
        </ButtonProjects>

        <ButtonProjects
          image={ConsultaQuadrinhosV2}
          text={
            "Projeto Front-End com o objetivo de listar com detalhes todos as comics lançadas pela Editora Marvel até o ano atual, incluindo os nomes, ano de lançamento e autores de cada Comics, também tem uma página dedicada à todos os heróis, listadas em ordem alfabética."
          }>
          <div className='flex flex-row justify-center gap-14'>
            <Icons
              title='Repositório'
              link='https://github.com/EdiJunior88/Consulta_Quadrinhos_v2'>
              <FaGithub size={40} />
            </Icons>
            <Icons
              title='Site'
              link='https://consultaquadrinhosv2.netlify.app/'>
              <BiWorld size={40} />
            </Icons>
          </div>
        </ButtonProjects>

        <ButtonProjects
          image={NinjaList}
          text={
            "O aplicativo Ninja List irá te ajudar na hora de lembrar ou adicionar produtos na lista de compras, você inclusive poderá ver com mais detalhes o dia / semana / mês / ano de cada lista de compras."
          }>
          <div className='flex flex-row justify-center gap-14'>
            <Icons
              title='Repositório'
              link='https://github.com/EdiJunior88/hackathon-listaProdutos'>
              <FaGithub size={40} />
            </Icons>
            <Icons title='Site' link='https://hackathon-ninjalist.netlify.app/'>
              <BiWorld size={40} />
            </Icons>
          </div>
        </ButtonProjects>

        <ButtonProjects
          image={AluraTubeV2}
          text={
            "Um projeto que simula um app do Youtube registrando o título e url de qualquer vídeo que podem ser adicionados à página principal. O app possui total responsividade para dispositivos mobile e desktop, incluindo também o botão 'modo noturno' deixando a página mais confortável visualmente."
          }>
          <div className='flex flex-row justify-center gap-14'>
            <Icons
              title='Repositório'
              link='https://github.com/EdiJunior88/Aluratube_v2'>
              <FaGithub size={40} />
            </Icons>
            <Icons title='Site' link='https://aluratube-v2.netlify.app/'>
              <BiWorld size={40} />
            </Icons>
          </div>
        </ButtonProjects>
      </div>
    </div>
  );
};

export default Projects;
