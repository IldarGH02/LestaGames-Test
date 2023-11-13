import FilterOptions from "../../entities/Options";

interface FilterSelect {
    options: any
    className: string
    onChange: any
    defaultName: string
    valueSelect: string
}

const FilterSelect: React.FC<FilterSelect> = ({options, className, onChange, defaultName, valueSelect}) => {
    return (
        <select className={className} onChange={onChange} value={valueSelect}>
            <option selected={true} disabled={true}>{defaultName}</option>
            {options.map((option: string) => {
                return <FilterOptions option={option} key={option}/>
            })}
        </select>
    )
}

export default FilterSelect