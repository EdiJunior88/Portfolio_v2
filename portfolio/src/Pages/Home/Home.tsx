import { FcBusinessman, FcFlowChart, FcIdea, FcServices } from "react-icons/fc";
import Avatar from "../../Components/Avatar/Avatar";
import Button from "../../Components/Button/Button";
import Mii from "../../assets/Image/Mii-transparente.webp";

const Home = () => {
  return (
    <div className='mx-auto w-full h-screen background-home flex justify-center items-center '>
      <div className='container h-auto px-4'>
        <div className='w-full flex justify-center items-center'>
          <Avatar
            src={Mii}
            alt='Mii avatar'
            name='Edivaldo Reis Moura Junior'
            description='Desenvolvedor Front-End + React + TypeScript'
          />
        </div>

        <div className='container flex flex-wrap justify-center gap-10 py-10'>
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
