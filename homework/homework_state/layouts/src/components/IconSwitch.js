function IconSwitch(props) {
    const { icon, onSwitch } = props;

    return(
        <div className="toolbar">
            <div className="switch-view">
                <i className="material-icons" onClick={onSwitch}>
                    {icon}
                </i>
            </div>
        </div>
    );
}

export default IconSwitch;