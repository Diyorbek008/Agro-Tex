import React from 'react'
import HomeTab2Bolak from './HomeTab2Bolak'
import RazbrazivatelImg from '../Components/images/razbrazivatelImg.png'

const Razbrazivatel = () => {
    return (
        <div>
            <div className='flex'>
                <img className='mr-[30px] max-1000:w-[500px] max-1000:object-cover max-1000:object-center max-850:hidden' src={RazbrazivatelImg} alt="Angar img" />
                <div>
                    <h3 className='mb-[17px] font-inter text-[40px] font-semibold'>Разбрасыватели удобрений</h3>


                    <div>
                        <HomeTab2Bolak />
                    </div>

                    <h3 className='font-inter text-2xl font-semibold leading-[22.5px] mb-[17px]'>Функциональность и удобство эксплуатации:</h3>
                    <ul className='list-disc ml-[30px] font-inter text-xl leading-[19px] max-850:space-y-3'>
                        <li>удобная подача разбрасываемого материала и низкая <br /> высота загрузки;</li>
                        <li>доступная и простая система для регулирования расхода <br /> гранул;</li>
                        <li>Ещё одной важной функцией МВУ является посев семян <br /> трав и зерновых. Для этого такое оборудование и <br /> используется на мелкоконтурных полях.</li>
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default Razbrazivatel