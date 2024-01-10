import PropTypes from 'prop-types';

const propTypes = {
    url: PropTypes.string.isRequired,
    views: PropTypes.number.isRequired
};
  
const defaultProps = {
    url: "",
    views: 0
};

function Video(props) {
    return (
        <div className="item item-video">
            <iframe src={props.url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            <p className="views">Просмотров: {props.views}</p>
        </div>
    )
};

Video.propTypes = propTypes;
Video.defaultProps = defaultProps;

export default Video