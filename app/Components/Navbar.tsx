"use client";
import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { LuShoppingBag } from "react-icons/lu";

interface User {
    id: number;
    title: string;
    category: string;
    price: number;
    image: string;
  }

interface NavbarProps {
    cartItems: User[];
} 
function Navbar({ cartItems }: NavbarProps) { 
    const [Dropdown,setDropdown]=useState(false);

    const toggleDropdown = () => {
        setDropdown(!Dropdown);
        console.log(Dropdown);
    }
    return(
        <div className='w-full px-16 py-6 flex justify-between items-center bg-black '>
            <div>
                <h1 className='text-3xl font-bold text-yellow-500'>Yellow</h1>
            </div>
            <div className='w-96 h-9 flex '>
                <input className='w-full rounded-l-md px-3' placeholder='Search' type="search" name="search"/>
                <button className='bg-yellow-400 w-12 flex items-center justify-center rounded-r-md'>
                    <span><FaSearch /></span>
                </button>
            </div>
            <div onClick={toggleDropdown} className='flex text-white font-semibold rounded-full text-3xl'>
                <LuShoppingBag/>
                <span className='absolute top-6 right-14 bg-yellow-400 text-black text-xs rounded-full w-5 h-5 flex items-center justify-center'>
                    {cartItems.length}
                </span>
            </div>

            {Dropdown && (
                <div className="absolute top-16 right-8 w-64 bg-white rounded-md shadow-lg z-10 p-4 border border-black">
                    {cartItems.length > 0 ? (
                        cartItems.map((item, index) => (
                            <div key={index} className="flex items-center mb-2">
                                <img src={item.image} alt='#' className="w-12 h-12 rounded-md mr-2" />
                                <div>
                                    <h2 className="font-semibold">{item.title}</h2>
                                    <p className="text-sm text-gray-500">${item.price}</p>
                                </div>
                            </div>
                        ))
                    ) 
                    : (
                    <p className="text-center text-gray-500">Cart is empty</p>
                    )}
                </div>
            )}
        </div>
    )   
}
export default Navbar;