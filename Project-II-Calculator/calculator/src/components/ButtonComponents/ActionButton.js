import React from 'react';
import './Button.scss';

const ActionButton = props => {
    return (
        <button className={props.actionButtonStyle}>{props.text}</button>
    );
}

ActionButton.defaultProps = {
    actionButtonStyle: 'actionButton'
}

export default ActionButton;