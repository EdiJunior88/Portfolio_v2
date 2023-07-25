import { InterfaceAvatar } from "../../Interface/Interface";

const Avatar = ({ src, alt }: InterfaceAvatar) => {
  return (
    <div className='image-glass-shadow'>
      <img
        className='rounded-3xl w-28 h-auto image-glass'
        src={src}
        alt={alt}
      />
    </div>
  );
};

export default Avatar;
