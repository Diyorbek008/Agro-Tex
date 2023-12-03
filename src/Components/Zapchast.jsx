import React from 'react'
import ZapchastImg from '../Components/images/zapchastImg.png'
import HomeTab2Bolak from './HomeTab2Bolak'


const Zapchast = () => {
    return (
        <div>
            <div className='flex'>
                <img className='mr-[30px] max-1000:w-[500px] max-1000:object-cover max-1000:object-center max-850:hidden' src={ZapchastImg} alt="Angar img" />
                <div>
                    <h3 className='mb-[17px] font-inter text-[40px] font-semibold'>Запчасти и комплектующие</h3>


                    <div>
                        <HomeTab2Bolak/>
                    </div>

                    <h3 className='font-inter text-2xl font-semibold leading-[22.5px] mb-[17px]'>У нас Вы можете найти запчасти и комплектующие на сельхозтехнику:З</h3>
                    <ul className='list-disc ml-[30px] font-inter text-xl leading-[19px] max-850:space-y-3'>
                        <li>разбрасыватели удобрений,</li>
                        <li className='w-full max-w-[570px]'>штанговые (полевые) и вентиляторные (садовые) опрыскиватели,</li>
                        <li>бороны кольчатые и пружинные и многое другое.</li>
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default Zapchast