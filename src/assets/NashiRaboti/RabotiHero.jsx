import React from 'react'
// Components
import AngarSwipper from './AngarSwipper'
import TentoviySwipper from './TentoviySwipper'
import NavesSwipper from './NavesSwipper'
import BoronSwipper from '../Selxoznika/BoronSwipper'
import RazbrasivatelSwipper from '../Selxoznika/RazbrasivatelSwipper'
import OpriskivatelSwipper from '../Selxoznika/OpriskivatelSwipper'
// images
import AngarTextImg from './Images/AngarTextImg.svg'
import NavesTextImg from './Images/NavesTextImg.svg'
import BoronTextImg from '../Selxoznika/images/boronMainText.svg'
import RazbrasivatelImg from '../Selxoznika/images/razbrasivatelImg.svg'
import OpriskivatelTextImg from '../Selxoznika/images/OpriskivatelTextImg.svg'

const RabotiHero = () => {
    return (
        <div className='pt-[80px] pb-[50px]'>
            <div className='w-full max-w-[1440px] px-5 mx-auto'>
                <h2 className='mb-7 font-inter text-5xl font-semibold uppercase'>
                    Наши работы
                </h2>

                {/* Angar Swipper */}
                <div>
                    <div className='flex items-center mb-6'>
                        <h3 className='mr-[21px] font-inter text-[40px] font-semibold max-590:text-[30px] max-400:text-[20px]'>
                            Ангары бескаркасные
                        </h3>
                        <img className='max-400:h-[30px]' src={AngarTextImg} alt="Angar Text Img" />
                    </div>

                    <div className='font-inter text-2xl mb-[56px] max-590:text-xl max-400:text-[15px]'>
                        <p className='mb-4'>
                            Когда в организации накапливается достаточный парк автомобилей, сельхозтехники или какого-либо оборудования или инструмента, остро встает вопрос условий хранения, ведь это сильно влияет на сохранность имущества и его характеристик.
                        </p>
                        <p>
                            К счастью пользователей, выбирать приходится недолго, ведь на сегодня оптимальным вариантом для склада является бескаркасный ангар.
                        </p>
                    </div>
                    <div className='mb-[82px]'>
                        <AngarSwipper />
                    </div>
                </div>


                {/* Tentoviy Swipper */}
                <div>
                    <div className='flex items-center mb-6'>
                        <h3 className='mr-[21px] font-inter text-[40px] font-semibold max-590:text-[30px] max-400:text-[20px]'>
                            Тентовые ангары
                        </h3>
                        <img className='max-400:h-[30px]' src={AngarTextImg} alt="Angar Text Img" />
                    </div>

                    <div className='font-inter text-2xl mb-[56px] max-590:text-xl max-400:text-[15px]'>
                        <p className='mb-4'>
                            Тентовые ангары – наиболее оптимальный вариант строительства.
                        </p>
                        <p>
                            При необходимости, ангар можно демонтировать и перенести на другое место.
                            Специалисты ООО “АГРО-ТЕХ” имеют огромный опыт строительства тентовых арочных ангаров и с большой охотой помогут Вам реализовать Ваши идеи!
                        </p>
                    </div>
                    <div className='mb-[82px]'>
                        <TentoviySwipper />
                    </div>
                </div>

                {/* Naves Swipper */}
                <div>
                    <div className='flex items-center mb-6'>
                        <h3 className='mr-[21px] font-inter text-[40px] font-semibold max-590:text-[30px] max-400:text-[20px]'>
                            Тока, каркасные навесы
                        </h3>
                        <img className='max-400:h-[30px]' src={NavesTextImg} alt="Angar Text Img" />
                    </div>

                    <div className='font-inter text-2xl mb-[56px] max-590:text-xl max-400:text-[15px]'>
                        <p className='mb-4'>
                            Во многих фермерских хозяйствах и колхозах, часто всплывает необходимость в зернотоках большой площади, либо в каркасных навесах, под которыми удобно прятать технику от суровых погодных условий.
                            Мы предлагаем быстровозводимые, каркасные конструкции с двускатной кровлей, выполненные из прочных металлоконструкций, отвечающим любым требованиям со стороны Заказчика, будь то, длина, ширина или высота.
                        </p>
                    </div>
                    <div className='mb-[82px]'>
                        <NavesSwipper />
                    </div>
                </div>

                {/* Boron Swipper */}
                <div>
                    <div className='flex items-center mb-6'>
                        <h3 className='mr-[21px] font-inter text-[40px] font-semibold max-590:text-[30px] max-400:text-[20px]'>
                            Бороны
                        </h3>
                        <img className='max-400:h-[30px]' src={BoronTextImg} alt="Angar Text Img" />
                    </div>

                    <div className='font-inter text-2xl mb-[56px] max-590:text-xl max-400:text-[15px]'>
                        <p className='mb-4'>
                            Процесс уплотнения верхнего слоя почвы, происходящий под влиянием смены погодных условий, может отрицательно сказаться на всхожести посевного материала, а, значит, и на урожайности в целом. Чтобы разрыхлить корку, образовавшуюся на поверхности почвы, используют бороны.
                        </p>
                    </div>
                    <div className='mb-[82px]'>
                        <BoronSwipper />
                    </div>
                </div>

                {/* Razbrasivatel Swipper */}
                <div>
                    <div className='flex items-center mb-6'>
                        <h3 className='mr-[21px] font-inter text-[40px] font-semibold max-590:text-[30px] max-400:text-[20px]'>
                            Разбрасыватели удобрений
                        </h3>
                        <img className='max-400:h-[30px]' src={RazbrasivatelImg} alt="Angar Text Img" />
                    </div>

                    <div className='font-inter text-2xl mb-[56px] max-590:text-xl max-400:text-[15px]'>
                        <p className='mb-4'>
                            Компания “Агро-Тех” предлагает своим покупателям две модели разбрасыватели удобрений: МВУ 1100, МВУ500 и МВУ1500.
                        </p>
                        <p>
                            Название машин для внесения удобрений (МВУ или разбрасыватели) говорит само за себя: с помощью этой техники удобрения в грунт вносят в гранулированном виде. Попадая в почву, гранулы не остаются лежать на её поверхности: их заделка происходит при помощи почвообрабатывающих орудий.
                            Ещё одной важной функцией МВУ является посев семян трав и зерновых. Для этого такое оборудование и используется на мелкоконтурных полях.
                        </p>
                    </div>
                    <div className='mb-[82px]'>
                        <RazbrasivatelSwipper />
                    </div>
                </div>

                {/* Opriskivatel Swipper */}
                <div>
                    <div className='flex items-center mb-6'>
                        <h3 className='mr-[21px] font-inter text-[40px] font-semibold max-590:text-[30px] max-400:text-[20px]'>
                            Опрыскиватели
                        </h3>
                        <img className='max-400:h-[30px]' src={OpriskivatelTextImg} alt="Angar Text Img" />
                    </div>

                    <div className='font-inter text-2xl mb-[56px] max-590:text-xl max-400:text-[15px]'>
                        <p className='mb-4'>
                            Современные сельскохозяйственные опрыскиватели – оборудование, без применения которого невозможно получить стабильные и качественные урожаи зерновых, овощных и садовых культур.
                        </p>
                        <p>
                            С их помощью восстанавливают плодородность почвы, внося на её поверхность жидкие комплексные удобрения, предотвращают болезни растений и засоренность полей сорными растениями, обрабатывая зерновые и овощи ядохимикатами. Они используются и в работах по защите от инфекций и вредителей садов, виноградников, хмельников и других зеленых насаждений.
                        </p>
                    </div>
                    <div className='mb-[82px]'>
                        <OpriskivatelSwipper/>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default RabotiHero