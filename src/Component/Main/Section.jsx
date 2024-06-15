import React from 'react'
import imglogo from '../../assets/icons/Tvit.svg'
import standing from '../../assets/icons/standing.svg'
import highlighting from '../../assets/icons/highlighting.svg'
import shoping from '../../assets/icons/shoping.svg'
import news from '../../assets/icons/news.svg'
import SectionTwoj from './SectionTwoj'
import Menu from './Menu'

function Section() {
    return (
        <div className='sticky bg-[#F6F6F4] w-64'>
            <div className='text-black pl-8 py-8'>
                <div className='flex gap-4 pb-20'>
                    <img src={imglogo} alt="logo" />
                    <p>Onesport</p>
                </div>
                <div className='pb-6'>
                    <p>MENU</p>
                </div>
                <div className='flex pt-4 gap-4 nav-main hover:text-[#F5C451] cursor-pointer transition-[0.4s]'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="gray" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_183_1047)">
                            <path d="M13 21V11H21V21H13ZM3 13V3H11V13H3ZM9 11V5H5V11H9ZM3 21V15H11V21H3ZM5 19H9V17H5V19ZM15 19H19V13H15V19ZM13 3H21V9H13V3ZM15 5V7H19V5H15Z" />
                        </g>
                    </svg>
                    <p>Dashboard</p>
                </div>
                <div className='flex my-5 gap-4 nav-main hover:text-[#F5C451] cursor-pointer transition-[0.4s]'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g>
                            <path d="M16 4C16.2652 4 16.5196 4.10536 16.7071 4.29289C16.8946 4.48043 17 4.73478 17 5V9.2L22.213 5.55C22.288 5.49746 22.3759 5.4665 22.4672 5.4605C22.5586 5.4545 22.6498 5.4737 22.731 5.51599C22.8122 5.55829 22.8802 5.62206 22.9276 5.70035C22.9751 5.77865 23.0001 5.86846 23 5.96V18.04C23.0001 18.1315 22.9751 18.2214 22.9276 18.2996C22.8802 18.3779 22.8122 18.4417 22.731 18.484C22.6498 18.5263 22.5586 18.5455 22.4672 18.5395C22.3759 18.5335 22.288 18.5025 22.213 18.45L17 14.8V19C17 19.2652 16.8946 19.5196 16.7071 19.7071C16.5196 19.8946 16.2652 20 16 20H2C1.73478 20 1.48043 19.8946 1.29289 19.7071C1.10536 19.5196 1 19.2652 1 19V5C1 4.73478 1.10536 4.48043 1.29289 4.29289C1.48043 4.10536 1.73478 4 2 4H16ZM15 6H3V18H15V6ZM7.4 8.829C7.47611 8.82879 7.55069 8.8503 7.615 8.891L11.97 11.663C12.0266 11.6992 12.0731 11.749 12.1054 11.8079C12.1376 11.8668 12.1545 11.9329 12.1545 12C12.1545 12.0671 12.1376 12.1332 12.1054 12.1921C12.0731 12.251 12.0266 12.3008 11.97 12.337L7.615 15.11C7.55434 15.1487 7.48438 15.1703 7.41248 15.1725C7.34059 15.1748 7.26941 15.1576 7.20646 15.1228C7.14351 15.088 7.0911 15.0368 7.05477 14.9747C7.01844 14.9127 6.99951 14.8419 7 14.77V9.23C7 9.009 7.18 8.83 7.4 8.83V8.829ZM21 8.84L17 11.64V12.358L21 15.158V8.84Z" fill="#A4A4A4" />
                        </g>
                    </svg>
                    <p className='hover:text-[#F5C451]'>Live Football</p>
                </div>
                <div className='flex gap-4 nav-main hover:text-[#F5C451] cursor-pointer transition-[0.4s]'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g>
                            <path d="M19 3L23 8H20V20H18V8H15L19 3ZM14 18V20H3V18H14ZM14 11V13H3V11H14ZM12 4V6H3V4H12Z" fill="#A4A4A4" />
                        </g>
                    </svg>
                    <p>Standings</p>
                </div>
                <div className='flex gap-4 my-5 nav-main hover:text-[#F5C451] cursor-pointer transition-[0.4s]'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g>
                            <path d="M12.4 13.533L17.4 20.2C17.4557 20.2743 17.4897 20.3626 17.498 20.4551C17.5063 20.5476 17.4888 20.6406 17.4472 20.7236C17.4057 20.8067 17.3419 20.8765 17.2629 20.9253C17.1839 20.9741 17.0929 21 17 21H7.00002C6.90716 21 6.81614 20.9741 6.73715 20.9253C6.65816 20.8765 6.59433 20.8067 6.5528 20.7236C6.51128 20.6406 6.4937 20.5476 6.50204 20.4551C6.51038 20.3626 6.5443 20.2743 6.60002 20.2L11.6 13.533C11.6466 13.4709 11.707 13.4205 11.7764 13.3858C11.8458 13.3511 11.9224 13.333 12 13.333C12.0776 13.333 12.1542 13.3511 12.2236 13.3858C12.2931 13.4205 12.3534 13.4709 12.4 13.533ZM18 19V17H20V5H4.00002V17H6.00002V19H2.99202C2.86115 18.9997 2.73161 18.9736 2.61085 18.9232C2.4901 18.8727 2.38049 18.7989 2.28832 18.706C2.19615 18.6131 2.12324 18.5029 2.07376 18.3818C2.02429 18.2606 1.99923 18.1309 2.00002 18V4C2.00002 3.448 2.45502 3 2.99202 3H21.008C21.556 3 22 3.445 22 4V18C22 18.552 21.545 19 21.008 19H18Z" fill="#A4A4A4" />
                        </g>
                    </svg>
                    <p>Highlights</p>
                </div>
                <div className='flex gap-4 nav-main hover:text-[#F5C451] cursor-pointer transition-[0.4s]'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g>
                            <path d="M20.998 13.242V20H21.9979V22H1.9999V20H2.9998V13.242C2.38423 12.8311 1.87962 12.2745 1.53077 11.6218C1.18191 10.969 0.999592 10.2402 1 9.5C1 8.673 1.22398 7.876 1.63294 7.197L4.34466 2.5C4.43242 2.34798 4.55864 2.22175 4.71064 2.13398C4.86264 2.04621 5.03506 2 5.21057 2H18.7882C18.9637 2 19.1361 2.04621 19.2881 2.13398C19.4401 2.22175 19.5664 2.34798 19.6541 2.5L22.3558 7.182C22.9523 8.17287 23.1441 9.35553 22.8912 10.4841C22.6383 11.6127 21.9602 12.6005 20.998 13.242ZM18.9982 13.972C18.3107 14.0491 17.6147 13.9665 16.9643 13.7307C16.3139 13.4948 15.7268 13.1119 15.2486 12.612C14.8288 13.0511 14.3244 13.4005 13.7659 13.6393C13.2074 13.878 12.6063 14.001 11.9989 14.001C11.3916 14.0013 10.7906 13.8786 10.2321 13.6402C9.67357 13.4018 9.16913 13.0527 8.74922 12.614C8.27089 13.1138 7.6837 13.4964 7.03334 13.7321C6.38299 13.9678 5.68701 14.0503 4.9996 13.973V20H18.9982V13.973V13.972ZM5.78852 4L3.35576 8.213C3.11936 8.79714 3.11227 9.44903 3.3359 10.0382C3.55952 10.6273 3.99738 11.1103 4.56182 11.3904C5.12627 11.6705 5.77566 11.7271 6.38004 11.5488C6.98441 11.3706 7.49918 10.9706 7.82131 10.429C8.15628 9.592 9.34116 9.592 9.67712 10.429C9.8624 10.8934 10.1827 11.2916 10.5966 11.5721C11.0104 11.8526 11.4989 12.0025 11.9989 12.0025C12.4989 12.0025 12.9873 11.8526 13.4012 11.5721C13.8151 11.2916 14.1354 10.8934 14.3207 10.429C14.6556 9.592 15.8405 9.592 16.1765 10.429C16.3062 10.7484 16.5007 11.0376 16.7475 11.2783C16.9944 11.519 17.2884 11.706 17.611 11.8275C17.9337 11.9491 18.278 12.0026 18.6223 11.9847C18.9666 11.9668 19.3034 11.8778 19.6117 11.7234C19.92 11.569 20.193 11.3525 20.4136 11.0875C20.6342 10.8225 20.7975 10.5148 20.8935 10.1836C20.9894 9.85238 21.0157 9.50493 20.9709 9.16305C20.9261 8.82118 20.8111 8.49227 20.633 8.197L18.2083 4H5.78952H5.78852Z" fill="#A4A4A4" />
                        </g>
                    </svg>
                    <p>Shop</p>
                </div>
                <div className='flex gap-4 py-5 nav-main hover:text-[#F5C451] cursor-pointer transition-[0.4s]'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g>
                            <path d="M20 22H4C3.73478 22 3.48043 21.8946 3.29289 21.7071C3.10536 21.5196 3 21.2652 3 21V3C3 2.73478 3.10536 2.48043 3.29289 2.29289C3.48043 2.10536 3.73478 2 4 2H20C20.2652 2 20.5196 2.10536 20.7071 2.29289C20.8946 2.48043 21 2.73478 21 3V21C21 21.2652 20.8946 21.5196 20.7071 21.7071C20.5196 21.8946 20.2652 22 20 22ZM19 20V4H5V20H19ZM7 6H11V10H7V6ZM7 12H17V14H7V12ZM7 16H17V18H7V16ZM13 7H17V9H13V7Z" fill="#A4A4A4" />
                        </g>
                    </svg>
                    <p>News</p>
                </div>
                <SectionTwoj />
                <Menu />
            </div>
        </div >
    )
}

export default Section