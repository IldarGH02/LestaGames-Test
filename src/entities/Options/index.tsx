interface IOption {
    option: string
}

const FilterOptions: React.FC<IOption> = ({option}) => {
    return (
        <option className='ship__filter' value={option}>{option}</option>
    )
}

export default FilterOptions