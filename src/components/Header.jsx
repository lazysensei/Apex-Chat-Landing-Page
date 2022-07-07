import {FaBars, FaTimes} from 'react-icons/fa'
import { useState } from 'react'
function Header() {

    const [toggleModal, setToggleModal] = useState(false)
    
    return (
        <>
            <div className="hidden lg:flex justify-between mt-3 items-center mx-6 lg:mx-28" >
                <div>
                    <p className="font-bold text-3xl text-orange-500" >Apex</p>
                </div>
                <div>
                    <div className="flex flex-row space-x-12" >
                        <p className="font-medium" >Demos</p>
                        <p className="font-medium" >About</p>
                        <p className="font-medium" >Blog</p>
                        <p className="font-medium" >Pages</p>
                        <p className="font-medium" >Contact</p>
                    </div>
                </div>
                <div>
                    <div className="flex flex-row space-x-12 items-center" >
                        <p className="font-medium" >Login</p>
                        <p className="font-medium text-white bg-amber-500 px-4 py-2 rounded-lg" >Get Started</p>
                    </div>                    
                </div>
            </div>
            <div className="lg:hidden" >
                <div className='flex justify-between mt-3 items-center z-30  mx-6' >
                    <div>
                        <p className="font-bold text-3xl text-orange-500" >Apex</p>
                    </div>
                    <div onClick={()=>setToggleModal(toggleModal ? false : true)}>
                        {
                            toggleModal ? (
                                <FaTimes  className='text-xl' />
                            ):
                            (
                                <FaBars  className='text-xl' />
                            )
                        }
                    </div> 
                </div>
                <div className={`relative mt-2`} >
                    <div className={`flex flex-col place-items-center shadow-md z-10 ${toggleModal ? 'top-full opacity-100':'-top-96 opacity-0'} bg-orange-600 rounded-sm py-4 w-full absolute transition-all ` }>
                        <p className="font-bold text-white my-2" >Demos</p>
                        <p className="font-bold text-white my-2" >About</p>
                        <p className="font-bold text-white my-2" >Blog</p>
                        <p className="font-bold text-white my-2" >Pages</p>
                        <p className="font-bold text-white my-2" >Contact</p>
                        <p className="font-bold text-white my-2" >Login</p>
                        <p className="font-medium text-center text-white bg-black px-4 py-2 rounded-lg w-2/4" >
                            Get Started
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header