import { useState } from 'react'
import PropTypes from 'prop-types';

const propTypes = {
    isWarning: PropTypes.bool.isRequired,
    color: PropTypes.string.isRequired,
    result: PropTypes.string.isRequired
};

const defaultProps = {
    isWarning: false,
    color: "#000000",
    result: ""
};

function Hex2Rgb() {
    function convert(hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        if (!result) {
            return null;
        }
        result.shift();
        return result ? `rgb(${result.map(i => parseInt(i, 16)).join(', ')})` : null;
    }
      
    function checkColor(color) {
        return /^#?([\da-f]{6})$/i.test(color);
    }
      
    function fixColor(color) {
        return color[0] === '#' ? color.slice(0, 7) : `#${color.slice(0, 6)}`;
    }
      
    function change(e) {
        const hex = e.target.value;
        if (checkColor(hex)) {
            setState({
                color: fixColor(hex),
                isWarning: false,
                result: convert(hex)
            });
        } else {
            setState({
                isWarning: true,
                color: fixColor(hex),
                result: 'Ошибка!'
            });
        }
    }


    const[state, setState] = useState({
        isWarning: false,
        color: defaultProps.color,
        result: convert(defaultProps.color)
    });

    const props = {};
    if (state.isWarning) {
      props.className = 'warning';
    } else {
      props.style = {
        backgroundColor: state.color
      };
    }

    return(
        <figure {...props}>
             <input
                onChange={change}
                type="text"
                className="hex-field js-hex-field"
                placeholder={state.color} />
            <div className="message js-message">{state.result}</div>
        </figure>
    );
}

Hex2Rgb.defaultProps = defaultProps;
Hex2Rgb.propTypes = propTypes;

export default Hex2Rgb
