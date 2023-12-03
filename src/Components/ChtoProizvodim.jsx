import React, { useState } from 'react'
import Boron from './Boron';
import Opriskivatel from './Opriskivatel';
import Razbrazivatel from './Razbrazivatel';
import Prochaya from './Prochaya';
import Zapchast from './Zapchast';

export const ChtoProizvodim = () => {
    const [toggleState, setTogleState] = useState(1);
    const toggleTab = (index) => {
        setTogleState(index);
    }

    return (
        <div className='mb-[103px]'>
            <div className='w-full max-w-[1440px] px-5 mx-auto'>
                <h2 className='mb-[43px] font-inter text-5xl font-semibold uppercase max-900:text-center  max-480:text-4xl'>Что производим</h2>

                <div className='block-tabs grid grid-cols-5 gap-5 mb-[86px] font-inter text-xl leading-[19px] max-900:flex-col max-1200:grid-cols-3 max-720:grid-cols-2 max-450:grid-cols-1 max-1100:mb-[50px] max-850:mb-[20px]'>
                    <button id={toggleState === 1 ? "active-tabs" : "tabs1"} onClick={() => toggleTab(1)}>Бороны</button>
                    <button id={toggleState === 2 ? "active-tabs" : "tabs1"} onClick={() => toggleTab(2)}>Опрыскиватели</button>
                    <button id={toggleState === 3 ? "active-tabs" : "tabs1"} onClick={() => toggleTab(3)}>Разбрасыватели <br />
                        удобрений</button>
                    <button id={toggleState === 4 ? "active-tabs" : "tabs1"} onClick={() => toggleTab(4)}>Прочая <br />
                        сельхозтехника</button>
                    <button id={toggleState === 5 ? "active-tabs" : "tabs1"} onClick={() => toggleTab(5)}>Запчасти и <br /> комплектующие</button>
                </div>

                <div className='content-tabs'>
                    <div id={toggleState === 1 ? "active-content" : "content"}>
                        <Boron />
                    </div>
                    <div id={toggleState === 2 ? "active-content" : "content"}>
                        <Opriskivatel />
                    </div>
                    <div id={toggleState === 3 ? "active-content" : "content"}>
                        <Razbrazivatel />
                    </div>
                    <div id={toggleState === 4 ? "active-content" : "content"}>
                        <Prochaya />
                    </div>
                    <div id={toggleState === 5 ? "active-content" : "content"}>
                        <Zapchast />
                    </div>
                </div>


            </div>
        </div>
    )
}
