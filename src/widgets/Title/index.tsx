interface ITitle {
    className: string,
    titleName: string
}

export const Title: React.FC<ITitle> = ({className, titleName}) => {
    return (
        <h2 className={className}>
            {titleName}
        </h2>
    )
}