import DateTime from "./DateTime"
import moment from 'moment'
import PropTypes from 'prop-types';

const propTypes = {
    id: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
};
  
const defaultProps = {
    id: 0,
    url: "",
    date: ""
};

function withDateFormat(Component) {
    return function (props) {
        const dateMoment = moment(props.date), 
            timeDiff = moment().diff(dateMoment, 'hours'),
            newProps = {};
    
        if(timeDiff < 1) {
            newProps.date = "12 минут назад";
        } else if(timeDiff > 1 && timeDiff < 24) {
            newProps.date = "5 часов назад";
        } else {
            newProps.date = `${moment().diff(dateMoment, 'days')} дней назад`;
        }

        return <Component {...props} {...newProps} />
    }
}


function Video(props) {
    const DateTimePretty = withDateFormat(DateTime);

    return (
        <div className="video">
            <iframe src={props.url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            <DateTimePretty {...props} />
        </div>
    )
}


Video.propTypes = propTypes;
Video.defaultProps = defaultProps;

export default Video