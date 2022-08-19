import React, { FunctionComponent, useEffect, useState } from 'react'

import Link from 'next/link'
import { useRouter } from 'next/router'

const NavItem:FunctionComponent<{
    activeItem:string,
    setActiveItem:Function,
    name:string,
    route:string
}> = ({activeItem,name,route,setActiveItem})=> {
    return(
        activeItem !== name ? (
            <Link href={route}>
                <a>
                    <span 
                        className="hover:text-blue-900"
                        onClick={()=>setActiveItem(name)}>
                        {name}
                    </span>
                </a>
            </Link>
        ) : null 
    )
}

const Navbar = () => {
    const [activeItem, setActiveItem] = useState<string>('')

    const { pathname } = useRouter()

    useEffect(() => {
        if(pathname === "/") setActiveItem('About');
        else if(pathname === "/projects") setActiveItem('Projects');
        else if(pathname === "/resume") setActiveItem('Resume');
    }, [pathname])
    
    return (
    <div className='flex justify-between px-5 py-3 my-3'>
        <span className='text-xl font-bold text-black border-b-4 border-black md:text-2xl'>
            {activeItem}
        </span>
        <div className='flex space-x-6 text-lg'>
            <NavItem 
                activeItem={activeItem} 
                setActiveItem={setActiveItem} 
                name="About" 
                route="/"/>
            <NavItem 
                activeItem={activeItem} 
                setActiveItem={setActiveItem} 
                name="Projects" 
                route="/projects"/>
            <NavItem 
                activeItem={activeItem} 
                setActiveItem={setActiveItem} 
                name="Resume" 
                route="/resume"/>
        </div>
    </div>
  )
}

export default Navbar