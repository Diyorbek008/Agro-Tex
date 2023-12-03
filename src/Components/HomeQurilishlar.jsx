import React from 'react'
import { useState } from 'react';
import Angar from './Angar'
import KarasniyAngar from './KarasniyAngar';
import TentoviyAngar from './TentoviyAngar';
import Izgotovleniye from './Izgotovleniye';
import Remont from './Remont';

const HomeQurilishlar = () => {

    const [toggleState, setTogleState] = useState(1);
    const toggleTab = (index) => {
        setTogleState(index);
    }

    return (
        <div className='pt-[103px] pb-[52px]'>
            <div className='w-full max-w-[1440px] px-5 mx-auto'>
                <h2 className='mb-[52px] font-inter text-5xl font-semibold uppercase max-900:text-center'>Что строим</h2>
                <div className='block-tabs grid grid-cols-5 gap-5 mb-[86px] font-inter text-xl leading-[19px] max-1200:grid-cols-3 max-720:grid-cols-2 max-450:grid-cols-1 max-1100:mb-[50px] max-850:mb-[20px]'>
                    <button className='' id={toggleState === 1 ? "active-tabs" : "tabs1"} onClick={() => toggleTab(1)}>Ангары <br /> бескаркасные</button>
                    <button className='' id={toggleState === 2 ? "active-tabs" : "tabs1"} onClick={() => toggleTab(2)}>Каркасные  ангары</button>
                    <button id={toggleState === 3 ? "active-tabs" : "tabs1"} onClick={() => toggleTab(3)}>Ангары  тентовые</button>
                    <button id={toggleState === 4 ? "active-tabs" : "tabs1"} onClick={() => toggleTab(4)}>Изготовление металоконструкций</button>
                    <button  id={toggleState === 5 ? "active-tabs" : "tabs1"} onClick={() => toggleTab(5)}>Ремонт и реконструкция ангаров</button>
                    
                </div>

                <div className='content-tabs'>
                    <div id={toggleState === 1 ? "active-content" : "content"}>
                        <Angar />
                    </div>
                    <div id={toggleState === 2 ? "active-content" : "content"}>
                        <KarasniyAngar />
                    </div>
                    <div id={toggleState === 3 ? "active-content" : "content"}>
                        <TentoviyAngar />
                    </div>
                    <div id={toggleState === 4 ? "active-content" : "content"}>
                        <Izgotovleniye />
                    </div>
                    <div id={toggleState === 5 ? "active-content" : "content"}>
                        <Remont />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeQurilishlar