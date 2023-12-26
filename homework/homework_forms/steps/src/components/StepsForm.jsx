import { useState } from "react";
import StepsList from "./StepsList";

function StepsForm() {
    const [form, setForm] = useState({
        date: '',
        km: ''
    });

    const [stepsList, setList] = useState([]);

    function onClickDeleteItem(e) {
        const deleteItem = e.target.getAttribute( 'data-key' );
        let newData = [];

        stepsList.map((item, i) => {
            if( item.date !== deleteItem ) {
              newData.push( item );
            }
        });

        setList( newData );
    }

    function onSubmit(evt) {
        evt.preventDefault();
        stepsList.push( form );
        setList( prevForm => ([...prevForm]));
    }

    function handleInputChange(e) {
        const {name, value} = e.target;
        setForm( prevForm => ({...prevForm, [name]: value}));
    }

    return(
        <div className="steps-wrapper">
            <div>
                <form className="form" onSubmit={onSubmit}>
                    <div className="field-wrapper">
                        <label htmlFor="date">Дата (ДД.ММ.ГГ)</label>
                        <input
                            id="date" 
                            name="date"
                            onChange={handleInputChange} />
                    </div>
                    <div className="field-wrapper">
                        <label htmlFor="km">Пройдено км</label>
                        <input
                            id="km" 
                            name="km"
                            onChange={handleInputChange} />
                    </div>
                    <div className="field-wrapper">
                        <button type="submit">OK</button>
                    </div>
                </form>
            </div>
            <StepsList 
                items={stepsList} 
                onClickDeleteItem={(e) => onClickDeleteItem(e)} />
        </div>
    );

}

export default StepsForm