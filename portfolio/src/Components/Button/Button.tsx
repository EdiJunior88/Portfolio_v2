import { InterfaceButton } from "../../Interface/Interface";

const Button = ({ title, children, onClick, theme }: InterfaceButton) => {
  return (
    <button
      className={`button sm:w-56 w-40 rounded-lg bg-white p-2 border-zinc-200 border-solid border-2 background-button shadow-lg ${theme}`}
      onClick={onClick}>
      <div className='flex flex-col justify-center items-center gap-4'>
        {children}
        <p className='font-medium text-sm sm:text-lg'>{title}</p>
      </div>
    </button>
  );
};

export default Button;
