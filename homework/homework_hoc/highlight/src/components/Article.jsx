import PropTypes from 'prop-types';

const propTypes = {
    title: PropTypes.string.isRequired,
    views: PropTypes.number.isRequired
};
  
const defaultProps = {
    title: "",
    views: 0
};

function Article(props) {
    return (
        <div className="item item-article">
            <h3><a href="#">{props.title}</a></h3>
            <p className="views">Прочтений: {props.views}</p>
        </div>
    )
};

Article.propTypes = propTypes;
Article.defaultProps = defaultProps;

export default Article