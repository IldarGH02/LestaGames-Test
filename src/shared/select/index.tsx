import React from "react";
import FilterOptions from "../../entities/Options";

interface IFilterSelect {
    options: string[] | number[]
    className: string
    onChange: React.ChangeEventHandler<HTMLSelectElement> | undefined
    defaultName: string
    valueSelect: string
}

const FilterSelect: React.FC<IFilterSelect> = ({
       options,
       className,
       onChange,
       defaultName,
       valueSelect
}) => {
    return (
        <select className={className} onChange={onChange} value={valueSelect}>
            <option selected={true} disabled={true}>{defaultName}</option>
            {options.map((option) => {
                return <FilterOptions option={option} key={option}/>
            })}
        </select>
    )
}

export default FilterSelect