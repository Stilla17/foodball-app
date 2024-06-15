import React from "react";
import a from "../../assets/a.png";
import aa from "../../assets/aa.png";
import aaa from "../../assets/aaa.png";
import aaaa from "../../assets/aaaa.png";
import aaaaa from "../../assets/aaaaa.png";

function SectionTwoj() {
    return (
        <>
            <div className='text-black flex items-center mt-10'>
                <p>Football League</p>
            </div>
            <div className='mt-6 '>
                <div className='flex gap-3'>
                    <p>Worldcup Qatar 2022</p>
                </div>
                <div className='my-5 flex gap-3'>
                    <p>Champions League</p>
                </div>
                <div className='my-5 flex gap-3'>
                    <p>Premier League</p>
                </div>
                <div className='flex gap-3'>
                    <p>La Liga</p>
                </div>
                <div className='flex gap-3 my-5'>
                    <p>Ligue 1</p>
                </div>
            </div>
        </>
    )
}

export default SectionTwoj;
