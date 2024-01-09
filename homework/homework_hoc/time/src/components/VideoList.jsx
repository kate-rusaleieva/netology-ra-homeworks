import Video from "./Video";
import PropTypes from 'prop-types';

const propTypes = {
    list: PropTypes.array.isRequired
};
  
const defaultProps = {
    list: []
};

function VideoList(props) {
    return props.list.map(item => 
        <Video 
            key={item.id}
            url={item.url} 
            date={item.date}
        />
    );
}

VideoList.propTypes = propTypes;
VideoList.defaultProps = defaultProps;

export default VideoList