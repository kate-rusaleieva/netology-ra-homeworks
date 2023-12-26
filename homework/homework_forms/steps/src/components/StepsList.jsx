import PropTypes from 'prop-types';

const propTypes = {
    items: PropTypes.array.isRequired,
    onClickDeleteItem: PropTypes.func.isRequired
};

const defaultProps = {
    items: [],
    onClickDeleteItem: () => { console.log( "default" ); }
};

function StepsList( props ) {
    function generateNewList(items) {
        let newList = [],
            newData = [];

        items.map((item, i) => {
            let itemKm = parseFloat(item.km);
    
            if (typeof newData[ item.date ] !== "undefined") {
                itemKm += parseFloat(newData[ item.date ]);
            }
            newData[ item.date ] = itemKm;
        });
    
        Object.keys(newData).sort(function(a, b) {
            return new Date( b ) - new Date( a );
        }).forEach(function(date) {
            newList.push( { date: date, km: newData[date] } );
        })

        return newList;
    }

    function renderItems(items, onClickDeleteItem ) {
        return items.map((item, i) => {
            return (
                <tr key={item.date}>
                    <td>{item.date}</td>
                    <td>{item.km}</td>
                    <td>
                        <button type="button" data-key={item.date} onClick={onClickDeleteItem}>Удалить</button>
                    </td>
                </tr>
            );
        });
    }

    const { items, onClickDeleteItem } = props;
    const newList = generateNewList( items );

    return(
        <div className="table-wrapper">
            <table>
                <thead>
                    <tr>
                        <td>Дата (ДД.ММ.ГГ)</td>
                        <td>Пройдено км</td>
                        <td>Действия</td>
                    </tr>
                </thead>
                <tbody>
                    {renderItems(newList, onClickDeleteItem)}                    
                </tbody>
            </table>
        </div>
    );
}


StepsList.defaultProps = defaultProps;
StepsList.propTypes = propTypes;

export default StepsList