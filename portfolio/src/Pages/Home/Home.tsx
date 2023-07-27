import { FcBusinessman, FcFlowChart, FcIdea, FcServices } from "react-icons/fc";
import Avatar from "../../Components/Avatar/Avatar";
import Button from "../../Components/Button/Button";
import Mii from "../../assets/Image/Mii-transparente.webp";

const Home = () => {
  return (
    <div className='mx-auto p-4 w-full h-screen background-home'>
      <div className='h-full flex flex-col sm:justify-center items-center  position-relative'>
        <div>
          <Avatar
            src={Mii}
            alt='Mii avatar'
            name='Edivaldo Reis Moura Junior'
            description='Desenvolvedor Front-End + React + TypeScript'
          />
        </div>

        <div className='container-button flex justify-center items-center flex-wrap gap-8 py-4 sm:py-14'>
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
      </div>
    </div>
  );
};

export default Home;
