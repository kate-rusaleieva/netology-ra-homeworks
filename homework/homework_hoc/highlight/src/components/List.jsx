import Video from "./Video"
import Article from "./Article"
import Popular from "./Popular"
import New from "./New"
import PropTypes from 'prop-types';

const propTypes = {
    list: PropTypes.array.isRequired
};
  
const defaultProps = {
    list: []
};

function withFrame(Component) {
    return function (props) {
        const countView = props.views,
            newProps = {};

        if(countView < 100) {
            return(
                <New>
                    <Component {...props} {...newProps} />
                </New>
            );
        } else if(countView > 1000) {
            return(
                <Popular>
                    <Component {...props} {...newProps} />
                </Popular>
            );
        } else {
            return <Component {...props} {...newProps} />
        }
    }
}

function List(props) {
    return props.list.map(item => {
        switch (item.type) {
            case 'video':
                const VideoWithFrame = withFrame(Video);
                return (
                    <VideoWithFrame 
                        key={item.id}
                        {...item}
                    />
                );

            case 'article':
                const ArticleWithFrame = withFrame(Article);
                return (
                    <ArticleWithFrame 
                        key={item.id}
                        {...item}
                    />
                );
        }
    });
};

List.propTypes = propTypes;
List.defaultProps = defaultProps;

export default List