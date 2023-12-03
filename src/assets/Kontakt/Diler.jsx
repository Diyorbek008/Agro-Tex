import React from 'react'
import { Link } from 'react-router-dom'

const Diler = () => {
    return (
        <div className='pb-[102px]'>
            <div className='w-full max-w-[1440px] px-5 mx-auto'>
                <h2 className='mb-[49px] font-inter text-5xl font-semibold uppercase'>Дилеры</h2>

                <div className='mb-[49px] grid grid-cols-2 gap-[113px] max-450:grid-cols-1'>
                    <div>
                        <span className='mb-[22px] inline-block font-inter text-2xl font-semibold uppercase'>
                            АО Торговый дом “Славянский”
                        </span>
                        <p className='font-inter text-xl font-medium'>
                            Ставропольский кр, Шпаковский р-н, с. Верхнерусское
                        </p>
                    </div>
                    <div>
                        <span className='mb-[22px] inline-block font-inter text-2xl font-semibold uppercase'>
                            Генеральный директор
                        </span>
                        <p className='font-inter text-xl font-medium'>
                            Кирин Василий Васильевич
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className='mb-[22px] font-inter text-2xl font-semibold uppercase'>
                        Контакты
                    </h2>
                    <ul className='mb-[49px] ml-5 list-disc font-inter text-2xl font-medium uppercase'>
                        <li>
                            Колпаков Сергей Александрович
                        </li>
                        <li>
                            <Link>8-903-418-79-31</Link>
                        </li>
                        <li>
                            <Link>8-928-321-49-72</Link>
                        </li>
                        <li>
                            <Link>8 (8652) 38-68-27</Link>
                        </li>
                        <li>
                            <Link>38-68-28</Link>
                        </li>
                        <li>
                            <Link>95-83-00</Link>
                        </li>
                        <li>
                            <Link>slavynskij2001@mail.ru</Link>
                        </li>
                    </ul>



                    <div className='mb-[49px] grid grid-cols-2 gap-[113px] max-450:grid-cols-1'>
                        <div>
                            <span className='mb-[22px] inline-block font-inter text-2xl font-semibold uppercase'>
                                АО Торговый дом “Славянский”
                            </span>
                            <p className='font-inter text-xl font-medium'>
                                Ставропольский кр, Шпаковский р-н, с. Верхнерусское
                            </p>
                        </div>
                        <div>
                            <span className='mb-[22px] inline-block font-inter text-2xl font-semibold uppercase'>
                                Генеральный директор
                            </span>
                            <p className='font-inter text-xl font-medium'>
                                Кирин Василий Васильевич
                            </p>
                        </div>
                    </div>

                    <h2 className='mb-[22px] font-inter text-2xl font-semibold uppercase'>
                        Контакты
                    </h2>

                    <ul className='mb-[49px] ml-5 list-disc font-inter text-2xl font-medium uppercase'>
                        <li>
                            Филиппов Владимир Ильич
                        </li>
                        <li>
                            <Link>8-968-271-36-70</Link>
                        </li>
                        <li>
                            <Link>shm@optorg.ru</Link>
                        </li>
                    </ul>


                    <div className='grid grid-cols-2 max-450:grid-cols-1'>
                        <h2 className='mb-[22px] font-inter text-2xl font-semibold uppercase'>
                            ООО “АГРО-РЕСУРС”
                        </h2>
                        <h2 className='mb-[22px] font-inter text-2xl font-semibold uppercase'>
                            г. Краснодар ул.Круговая 54
                        </h2>

                        <ul className='mb-[49px] ml-5 list-disc font-inter text-2xl font-medium uppercase'>
                            <li>
                                <Link>8918-682-06-22</Link>
                            </li>
                            <li>
                                <Link>8-967-658-94-45</Link>
                            </li>
                            <li>
                                <Link>8(861)222-78-21</Link>
                            </li>
                            <li>
                                <Link>8(861)222-78-24</Link>
                            </li>
                        </ul>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Diler