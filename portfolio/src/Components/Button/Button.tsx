const Button = () => {
  return (
    <div className='container h-screen flex flex-col justify-center'>
      <div className='flex justify-around flex-col items-start gap-5'>
        <button className='w-full rounded-lg bg-white p-2 border-solid border-2 border-sky-500 drop-shadow-[5px_5px_0px_rgba(69,113,247,1)]'>
          Habilidades
        </button>
        <button className='w-full rounded-lg bg-white p-2 border-solid border-2 border-sky-500 drop-shadow-[5px_5px_0px_rgba(69,113,247,1)]'>
          Projetos
        </button>
        <button className='w-full rounded-lg bg-white p-2 border-solid border-2 border-sky-500 drop-shadow-[5px_5px_0px_rgba(69,113,247,1)]'>
          Sobre Mim
        </button>
        <button className='w-full rounded-lg bg-white p-2 border-solid border-2 border-sky-500 drop-shadow-[5px_5px_0px_rgba(69,113,247,1)]'>
          Contato
        </button>
      </div>
    </div>
  );
};

export default Button;
