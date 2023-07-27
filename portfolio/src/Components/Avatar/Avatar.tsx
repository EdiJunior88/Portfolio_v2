import { InterfaceAvatar } from "../../Interface/Interface";

const Avatar = ({ src, alt, name, description }: InterfaceAvatar) => {
  return (
    <div className='container w-11/12 sm:w-full h-auto flex flex-row justify-center gap-2'>
      <div className='w-28 background-button rounded-lg shadow-lg'>
        <img className='py-4' src={src} alt={alt} />
      </div>

      <div className='bg-white w-full h-auto sm:w-96 rounded-lg shadow-lg flex flex-col justify-center items-center gap-2 title-avatar '>
        <p className='sm:text-2xl font-bold'>{name}</p>
        <p className='sm:text-sm text-[10px] text-gray-500'>{description}</p>
      </div>
    </div>
  );
};

export default Avatar;
