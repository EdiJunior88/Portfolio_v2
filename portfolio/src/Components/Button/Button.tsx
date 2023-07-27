import { InterfaceButton } from "../../Interface/Interface";

const Button = ({ title, children }: InterfaceButton) => {
  return (
    <div>
      <button className='w-56 rounded-lg bg-white p-2 border-solid border-2 background-button'>
        <div className='flex flex-col justify-center items-center gap-4'>
          {children}
          <p className='font-medium text-lg'>{title}</p>
        </div>
      </button>
    </div>
  );
};

export default Button;
