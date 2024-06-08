import React from 'react'
// import button from "../assets/logoimg/FrameButton.svg"
// import ellipse from '../assets/Ellipse.svg'
// import ellipse2 from "../assets/Ellipse2.svg"
// import premier from "../assets/premier.svg"
// import laliga from "../assets/laliga.svg"
// import ligue from "../assets/ligue.svg"
function SectionTwoj() {
    return (
        <>
            <div className='bg-[#1B1C21] text-white flex items-center mt-10'>
                <p className='text-gray-300'>Football League</p>
                <img src={button} alt="buttonclick" />
            </div>
            <div className='mt-6 '>
                <div className='flex gap-3'>
                    <img src={ellipse} alt="logoellipse" />
                    <p>Worldcup Qatar 2022</p>
                </div>
                <div className='my-5 flex gap-3'>
                    <img src={ellipse2} alt="logoligue" />
                    <p>Champions League</p>
                </div>
                <div className='my-5 flex gap-3'>
                    <img src={premier} alt="logoligue" />
                    <p>Premier League</p>
                </div>
                <div className='flex gap-3'>
                    <img src={laliga} alt="logoellipse" />
                    <p>La Liga</p>
                </div>
                <div className='flex gap-3 my-5'>
                    <img src={ligue} alt="logoellipse" />
                    <p>Ligue 1</p>
                </div>
            </div>
        </>
    )
}

export default SectionTwoj
