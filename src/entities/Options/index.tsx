import React from "react";

interface IOption {
    option: string | number
}

const FilterOptions: React.FC<IOption> = ({option}) => {
    return (
        <option className='ship__filter' value={option}>{option}</option>
    )
}

export default FilterOptions