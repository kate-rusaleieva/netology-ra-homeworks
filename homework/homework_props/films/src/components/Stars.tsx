'use strict';

import Star from "./Star";

const defaultProps = {
    props: {
        count: 0
    }
};

type Props = { 
    count: number; 
}

const Stars = (props: Props) => {
    const countStars = props.count;
    let needShowStars = false;

    if( countStars > 0 && countStars <=5 ) {
        needShowStars = true;
    }

    if( needShowStars ) {
        const stars = [];
        for (let i = 0; i < countStars; i++) {
            stars.push( <li key={i}><Star /></li> );
        }

        return <ul className="card-body-stars u-clearfix">{stars}</ul>;
    } else {
        return <></>;
    }
}

Stars.defaultProps = defaultProps;

export default Stars;