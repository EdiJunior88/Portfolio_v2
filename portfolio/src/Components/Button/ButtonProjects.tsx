import { InterfaceButtonAbility } from "../../Interface/Interface";

const ButtonProjects = ({ image, text, children }: InterfaceButtonAbility) => {
  return (
    <div className='background-shadow flex justify-center items-center flex-wrap rounded-lg gap-6 p-6'>
      <div
        className='w-56 h-56 bg-cover bg-center bg-no-repeat rounded-lg'
        style={{ backgroundImage: `url(${image})` }}></div>
      <div className='flex flex-col w-96 gap-6'>
        <p className='font-medium text-justify indent-4'>{text}</p>
        {children}
      </div>
    </div>
  );
};

export default ButtonProjects;
