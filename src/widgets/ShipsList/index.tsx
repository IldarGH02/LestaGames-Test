import {IShip} from "../../app/types";
import {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../features/hooks";
import {fetchVehicles} from "../../app/store/shipsSlices";
import Ship from "../../entities/Ship";
import {Spinner} from "react-bootstrap";

const ShipsList = () => {
    const {vehicles, isLoading, filteredShips, filter} = useAppSelector(state => state.vehicles)
    const fetchDataDispatch = useAppDispatch()

    useEffect(() => {
        fetchDataDispatch(fetchVehicles())
    },[])

    if(isLoading) {
        return <Spinner/>
    }

    return (
        <ul className='ships__items'>
            {filter ? filteredShips.map(
                    (ship: IShip, index) => {
                        return <Ship vehicle={ship} key={ship.title + index}/>
                    }
                ) : vehicles.map(
                (ship: IShip, index) => {
                    return <Ship vehicle={ship} key={ship.title + index}/>
                })
            }
        </ul>
    )
}

export default ShipsList