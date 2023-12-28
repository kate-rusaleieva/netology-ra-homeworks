import PropTypes from 'prop-types';

const propTypes = {
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired, // Телепрограмма или Эфир
};


/* Компонент возвращает блок Телепрограмма и Эфир */
function TvProgramm ({ props }) {

}

TvProgramm.propTypes = propTypes;

export default TvProgramm