import { FcBusinessman, FcFlowChart, FcIdea, FcServices } from "react-icons/fc";
import { SiWakatime } from "react-icons/si";
import {
  FaFreeCodeCamp,
  FaLinkedin,
  FaMicrosoft,
  FaSquareGithub,
  FaSquareInstagram,
} from "react-icons/fa6";
import {
  GoGitBranch,
  GoPersonAdd,
  GoSun,
  GoTrophy,
} from "react-icons/go";
import Avatar from "../../Components/Avatar/Avatar";
import Button from "../../Components/Button/Button";
import Mii from "../../assets/Image/Mii-transparente.webp";
import Icons from "../../Components/Icons/Icons";
import { useState } from "react";

const Home = () => {
  const [theme, setTheme] = useState("wiiu-theme");

  const toggleTheme = () => {
    setTheme(theme === "wiiu-theme" ? "switch-theme" : "wiiu-theme");
    console.log(theme);
  };

  return (
    <div className={`mx-auto p-4 w-full h-full background-home ${theme}`}>
      <div className='w-full h-full flex flex-col justify-evenly sm:justify-center items-center gap-10 sm:gap-12'>
        <Avatar
          src={Mii}
          alt='Mii avatar'
          name='Edivaldo Reis Moura Junior'
          description='Desenvolvedor Front-End + React + TypeScript'
        />

        <div className='container-button flex justify-center items-center flex-wrap gap-8'>
          <Button title='Habilidades' onClick={undefined}>
            {theme === "wiiu-theme" ? (
              <FcServices size={100} />
            ) : (
              <GoTrophy size={100} />
            )}
          </Button>

          <Button title='Projetos' onClick={undefined}>
            {theme === "wiiu-theme" ? (
              <FcFlowChart size={100} />
            ) : (
              <GoGitBranch size={100} />
            )}
          </Button>

          <Button title='Sobre Mim' onClick={undefined}>
            {theme === "wiiu-theme" ? (
              <FcBusinessman size={100} />
            ) : (
              <GoPersonAdd size={100} />
            )}
          </Button>

          <Button title='Tema' onClick={toggleTheme} theme={theme}>
            {theme === "wiiu-theme" ? (
              <FcIdea size={100} />
            ) : (
              <GoSun size={100} />
            )}
          </Button>
        </div>

        {theme === "switch-theme" && <span className='horizontal-line'></span>}

        <div className='flex justify-center items-center flex-wrap gap-x-10 gap-y-5'>
          <Icons title='GitHub' link='https://github.com/EdiJunior88'>
            <FaSquareGithub size={35} />
          </Icons>

          <Icons
            title='Instagram'
            link='https://www.instagram.com/edijunior88/'>
            <FaSquareInstagram size={35} />
          </Icons>

          <Icons
            title='Linkedin'
            link='https://www.linkedin.com/in/edivaldo-junior/'>
            <FaLinkedin size={35} />
          </Icons>

          <Icons title='WakaTime' link='https://wakatime.com/@EdiJunior'>
            <SiWakatime size={35} />
          </Icons>

          <Icons
            title='Microsoft Learn'
            link='https://learn.microsoft.com/pt-br/users/edijunior-5626/'>
            <FaMicrosoft size={35} />
          </Icons>

          <Icons
            title='FreeCodeCamp'
            link='https://www.freecodecamp.org/portuguese/edijunior88'>
            <FaFreeCodeCamp size={35} />
          </Icons>
        </div>
      </div>
    </div>
  );
};

export default Home;
