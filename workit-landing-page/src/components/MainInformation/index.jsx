import PropTypes from 'prop-types';

const MainInformation = ({ index, title, info }) => {
  return (
    <article className="flex flex-col md:flex-row lg:flex-col lg:text-center items-center gap-6 md:gap-14 text-Purple900">
      <div className="grid place-content-center min-w-12 h-12 rounded-full border-solid border-Purple908 border text-xl">
        <p>{index}</p>
      </div>
      <div className='md:flex md:flex-col md:gap-7'>
        <h2 className="font-medium text-2xl lg:text-[32px]">{title}</h2>
        <p className="text-center md:text-left lg:text-center font-Manrope font-medium text-[15px] lg:text-lg leading-7">{info}</p>
      </div>
    </article>
  );
};

MainInformation.propTypes = {
  index: PropTypes.number,
  title: PropTypes.string,
  info: PropTypes.string
};

export default MainInformation;