import React from "react";
import FilterOptions from "../../entities/Options";
import {useAppSelector} from "../../features/hooks";

interface IFilterSelect {
    options: string[] | number[]
    className: string
    onChange: React.ChangeEventHandler<HTMLSelectElement> | undefined
    defaultName: any
    valueSelect: string
}

const FilterSelect: React.FC<IFilterSelect> = ({
       options,
       className,
       onChange,
       defaultName,
       valueSelect
}) => {
    const { nation, level, classShip } = useAppSelector(state => state.vehicles)

    return (
        <select className={className} onChange={onChange} value={valueSelect}>
            <option selected={true} disabled={(nation && level && classShip) ? true : false}>
                {defaultName}
            </option>
            {options.map((option) => {
                return <FilterOptions option={option} key={option} />
            })}
        </select>
    )
}

export default FilterSelect