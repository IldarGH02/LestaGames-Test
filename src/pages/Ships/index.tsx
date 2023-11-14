import ShipsList from "../../widgets/ShipsList";
import Filter from "../../widgets/Filter";

const Ships = () => {
    return (
        <section className='ships pt-4 position-relative h-100'>
            <div className="container">
                <div className="ships__content">
                    <Filter/>
                    <ShipsList/>
                </div>
            </div>
        </section>
    )
}

export default Ships