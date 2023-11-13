import {Title} from "../../widgets/Title";

const Home = () => {
    return (
        <section className='home'>
            <div className="container">
                <div className="home__content">
                    <Title className='home__title mb-4' titleName='Главная'/>
                    <div className="home__card d-flex flex-column gap-4 p-4">
                        <h3 className="home__card-author">
                            Frontend-developer: <span>Ильдар Халилов</span>
                        </h3>

                        <div className="home__card-contact">
                            <p className="home__contact-email">
                                Email: <a className='home__contact-link text-decoration-none' type='email'>jackiechn@yandex.ru</a>
                            </p>
                            <p className="home__contact-tel">
                                Телефон: <a className='home__contact-link text-decoration-none' type=':tel'>8(927)018-88-65</a>
                            </p>
                        </div>

                        <ul className="home__card-stack d-flex flex-column gap-4 p-0 m-0 list-unstyled">
                            <h3 className="home__stack-title">
                                Использованные технологии:
                            </h3>
                            <li className="home__card-stack_item">
                                React
                            </li>
                            <li className="home__card-stack_item">
                                Redux-Toolkit
                            </li>
                            <li className="home__card-stack_item">
                                TypeScript
                            </li>
                            <li className="home__card-stack_item">
                                GraphQl
                            </li>
                            <li className="home__card-stack_item">
                                SASS/SCSS
                            </li>
                            <li className="home__card-stack_item">
                                React-router-dom
                            </li>
                            <li className="home__card-stack_item">
                                FSD
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home