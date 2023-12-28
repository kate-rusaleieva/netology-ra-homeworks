import PropTypes from 'prop-types';

const propTypes = {
    icon: PropTypes.string,
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
};

/* Компонент возвращает верстку для одной новости */
function NewListItem(props) {
    const {icon, text, link} = props; 
}

NewListItem.propTypes = propTypes;

export default NewListItem