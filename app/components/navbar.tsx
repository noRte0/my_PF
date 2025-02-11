import React from 'react'
import { Erica_One, Lalezar } from "next/font/google";
import "../globals.css";
import Searchbar from './ui/searchbar';

const ericaOne = Erica_One({
    variable: "--font-erica-one", // Custom CSS variable for the font
    subsets: ["latin"], // Choose the subset
    weight: "400", // Specify font weight
});

const lalezar = Lalezar({
    variable: "--font-Lalezar", // Custom CSS variable for the font
    subsets: ["latin"], // Choose the subset
    weight: "400", // Specify font weight
});

const Navbar = () => {

    return (
        <nav>
            <div className='fixed w-full top-0 lg:pl-6 lg:pr-6 pl-5 z-50 h-[64px]'>
            <div className="group relative max-w-screen-2xl flex flex-wrap items-center justify-between p-2">
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse bg-[#c03540] hover:bg-rose-600 h-7 w-auto rounded-lg ">
                    <div className={`m-6 ${ericaOne.className}`}>PITIPAT</div>
                </a>
                <div className="flex md:order-2 pr-4 pt-2">
                    <Searchbar />
                </div>

                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
                    <ul className="flex flex-col p-4 md:p-0 mt-1 text-sm border md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                        <li className='rounded-2xl py-1 px-2 w-auto h-auto items-center justify-center flex hover:text-opacity-60 hover:text-black hover:bg-stone-300'>
                            <a href="/blogs_page" className={`${lalezar.className}`}>BLOG</a>
                        </li>
                        <li className='rounded-2xl py-1 px-2 w-auto h-auto items-center justify-center flex hover:text-opacity-60 hover:text-black hover:bg-stone-300'>
                            <a href="/component_page" className={`${lalezar.className}`}>COMPONENTS</a>
                        </li>
                        <li className='rounded-2xl py-1 px-2 w-auto h-auto items-center justify-center flex hover:text-opacity-60 hover:text-black hover:bg-stone-300'>
                            <a href="#" className={`${lalezar.className}`}>WORK</a>
                        </li>
                        <li className='rounded-2xl py-1 px-2 w-auto h-auto items-center justify-center flex hover:text-opacity-60 hover:text-black hover:bg-stone-300'> 
                            <a href="#" className={`${lalezar.className}`}>REPOSITORY</a>
                        </li>
                    </ul>
                </div>
            </div>
            </div>
        </nav>
    )
}

export default Navbar