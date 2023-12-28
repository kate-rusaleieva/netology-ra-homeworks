import { ReactNode } from "react";

const defaultProps = {
    title: "Text",
    text: "Text",
    button: "Text"
};

type Props = {
    children: ReactNode;
    title: string;
    text: string;
    button: string
}


function Card(props: Props) {
    return(
        <div className="card">
            <div className="card-body">
                {props.children}
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.text}</p>
                <a href="#" className="btn btn-primary">{props.button}</a>
            </div>
        </div>
    );
};


Card.defaultProps = defaultProps;

export default Card