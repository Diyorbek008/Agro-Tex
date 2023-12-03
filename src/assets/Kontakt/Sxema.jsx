import React from 'react'

const Sxema = () => {
    return (
        <div className='pb-[107px]'>
            <div className='w-full max-w-[1440px] px-5 mx-auto'>
                <h2 className='mb-[49px] font-inter text-5xl font-semibold uppercase'>Схема проезда</h2>

                <div className='grid grid-cols-2 gap-[113px] max-500:grid-cols-1'>
                    <div>
                        <span className='mb-[22px] inline-block font-inter text-2xl font-semibold uppercase'>Офис в Таганроге:</span>

                        <div className='space-y-6 w-full max-w-[562px] font-inter text-xl font-medium'>
                            <p>
                                347939, Россия, Ростовская область, Таганрог, ул. Пархоменко, дом 19 (расположение).
                            </p>
                            <p>
                                Предложенный маршрут предполагает движение по объездной дороге с въездом со стороны Мариупольского шоссе.
                            </p>
                            <p>
                                На легковом автомобиле также будет удобен маршрут, пролегающий через Николаевское шоссе.

                            </p>
                        </div>
                    </div>

                    <div>
                        <span className='mb-[22px] inline-block font-inter text-2xl font-semibold'>
                            Производственная база ООО “АГРО-ТЕХ”
                        </span>
                        <div className='space-y-6 w-full max-w-[562px] font-inter text-xl font-medium'>
                            <p>
                                По словам директора ООО «АГРО-ТЕХ», его компания способна строить хранилища шириной до 32 метров – это единственное подобное предложение на южнороссийском рынке.
                            </p>
                            <p>
                                Как правило, максимум составляет 28 метров. При строительстве бескаркасного ангара самонесущие арки перекрывают пролёты без каких-либо промежуточных колонн или балок.
                            </p>
                            <p>
                                Это позволяет использовать полезную площадь здания максимально эффективно. При этом длина ангара может быть любой, без ограничений.
                            </p>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Sxema