import React from 'react'
// import chelsea from "../../../assets/icons/Chelsea.svg"
// import City from "../../../assets/icons/City.svg"
// import bayern from "/src/assets/icons/Bayern.svg"
// import end from "../../../assets/icons/end.svg"
function Menu() {
    return (
        <>
            <div>
                <h2 className='text-gray-300'>Favorite club</h2>
                <div className='flex justify-between w-48 my-6'>
                    <div className='flex gap-3'>
                        <img src={chelsea} alt="chelsealogo" />
                        <p>Chelsea FC</p>
                    </div>
                    <div className=' flex'>
                        <img src={end} alt="" />
                        <p></p>
                    </div>
                </div>
                <div className='flex justify-between w-48 my-6'>
                    <div className='flex gap-3'>
                        <img src={City} alt="chelsealogo" />
                        <p>Manchester City</p>
                    </div>
                    <div className=' flex'>
                        <img src={end} alt="" />

                    </div>
                </div>
                <div className='flex justify-between w-48 my-6'>
                    <div className='flex gap-3'>
                        <img src={bayern} alt="" />
                        <p>Bayern Munchen</p>
                    </div>
                    <div className=' flex'>
                        <img src={end} alt="" />

                    </div>
                </div>
            </div>

        </>
    )
}

export default Menu

