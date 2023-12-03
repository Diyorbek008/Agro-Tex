import React from 'react'
import HomeTab2Bolak from './HomeTab2Bolak'
import opiskivatelImg from '../Components/images/opiskivatelImg.png'

const Opriskivatel = () => {
    return (
        <div>
            <div className='flex'>
                <img className='mr-[30px] max-1000:w-[500px] max-1000:object-cover max-1000:object-center max-850:hidden' src={opiskivatelImg} alt="Angar img" />
                <div>
                    <h3 className='mb-[17px] font-inter text-[40px] font-semibold'>Опрыскиватели</h3>


                    <div>
                        <HomeTab2Bolak />
                    </div>

                    <h3 className='font-inter text-2xl font-semibold leading-[22.5px] mb-[17px]'>Надежность и долговечность:</h3>
                    <ul className='list-disc ml-[30px] font-inter text-xl leading-[19px] max-850:space-y-3'>
                        <li>в основе машины – прочная и надежная сварная рамная <br /> конструкция;</li>
                        <li>на бункер и раму нанесено химически стойкое полимерное <br /> покрытие;</li>
                        <li>все крепежные элементы, отбойный короб, рабочие тарелки <br /> и лопатки сделаны из нержавеющей стали.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Opriskivatel