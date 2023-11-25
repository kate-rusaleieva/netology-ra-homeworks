import { useState } from "react";
import IconSwitch from "./IconSwitch";
import CardsView from "./CardsView";
import ListView from "./ListView";

const VIEW_LIST = "view_list";
const VIEW_MODULE = "view_module";

function Store(props) {
    const [ view, setView ] = useState(VIEW_MODULE);
    const { products } = props;

    function getTypeView(view) {
        if(view === VIEW_LIST) {
            return(
                <ListView items={products} />
            );
        } else {
            return(
                <CardsView cards={products} />
            );
        }
    };

    function onSwitch(view) {
        view = ( view === VIEW_LIST ? VIEW_MODULE : VIEW_LIST );
        setView(view)
    }


    return(
        <div className="office__body">
            <IconSwitch 
                icon={( view === VIEW_LIST ? VIEW_MODULE : VIEW_LIST )} 
                onSwitch={() => onSwitch(view)}
            />
            {getTypeView(view)}
        </div>
    );
}

export default Store;