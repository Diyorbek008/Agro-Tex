import React from 'react'
import Footer1 from './Footer1'
import Footer2 from './Footer2'
import Footer3 from './Footer3'
import FooterBottom from './FooterBottom'

const Footer = () => {
    return (
        <div className='bg-[#5A7678] pt-[84px] pb-8 px-[60px]'>
            <div className='w-full max-w-[1440px] px-5 mx-auto'>
                <div className='grid grid-cols-3 max-930:grid-cols-2 max-450:grid-cols-1 mb-[33px]'>
                    <Footer1 />
                    <div className='max-950:hidden'>
                        <Footer2 />
                    </div>
                    <div className='max-850:w-full max-850:max-w-[300px] '>
                        <Footer3 />
                    </div>
                </div>
                <FooterBottom />
            </div>
        </div>
    )
}

export default Footer