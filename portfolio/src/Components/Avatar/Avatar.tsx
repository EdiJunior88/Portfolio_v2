import { InterfaceAvatar } from "../../Interface/Interface";

const Avatar = ({ src, alt, name, description }: InterfaceAvatar) => {
  return (
    <div className='container flex justify-center'>
      <div className='background-button rounded-lg shadow-lg'>
        <img className='w-28 h-auto py-4' src={src} alt={alt} />
      </div>

      <div className='bg-white w-96 mx-4 rounded-lg shadow-lg flex flex-col justify-center  gap-2 items-center title-avatar '>
        <p className='text-2xl font-bold'>{name}</p>
        <p className='text-sm text-gray-500'>{description}</p>
      </div>
    </div>
  );
};

export default Avatar;
