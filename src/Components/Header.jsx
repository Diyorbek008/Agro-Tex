import React, { useEffect, useState } from 'react'
import AgroLogo from '../Components/images/agrotexLogo.png'
import KachestvoLogo from '../Components/images/kachestvoLogo.svg'
import { Link, NavLink } from 'react-router-dom'
// Fonts
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'


const Header = () => {

    const [open, setOpen] = useState(false);

    // Skrollni blok qilish
    useEffect(() => {
        const body = document.querySelector('body');
        if (open) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = 'auto';
        }

        // To'xtatilganda "clean-up" qilish
        return () => {
            body.style.overflow = 'auto';
        };
    }, [open]);

    return (


        <div>
            <div className={`${open ? 'overflow-hidden' : 'overflow-auto'}`}>

                {/* responsive navbar  */}
                <div className={`${open ? 'block' : 'hidden'} transition-transform absolute flex flex-col right-0 bg-[#2F7B80] rounded-l-2xl`}>
                    <div className='grid grid-cols-3 mt-5'>
                        <div></div>
                        <div></div>
                        <button onClick={() => setOpen(false)} className=''>
                            <FontAwesomeIcon className='x-menu w-[50px] h-[50px]' icon={faXmark} />
                        </button>
                    </div>

                    <ul className='space-y-[15px] pt-[20px] px-[50px] h-[100vh] flex flex-col'>
                        <li className='text-white font-inter text-xl'>
                            <NavLink to='/'>ГЛАВНЫЙ</NavLink>
                        </li>
                        <li onClick={()=> setOpen(false)} className='text-white font-inter text-xl'>
                            <NavLink to='/selxoznika'>СЕЛЬХОЗТЕХНИКА</NavLink>
                        </li>
                        <li onClick={()=> setOpen(false)} className='text-white font-inter text-xl'>
                            <NavLink to='/o_kompanii'>О КОМПАНИИ</NavLink>
                        </li>
                        <li onClick={()=> setOpen(false)} className='text-white font-inter text-xl'>
                            <NavLink to='/kontakt'>КОНТАКТЫ</NavLink>
                        </li>
                        <li onClick={()=> setOpen(false)} className='text-white font-inter text-xl'>
                            <NavLink to='/nashi_raboti'>НАШИ РАБОТЫ</NavLink>
                        </li>
                        <li>
                            <div className='mt-[50px] text-white font-motserat text-[28px] font-medium leading-[26px] -tracking-[0.28px] hidden max-900:block'>
                                <a href="tel:998934541009">+998 93 454 10 09</a> <br />
                                <a href="tel:998335542139">+998 33 554 21 39</a>
                            </div>
                        </li>
                        <li className='hidden max-630:block'>
                            <div>
                                <Link to="whatsapp://send?abid=998934541009&text=Hello%2C%20World!">
                                    <div className='flex items-center mb-2'>
                                        {/* WhatsApp svg */}
                                        <div className='mr-1'>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="25" width="25" viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" /></svg>
                                        </div>
                                        <span className='text-black font-motserat text-base leading-4 tracking-[0.16px]'>WhatsApp</span>
                                    </div>
                                </Link>

                                <Link to="https://diyorbekmahamadaliyev168@gmail.com">
                                    <div className='flex items-center'>
                                        {/* Mail svg */}
                                        <div className='mr-1'>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="25" width="25" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" /></svg>

                                        </div>
                                        <span className='text-black font-motserat text-base leading-4 tracking-[0.16px]'>mail@agro-teh.su</span>
                                    </div></Link>
                            </div>
                        </li>
                        <li>
                            <button className='px-[18px] py-5 bg-[#E10B20] rounded-[5px] text-white w-full max-w-[223px] font-motserat text-xl font-semibold -tracking-[0.2x]'>
                                Заказать звонок
                            </button>
                        </li>
                    </ul>
                </div>

            </div>

            <div className='py-9'>
                <header className='w-full max-w-[1440px] px-5 mx-auto'>
                    <div className='flex items-center justify-between'>
                        <Link to='/'>
                            <img src={AgroLogo} alt="Agro Logo" />
                        </Link>

                        <div className='xl:flex xl:items-center max-400:hidden'>
                            <Link to='/'>
                                <img className='mr-1' src={KachestvoLogo} alt="Kachestvo Logo" />
                            </Link>
                            <p className='text-black font-motserat text-base leading-4 tracking-[0.16px]'>Качество и <br /> приемлемая цена</p>
                        </div>

                        <div className='hidden max-400:flex flex-col items-center font-motserat text-[28px] font-bold leading-[26px] -tracking-[0.28px]'>
                            <p>АГРО</p>
                            <p>ТЕХ</p>
                        </div>

                        <div className='max-630:hidden'>
                            <Link to="whatsapp://send?abid=998934541009&text=Hello%2C%20World!">
                                <div className='flex items-center mb-2'>
                                    {/* WhatsApp svg */}
                                    <div className='mr-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="25" width="25" viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" /></svg>
                                    </div>
                                    <span className='text-black font-motserat text-base leading-4 tracking-[0.16px]'>WhatsApp</span>
                                </div>
                            </Link>

                            <Link to="https://diyorbekmahamadaliyev168@gmail.com">
                                <div className='flex items-center'>
                                    {/* Mail svg */}
                                    <div className='mr-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="25" width="25" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" /></svg>

                                    </div>
                                    <span className='text-black font-motserat text-base leading-4 tracking-[0.16px]'>mail@agro-teh.su</span>
                                </div></Link>
                        </div>

                        <div className='text-black font-motserat text-[28px] font-medium leading-[26px] -tracking-[0.28px] max-900:hidden'>
                            <a href="tel:998934541009">+998 93 454 10 09</a> <br />
                            <a href="tel:998335542139">+998 33 554 21 39</a>
                        </div>

                        <button className='px-[18px] py-5 bg-[#E10B20] rounded-[5px] text-white w-full max-w-[223px] font-motserat text-xl font-semibold -tracking-[0.2x] max-1000:hidden'>
                            Заказать звонок
                        </button>

                        <button onClick={() => setOpen(true)} className='hidden max-1000:inline-block'>
                            <FontAwesomeIcon className='w-[50px] h-[50px] nav-menu' icon={faBars} />
                        </button>

                    </div>
                </header>
            </div>

        </div>
    )
}

export default Header