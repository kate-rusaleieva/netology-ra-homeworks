import PropTypes from 'prop-types';

const propTypes = {
    date: PropTypes.string.isRequired
};
  
const defaultProps = {
    date: ""
};

function DateTime(props) {
    return (
        <p className="date">{props.date}</p>
    )
}

DateTime.propTypes = propTypes;
DateTime.defaultProps = defaultProps;

export default DateTime