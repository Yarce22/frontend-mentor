import PropTypes from "prop-types"

const SocialLogos = ({ logoIcon, logoName, w, h }) => {
  return(
    <>
      <img className={`${w && 'w-[73px]'} ${h && 'h-[10px]' || 'h-full'}`} src={logoIcon} alt={logoName} />
    </>
  )
}

SocialLogos.propTypes = {
  logoIcon: PropTypes.string,
  logoName: PropTypes.string,
  w: PropTypes.string,
  h: PropTypes.string,
}

export { SocialLogos }