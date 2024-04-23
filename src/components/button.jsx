import PropTypes from 'prop-types';

const Button = ({context = ''}) => {
  return (
    <div>
        <button className="main-button">{context}</button>
    </div>
  )
}

Button.propTypes = {
  context: PropTypes.string.isRequired
};

export default Button;
