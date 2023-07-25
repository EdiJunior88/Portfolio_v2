import {
  FcBusinessman,
  FcFlowChart,
  FcIdea,
  FcServices,
} from "react-icons/fc";
import Avatar from "../../Components/Avatar/Avatar";
import Button from "../../Components/Button/Button";
import Mii from "../../assets/Mii.webp";

const Home = () => {
  return (
    <div className='container mx-auto p-4'>
      <div className="w-full flex justify-center items-center">
        <Avatar src={Mii} alt='Mii avatar' />
      </div>

      <div className='container flex flex-wrap justify-center gap-10 pt-4'>
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
  );
};

export default Home;
