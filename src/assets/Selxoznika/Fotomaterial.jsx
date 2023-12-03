import React from 'react'
import BoronSwipper from './BoronSwipper'
import RazbrasivatelSwipper from './RazbrasivatelSwipper'
import OpriskivatelSwipper from './OpriskivatelSwipper'

import MainTextImg from './images/razbrasivatelImg.svg'
import BoronTextImg from './images/boronMainText.svg'
import OpriskivatelImg from './images/OpriskivatelTextImg.svg'

const Razbrasivatel = () => {
    return (
        <div className='pb-[103px]'>
            <div className='w-full max-w-[1440px] px-5 mx-auto'>
                <h2 className='mb-[43px] font-inter text-5xl font-semibold uppercase max-590:text-3xl'>
                    ФОТОМАТЕРИАЛ НАШЕЙ ТЕХНИКИ
                </h2>

                {/* Boron */}

                <div className='flex items-center mb-[24px]'>
                    <p className='mr-[21px] font-inter text-[40px] font-semibold max-590:text-[30px]'>
                        Бороны
                    </p>
                    <img src={BoronTextImg} alt="Boron Main Text Img" />
                </div>
                <p className='mb-[56px] w-full max-w-[1310px] font-inter text-2xl font-normal'>
                    Процесс уплотнения верхнего слоя почвы, происходящий под влиянием смены погодных условий, может отрицательно сказаться на всхожести посевного материала, а, значит, и на урожайности в целом. Чтобы разрыхлить корку, образовавшуюся на поверхности почвы, используют бороны.
                </p>
                <div className='mb-[127px]'>
                    <BoronSwipper />
                </div>

                {/* Razbrasivatel */}

                <div>
                    <div className='flex items-center mb-[24px]'>
                        <p className='mr-[21px] font-inter text-[40px] font-semibold max-590:text-[30px] max-400:text-[20px]'>
                            Разбрасыватели удобрений
                        </p>
                        <img src={MainTextImg} alt="Razbrasivatel Text" />
                    </div>

                    <div className='mb-[56px] font-inter text-2xl'>
                        <p className='mb-6 w-full max-w-[1220px]'>
                            Компания “Агро-Тех” предлагает своим покупателям две модели разбрасыватели удобрений: МВУ 1100, МВУ500 и МВУ1500.
                        </p>
                        <p className='w-full max-w-[1250px]'>
                            Название машин для внесения удобрений (МВУ или разбрасыватели) говорит само за себя: с помощью этой техники удобрения в грунт вносят в гранулированном виде. Попадая в почву, гранулы не остаются лежать на её поверхности: их заделка происходит при помощи почвообрабатывающих орудий.
                            Ещё одной важной функцией МВУ является посев семян трав и зерновых. Для этого такое оборудование и используется на мелкоконтурных полях.
                        </p>
                    </div>
                    <div className='mb-[128px]'>
                        <RazbrasivatelSwipper />
                    </div>
                </div>

                {/* Opriskivatel */}

                <div>
                    <div className='mb-6 flex items-center'>
                        <p className='mr-[21px] font-inter text-[40px] font-semibold max-450:text-[30px]'>
                            Опрыскиватели
                        </p>
                        <img src={OpriskivatelImg} alt="Opriskivatel Img" />
                    </div>
                    <div className='mb-[56px] font-inter text-2xl'>
                        <p className='mb-[20px]'>
                            Современные сельскохозяйственные опрыскиватели – оборудование, без применения которого невозможно получить стабильные и качественные урожаи зерновых, овощных и садовых культур.
                        </p>
                        <p>
                            С их помощью восстанавливают плодородность почвы, внося на её поверхность жидкие комплексные удобрения, предотвращают болезни растений и засоренность полей сорными растениями, обрабатывая зерновые и овощи ядохимикатами. Они используются и в работах по защите от инфекций и вредителей садов, виноградников, хмельников и других зеленых насаждений.
                        </p>
                    </div>
                    <OpriskivatelSwipper/>
                </div>
            </div>
        </div>
    )
}

export default Razbrasivatel