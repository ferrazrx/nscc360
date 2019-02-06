import PropTypes from "prop-types";

const propTypes = {
  scene: PropTypes.shape({
    wing: PropTypes.string,
    floor: PropTypes.string,
    sceneID: PropTypes.string
  }).isRequired,
  handleClickScene: PropTypes.func.isRequired // function handleClickScene created at Map Container
};

export default propTypes;
