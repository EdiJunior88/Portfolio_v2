import { FcBusinessman, FcFlowChart, FcIdea, FcServices } from "react-icons/fc";
import { SiWakatime } from "react-icons/si";
import {
  FaFreeCodeCamp,
  FaLinkedin,
  FaMicrosoft,
  FaSquareGithub,
  FaSquareInstagram,
} from "react-icons/fa6";
import Avatar from "../../Components/Avatar/Avatar";
import Button from "../../Components/Button/Button";
import Mii from "../../assets/Image/Mii-transparente.webp";
import Icons from "../../Components/Icons/Icons";

const Home = () => {
  return (
    <div className='mx-auto p-4 w-full h-full background-home'>
      <div className='w-full h-full flex flex-col justify-evenly sm:justify-center items-center gap-8 sm:gap-20'>
        <Avatar
          src={Mii}
          alt='Mii avatar'
          name='Edivaldo Reis Moura Junior'
          description='Desenvolvedor Front-End + React + TypeScript'
        />
        <div className='container-button flex justify-center items-center flex-wrap gap-8'>
          <Button title='Habilidades'>
            <FcServices size={100} />
          </Button>

          <Button title='Projetos'>
            <FcFlowChart size={100} />
          </Button>

          <Button title='Sobre Mim'>
            <FcBusinessman size={100} />
          </Button>

          <Button title='Tema'>
            <FcIdea size={100} />
          </Button>
        </div>

        <div className='flex justify-center items-center flex-wrap gap-x-10 gap-y-5 py-4'>
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
