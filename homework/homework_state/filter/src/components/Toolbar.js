function Toolbar(props) {    
    const { filters, selected, onSelectFilter } = props;

    function renderFilterOptions(filters) {
        return filters.map((filter, i) => {
            const className = ( filter === selected ? "filter-selected" : "filter" );
            return ( 
                <button 
                    className={className}
                    onClick={() => onSelectFilter(filter)}
                    id={filter}
                    key={`filter-${i}`}
                >
                    {filter}
                </button> 
            );
        });
    }

   return(
    <div className="toolbar">
        <div className="toolbar-filter-list">
            {renderFilterOptions(filters)}
        </div>
    </div>
   );
}

export default Toolbar;