import PropTypes from 'prop-types';

const propTypes = {
    children: PropTypes.object.isRequired
};
  
const defaultProps = {
    children: {},
};

function Popular(props) {
    return (
        <div className="wrap-item wrap-item-popular">
            <span className="label">Popular!</span>
            {props.children}
        </div>
    )
};

Popular.propTypes = propTypes;
Popular.defaultProps = defaultProps;

export default Popular