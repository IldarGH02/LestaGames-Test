import {IShip} from "../../app/types";
import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../features/hooks";
import {fetchVehicles} from "../../app/store/shipsSlices";
import Ship from "../../entities/Ship";
import {Loading} from "../../shared/ui/Loading";

const ShipsList = () => {
    const {vehicles, isLoading, filteredShips, filter} = useAppSelector(state => state.vehicles)
    const fetchDataDispatch = useAppDispatch()

    useEffect(() => {
        fetchDataDispatch(fetchVehicles())
    },[fetchDataDispatch])

    if(isLoading) {
        return <Loading/>
    }

    return (
        <ul className='ships__items p-0'>
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