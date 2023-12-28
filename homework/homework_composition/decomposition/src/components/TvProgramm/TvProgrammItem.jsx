import PropTypes from 'prop-types';

const propTypes = {
    time: PropTypes.string,
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    channel: PropTypes.string.isRequired
};


/* Компонент возвращает элемент списка */
function TvProgrammItem () {

}

TvProgrammItem.propTypes = propTypes;

export default TvProgrammItem