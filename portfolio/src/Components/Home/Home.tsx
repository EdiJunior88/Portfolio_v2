import LateralDescription from "../LateralDescription/LateralDescription";
import LateralMenu from "../LateralMenu/LateralMenu";

const Home = () => {
  return (
    <div className='container h-screen max-h-screen p-4 flex items-center'>
      <LateralMenu />
      <LateralDescription />
    </div>
  );
};

export default Home;
