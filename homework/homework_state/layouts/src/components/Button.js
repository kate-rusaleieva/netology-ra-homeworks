function Button(props) {
    const { label } = props;

    return (
        <div>
             <button className="btn">
                {label}
                <span className="bg"/>
            </button>
        </div>
    );
}

export default Button;