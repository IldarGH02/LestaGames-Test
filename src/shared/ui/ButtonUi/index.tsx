import React from "react";

interface IButton {
    className: string
    onClick: React.MouseEventHandler<HTMLButtonElement>
    buttonName: string
}

export const ButtonUi: React.FC<IButton> = ({className, onClick, buttonName}) => {
    return (
        <button className={className} onClick={onClick}>{buttonName}</button>
    )
}