import { InterfaceAvatar } from "../../Interface/Interface";

const Avatar = ({ src, alt }: InterfaceAvatar) => {
  return (
    <div className='background-button rounded-lg'>
      <img className='w-28 h-auto py-4' src={src} alt={alt} />
    </div>
  );
};

export default Avatar;
