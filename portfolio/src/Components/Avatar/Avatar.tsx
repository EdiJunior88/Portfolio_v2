import { useNavigate } from "react-router-dom";
import { InterfaceAvatar } from "../../Interface/Interface";

const Avatar = ({ src, alt, name, description }: InterfaceAvatar) => {
  const navigate = useNavigate();

  const changePageHome = () => {
    navigate("/");
  };

  return (
    <button onClick={changePageHome}>
      <div className='container w-11/12 sm:w-full h-auto flex flex-row justify-center gap-2'>
        <div className='avatar w-28 background-button rounded-lg shadow-lg'>
          <img className='py-4' src={src} alt={alt} />
        </div>
        <div className='avatar-container-description bg-white w-full h-auto sm:w-96 rounded-lg shadow-lg flex flex-col justify-center items-center gap-2 background-shadow'>
          <p className='avatar-name sm:text-2xl font-bold'>{name}</p>
          <p className='avatar-description sm:text-sm text-[10px] text-gray-500'>
            {description}
          </p>
        </div>
      </div>
    </button>
  );
};

export default Avatar;
