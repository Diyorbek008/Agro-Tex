import React from 'react'
import data from '../data'


const Katalog = () => {
    return (
        <div>
            <div className='pt-[103px] pb-[200px]'>
                <div className='w-full max-w-[1440px] px-5 mx-auto'>
                    <h2 className='mb-[52px] font-inter text-5xl font-semibold uppercase'>
                        КАТАЛОГ
                    </h2>
                    <div className='grid grid-cols-4 gap-[31px] max-950:grid-cols-3 max-720:grid-cols-2 max-450:grid-cols-1'>
                        {
                            data.map((data) => {
                                return (
                                    <div className='border-2 border-[#2F7B80] rounded-md text-center flex flex-col items-center pb-6'>
                                        <img className='w-full h-[270px] mb-[23px] object-cover object-center' src={data.img} alt={data.modeli} />
                                        <div className='mb-3'>
                                            <p className='mb-[23px] w-full max-w-[242px] font-inter text-xl font-medium leading-[19px]'>{data.modeli}</p>
                                            <span className='text-[#E10B20] font-inter text-xl font-medium leading-[19px]'>{data.narxi}</span>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

            <div className='w-full max-w-[1319px] px-5 mx-auto'>

                {/* Text */}
                <div className='pb-[103px] w-full max-w-[1250px] font-inter text-2xl font-normal max-590:text-xl'>
                    <p className='mb-6'>
                        ООО “АГРО-ТЕХ” производит оборудование и машины, которые пользуются неизменно высоким спросом у сельхозпроизводителей. Причины такой популярности сельхохтехники очевидны: продукция компании эргономична и современна. Процесс подготовки её к работе занимает минимум времени и не требует специальных навыков.
                    </p>
                    <p className='mb-6'>
                        Проблемы современного села хорошо известны специалистам ООО “АГРО-ТЕХ” и учитываются при проектировании моделей техники. Качественная продукция, которую разрабатывают и производят на предприятии, сделана с учетом российской специфики. Ведь, как известно, только хорошей почвы недостаточно для обеспечения успешного развития и роста сельхоз культур.
                    </p>
                    <p className='mb-6'>
                        Необходима такая техника, которая бы могла обеспечить подкормку растений подходящими удобрениями. Кроме того, сельхозкультурам нужна защита от болезней, вредителей и сорняков. ООО “АГРО-ТЕХ” создаёт качественные и доступные по цене отечественные опрыскиватели, которые вносят в поверхностные слои почвы жидкие удобрения, а также обеспечивают защиту посевов и всходов. Объём производимых и продаваемых опрыскивателей возрастает год от года.
                    </p>
                    <p>
                        Сельхозтехника, создаваемая нашей компанией, достаточно разнообразна. При этом технические особенности, присущие разным видам опрыскивателей, позволяет каждому потребителю найти именно ту модель, которая наилучшим образом будет соответствовать предполагаемым условиям её эксплуатации. Минеральные удобрения, вносимые в почву с помощью техники ООО “АГРО-ТЕХ”, повышают плодородность почвы и способствуют росту урожайности культур. Особенности нашей техники позволяют максимально эффективно использовать гранулированные удобрения. Потребители всегда достигают нужного им результата, если приобретают наши разбрасыватели. Они позволяют обеспечить и правильную дозировку питательных веществ, и их равномерное распределение по участку обработки.
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Katalog