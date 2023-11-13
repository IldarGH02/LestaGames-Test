interface IButton {
    className: string
    onClick: any
    buttonName: string
}

export const ButtonUi: React.FC<IButton> = ({className, onClick, buttonName}) => {
    return (
        <button className={className} onClick={onClick}>{buttonName}</button>
    )
}