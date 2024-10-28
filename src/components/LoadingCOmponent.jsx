import PropTypes from 'prop-types';

export const LoadingComponent = ({ isLoading })  => (
  isLoading ? <h2>Loading....</h2> : null
);

LoadingComponent.propTypes = {

  isLoading: PropTypes.bool.isRequired,

};
