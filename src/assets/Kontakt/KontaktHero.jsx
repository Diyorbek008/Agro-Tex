import React from 'react'
import { Link } from 'react-router-dom'

const KontaktHero = () => {
    return (
        <div className='pt-[136px] pb-[83px] max-1000:pt-[10px] max-720:pt-[60px]'>
            <div className='w-full max-w-[1440px] px-5 mx-auto'>
                <h2 className='mb-[42px] font-inter text-5xl font-semibold uppercase max-720:text-4xl'>Контакты ООО «АГРО-ТЕХ»</h2>
                <p className='mb-6 font-inter text-2xl'>
                    Всегда рады видеть вас в нашем офисе в Таганроге:
                </p>
                <ul className='mb-[49px] ml-[20px] list-disc font-inter text-2xl'>
                    <li className=''>
                        347939, Россия, Ростовская область, Таганрог, ул. Пархоменко, 19
                    </li>
                    <li className='underline'>
                        <Link to='tel:998934541009'>+998 (93) 454-10-09</Link>
                    </li>
                    <li>
                        <Link to='#'>mail@agro-teh.su</Link>
                    </li>
                </ul>

                <div className='mb-[83px]'>
                    <iframe className='w-full h-[543px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2248.528940293299!2d37.52673557674215!3d55.69717710748644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54c60c78d3243%3A0x301dfb80d4199f8c!2z0JvQvtC80L7QvdC-0YHQvtCy0YHQutC40Lkg0L_RgNC-0YHQvy4sINCc0L7RgdC60LLQsCwg0KDQvtGB0YHQuNGP!5e0!3m2!1sru!2s!4v1697880252581!5m2!1sru!2s" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    )
}

export default KontaktHero