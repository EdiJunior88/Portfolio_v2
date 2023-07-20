import PhotoProfile from "../../assets/PhotoProfile.webp";

const LateralDescription = () => {
  return (
    <div className='container w-full h-full px-4 flex flex-col justify-center items-center'>
      <div className='container w-1/3'>
        <img
          className='rounded-xl object-cover'
          src={PhotoProfile}
          alt='photo profile'
        />
      </div>

      <div>
        <p>
          Formado em Análise e Desenvolvimento de Sistemas pela Universidade
          Estácio de Sá e estudando diversas tecnologias Front-End e Back-End
          através da NewTab Academy.
        </p>
      </div>
    </div>
  );
};

export default LateralDescription;
