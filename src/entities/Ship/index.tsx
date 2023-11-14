import {IShip} from "../../app/types";
import {prepareLinks} from "../../features/func/prepareLinks";

interface IItem {
    vehicle: IShip
}

const Ship: React.FC<IItem> = ({vehicle}) => {
    const image = prepareLinks(vehicle.nation.icons.small)
    const shipLogo = prepareLinks(vehicle.icons.medium)

    return (
        <li className='ship__item w-100'>
            <div className="ship__card d-flex flex-row justify-content-between gap-3">
                <div className="ship__name">
                    <h3 className='ship__title'>
                        {vehicle.title}
                    </h3>
                    <img src={shipLogo}/>
                </div>
                <div className="ship__content">
                    <p className="ship__description mb-4">
                        {vehicle.description}
                    </p>
                    <p className="ship__type mb-4 v-info">
                        Класс: <span>{vehicle.type.title}</span>
                    </p>
                    <div className="ship__nation-info d-flex flex-row align-items-center justify-content-between">
                        <p className="ship__nation mb-4 v-info">
                            Нация: <span>{vehicle.nation.title}</span>
                        </p>
                        <img className='ship__nation-image' src={image}/>
                    </div>
                    <p className="ship__level mb-4 v-info">
                        Уровень: <span>{vehicle.level}</span>
                    </p>
                </div>
            </div>
        </li>
    )
}

export default Ship