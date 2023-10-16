import React from 'react'
import headerlogo from '../assets/images/header-logo.svg'
import hamburger from '../assets/icons/hamburger.svg'
import {navLinks} from '../Constants/index.js'
function Nav() {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
        <nav className='flex justify-between items-center max-container'>
            <a href="">
                <img src={headerlogo} alt="" width={130} height={29} />
            </a>
        <ul className='flex flex-1 justify-center items-center gap-16 max-lg:hidden'>
            {navLinks.map((items)=>(
                <li key={items.label}>
                    <a href={items.href} className='font-montserrat leading-normal text-lg text-slate-gray'>{items.label}</a>
                </li>
            ))}
        </ul>
                <div className='lg:hidden'>
                    <img src={hamburger} alt="" width={25} height={25}/>
                </div>
        </nav>
    </header>
  )
}

export default Nav