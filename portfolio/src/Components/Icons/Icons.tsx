import { InterfaceIcons } from "../../Interface/Interface";

const Icons = ({ children, title, link }: InterfaceIcons) => {
  return (
    <div>
      <a className='flex flex-col' href={link} target='_blank'>
        <button>
          <div className='icons flex flex-col justify-center items-center text-[10px] sm:text-base gap-2'>
            {children}
            {title}
          </div>
        </button>
      </a>
    </div>
  );
};

export default Icons;
