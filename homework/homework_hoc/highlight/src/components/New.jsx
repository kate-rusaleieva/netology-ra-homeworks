import PropTypes from 'prop-types';

const propTypes = {
    children: PropTypes.object.isRequired
};
  
const defaultProps = {
    children: {},
};


function New(props) {
    return (
        <div className="wrap-item wrap-item-new">
            <span className="label">New!</span>
            {props.children}
        </div>
    )
};

New.propTypes = propTypes;
New.defaultProps = defaultProps;

export default New