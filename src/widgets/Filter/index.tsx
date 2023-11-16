import React, { useState } from "react";

import { useAppDispatch, useAppSelector } from "../../features/hooks";
import { sortNumbers } from "../../features/func/sortNumbers";
import { removeDoubleString, removeDoubleNumber } from "../../features/func/removeDouble";

import FilterSelect from "../../shared/select";
import { ButtonUi } from "../../shared/ui/ButtonUi";

import {
    fetchVehicles,
    filteredClass,
    filteredLevel,
    filteredNation,
    resetFilter,
} from "../../app/store/shipsSlices";


const Filter = () => {
    const [shipNationValue, setShipNationValue] = useState<string>('')
    const [shipClassValue, setShipClassValue] = useState<string>('')
    const [shipLevelValue, setShipLevelValue] = useState<string>('')

    const { vehicles } = useAppSelector(state => state.vehicles)
    const filterDispatch = useAppDispatch()
    const fetchDataDispatch = useAppDispatch()

    const nationSelect: string[] = vehicles.map((item) => item.nation.title)
    const levelSelect: number[] = vehicles.map((item) => (item.level))
    const classSelect: string[] = vehicles.map((item) => item.type.title)

    const handleFilterNation = (e: React.ChangeEvent<HTMLSelectElement>) => {
        e.preventDefault()

        setShipLevelValue('')
        setShipClassValue('')
        filterDispatch(filteredClass(null))
        filterDispatch(filteredLevel(null))

        filterDispatch(filteredNation(e.target.value))
        setShipNationValue(e.target.value)
    }

    const handleFilterClass = (e: React.ChangeEvent<HTMLSelectElement>) => {
        e.preventDefault()
        filterDispatch(filteredClass(e.target.value))
        setShipClassValue(e.target.value)
    }

    const handleFilterLevel = (e: React.ChangeEvent<HTMLSelectElement>) => {
        e.preventDefault()
        const level = Number(e.target.value)
        filterDispatch(filteredLevel(level))
        setShipLevelValue(e.target.value)
    }

    const handleReset = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        fetchDataDispatch(fetchVehicles())
        setShipNationValue('')
        setShipLevelValue('')
        setShipClassValue('')

        filterDispatch(filteredNation(null))
        filterDispatch(filteredClass(null))
        filterDispatch(filteredLevel(null))
        filterDispatch(resetFilter(false))
    }

    return (
        <div className='ships__filter mb-5 d-flex flex-row gap-4'>
            <FilterSelect
                className='ships__filter-nation form-select'
                options={removeDoubleString(nationSelect)}
                onChange={handleFilterNation}
                defaultName='Выберите нацию'
                valueSelect={shipNationValue}
            />
            <FilterSelect
                className='ships__filter-level form-select'
                options={sortNumbers(removeDoubleNumber(levelSelect))}
                onChange={handleFilterLevel}
                defaultName='Выберите уровень'
                valueSelect={shipLevelValue}
            />
            <FilterSelect
                className='ships__filter-class form-select'
                options={removeDoubleString(classSelect)}
                onChange={handleFilterClass}
                defaultName='Выберите класс'
                valueSelect={shipClassValue}
            />
            <ButtonUi
                className='ships__filter-reset btn btn-primary'
                onClick={handleReset}
                buttonName='Сбросить'
            />
        </div>
    )
}

export default Filter